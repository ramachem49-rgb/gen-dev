import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, Video, Code2, X, CheckCircle2, Download, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HLesson, LessonTreeNode } from '@/lib/lessonUtils';
import { flattenTree } from '@/lib/lessonUtils';
import QuizEditor from './QuizEditor';
import { loadQuiz } from '@/lib/quizUtils';

interface LessonFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<HLesson>) => Promise<void>;
  initial?: LessonTreeNode | null;
  tree: LessonTreeNode[];
}

interface FormValues {
  title: string;
  slug: string;
  description: string;
  parentId: string;
  order: number;
  hasContent: boolean;
  isPublished: boolean;
  isFree: boolean;
  content: string;
  contentType: 'markdown' | 'html' | 'video';
  videoUrl: string;
  // extra metadata from .ts import
  icon: string;
  language: string;
  lessonLevel: string;  // renamed to avoid clash with HLesson.level (number)
  category: string;
}

const CONTENT_TYPES = [
  { value: 'markdown', label: 'Markdown', icon: <Code2 className="h-3.5 w-3.5" /> },
  { value: 'html',     label: 'HTML',     icon: <FileText className="h-3.5 w-3.5" /> },
  { value: 'video',    label: 'Video',    icon: <Video className="h-3.5 w-3.5" /> },
] as const;

// ── TS Parser ──────────────────────────────────────────────────────────────────
function extractTemplateLiteral(source: string, field: string): string {
  // field: `...`
  const re = new RegExp(`${field}\\s*:\\s*\`([\\s\\S]*?)\`(?=\\s*[,}])`, 'm');
  const m = source.match(re);
  if (m) return m[1].trim();
  return '';
}

function extractStringField(source: string, field: string): string {
  // field: "..." or '...'
  const re = new RegExp(`${field}\\s*:\\s*["'\`]([^"'\`\\n]*?)["'\`]`, 'm');
  const m = source.match(re);
  if (m) return m[1].trim();
  return '';
}

function extractBoolField(source: string, field: string): boolean {
  const re = new RegExp(`${field}\\s*:\\s*(true|false)`, 'm');
  const m = source.match(re);
  return m ? m[1] === 'true' : false;
}

interface ParsedLesson {
  title: string;
  slug: string;
  description: string;
  icon: string;
  language: string;
  level: string;
  category: string;
  isFree: boolean;
  content: string;
  codeExample: string;
}

function parseTsFile(source: string): ParsedLesson {
  return {
    title:       extractStringField(source, 'title'),
    slug:        extractStringField(source, 'slug'),
    description: extractStringField(source, 'description'),
    icon:        extractStringField(source, 'icon'),
    language:    extractStringField(source, 'language'),
    level:       extractStringField(source, 'level'),
    category:    extractStringField(source, 'category'),
    isFree:      extractBoolField(source, 'isFree'),
    content:     extractTemplateLiteral(source, 'content'),
    codeExample: extractTemplateLiteral(source, 'codeExample'),
  };
}

// ── TS Generator ───────────────────────────────────────────────────────────────
function generateTsFile(values: FormValues, existingId?: number): string {
  const id = existingId ?? Date.now();
  const slug = values.slug || values.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const escaped = (s: string) => s.replace(/`/g, '\\`').replace(/\${/g, '\\${');

  return `import type { Lesson } from './lessons';

export const lesson_${slug.replace(/-/g, '_')}: Lesson = {
  id: ${id},
  slug: "${slug}",
  title: "${values.title}",
  description: "${values.description || ''}",
  level: "${values.lessonLevel || 'ថ្នាក់ដើម'}",
  icon: "${values.icon || '📄'}",
  category: "${values.category || 'ភាសាកម្មវិធី'}",
  language: "${values.language || slug}",
  isFree: ${values.isFree},
  isPublished: ${values.isPublished},
  content: \`${escaped(values.content || '')}\`,
  codeExample: \`${escaped(values.content || '')}\`,
};
`;
}

// ── Download helper ────────────────────────────────────────────────────────────
function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function LessonForm({ open, onClose, onSubmit, initial, tree }: LessonFormProps) {
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      title: '', slug: '', description: '', parentId: 'none', order: 0,
      hasContent: false, isPublished: false, isFree: true,
      content: '', contentType: 'markdown', videoUrl: '',
      icon: '📄', language: '', lessonLevel: 'ថ្នាក់ដើម', category: 'ភាសាកម្មវិធី',
    },
  });

  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [parsePreview, setParsePreview] = useState<ParsedLesson | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      if (initial) {
        reset({
          title: initial.title,
          slug: initial.slug,
          description: '',
          parentId: initial.parentId ?? 'none',
          order: initial.order,
          hasContent: initial.hasContent,
          isPublished: initial.isPublished,
          isFree: initial.isFree,
          content: initial.content ?? '',
          contentType: initial.contentType ?? 'markdown',
          videoUrl: initial.videoUrl ?? '',
          icon: '📄', language: '', lessonLevel: 'ថ្នាក់ដើម', category: 'ភាសាកម្មវិធី',
        });
      } else {
        reset({
          title: '', slug: '', description: '', parentId: 'none', order: 0,
          hasContent: false, isPublished: false, isFree: true,
          content: '', contentType: 'markdown', videoUrl: '',
          icon: '📄', language: '', lessonLevel: 'ថ្នាក់ដើម', category: 'ភាសាកម្មវិធី',
        });
      }
      setUploadedFile(null);
      setParsePreview(null);
    }
  }, [initial, reset, open]);

  const allNodes = flattenTree(tree);
  const contentType = watch('contentType');
  const content = watch('content');
  const titleVal = watch('title');

  // ── File handler ──
  const handleFile = (file: File) => {
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!['md', 'txt', 'html', 'ts'].includes(ext ?? '')) {
      alert('សូមជ្រើសរើស file .md, .txt, .html, ឬ .ts ប៉ុណ្ណោះ');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const raw = e.target?.result as string;

      if (ext === 'ts') {
        const parsed = parseTsFile(raw);
        setParsePreview(parsed);

        // Auto-fill all fields from parsed data
        if (parsed.title)       setValue('title', parsed.title);
        if (parsed.slug)        setValue('slug', parsed.slug);
        if (parsed.description) setValue('description', parsed.description);
        if (parsed.icon)        setValue('icon', parsed.icon);
        if (parsed.language)    setValue('language', parsed.language);
        if (parsed.level)       setValue('lessonLevel', parsed.level);
        if (parsed.category)    setValue('category', parsed.category);
        setValue('isFree', parsed.isFree);

        // Use codeExample as main content (lesson sections), fallback to content
        const mainContent = parsed.codeExample || parsed.content;
        setValue('content', mainContent);
        setValue('contentType', 'markdown');
        setValue('hasContent', mainContent.length > 0);
      } else {
        setValue('content', raw);
        setValue('hasContent', raw.length > 0);
        setValue('contentType', ext === 'html' ? 'html' : 'markdown');
        setParsePreview(null);
      }

      setUploadedFile(file.name);
    };
    reader.readAsText(file, 'UTF-8');
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  // ── Export .ts ──
  const handleExport = () => {
    const values = watch() as FormValues;
    const slug = values.slug || values.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const tsContent = generateTsFile(values);
    downloadFile(`${slug}.ts`, tsContent);
  };

  const submit = async (values: FormValues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { lessonLevel, icon, language, category, slug, description, ...hLessonFields } = values;
    await onSubmit({
      ...hLessonFields,
      slug,
      parentId: values.parentId === 'none' ? null : values.parentId,
      content: values.content || undefined,
      videoUrl: values.videoUrl || undefined,
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl glass max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{initial ? 'កែប្រែមេរៀន' : 'បន្ថែមមេរៀនថ្មី'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submit)}>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="basic" className="flex-1">ព័ត៌មានទូទៅ</TabsTrigger>
              <TabsTrigger value="content" className="flex-1">
                ខ្លឹមសារ
                {content && <Badge variant="secondary" className="ml-1.5 h-4 px-1 text-[10px]">✓</Badge>}
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex-1">
                <HelpCircle className="h-3.5 w-3.5 mr-1" />
                Quiz
                {watch('slug') && loadQuiz(watch('slug')).length > 0 && (
                  <Badge variant="secondary" className="ml-1.5 h-4 px-1 text-[10px]">
                    {loadQuiz(watch('slug')).length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            {/* ── TAB 1: Basic Info ── */}
            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5 col-span-2">
                  <Label htmlFor="title">ចំណងជើង *</Label>
                  <Input id="title" {...register('title', { required: true })} placeholder="ឧ: Introduction to C" className="rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="slug">Slug</Label>
                  <Input id="slug" {...register('slug')} placeholder="intro-to-c" className="rounded-xl font-mono text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="icon">Icon (emoji)</Label>
                  <Input id="icon" {...register('icon')} placeholder="📄" className="rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="language">Language</Label>
                  <Input id="language" {...register('language')} placeholder="c, python, html..." className="rounded-xl font-mono text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lessonLevel">កម្រិត</Label>
                  <Select defaultValue="ថ្នាក់ដើម" onValueChange={(v) => setValue('lessonLevel', v)}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ថ្នាក់ដើម">ថ្នាក់ដើម</SelectItem>
                      <SelectItem value="មធ្យម">មធ្យម</SelectItem>
                      <SelectItem value="កម្រិតខ្ពស់">កម្រិតខ្ពស់</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="order">លំដាប់</Label>
                  <Input id="order" type="number" {...register('order', { valueAsNumber: true })} className="rounded-xl" />
                </div>
                <div className="space-y-1.5 col-span-2">
                  <Label htmlFor="description">ការពិពណ៌នា</Label>
                  <Input id="description" {...register('description')} placeholder="ពិពណ៌នាខ្លីអំពីមេរៀននេះ" className="rounded-xl" />
                </div>
              </div>

              {/* Parent */}
              <div className="space-y-1.5">
                <Label>មេរៀនមេ</Label>
                <Select defaultValue={initial?.parentId ?? 'none'} onValueChange={(v) => setValue('parentId', v)}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="គ្មាន (Top level)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">គ្មាន (Top level)</SelectItem>
                    {allNodes.filter((n) => n._id !== initial?._id).map((n) => (
                      <SelectItem key={n._id} value={n._id}>
                        {'—'.repeat(n.level)} {n.numbering} {n.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-1">
                {([
                  { id: 'hasContent',  label: 'មានខ្លឹមសារ (hasContent)', key: 'hasContent'  },
                  { id: 'isPublished', label: 'បោះផ្សាយ (Published)',     key: 'isPublished' },
                  { id: 'isFree',      label: 'ឥតគិតថ្លៃ (Free)',         key: 'isFree'      },
                ] as const).map(({ id, label, key }) => (
                  <div key={id} className="flex items-center justify-between">
                    <Label htmlFor={id} className="text-sm">{label}</Label>
                    <Switch id={id} checked={watch(key)} onCheckedChange={(v) => setValue(key, v)} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* ── TAB 2: Content ── */}
            <TabsContent value="content" className="space-y-4">

              {/* Content Type */}
              <div className="space-y-1.5">
                <Label>ប្រភេទខ្លឹមសារ</Label>
                <div className="flex gap-2">
                  {CONTENT_TYPES.map((ct) => (
                    <button key={ct.value} type="button"
                      onClick={() => setValue('contentType', ct.value)}
                      className={cn(
                        'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border transition-all',
                        contentType === ct.value
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      {ct.icon} {ct.label}
                    </button>
                  ))}
                </div>
              </div>

              {contentType === 'video' ? (
                <div className="space-y-1.5">
                  <Label htmlFor="videoUrl">Video URL</Label>
                  <Input id="videoUrl" {...register('videoUrl')} placeholder="https://youtube.com/watch?v=..." className="rounded-xl" />
                  <p className="text-xs text-muted-foreground">YouTube, Vimeo, ឬ direct .mp4 link</p>
                </div>
              ) : (
                <>
                  {/* Upload Zone */}
                  <div className="space-y-1.5">
                    <Label>Upload File</Label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={cn(
                        'border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all',
                        dragOver ? 'border-primary bg-primary/5 scale-[1.01]' : 'border-border hover:border-primary/50 hover:bg-muted/30'
                      )}
                    >
                      <input ref={fileInputRef} type="file" accept=".md,.txt,.html,.ts" className="hidden"
                        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
                      {uploadedFile ? (
                        <div className="flex items-center justify-center gap-2 text-emerald-600">
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="text-sm font-medium">{uploadedFile}</span>
                          <button type="button"
                            onClick={(e) => { e.stopPropagation(); setValue('content', ''); setUploadedFile(null); setParsePreview(null); }}
                            className="ml-1 text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <Upload className="h-7 w-7 mx-auto text-muted-foreground" />
                          <p className="text-sm font-medium">Drag & drop ឬចុចជ្រើសរើស</p>
                          <p className="text-xs text-muted-foreground">.md · .txt · .html · .ts</p>
                          <p className="text-xs text-muted-foreground/60">
                            .ts → auto-extract <code className="bg-muted px-1 rounded">codeExample</code> + fill all fields
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Parse preview for .ts */}
                    {parsePreview && (
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-3 space-y-1 text-xs">
                        <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1.5">✅ បានទាញចេញពី .ts file:</p>
                        {parsePreview.title && <p><span className="text-muted-foreground">title:</span> {parsePreview.title}</p>}
                        {parsePreview.slug && <p><span className="text-muted-foreground">slug:</span> {parsePreview.slug}</p>}
                        {parsePreview.language && <p><span className="text-muted-foreground">language:</span> {parsePreview.language}</p>}
                        {parsePreview.category && <p><span className="text-muted-foreground">category:</span> {parsePreview.category}</p>}
                        <p><span className="text-muted-foreground">codeExample:</span> {parsePreview.codeExample.length} chars</p>
                      </div>
                    )}
                  </div>

                  {/* Textarea */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="content">ខ្លឹមសារ</Label>
                      <span className="text-xs text-muted-foreground">{content.length} chars</span>
                    </div>
                    <Textarea id="content" {...register('content')}
                      placeholder={contentType === 'html'
                        ? '<h1>ចំណងជើង</h1>\n<p>ខ្លឹមសារ...</p>'
                        : '1. Introduction\n\n1.1 Overview\n...\n\n```c\nint main() {}\n```'
                      }
                      className="rounded-xl font-mono text-xs min-h-[200px] resize-y"
                    />
                  </div>

                  {/* Export button */}
                  {(content || titleVal) && (
                    <Button type="button" variant="outline" size="sm" onClick={handleExport}
                      className="rounded-xl gap-1.5 w-full border-dashed">
                      <Download className="h-3.5 w-3.5" />
                      Export as .ts → រក្សាទុកក្នុង client/src/data/
                    </Button>
                  )}
                </>
              )}
            </TabsContent>

            {/* ── TAB 3: Quiz ── */}
            <TabsContent value="quiz" className="space-y-4">
              {watch('slug') ? (
                <QuizEditor
                  lessonSlug={watch('slug')}
                  sections={(() => {
                    // Parse sections from content for the section selector
                    const raw = watch('content') || '';
                    const lines = raw.split('\n');
                    const secs: { id: string; number: string; title: string }[] = [];
                    for (const line of lines) {
                      const top = line.match(/^(\d+)\.\s+(.+)/);
                      const sub = !top && line.match(/^(\d+\.\d+)\s+(.+)/);
                      if (top) secs.push({ id: `s-${top[1]}`, number: top[1], title: top[2].trim() });
                      else if (sub) secs.push({ id: `s-${sub[1].replace('.', '-')}`, number: sub[1], title: sub[2].trim() });
                    }
                    return secs.length > 0 ? secs : [{ id: 'general', number: '1', title: 'ទូទៅ' }];
                  })()}
                />
              ) : (
                <div className="text-center py-10 text-sm text-muted-foreground">
                  <HelpCircle className="h-8 w-8 mx-auto mb-2 opacity-30" />
                  <p>សូមបញ្ចូល Slug ក្នុង Tab "ព័ត៌មានទូទៅ" ជាមុន</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <DialogFooter className="pt-4 mt-2 border-t border-border/40">
            <Button type="button" variant="outline" onClick={onClose} className="rounded-xl">បោះបង់</Button>
            <Button type="submit" disabled={isSubmitting} className="rounded-xl">
              {isSubmitting ? 'កំពុងរក្សាទុក...' : initial ? 'រក្សាទុក' : 'បន្ថែម'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

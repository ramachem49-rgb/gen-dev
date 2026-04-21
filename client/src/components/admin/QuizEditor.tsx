import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Download, ChevronDown, ChevronRight, CheckCircle2, HelpCircle, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  loadQuiz, saveQuiz, generateQuizTs, emptyQuestion,
  parseExternalQuizTs,
  type QuizQuestion,
} from '@/lib/quizUtils';
import QuizImportDialog from './QuizImportDialog';

interface Section {
  id: string;
  number: string;
  title: string;
}

interface QuizEditorProps {
  lessonSlug: string;
  sections: Section[];
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ── Single question editor ─────────────────────────────────────────────────────
function QuestionCard({
  q, index, onChange, onDelete,
}: {
  q: QuizQuestion; index: number;
  onChange: (updated: QuizQuestion) => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(index === 0);

  const setOption = (id: string, text: string) =>
    onChange({ ...q, options: q.options.map((o) => o.id === id ? { ...o, text } : o) });

  return (
    <div className="border border-border/50 rounded-xl overflow-hidden">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
      >
        {open ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
        <span className="text-sm font-semibold flex-1 truncate">
          {index + 1}. {q.question || <span className="text-muted-foreground italic">សំណួរថ្មី...</span>}
        </span>
        <Badge variant="outline" className="text-[10px] shrink-0">
          ✓ {OPTION_LABELS[q.options.findIndex((o) => o.id === q.correctId)] ?? 'A'}
        </Badge>
        <button type="button" onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="text-muted-foreground hover:text-destructive transition-colors ml-1">
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </button>

      {open && (
        <div className="p-4 space-y-4">
          {/* Question text */}
          <div className="space-y-1.5">
            <Label className="text-xs">សំណួរ *</Label>
            <Textarea
              value={q.question}
              onChange={(e) => onChange({ ...q, question: e.target.value })}
              placeholder="វាយសំណួររបស់អ្នក..."
              className="rounded-xl text-sm min-h-[70px] resize-none"
            />
          </div>

          {/* Options */}
          <div className="space-y-2">
            <Label className="text-xs">ជម្រើស (ចុចប៊ូតុង ✓ ដើម្បីជ្រើស correct)</Label>
            {q.options.map((opt, i) => (
              <div key={opt.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onChange({ ...q, correctId: opt.id })}
                  className={cn(
                    'h-7 w-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 transition-all',
                    q.correctId === opt.id
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : 'border-border text-muted-foreground hover:border-primary'
                  )}
                >
                  {q.correctId === opt.id ? <CheckCircle2 className="h-3.5 w-3.5" /> : OPTION_LABELS[i]}
                </button>
                <Input
                  value={opt.text}
                  onChange={(e) => setOption(opt.id, e.target.value)}
                  placeholder={`ជម្រើស ${OPTION_LABELS[i]}`}
                  className="rounded-xl text-sm h-9"
                />
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div className="space-y-1.5">
            <Label className="text-xs">ការពន្យល់ (optional)</Label>
            <Input
              value={q.explanation ?? ''}
              onChange={(e) => onChange({ ...q, explanation: e.target.value })}
              placeholder="ពន្យល់ចម្លើយត្រឹមត្រូវ..."
              className="rounded-xl text-sm h-9"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main QuizEditor ────────────────────────────────────────────────────────────
export default function QuizEditor({ lessonSlug, sections }: QuizEditorProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id ?? '');
  const [saved, setSaved] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [importInfo, setImportInfo] = useState<string | null>(null);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuestions(loadQuiz(lessonSlug));
  }, [lessonSlug]);

  useEffect(() => {
    if (sections.length > 0 && !activeSectionId) setActiveSectionId(sections[0].id);
  }, [sections]);

  // ── Import .ts file ──
  const handleImportFile = (file: File) => {
    if (!file.name.endsWith('.ts') && !file.name.endsWith('.js')) {
      alert('សូមជ្រើស file .ts ប៉ុណ្ណោះ');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const source = e.target?.result as string;
      const defaultSectionId = activeSectionId || sections[0]?.id || 'general';
      const parsed = parseExternalQuizTs(source, defaultSectionId);
      if (parsed.length === 0) {
        alert('រកមិនឃើញសំណួរក្នុង file នេះ — សូម check format');
        return;
      }
      // Merge: keep existing, add new (avoid duplicate by question text)
      setQuestions((prev) => {
        const existing = new Set(prev.map((q) => q.question.trim()));
        const newOnes = parsed.filter((q) => !existing.has(q.question.trim()));
        return [...prev, ...newOnes];
      });
      setImportInfo(`✅ Import ${parsed.length} សំណួរពី ${file.name}`);
      setTimeout(() => setImportInfo(null), 4000);
    };
    reader.readAsText(file, 'UTF-8');
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImportFile(file);
  };

  const sectionQuestions = questions.filter((q) => q.sectionId === activeSectionId);
  const activeSection = sections.find((s) => s.id === activeSectionId);

  const updateQuestion = (updated: QuizQuestion) =>
    setQuestions((prev) => prev.map((q) => q.id === updated.id ? updated : q));

  const deleteQuestion = (id: string) =>
    setQuestions((prev) => prev.filter((q) => q.id !== id));

  const addQuestion = () => {
    if (!activeSectionId) return;
    setQuestions((prev) => [...prev, emptyQuestion(activeSectionId)]);
  };

  const handleSave = () => {
    saveQuiz(lessonSlug, questions);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleExport = () => {
    const ts = generateQuizTs(lessonSlug, questions);
    downloadFile(`quiz_${lessonSlug}.ts`, ts);
  };

  return (
    <div className="space-y-4">
      {/* ── Top bar: Import + total count ── */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">Quiz</span>
          <Badge variant="secondary" className="text-[10px]">{questions.length} សំណួរ</Badge>
        </div>
        <Button type="button" variant="outline" size="sm"
          onClick={() => setImportDialogOpen(true)}
          className="rounded-xl gap-1.5 h-8 text-xs border-primary/40 hover:border-primary hover:bg-primary/5 shrink-0">
          <Upload className="h-3.5 w-3.5 text-primary" />
          Import .ts
        </Button>
      </div>

      {/* Import result */}
      {importInfo && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
          <span className="flex-1">{importInfo}</span>
          <button onClick={() => setImportInfo(null)}><X className="h-3.5 w-3.5" /></button>
        </div>
      )}

      {/* Import dialog */}
      <QuizImportDialog
        open={importDialogOpen}
        onClose={() => setImportDialogOpen(false)}
        lessonSlug={lessonSlug}
        defaultSectionId={activeSectionId || sections[0]?.id || 'general'}
        onImported={(count) => {
          setQuestions(loadQuiz(lessonSlug));
          setImportInfo(`✅ Import ${count} សំណួរថ្មីបានជោគជ័យ`);
          setTimeout(() => setImportInfo(null), 4000);
        }}
      />

      {/* Section selector */}
      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground">ជ្រើសផ្នែក</Label>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => {
            const count = questions.filter((q) => q.sectionId === s.id).length;
            return (
              <button
                key={s.id} type="button"
                onClick={() => setActiveSectionId(s.id)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-all',
                  activeSectionId === s.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary/50'
                )}
              >
                {s.number}. {s.title}
                {count > 0 && (
                  <Badge className="h-4 px-1 text-[9px] bg-white/20 text-inherit">{count}</Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions for active section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">
              {activeSection ? `${activeSection.number}. ${activeSection.title}` : 'ជ្រើសផ្នែក'}
            </span>
            <Badge variant="secondary" className="text-[10px]">{sectionQuestions.length}</Badge>
          </div>
          <Button type="button" size="sm" onClick={addQuestion} disabled={!activeSectionId}
            className="rounded-xl gap-1.5 h-8 text-xs">
            <Plus className="h-3.5 w-3.5" /> បន្ថែមសំណួរ
          </Button>
        </div>

        {sectionQuestions.length === 0 ? (
          <div className="border-2 border-dashed border-border/40 rounded-xl py-8 text-center text-sm text-muted-foreground">
            <HelpCircle className="h-8 w-8 mx-auto mb-2 opacity-30" />
            <p>មិនទាន់មានសំណួរ — ចុច "បន្ថែមសំណួរ"</p>
          </div>
        ) : (
          <div className="space-y-2">
            {sectionQuestions.map((q, i) => (
              <QuestionCard
                key={q.id} q={q} index={i}
                onChange={updateQuestion}
                onDelete={() => deleteQuestion(q.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex gap-2 pt-2 border-t border-border/40">
        <Button type="button" onClick={handleSave} size="sm"
          className={cn('rounded-xl gap-1.5 flex-1', saved && 'bg-emerald-600 hover:bg-emerald-700')}>
          {saved ? <><CheckCircle2 className="h-3.5 w-3.5" /> រក្សាទុករួចហើយ</> : 'រក្សាទុក Quiz'}
        </Button>
        <Button type="button" onClick={handleExport} size="sm" variant="outline"
          className="rounded-xl gap-1.5 border-dashed">
          <Download className="h-3.5 w-3.5" /> Export .ts
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Quiz save ក្នុង localStorage · Export .ts → copy ទៅ <code className="bg-muted px-1 rounded">client/src/data/</code>
      </p>
    </div>
  );
}

import { useState, useRef, useCallback } from 'react';
import { Upload, CheckCircle2, X, FileText, HelpCircle, ChevronDown, ChevronRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { parseExternalQuizTs, saveQuiz, loadQuiz, type QuizQuestion } from '@/lib/quizUtils';

interface QuizImportDialogProps {
  open: boolean;
  onClose: () => void;
  lessonSlug: string;
  defaultSectionId: string;
  onImported: (count: number) => void;
}

// Group questions by sectionId
function groupBySection(questions: QuizQuestion[]) {
  const map = new Map<string, QuizQuestion[]>();
  for (const q of questions) {
    if (!map.has(q.sectionId)) map.set(q.sectionId, []);
    map.get(q.sectionId)!.push(q);
  }
  return map;
}

// Preview one question
function QuestionPreview({ q, index }: { q: QuizQuestion; index: number }) {
  const correctOpt = q.options.find((o) => o.id === q.correctId);
  return (
    <div className="text-xs space-y-1.5 py-2 border-b border-border/30 last:border-0">
      <p className="font-medium text-foreground/90">
        <span className="text-muted-foreground mr-1">{index + 1}.</span>
        {q.question}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {q.options.map((o) => (
          <span key={o.id} className={cn(
            'px-2 py-0.5 rounded-lg border text-[10px]',
            o.id === q.correctId
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-400 font-semibold'
              : 'bg-muted/50 border-border/40 text-muted-foreground'
          )}>
            {o.id.toUpperCase()}. {o.text}
          </span>
        ))}
      </div>
      {q.explanation && (
        <p className="text-muted-foreground/70 italic">💡 {q.explanation.slice(0, 80)}{q.explanation.length > 80 ? '...' : ''}</p>
      )}
    </div>
  );
}

export default function QuizImportDialog({
  open, onClose, lessonSlug, defaultSectionId, onImported,
}: QuizImportDialogProps) {
  const [dragOver, setDragOver] = useState(false);
  const [parsed, setParsed] = useState<QuizQuestion[] | null>(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [mergeMode, setMergeMode] = useState<'merge' | 'replace'>('merge');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => { setParsed(null); setFileName(''); setError(''); };

  const handleFile = useCallback((file: File) => {
    if (!file.name.endsWith('.ts') && !file.name.endsWith('.js')) {
      setError('សូមជ្រើស file .ts ឬ .js ប៉ុណ្ណោះ');
      return;
    }
    setError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      const source = e.target?.result as string;
      const questions = parseExternalQuizTs(source, defaultSectionId);
      if (questions.length === 0) {
        setError('រកមិនឃើញសំណួរ — សូម check format (ត្រូវការ array ដែលមាន question, options, correctAnswer)');
        return;
      }
      setParsed(questions);
      setFileName(file.name);
      // Auto-expand first section
      const first = questions[0]?.sectionId;
      if (first) setExpandedSections(new Set([first]));
    };
    reader.readAsText(file, 'UTF-8');
  }, [defaultSectionId]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleConfirm = () => {
    if (!parsed) return;
    const existing = mergeMode === 'merge' ? loadQuiz(lessonSlug) : [];
    const existingTexts = new Set(existing.map((q) => q.question.trim()));
    const newOnes = parsed.filter((q) => !existingTexts.has(q.question.trim()));
    const final = [...existing, ...newOnes];
    saveQuiz(lessonSlug, final);
    onImported(newOnes.length);
    reset();
    onClose();
  };

  const grouped = parsed ? groupBySection(parsed) : new Map();
  const toggleSection = (id: string) => setExpandedSections((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <Dialog open={open} onOpenChange={() => { reset(); onClose(); }}>
      <DialogContent className="sm:max-w-2xl glass max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Import Quiz ពី .ts file
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 py-2">
          {!parsed ? (
            /* ── Drop zone ── */
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                'border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all',
                dragOver ? 'border-primary bg-primary/5 scale-[1.01]' : 'border-border hover:border-primary/50 hover:bg-muted/30'
              )}
            >
              <input ref={fileInputRef} type="file" accept=".ts,.js" className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
              <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
              <p className="font-semibold text-sm">Drag & drop ឬចុចជ្រើស file</p>
              <p className="text-xs text-muted-foreground mt-1">.ts · .js</p>
              <div className="mt-4 text-left bg-muted/50 rounded-xl p-3 text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground/70 mb-1.5">Format ដែលគាំទ្រ:</p>
                <p>✅ <code className="bg-background px-1 rounded">correctAnswer: "B"</code> — letter A/B/C/D</p>
                <p>✅ <code className="bg-background px-1 rounded">correctAnswer: "True"/"False"</code></p>
                <p>✅ <code className="bg-background px-1 rounded">correctAnswer: "number"</code> — fill-in text</p>
                <p>✅ <code className="bg-background px-1 rounded">lessonSection: "7.2"</code> → section s-7-2</p>
                <p>✅ <code className="bg-background px-1 rounded">options: ["A. text", "B. text"]</code></p>
              </div>
            </div>
          ) : (
            /* ── Preview ── */
            <div className="space-y-3">
              {/* File info */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30">
                <FileText className="h-5 w-5 text-emerald-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{fileName}</p>
                  <p className="text-xs text-muted-foreground">
                    {parsed.length} សំណួរ · {grouped.size} section
                  </p>
                </div>
                <button onClick={reset} className="text-muted-foreground hover:text-destructive">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Merge mode */}
              <div className="flex gap-2">
                {(['merge', 'replace'] as const).map((mode) => (
                  <button key={mode} type="button"
                    onClick={() => setMergeMode(mode)}
                    className={cn(
                      'flex-1 py-2 rounded-xl text-xs border transition-all',
                      mergeMode === mode
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary/50'
                    )}
                  >
                    {mode === 'merge' ? '➕ Merge (បន្ថែមទៅ existing)' : '🔄 Replace (លុបចាស់ ដាក់ថ្មី)'}
                  </button>
                ))}
              </div>

              {/* Questions grouped by section */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground px-1">Preview សំណួរ:</p>
                {Array.from(grouped.entries()).map(([secId, qs]) => (
                  <div key={secId} className="border border-border/50 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleSection(secId)}
                      className="w-full flex items-center gap-2 px-4 py-2.5 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
                    >
                      {expandedSections.has(secId)
                        ? <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                        : <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
                      <HelpCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="text-xs font-semibold flex-1">Section: {secId}</span>
                      <Badge variant="secondary" className="text-[10px]">{qs.length} សំណួរ</Badge>
                    </button>
                    {expandedSections.has(secId) && (
                      <div className="px-4 py-1">
                        {qs.map((q, i) => <QuestionPreview key={q.id} q={q} index={i} />)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-destructive/10 border border-destructive/30 text-xs text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <DialogFooter className="border-t border-border/40 pt-3">
          <Button variant="outline" onClick={() => { reset(); onClose(); }} className="rounded-xl">
            បោះបង់
          </Button>
          {parsed && (
            <Button onClick={handleConfirm} className="rounded-xl gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Import {parsed.length} សំណួរ
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

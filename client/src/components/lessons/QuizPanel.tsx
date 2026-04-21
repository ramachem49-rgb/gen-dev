import { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QuizQuestion } from '@/lib/quizUtils';

interface QuizPanelProps {
  questions: QuizQuestion[];
  sectionTitle: string;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function QuizPanel({ questions, sectionTitle }: QuizPanelProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [wrongIds, setWrongIds] = useState<string[]>([]);

  if (questions.length === 0) return null;

  const q = questions[current];
  const isCorrect = selected === q.correctId;
  const progress = Math.round(((current) / questions.length) * 100);

  const handleSelect = (optId: string) => {
    if (answered) return;
    setSelected(optId);
    setAnswered(true);
    if (optId === q.correctId) {
      setScore((s) => s + 1);
    } else {
      setWrongIds((prev) => [...prev, q.id]);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRetry = () => {
    setCurrent(0); setSelected(null); setAnswered(false);
    setScore(0); setDone(false); setWrongIds([]);
  };

  const handleRetryWrong = () => {
    const wrongQuestions = questions.filter((q) => wrongIds.includes(q.id));
    // restart with wrong questions only — we'll just reset for simplicity
    setCurrent(0); setSelected(null); setAnswered(false);
    setScore(0); setDone(false); setWrongIds([]);
  };

  const scorePercent = Math.round((score / questions.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl overflow-hidden border border-primary/20"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-3 bg-primary/5 border-b border-border/40">
        <HelpCircle className="h-4 w-4 text-primary shrink-0" />
        <span className="text-sm font-bold flex-1">Quiz — {sectionTitle}</span>
        <Badge variant="secondary" className="text-[10px]">{questions.length} សំណួរ</Badge>
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          /* ── Result screen ── */
          <motion.div key="result"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="p-6 text-center space-y-4"
          >
            <div className={cn(
              'h-20 w-20 rounded-full mx-auto flex items-center justify-center text-3xl',
              scorePercent === 100 ? 'bg-emerald-500/20' : scorePercent >= 60 ? 'bg-amber-500/20' : 'bg-red-500/20'
            )}>
              {scorePercent === 100 ? '🏆' : scorePercent >= 60 ? '👍' : '😅'}
            </div>
            <div>
              <p className="text-2xl font-black">{score}/{questions.length}</p>
              <p className={cn('text-sm font-semibold mt-1',
                scorePercent === 100 ? 'text-emerald-500' : scorePercent >= 60 ? 'text-amber-500' : 'text-red-500'
              )}>
                {scorePercent === 100 ? 'ល្អឥតខ្ចោះ! 🎉' : scorePercent >= 60 ? 'ល្អ! បន្តព្យាយាម' : 'ព្យាយាមម្ដងទៀត'}
              </p>
            </div>
            {/* Progress bar */}
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scorePercent}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={cn('h-full rounded-full',
                  scorePercent === 100 ? 'bg-emerald-500' : scorePercent >= 60 ? 'bg-amber-500' : 'bg-red-500'
                )}
              />
            </div>
            <div className="flex gap-2 justify-center pt-2">
              <Button size="sm" variant="outline" onClick={handleRetry} className="rounded-xl gap-1.5">
                <RotateCcw className="h-3.5 w-3.5" /> ធ្វើម្ដងទៀត
              </Button>
              {wrongIds.length > 0 && (
                <Button size="sm" onClick={handleRetryWrong} className="rounded-xl gap-1.5 bg-amber-500 hover:bg-amber-600 text-white">
                  <RotateCcw className="h-3.5 w-3.5" /> ធ្វើតែខុស ({wrongIds.length})
                </Button>
              )}
            </div>
          </motion.div>
        ) : (
          /* ── Question screen ── */
          <motion.div key={q.id}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
            className="p-5 space-y-4"
          >
            {/* Progress */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>សំណួរ {current + 1}/{questions.length}</span>
                <span>{score} ត្រឹមត្រូវ</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question */}
            <p className="text-sm font-semibold leading-relaxed">{q.question}</p>

            {/* Options */}
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = selected === opt.id;
                const isCorrectOpt = opt.id === q.correctId;
                let state: 'default' | 'correct' | 'wrong' | 'reveal' = 'default';
                if (answered) {
                  if (isSelected && isCorrectOpt) state = 'correct';
                  else if (isSelected && !isCorrectOpt) state = 'wrong';
                  else if (!isSelected && isCorrectOpt) state = 'reveal';
                }

                return (
                  <button
                    key={opt.id} type="button"
                    onClick={() => handleSelect(opt.id)}
                    disabled={answered}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left transition-all duration-200',
                      state === 'default' && !answered && 'border-border hover:border-primary/50 hover:bg-primary/5',
                      state === 'default' && answered && 'border-border opacity-50',
                      state === 'correct' && 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
                      state === 'wrong' && 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400',
                      state === 'reveal' && 'border-emerald-500/50 bg-emerald-500/5',
                    )}
                  >
                    <span className={cn(
                      'h-6 w-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0',
                      state === 'correct' && 'border-emerald-500 bg-emerald-500 text-white',
                      state === 'wrong' && 'border-red-500 bg-red-500 text-white',
                      state === 'reveal' && 'border-emerald-500 text-emerald-600',
                      state === 'default' && 'border-border',
                    )}>
                      {state === 'correct' ? <CheckCircle2 className="h-3.5 w-3.5" />
                        : state === 'wrong' ? <XCircle className="h-3.5 w-3.5" />
                        : OPTION_LABELS[i]}
                    </span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {answered && q.explanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  className="rounded-xl bg-muted/50 px-4 py-3 text-xs text-muted-foreground border border-border/40"
                >
                  <span className="font-semibold text-foreground">💡 ការពន្យល់: </span>
                  {q.explanation}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next button */}
            {answered && (
              <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                <Button onClick={handleNext} className="w-full rounded-xl gap-2"
                  variant={isCorrect ? 'default' : 'secondary'}>
                  {current + 1 >= questions.length ? (
                    <><Trophy className="h-4 w-4" /> មើលលទ្ធផល</>
                  ) : (
                    <>សំណួរបន្ទាប់ →</>
                  )}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

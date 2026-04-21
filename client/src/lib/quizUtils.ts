// ── Quiz Types ─────────────────────────────────────────────────────────────────
export interface QuizOption {
  id: string;   // 'a' | 'b' | 'c' | 'd'
  text: string;
}

export interface QuizQuestion {
  id: string;
  sectionId: string;   // which section this question belongs to
  question: string;
  options: QuizOption[];
  correctId: string;   // option id that is correct
  explanation?: string;
}

export interface LessonQuiz {
  lessonSlug: string;
  questions: QuizQuestion[];
}

// ── localStorage store ─────────────────────────────────────────────────────────
const KEY = (slug: string) => `quiz_${slug}`;

export function loadQuiz(slug: string): QuizQuestion[] {
  try { return JSON.parse(localStorage.getItem(KEY(slug)) ?? '[]'); }
  catch { return []; }
}

export function saveQuiz(slug: string, questions: QuizQuestion[]) {
  localStorage.setItem(KEY(slug), JSON.stringify(questions));
}

// ── Generate .ts export ────────────────────────────────────────────────────────
export function generateQuizTs(slug: string, questions: QuizQuestion[]): string {
  const varName = `quiz_${slug.replace(/-/g, '_')}`;
  return `import type { LessonQuiz } from '@/lib/quizUtils';

export const ${varName}: LessonQuiz = {
  lessonSlug: "${slug}",
  questions: ${JSON.stringify(questions, null, 2)},
};
`;
}

// ── Parse quiz from .ts source (our export format) ────────────────────────────
export function parseQuizFromTs(source: string): QuizQuestion[] {
  try {
    const m = source.match(/questions\s*:\s*(\[[\s\S]*?\])\s*[,}]/);
    if (!m) return [];
    // eslint-disable-next-line no-new-func
    return new Function(`return ${m[1]}`)() as QuizQuestion[];
  } catch { return []; }
}

// ── Parse external quiz .ts file (html-quiz-data.ts format) ───────────────────
export function parseExternalQuizTs(source: string, defaultSectionId: string): QuizQuestion[] {
  try {
    // Find the exported array — try multiple patterns
    let arrStr = '';

    // Pattern 1: export const xxx: Type[] = [...]
    const m1 = source.match(/export\s+const\s+\w+\s*(?::\s*[\w<>\[\]]+)?\s*=\s*(\[[\s\S]*?\]);\s*(?:\/\/|export|$)/m);
    if (m1) arrStr = m1[1];

    // Pattern 2: = [...] at end of file
    if (!arrStr) {
      const m2 = source.match(/=\s*(\[[\s\S]*\])\s*;?\s*$/m);
      if (m2) arrStr = m2[1];
    }

    // Pattern 3: just grab everything between first [ and last ]
    if (!arrStr) {
      const start = source.indexOf('[');
      const end = source.lastIndexOf(']');
      if (start !== -1 && end > start) arrStr = source.slice(start, end + 1);
    }

    if (!arrStr) return [];

    // Safe-eval the array
    // eslint-disable-next-line no-new-func
    const raw: any[] = new Function(`return ${arrStr}`)();
    if (!Array.isArray(raw)) return [];

    return raw
      .filter((item) => item && typeof item === 'object' && item.question)
      .map((item): QuizQuestion => {
        const rawOpts: string[] = Array.isArray(item.options) ? item.options : [];

        // Build options — strip "A. " prefix
        const opts: QuizOption[] = rawOpts.map((o: string, idx: number) => ({
          id: String.fromCharCode(97 + idx), // a, b, c, d
          text: o.replace(/^[A-Da-d]\.\s*/, '').trim(),
        }));

        // Resolve correctId from correctAnswer
        const ca = String(item.correctAnswer ?? '').trim();
        let correctId = 'a';

        if (/^[A-Da-d]$/i.test(ca)) {
          // Letter answer: "A", "B", "C", "D"
          correctId = ca.toLowerCase();
        } else if (ca.toLowerCase() === 'true') {
          correctId = opts.find((o) => o.text.toLowerCase() === 'true')?.id ?? 'a';
        } else if (ca.toLowerCase() === 'false') {
          correctId = opts.find((o) => o.text.toLowerCase() === 'false')?.id ?? 'b';
        } else {
          // fill-in: match option text exactly
          const match = opts.find((o) => o.text.toLowerCase() === ca.toLowerCase());
          correctId = match?.id ?? 'a';
        }

        // Map lessonSection "7.2" → sectionId "s-7-2"
        const sec = item.lessonSection ? String(item.lessonSection).trim() : '';
        const sectionId = sec ? `s-${sec.replace(/\./g, '-')}` : defaultSectionId;

        return {
          id: makeId(),
          sectionId,
          question: String(item.question ?? '').trim(),
          options: opts,
          correctId,
          explanation: String(item.explanation ?? '').trim(),
        };
      });
  } catch (e) {
    console.error('parseExternalQuizTs error:', e);
    return [];
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────
export function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

export function emptyQuestion(sectionId: string): QuizQuestion {
  return {
    id: makeId(),
    sectionId,
    question: '',
    options: [
      { id: 'a', text: '' },
      { id: 'b', text: '' },
      { id: 'c', text: '' },
      { id: 'd', text: '' },
    ],
    correctId: 'a',
    explanation: '',
  };
}

import { useState, useEffect } from 'react';
import { calculateProgress, type LessonTreeNode } from '@/lib/lessonUtils';

const STORAGE_KEY = (courseId: string) => `lesson_progress_${courseId}`;

export function useLessonProgress(courseId: string, tree: LessonTreeNode[]) {
  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY(courseId)) ?? '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY(courseId), JSON.stringify(completed));
  }, [completed, courseId]);

  const markComplete = (id: string) =>
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const markIncomplete = (id: string) =>
    setCompleted((prev) => prev.filter((x) => x !== id));

  const isCompleted = (id: string) => completed.includes(id);

  const progress = calculateProgress(completed, tree);

  return { completed, markComplete, markIncomplete, isCompleted, progress };
}

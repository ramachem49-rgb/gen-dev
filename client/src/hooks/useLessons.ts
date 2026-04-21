import { useState, useEffect, useCallback } from 'react';
import { buildLessonTree, attachNumbering, type HLesson, type LessonTreeNode, MOCK_LESSONS } from '@/lib/lessonUtils';
import api from '@/lib/axios';

interface UseLessonsReturn {
  lessons: HLesson[];
  tree: LessonTreeNode[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  createLesson: (data: Partial<HLesson>) => Promise<void>;
  updateLesson: (id: string, data: Partial<HLesson>) => Promise<void>;
  deleteLesson: (id: string, options?: { cascade?: boolean; newParentId?: string }) => Promise<void>;
  reorder: (items: { id: string; order: number; parentId: string | null }[]) => Promise<void>;
}

const USE_MOCK = false; // set false when API is ready

export function useLessons(courseId: string): UseLessonsReturn {
  const [lessons, setLessons] = useState<HLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const buildTree = (data: HLesson[]) =>
    attachNumbering(buildLessonTree(data));

  const fetchLessons = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (USE_MOCK) {
        await new Promise((r) => setTimeout(r, 300));
        setLessons(MOCK_LESSONS.filter((l) => l.courseId === courseId));
      } else {
        const res = await api.get(`/hierarchical-lessons?courseId=${courseId}`);
        // Normalize: convert ObjectId strings to plain strings, null stays null
        const normalized: HLesson[] = res.data.data.map((l: any) => ({
          ...l,
          _id: String(l._id),
          parentId: l.parentId ? String(l.parentId) : null,
        }));
        setLessons(normalized);
      }
    } catch (e: any) {
      setError(e.message ?? 'Failed to load lessons');
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => { fetchLessons(); }, [fetchLessons]);

  const createLesson = async (data: Partial<HLesson>) => {
    if (USE_MOCK) {
      const newLesson: HLesson = {
        _id: Date.now().toString(),
        courseId,
        title: data.title ?? 'New Lesson',
        slug: (data.title ?? 'new').toLowerCase().replace(/\s+/g, '-'),
        parentId: data.parentId ?? null,
        order: data.order ?? 0,
        level: data.level ?? 0,
        hasContent: data.hasContent ?? false,
        isPublished: data.isPublished ?? false,
        isFree: data.isFree ?? true,
      };
      setLessons((prev) => [...prev, newLesson]);
      return;
    }
    await api.post('/hierarchical-lessons', { ...data, courseId });
    fetchLessons();
  };

  const updateLesson = async (id: string, data: Partial<HLesson>) => {
    if (USE_MOCK) {
      setLessons((prev) => prev.map((l) => (l._id === id ? { ...l, ...data } : l)));
      return;
    }
    await api.put(`/hierarchical-lessons/${id}`, data);
    fetchLessons();
  };

  const deleteLesson = async (id: string, options?: { cascade?: boolean; newParentId?: string }) => {
    if (USE_MOCK) {
      const removeIds = new Set<string>();
      const collect = (pid: string) => {
        removeIds.add(pid);
        lessons.filter((l) => l.parentId === pid).forEach((l) => collect(l._id));
      };
      if (options?.cascade) {
        collect(id);
      } else {
        removeIds.add(id);
        // move children up
        setLessons((prev) =>
          prev.map((l) => (l.parentId === id ? { ...l, parentId: options?.newParentId ?? null } : l))
            .filter((l) => l._id !== id)
        );
        return;
      }
      setLessons((prev) => prev.filter((l) => !removeIds.has(l._id)));
      return;
    }
    const params = new URLSearchParams();
    if (options?.cascade) params.set('cascade', 'true');
    if (options?.newParentId) params.set('newParentId', options.newParentId);
    await api.delete(`/hierarchical-lessons/${id}?${params}`);
    fetchLessons();
  };

  const reorder = async (items: { id: string; order: number; parentId: string | null }[]) => {
    if (USE_MOCK) {
      setLessons((prev) =>
        prev.map((l) => {
          const item = items.find((i) => i.id === l._id);
          return item ? { ...l, order: item.order, parentId: item.parentId } : l;
        })
      );
      return;
    }
    await api.post('/hierarchical-lessons/reorder', { items });
    fetchLessons();
  };

  return {
    lessons,
    tree: buildTree(lessons),
    loading,
    error,
    refetch: fetchLessons,
    createLesson,
    updateLesson,
    deleteLesson,
    reorder,
  };
}

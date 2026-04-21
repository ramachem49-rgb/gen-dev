import { useState, useEffect } from 'react';
import type { ReadingBookmark, SectionNote } from './useReadingProgress';

function load<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) ?? 'null') ?? fallback; }
  catch { return fallback; }
}

export interface LessonSavedData {
  slug: string;
  bookmark: ReadingBookmark | null;
  notes: SectionNote[];
}

/** Scan all localStorage keys and collect bookmarks + notes for every lesson */
export function useAllReadingProgress() {
  const [data, setData] = useState<LessonSavedData[]>([]);

  useEffect(() => {
    const map = new Map<string, LessonSavedData>();

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) ?? '';

      if (key.startsWith('bookmark_')) {
        const slug = key.replace('bookmark_', '');
        try {
          const bookmark: ReadingBookmark = JSON.parse(localStorage.getItem(key) ?? 'null');
          if (!map.has(slug)) map.set(slug, { slug, bookmark: null, notes: [] });
          map.get(slug)!.bookmark = bookmark;
        } catch { /* skip */ }
      }

      if (key.startsWith('notes_')) {
        const slug = key.replace('notes_', '');
        try {
          const notes: SectionNote[] = JSON.parse(localStorage.getItem(key) ?? '[]');
          if (notes.length > 0) {
            if (!map.has(slug)) map.set(slug, { slug, bookmark: null, notes: [] });
            map.get(slug)!.notes = notes;
          }
        } catch { /* skip */ }
      }
    }

    setData(Array.from(map.values()).filter((d) => d.bookmark || d.notes.length > 0));
  }, []);

  const clearAll = () => {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i) ?? '';
      if (key.startsWith('bookmark_') || key.startsWith('notes_')) {
        localStorage.removeItem(key);
      }
    }
    setData([]);
  };

  const clearLesson = (slug: string) => {
    localStorage.removeItem(`bookmark_${slug}`);
    localStorage.removeItem(`notes_${slug}`);
    setData((prev) => prev.filter((d) => d.slug !== slug));
  };

  const editNote = (slug: string, sectionId: string, sectionTitle: string, text: string) => {
    const key = `notes_${slug}`;
    const notes: SectionNote[] = load(key, []);
    const updated = notes.map((n) =>
      n.sectionId === sectionId
        ? { ...n, text, sectionTitle, savedAt: new Date().toISOString() }
        : n
    );
    localStorage.setItem(key, JSON.stringify(updated));
    setData((prev) => prev.map((d) =>
      d.slug === slug ? { ...d, notes: updated } : d
    ));
  };

  const deleteNote = (slug: string, sectionId: string) => {
    const key = `notes_${slug}`;
    const notes: SectionNote[] = load(key, []);
    const updated = notes.filter((n) => n.sectionId !== sectionId);
    if (updated.length === 0) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(updated));
    setData((prev) => prev
      .map((d) => d.slug === slug ? { ...d, notes: updated } : d)
      .filter((d) => d.bookmark || d.notes.length > 0)
    );
  };

  return { data, clearAll, clearLesson, editNote, deleteNote };
}

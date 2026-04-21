import { useState, useEffect, useCallback } from 'react';

export interface SectionNote {
  sectionId: string;
  sectionTitle: string;
  text: string;
  savedAt: string;
}

export interface ReadingBookmark {
  slug: string;
  sectionId: string;
  sectionTitle: string;
  sectionNumber: string;
  savedAt: string;
}

const KEY_BOOKMARK = (slug: string) => `bookmark_${slug}`;
const KEY_NOTES    = (slug: string) => `notes_${slug}`;

function load<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) ?? 'null') ?? fallback; }
  catch { return fallback; }
}

export function useReadingProgress(slug: string) {
  const [bookmark, setBookmark] = useState<ReadingBookmark | null>(() =>
    load(KEY_BOOKMARK(slug), null)
  );
  const [notes, setNotes] = useState<SectionNote[]>(() =>
    load(KEY_NOTES(slug), [])
  );

  // Persist on change
  useEffect(() => {
    if (bookmark) localStorage.setItem(KEY_BOOKMARK(slug), JSON.stringify(bookmark));
    else localStorage.removeItem(KEY_BOOKMARK(slug));
  }, [bookmark, slug]);

  useEffect(() => {
    localStorage.setItem(KEY_NOTES(slug), JSON.stringify(notes));
  }, [notes, slug]);

  const saveBookmark = useCallback((
    sectionId: string,
    sectionTitle: string,
    sectionNumber: string
  ) => {
    setBookmark({ slug, sectionId, sectionTitle, sectionNumber, savedAt: new Date().toISOString() });
  }, [slug]);

  const clearBookmark = useCallback(() => setBookmark(null), []);

  const isBookmarked = (sectionId: string) => bookmark?.sectionId === sectionId;

  const saveNote = useCallback((sectionId: string, sectionTitle: string, text: string) => {
    setNotes((prev) => {
      const filtered = prev.filter((n) => n.sectionId !== sectionId);
      if (!text.trim()) return filtered;
      return [...filtered, { sectionId, sectionTitle, text, savedAt: new Date().toISOString() }];
    });
  }, []);

  const getNote = useCallback((sectionId: string) =>
    notes.find((n) => n.sectionId === sectionId)?.text ?? '', [notes]);

  const deleteNote = useCallback((sectionId: string) =>
    setNotes((prev) => prev.filter((n) => n.sectionId !== sectionId)), []);

  return {
    bookmark,
    saveBookmark,
    clearBookmark,
    isBookmarked,
    notes,
    saveNote,
    getNote,
    deleteNote,
  };
}

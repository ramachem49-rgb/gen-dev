import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkCheck, StickyNote, Trash2, ArrowRight, BookOpen, Inbox, Pencil, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { useAllReadingProgress } from '@/hooks/useAllReadingProgress';
import { lessons } from '@/data/lessons';
import { languageLogos } from '@/data/languageLogos';
import { cn } from '@/lib/utils';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('km-KH', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

function EmptyState({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
      <div className="h-14 w-14 rounded-2xl bg-muted/50 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default function MyLessons() {
  const { data, clearAll, clearLesson, editNote, deleteNote } = useAllReadingProgress();
  const [confirmClear, setConfirmClear] = useState(false);
  const [editingNoteKey, setEditingNoteKey] = useState<string | null>(null); // "slug-sectionId"
  const [editText, setEditText] = useState('');

  const allBookmarks = data.filter((d) => d.bookmark);
  const allNotes     = data.flatMap((d) => d.notes.map((n) => ({ ...n, slug: d.slug })));

  const getLessonMeta = (slug: string) => {
    const lesson = lessons.find((l) => l.slug === slug);
    const logo   = lesson ? (languageLogos[lesson.slug] ?? languageLogos[lesson.language]) : undefined;
    return { lesson, logo };
  };

  const startEdit = (slug: string, sectionId: string, text: string) => {
    setEditingNoteKey(`${slug}-${sectionId}`);
    setEditText(text);
  };

  const cancelEdit = () => { setEditingNoteKey(null); setEditText(''); };

  const saveEdit = (slug: string, sectionId: string, sectionTitle: string) => {
    editNote(slug, sectionId, sectionTitle, editText);
    cancelEdit();
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-black">មេរៀនរបស់ខ្ញុំ</h1>
                  <p className="text-sm text-muted-foreground">Bookmarks និង ចំណាំដែលបានរក្សាទុក</p>
                </div>
              </div>
              {data.length > 0 && (
                confirmClear ? (
                  <div className="flex gap-2">
                    <Button size="sm" variant="destructive" className="rounded-xl text-xs"
                      onClick={() => { clearAll(); setConfirmClear(false); }}>
                      លុបទាំងអស់
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-xl text-xs"
                      onClick={() => setConfirmClear(false)}>
                      បោះបង់
                    </Button>
                  </div>
                ) : (
                  <Button size="sm" variant="outline" className="rounded-xl gap-1.5 text-xs text-destructive border-destructive/30 hover:bg-destructive/5"
                    onClick={() => setConfirmClear(true)}>
                    <Trash2 className="h-3.5 w-3.5" /> លុបទាំងអស់
                  </Button>
                )
              )}
            </div>
          </motion.div>

          {data.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="glass rounded-2xl p-10 text-center space-y-4">
              <Inbox className="h-12 w-12 mx-auto text-muted-foreground/40" />
              <p className="font-semibold">មិនទាន់មានអ្វីទេ</p>
              <p className="text-sm text-muted-foreground">
                ចូលទៅអានមេរៀន ហើយចុច 🔖 ឬ 📝 ដើម្បីរក្សាទុក
              </p>
              <Button asChild className="rounded-2xl gap-2">
                <Link to="/lessons">ចូលមើលមេរៀន <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </motion.div>
          ) : (
            <Tabs defaultValue="bookmarks">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="bookmarks" className="flex-1 gap-2">
                  <BookmarkCheck className="h-4 w-4" />
                  Bookmarks
                  {allBookmarks.length > 0 && (
                    <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">{allBookmarks.length}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="notes" className="flex-1 gap-2">
                  <StickyNote className="h-4 w-4" />
                  ចំណាំ
                  {allNotes.length > 0 && (
                    <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">{allNotes.length}</Badge>
                  )}
                </TabsTrigger>
              </TabsList>

              {/* ── Bookmarks Tab ── */}
              <TabsContent value="bookmarks">
                {allBookmarks.length === 0 ? (
                  <EmptyState
                    icon={<BookmarkCheck className="h-6 w-6 text-muted-foreground/50" />}
                    text="មិនទាន់មាន Bookmark ទេ — ចុច 🔖 ពេលអានមេរៀន"
                  />
                ) : (
                  <div className="space-y-3">
                    <AnimatePresence>
                      {allBookmarks.map(({ slug, bookmark }, i) => {
                        const { lesson, logo } = getLessonMeta(slug);
                        return (
                          <motion.div key={slug}
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }} transition={{ delay: i * 0.05 }}
                            className="glass rounded-2xl p-4 flex items-center gap-4 group"
                          >
                            {/* Lesson icon */}
                            <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center shrink-0">
                              {logo
                                ? <img src={logo} alt={slug} className="h-7 w-7 object-contain" />
                                : <span className="text-2xl">{lesson?.icon ?? '📄'}</span>}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold truncate">{lesson?.title ?? slug}</p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <BookmarkCheck className="h-3 w-3 text-amber-500 shrink-0" />
                                <p className="text-xs text-muted-foreground truncate">
                                  {bookmark!.sectionNumber}. {bookmark!.sectionTitle}
                                </p>
                              </div>
                              <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                                {formatDate(bookmark!.savedAt)}
                              </p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 shrink-0">
                              <Button asChild size="sm"
                                className="rounded-xl gap-1.5 text-xs h-8 bg-amber-500 hover:bg-amber-600 text-white">
                                <Link to={`/lessons/${slug}`}>
                                  បន្ត <ArrowRight className="h-3 w-3" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => clearLesson(slug)}>
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}
              </TabsContent>

              {/* ── Notes Tab ── */}
              <TabsContent value="notes">
                {allNotes.length === 0 ? (
                  <EmptyState
                    icon={<StickyNote className="h-6 w-6 text-muted-foreground/50" />}
                    text="មិនទាន់មានចំណាំទេ — ចុច 📝 ពេលអានមេរៀន"
                  />
                ) : (
                  <div className="space-y-3">
                    <AnimatePresence>
                      {allNotes.map((note, i) => {
                        const { lesson, logo } = getLessonMeta(note.slug);
                        const noteKey = `${note.slug}-${note.sectionId}`;
                        const isEditing = editingNoteKey === noteKey;
                        return (
                          <motion.div key={noteKey}
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }} transition={{ delay: i * 0.04 }}
                            className="glass rounded-2xl p-4 space-y-3 group"
                          >
                            {/* Note header */}
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
                                {logo
                                  ? <img src={logo} alt={note.slug} className="h-5 w-5 object-contain" />
                                  : <span className="text-lg">{lesson?.icon ?? '📄'}</span>}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-sky-600 dark:text-sky-400 truncate">
                                  {lesson?.title ?? note.slug}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">{note.sectionTitle}</p>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <p className="text-[10px] text-muted-foreground/60 mr-1">{formatDate(note.savedAt)}</p>
                                {/* Go to lesson */}
                                <Button asChild variant="ghost" size="icon"
                                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Link to={`/lessons/${note.slug}`}>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </Link>
                                </Button>
                                {/* Edit */}
                                {!isEditing && (
                                  <Button variant="ghost" size="icon"
                                    className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-sky-500"
                                    onClick={() => startEdit(note.slug, note.sectionId, note.text)}>
                                    <Pencil className="h-3.5 w-3.5" />
                                  </Button>
                                )}
                                {/* Delete */}
                                <Button variant="ghost" size="icon"
                                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                                  onClick={() => deleteNote(note.slug, note.sectionId)}>
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </div>

                            {/* Note content — view or edit */}
                            {isEditing ? (
                              <div className="space-y-2">
                                <Textarea
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  className="rounded-xl text-sm min-h-[80px] resize-none bg-background/50 border-sky-500/30 focus:border-sky-500"
                                  autoFocus
                                />
                                <div className="flex gap-2">
                                  <Button size="sm" onClick={() => saveEdit(note.slug, note.sectionId, note.sectionTitle)}
                                    className="rounded-xl gap-1.5 h-7 text-xs flex-1">
                                    <Save className="h-3 w-3" /> រក្សាទុក
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={cancelEdit}
                                    className="rounded-xl h-7 text-xs">
                                    <X className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div className={cn(
                                "rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-500/20 px-4 py-3",
                                "text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed cursor-text"
                              )}
                                onDoubleClick={() => startEdit(note.slug, note.sectionId, note.text)}
                                title="Double-click ដើម្បីកែ"
                              >
                                {note.text}
                                <p className="text-[10px] text-muted-foreground/40 mt-1.5">double-click ដើម្បីកែ</p>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

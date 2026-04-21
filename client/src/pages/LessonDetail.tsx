import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, BookOpen, ChevronRight, ChevronDown,
  Menu, X, Bookmark, BookmarkCheck, StickyNote, Trash2, Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { lessons } from "@/data/lessons";
import { languageLogos } from "@/data/languageLogos";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { cn } from "@/lib/utils";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { loadQuiz } from "@/lib/quizUtils";
import QuizPanel from "@/components/lessons/QuizPanel";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Section {
  id: string;
  number: string;
  title: string;
  content: string;
  level: number;
}

// ── Parse codeExample into sections ───────────────────────────────────────────
function parseSections(raw: string): Section[] {
  const lines = raw.split("\n");
  const sections: Section[] = [];
  let current: Section | null = null;
  const topPattern = /^(\d+)\.\s+(.+)/;
  const subPattern = /^(\d+\.\d+)\s+(.+)/;

  for (const line of lines) {
    const topMatch = line.match(topPattern);
    const subMatch = !topMatch && line.match(subPattern);
    if (topMatch) {
      if (current) sections.push(current);
      current = { id: `s-${topMatch[1]}`, number: topMatch[1], title: topMatch[2].trim(), content: "", level: 1 };
    } else if (subMatch) {
      if (current) sections.push(current);
      current = { id: `s-${subMatch[1].replace(".", "-")}`, number: subMatch[1], title: subMatch[2].trim(), content: "", level: 2 };
    } else if (current) {
      current.content += (current.content ? "\n" : "") + line;
    }
  }
  if (current) sections.push(current);
  return sections;
}

// ── Render section content ─────────────────────────────────────────────────────
function SectionContent({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);
  return (
    <div className="space-y-4 text-sm leading-relaxed">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        const isCode =
          trimmed.includes("<") || trimmed.includes("{") || trimmed.includes("//") ||
          trimmed.includes("=>") || trimmed.startsWith("const ") || trimmed.startsWith("let ") ||
          trimmed.startsWith("function ") || trimmed.startsWith("class ") ||
          trimmed.startsWith("import ") || trimmed.startsWith("export ") ||
          trimmed.startsWith("@") || /^\s{2,}/.test(trimmed);
        if (isCode) {
          return (
            <div key={i} className="code-block rounded-xl overflow-hidden">
              <pre className="p-4 overflow-x-auto text-xs leading-relaxed"><code>{trimmed}</code></pre>
            </div>
          );
        }
        return <p key={i} className="text-foreground/90 leading-7">{trimmed}</p>;
      })}
    </div>
  );
}

// ── Sidebar item ───────────────────────────────────────────────────────────────
function SidebarItem({
  section, active, onClick, expanded, onToggle, hasChildren, hasNote, isBookmarked,
}: {
  section: Section; active: boolean; onClick: () => void;
  expanded?: boolean; onToggle?: () => void; hasChildren?: boolean;
  hasNote?: boolean; isBookmarked?: boolean;
}) {
  if (section.level === 1) {
    return (
      <button
        onClick={() => { onClick(); onToggle?.(); }}
        className={cn(
          "w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-200",
          active ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" : "hover:bg-muted/60 text-foreground"
        )}
      >
        <span className="flex items-center gap-2.5">
          <span className={cn("flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shrink-0",
            active ? "bg-white/20" : "bg-primary/10 text-primary")}>
            {section.number}
          </span>
          <span className="line-clamp-2">{section.title}</span>
        </span>
        <span className="flex items-center gap-1 shrink-0">
          {isBookmarked && <BookmarkCheck className="h-3 w-3 text-amber-400" />}
          {hasNote && <StickyNote className="h-3 w-3 text-sky-400" />}
          {hasChildren && (expanded
            ? <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            : <ChevronRight className="h-3.5 w-3.5 opacity-60" />)}
        </span>
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-2 pl-8 pr-4 py-2 rounded-lg text-left text-xs transition-all duration-150",
        active ? "text-primary font-semibold bg-primary/8" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", active ? "bg-primary" : "bg-muted-foreground/40")} />
      <span className="line-clamp-2 flex-1">{section.number} {section.title}</span>
      {isBookmarked && <BookmarkCheck className="h-3 w-3 text-amber-400 shrink-0" />}
      {hasNote && <StickyNote className="h-3 w-3 text-sky-400 shrink-0" />}
    </button>
  );
}

// ── Note Panel ─────────────────────────────────────────────────────────────────
function NotePanel({
  sectionId, sectionTitle, initialText, onSave, onDelete,
}: {
  sectionId: string; sectionTitle: string; initialText: string;
  onSave: (text: string) => void; onDelete: () => void;
}) {
  const [text, setText] = useState(initialText);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setText(initialText); setSaved(false); }, [sectionId, initialText]);

  const handleSave = () => {
    onSave(text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="glass rounded-2xl p-4 space-y-3 border border-sky-500/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StickyNote className="h-4 w-4 text-sky-500" />
          <span className="text-sm font-semibold">ចំណាំ</span>
          <span className="text-xs text-muted-foreground truncate max-w-[160px]">{sectionTitle}</span>
        </div>
        {initialText && (
          <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={onDelete}>
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
      <Textarea
        value={text}
        onChange={(e) => { setText(e.target.value); setSaved(false); }}
        placeholder="វាយចំណាំរបស់អ្នកនៅទីនេះ..."
        className="rounded-xl text-sm min-h-[100px] resize-none bg-background/50"
      />
      <Button size="sm" onClick={handleSave} className="rounded-xl gap-1.5 w-full" variant={saved ? "secondary" : "default"}>
        {saved ? <><BookmarkCheck className="h-3.5 w-3.5" /> រក្សាទុករួចហើយ</> : <><Save className="h-3.5 w-3.5" /> រក្សាទុកចំណាំ</>}
      </Button>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
const LessonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const lessonIndex = lessons.findIndex((l) => l.slug === slug);
  const lesson = lessons[lessonIndex];
  const logo = lesson ? (languageLogos[lesson.slug] ?? languageLogos[lesson.language]) : undefined;
  const sections = lesson ? parseSections(lesson.codeExample) : [];

  const [activeId, setActiveId] = useState<string>("");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [showContinueBanner, setShowContinueBanner] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    bookmark, saveBookmark, clearBookmark, isBookmarked,
    notes, saveNote, getNote, deleteNote,
  } = useReadingProgress(slug ?? '');

  const topSections = sections.filter((s) => s.level === 1);
  const getChildren = (num: string) => sections.filter((s) => s.level === 2 && s.number.startsWith(num + "."));

  // Show "continue reading" banner if bookmark exists and differs from first section
  useEffect(() => {
    if (sections.length > 0 && !activeId) {
      const first = sections[0];
      setActiveId(first.id);
      setExpandedGroups(new Set([first.number]));
      if (bookmark && bookmark.sectionId !== first.id) {
        setShowContinueBanner(true);
      }
    }
  }, [slug, sections.length]);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const handleSelect = (section: Section) => {
    setActiveId(section.id);
    setSidebarOpen(false);
    setShowContinueBanner(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    if (section.level === 2) {
      const parentNum = section.number.split(".")[0];
      setExpandedGroups((prev) => new Set([...prev, parentNum]));
    }
  };

  const toggleGroup = (num: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      next.has(num) ? next.delete(num) : next.add(num);
      return next;
    });
  };

  const activeSection = sections.find((s) => s.id === activeId);
  const activeIdx = sections.findIndex((s) => s.id === activeId);
  const prevSection = activeIdx > 0 ? sections[activeIdx - 1] : null;
  const nextSection = activeIdx < sections.length - 1 ? sections[activeIdx + 1] : null;
  const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

  const handleBookmarkToggle = () => {
    if (!activeSection) return;
    if (isBookmarked(activeSection.id)) {
      clearBookmark();
    } else {
      saveBookmark(activeSection.id, activeSection.title, activeSection.number);
    }
  };

  const continueToBoomark = () => {
    if (!bookmark) return;
    const section = sections.find((s) => s.id === bookmark.sectionId);
    if (section) handleSelect(section);
    setShowContinueBanner(false);
  };

  if (!lesson) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">😕</div>
            <h1 className="text-2xl font-bold">រកមិនឃើញមេរៀន</h1>
            <Button asChild className="rounded-2xl"><Link to="/lessons">ត្រឡប់ទៅមេរៀន</Link></Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const Sidebar = () => (
    <nav className="flex flex-col h-full">
      <div className="p-4 border-b border-border/40 shrink-0">
        <div className="flex items-center gap-3">
          {logo ? <img src={logo} alt={lesson.title} className="h-8 w-8 object-contain" />
            : <span className="text-2xl">{lesson.icon}</span>}
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">មេរៀន</p>
            <p className="text-sm font-bold truncate">{lesson.title}</p>
          </div>
        </div>
        <div className="mt-2 flex gap-1.5 flex-wrap">
          <Badge variant="outline" className="text-[10px] px-2 py-0.5">{lesson.level}</Badge>
          <Badge variant="secondary" className="text-[10px] px-2 py-0.5">{sections.length} ផ្នែក</Badge>
          {notes.length > 0 && (
            <Badge className="text-[10px] px-2 py-0.5 bg-sky-500/20 text-sky-600 border-sky-500/30">
              <StickyNote className="h-2.5 w-2.5 mr-1" />{notes.length} ចំណាំ
            </Badge>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {topSections.map((top) => {
          const children = getChildren(top.number);
          const isExpanded = expandedGroups.has(top.number);
          return (
            <div key={top.id}>
              <SidebarItem
                section={top}
                active={activeId === top.id}
                onClick={() => handleSelect(top)}
                expanded={isExpanded}
                onToggle={() => toggleGroup(top.number)}
                hasChildren={children.length > 0}
                hasNote={!!notes.find((n) => n.sectionId === top.id)}
                isBookmarked={isBookmarked(top.id)}
              />
              <AnimatePresence initial={false}>
                {isExpanded && children.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-0.5 space-y-0.5"
                  >
                    {children.map((child) => (
                      <SidebarItem
                        key={child.id} section={child} active={activeId === child.id}
                        onClick={() => handleSelect(child)}
                        hasNote={!!notes.find((n) => n.sectionId === child.id)}
                        isBookmarked={isBookmarked(child.id)}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* All notes list at bottom of sidebar */}
      {notes.length > 0 && (
        <div className="border-t border-border/40 p-3 space-y-1.5 max-h-48 overflow-y-auto">
          <p className="text-xs font-semibold text-muted-foreground px-1 flex items-center gap-1.5">
            <StickyNote className="h-3 w-3" /> ចំណាំទាំងអស់
          </p>
          {notes.map((n) => {
            const sec = sections.find((s) => s.id === n.sectionId);
            return (
              <button key={n.sectionId}
                onClick={() => { if (sec) handleSelect(sec); setNoteOpen(true); }}
                className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <p className="text-xs font-medium text-sky-600 truncate">{n.sectionTitle}</p>
                <p className="text-xs text-muted-foreground truncate">{n.text}</p>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        {/* Top bar */}
        <div className="sticky top-0 z-30 glass border-b border-border/40 px-4 py-3 flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground shrink-0">
            <Link to="/lessons"><ArrowLeft className="h-4 w-4" /><span className="hidden sm:inline">មេរៀន</span></Link>
          </Button>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{lesson.title}</p>
            {activeSection && (
              <p className="text-xs text-muted-foreground truncate">{activeSection.number}. {activeSection.title}</p>
            )}
          </div>
          {/* Bookmark toggle */}
          {activeSection && (
            <Button
              variant="ghost" size="icon"
              className={cn("h-8 w-8 shrink-0", isBookmarked(activeSection.id) ? "text-amber-400" : "text-muted-foreground")}
              onClick={handleBookmarkToggle}
              title={isBookmarked(activeSection.id) ? "លុប Bookmark" : "Bookmark ផ្នែកនេះ"}
            >
              {isBookmarked(activeSection.id)
                ? <BookmarkCheck className="h-4 w-4" />
                : <Bookmark className="h-4 w-4" />}
            </Button>
          )}
          {/* Note toggle */}
          {activeSection && (
            <Button
              variant="ghost" size="icon"
              className={cn("h-8 w-8 shrink-0", noteOpen ? "text-sky-500" : getNote(activeSection.id) ? "text-sky-400" : "text-muted-foreground")}
              onClick={() => setNoteOpen((o) => !o)}
              title="ចំណាំ"
            >
              <StickyNote className="h-4 w-4" />
            </Button>
          )}
          <Button variant="outline" size="icon" className="lg:hidden h-8 w-8 glass border-border/40"
            onClick={() => setSidebarOpen((o) => !o)}>
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex flex-col w-72 xl:w-80 shrink-0 border-r border-border/40 bg-card/40 backdrop-blur-sm overflow-hidden">
            <Sidebar />
          </aside>

          {/* Mobile Sidebar Overlay */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
                  onClick={() => setSidebarOpen(false)} />
                <motion.aside
                  initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-card border-r border-border/40 lg:hidden flex flex-col overflow-hidden"
                >
                  <Sidebar />
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main ref={contentRef} className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-4">

              {/* Continue Reading Banner */}
              <AnimatePresence>
                {showContinueBanner && bookmark && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className="flex items-center justify-between gap-3 glass rounded-2xl px-4 py-3 border border-amber-500/30 bg-amber-50/30 dark:bg-amber-950/20"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <BookmarkCheck className="h-4 w-4 text-amber-500 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">បន្តអានពីកន្លែងដែលបានទុក</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {bookmark.sectionNumber}. {bookmark.sectionTitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button size="sm" onClick={continueToBoomark}
                        className="rounded-xl h-7 px-3 text-xs bg-amber-500 hover:bg-amber-600 text-white">
                        បន្ត
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setShowContinueBanner(false)}
                        className="rounded-xl h-7 w-7 p-0">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {activeSection ? (
                <motion.div key={activeSection.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  {/* Section header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>{lesson.title}</span>
                      <ChevronRight className="h-3 w-3" />
                      <span>{activeSection.number}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h1 className="text-2xl sm:text-3xl font-black leading-tight">
                        {activeSection.number}. {activeSection.title}
                      </h1>
                      {isBookmarked(activeSection.id) && (
                        <Badge className="shrink-0 bg-amber-500/20 text-amber-600 border-amber-500/30 gap-1">
                          <BookmarkCheck className="h-3 w-3" /> Bookmarked
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Section content */}
                  <div className="glass rounded-2xl p-6 sm:p-8 mb-4">
                    <SectionContent content={activeSection.content} />
                  </div>

                  {/* Quiz for this section */}
                  {(() => {
                    const allQuestions = loadQuiz(lesson.slug);
                    const sectionQuestions = allQuestions.filter((q) => q.sectionId === activeSection.id);
                    return sectionQuestions.length > 0 ? (
                      <div className="mb-4">
                        <QuizPanel
                          questions={sectionQuestions}
                          sectionTitle={`${activeSection.number}. ${activeSection.title}`}
                        />
                      </div>
                    ) : null;
                  })()}

                  {/* Note panel */}
                  <AnimatePresence>
                    {noteOpen && (
                      <NotePanel
                        sectionId={activeSection.id}
                        sectionTitle={`${activeSection.number}. ${activeSection.title}`}
                        initialText={getNote(activeSection.id)}
                        onSave={(text) => saveNote(activeSection.id, `${activeSection.number}. ${activeSection.title}`, text)}
                        onDelete={() => { deleteNote(activeSection.id); setNoteOpen(false); }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Section navigation */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/30">
                    {prevSection ? (
                      <Button variant="outline" size="sm" className="gap-2 rounded-xl glass border-border/40 max-w-[45%]"
                        onClick={() => handleSelect(prevSection)}>
                        <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate text-xs">{prevSection.number}. {prevSection.title}</span>
                      </Button>
                    ) : <div />}
                    {nextSection ? (
                      <Button size="sm" className="gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-deep shadow-md shadow-primary/20 max-w-[45%]"
                        onClick={() => handleSelect(nextSection)}>
                        <span className="truncate text-xs">{nextSection.number}. {nextSection.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      </Button>
                    ) : <div />}
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-10 text-center space-y-4">
                  {logo ? <img src={logo} alt={lesson.title} className="h-16 w-16 mx-auto object-contain" />
                    : <span className="text-6xl">{lesson.icon}</span>}
                  <h2 className="text-2xl font-black">{lesson.title}</h2>
                  <p className="text-muted-foreground">{lesson.description}</p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <Badge variant="outline">{lesson.level}</Badge>
                    <Badge variant="secondary">{sections.length} ផ្នែក</Badge>
                  </div>
                  {sections[0] && (
                    <Button className="rounded-2xl gap-2 bg-gradient-to-r from-primary to-primary-deep"
                      onClick={() => handleSelect(sections[0])}>
                      ចាប់ផ្ដើមរៀន <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </motion.div>
              )}

              {/* Lesson navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/20 gap-4">
                {prevLesson ? (
                  <Button asChild variant="outline" size="sm" className="gap-2 rounded-xl glass border-border/40">
                    <Link to={`/lessons/${prevLesson.slug}`}>
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline text-xs">{prevLesson.title}</span>
                      <span className="sm:hidden text-xs">មុន</span>
                    </Link>
                  </Button>
                ) : <div />}
                {nextLesson ? (
                  <Button asChild size="sm" className="gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-deep">
                    <Link to={`/lessons/${nextLesson.slug}`}>
                      <span className="hidden sm:inline text-xs">{nextLesson.title}</span>
                      <span className="sm:hidden text-xs">បន្ទាប់</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                ) : <div />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default LessonDetail;

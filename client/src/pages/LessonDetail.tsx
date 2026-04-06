import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play, Copy, Check, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { lessons } from "@/data/lessons";
import { languageLogos } from "@/data/languageLogos";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const LessonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const lessonIndex = lessons.findIndex((l) => l.slug === slug);
  const lesson = lessons[lessonIndex];
  const [code, setCode] = useState(lesson?.codeExample || "");
  const [copied, setCopied] = useState(false);
  const logo = lesson ? languageLogos[lesson.slug] : undefined;

  useEffect(() => {
    if (lesson) {
      setCode(lesson.codeExample);
      window.scrollTo(0, 0);
    }
  }, [slug, lesson]);

  if (!lesson) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-5">
            <div className="text-7xl mb-4">{"\uD83D\uDE15"}</div>
            <h1 className="text-2xl font-bold">{"\u179A\u1780\u1798\u17B7\u1793\u1783\u17BE\u1789\u1798\u17C1\u179A\u17C0\u1793"}</h1>
            <Button asChild className="rounded-2xl bg-gradient-to-r from-primary to-primary-deep">
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const prev = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
  const next = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button asChild variant="ghost" size="sm" className="mb-8 gap-2 rounded-xl text-muted-foreground hover:text-foreground">
              <Link to="/lessons">
                <ArrowLeft className="h-4 w-4" /> មេរៀនទាំងអស់
              </Link>
            </Button>

            {/* Header */}
            <div className="glass gradient-border p-8 sm:p-10 mb-10">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                {logo ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-muted/40 border border-border/40 p-3.5 shadow-sm"
                  >
                    <img src={logo} alt={lesson.title} className="h-full w-full object-contain" />
                  </motion.div>
                ) : (
                  <motion.span className="text-6xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                    {lesson.icon}
                  </motion.span>
                )}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm px-3.5 py-1.5 rounded-lg">{lesson.level}</Badge>
                  <Badge variant="secondary" className="text-sm px-3.5 py-1.5 rounded-lg">
                    <BookOpen className="h-3 w-3 mr-1.5" />
                    មេរៀនទីមួយ {lesson.id}
                  </Badge>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">{lesson.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{lesson.description}</p>
            </div>

            {/* Content */}
            <div className="mb-12 space-y-5">
              {lesson.content.split("\n\n").map((paragraph, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className="text-foreground leading-relaxed text-lg">
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Code Example */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>ចាប់ផ្ដើកូដ</span>
                </h2>
                <Button variant="outline" size="sm" className="gap-2 rounded-xl glass border-border/40" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                  {copied ? "\u1794\u17B6\u1793\u1785\u1798\u17D2\u179B\u1784" : "\u1785\u1798\u17D2\u179B\u1784"}
                </Button>
              </div>
              <div className="code-block shadow-2xl shadow-background/50">
                <div className="code-block-header">
                  <span className="code-dot bg-red-500/80" />
                  <span className="code-dot bg-yellow-500/80" />
                  <span className="code-dot bg-green-500/80" />
                  <span className="ml-3 text-xs text-white/40 font-mono">{lesson.language}</span>
                  {logo && <img src={logo} alt="" className="h-4 w-4 ml-auto opacity-40" />}
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm leading-relaxed">{lesson.codeExample}</code>
                </pre>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between items-center border-t border-border/30 pt-10 gap-4">
              {prev ? (
                <motion.div whileHover={{ x: -4 }}>
                  <Button asChild variant="outline" className="gap-2 rounded-2xl glass border-border/40">
                    <Link to={`/lessons/${prev.slug}`}>
                      <ArrowLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">{prev.title}</span>
                      <span className="sm:hidden">{"\u1798\u17BB\u1793"}</span>
                    </Link>
                  </Button>
                </motion.div>
              ) : <div />}
              {next ? (
                <motion.div whileHover={{ x: 4 }}>
                  <Button asChild className="gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-deep shadow-lg shadow-primary/20">
                    <Link to={`/lessons/${next.slug}`}>
                      <span className="hidden sm:inline">{next.title}</span>
                      <span className="sm:hidden">{"\u1794\u1793\u17D2\u1791\u17B6\u1794\u17CB"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ) : <div />}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LessonDetail;

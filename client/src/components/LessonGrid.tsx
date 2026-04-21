import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";
import type { Lesson } from "@/data/lessons";

const CATEGORIES = ["ទាំងអស់", "ភាសាកម្មវិធី", "បង្កើតវេបសាយ", "Framework", "ឧបករណ៍", "ទិន្នន័យ", "សន្តិសុខ"] as const;

const accentMap: Record<string, { bg: string; text: string; glow: string }> = {
  popular:  { bg: "from-orange-500/20 to-orange-600/10", text: "text-orange-500", glow: "shadow-orange-500/20" },
  available:{ bg: "from-primary/20 to-primary-glow/10",  text: "text-primary",    glow: "shadow-primary/20"   },
  soon:     { bg: "from-muted/40 to-muted/20",           text: "text-muted-foreground", glow: "" },
};

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
  count,
  variant,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  count: number;
  variant: keyof typeof accentMap;
}) => {
  const a = accentMap[variant];
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-6"
    >
      <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.bg} border border-border/30 shadow-lg ${a.glow}`}>
        <Icon className={`h-5 w-5 ${a.text}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h3 className="text-lg font-black">{title}</h3>
          <span className={`inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-border/40 bg-muted/60 ${a.text}`}>
            {count}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
    </motion.div>
  );
};

const LessonGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ទាំងអស់");

  const available  = lessons.filter((l) => !l.isComingSoon);
  const popular    = lessons.filter((l) => l.isPopular && !l.isComingSoon);
  const comingSoon = lessons.filter((l) => l.isComingSoon);

  const filterByCategory = (list: Lesson[]) =>
    activeCategory === "ទាំងអស់" ? list : list.filter((l) => l.category === activeCategory);

  const filteredAvailable = filterByCategory(available);
  const filteredPopular   = filterByCategory(popular);

  return (
    <div className="space-y-14">

      {/* ── Category Filter ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* fade edges on mobile */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background to-transparent z-10 sm:hidden" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent z-10 sm:hidden" />

        <div className="flex items-center gap-2 overflow-x-auto pb-1 px-1 scrollbar-none">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full text-xs h-8 px-4 shrink-0 font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary via-primary-deep to-primary-glow text-primary-foreground border-transparent shadow-lg shadow-primary/25"
                    : "border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-muted/50"
                }`}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Popular ── */}
      <AnimatePresence mode="wait">
        {filteredPopular.length > 0 && (
          <motion.section
            key="popular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SectionHeader
              icon={Flame}
              title="មេរៀនពេញនិយម"
              subtitle="មេរៀនដែលអ្នករៀនជ្រើសរើសច្រើនបំផុត"
              count={filteredPopular.length}
              variant="popular"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              <AnimatePresence mode="popLayout">
                {filteredPopular.map((lesson, i) => (
                  <LessonCard key={lesson.id} lesson={lesson} index={i} />
                ))}
              </AnimatePresence>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Available ── */}
      <section>
        <SectionHeader
          icon={BookOpen}
          title="មេរៀនដែលមាន"
          subtitle="មេរៀនទាំងអស់ដែលអាចរៀនបានឥឡូវ"
          count={filteredAvailable.length}
          variant="available"
        />
        {filteredAvailable.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredAvailable.map((lesson, i) => (
                <LessonCard key={lesson.id} lesson={lesson} index={i} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-muted-foreground"
          >
            <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-20" />
            <p className="text-sm font-medium">មិនមានមេរៀននៅក្នុងប្រភេទនេះទេ</p>
          </motion.div>
        )}
      </section>

      {/* ── Coming Soon ── */}
      {comingSoon.length > 0 && (
        <section>
          <SectionHeader
            icon={Clock}
            title="មេរៀននឹងមកដល់"
            subtitle="មេរៀនថ្មីៗដែលកំពុងរៀបចំ"
            count={comingSoon.length}
            variant="soon"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {comingSoon.map((lesson, i) => (
              <LessonCard key={lesson.id} lesson={lesson} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LessonGrid;

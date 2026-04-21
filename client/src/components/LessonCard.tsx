import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lock, Sparkles } from "lucide-react";
import type { Lesson } from "@/data/lessons";
import { languageLogos } from "@/data/languageLogos";
import { forwardRef } from "react";

const levelClass: Record<string, string> = {
  "ថ្នាក់ដើម":   "bg-emerald-500/15 text-emerald-500 border-emerald-500/25",
  "មធ្យម":       "bg-amber-500/15 text-amber-500 border-amber-500/25",
  "កម្រិតខ្ពស់": "bg-rose-500/15 text-rose-500 border-rose-500/25",
};

const categoryColor: Record<string, string> = {
  "ភាសាកម្មវិធី": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "បង្កើតវេបសាយ": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "ឧបករណ៍":      "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "Framework":    "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  "ទិន្នន័យ":     "bg-green-500/10 text-green-500 border-green-500/20",
  "សន្តិសុខ":     "bg-red-500/10 text-red-500 border-red-500/20",
};

const LessonCard = forwardRef<HTMLDivElement, { lesson: Lesson; index?: number }>(
  ({ lesson, index = 0 }, ref) => {
    const logo = languageLogos[lesson.slug] ?? languageLogos[lesson.language];

    const cardContent = (
      <div className="relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10">

        {/* Gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-primary-glow/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Coming Soon overlay */}
        {lesson.isComingSoon && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs font-bold text-muted-foreground tracking-wide">នឹងមកដល់ឆាប់ៗ</span>
            </div>
          </div>
        )}

        {/* ── MOBILE: horizontal compact ── */}
        <div className="flex sm:hidden items-center gap-3 p-3.5">
          {/* Icon with glow */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-muted/80 to-muted/40 border border-border/50 p-2 shadow-sm">
              {logo ? (
                <img src={logo} alt={lesson.title} className="h-full w-full object-contain" loading="lazy" />
              ) : (
                <span className="text-xl">{lesson.icon}</span>
              )}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
              <span className={`inline-flex items-center text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${levelClass[lesson.level] ?? ''}`}>
                {lesson.level}
              </span>
              {lesson.isFree && !lesson.isComingSoon && (
                <span className="inline-flex items-center text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-500 border border-emerald-500/25">
                  FREE
                </span>
              )}
              {lesson.isPopular && (
                <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-orange-500/15 text-orange-500 border border-orange-500/25">
                  🔥
                </span>
              )}
            </div>
            <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-1">
              {lesson.title}
            </h3>
            <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
              {lesson.description}
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-primary/40 group-hover:text-primary shrink-0 transition-all duration-300 group-hover:translate-x-0.5" />
        </div>

        {/* ── DESKTOP: vertical card ── */}
        <div className="hidden sm:flex flex-col h-full p-5 space-y-4">
          {/* Icon + badges row */}
          <div className="flex items-start justify-between gap-2">
            <motion.div
              whileHover={{ scale: 1.12, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-muted/80 to-muted/40 border border-border/50 p-2.5 shadow-md">
                {logo ? (
                  <img src={logo} alt={lesson.title} className="h-full w-full object-contain" loading="lazy" />
                ) : (
                  <span className="text-2xl">{lesson.icon}</span>
                )}
              </div>
            </motion.div>

            <div className="flex flex-col items-end gap-1.5">
              {lesson.isPopular && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-500 border border-orange-500/25">
                  🔥 ពេញនិយម
                </span>
              )}
              {lesson.isFree && !lesson.isComingSoon && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-500 border border-emerald-500/25">
                  <Sparkles className="h-2.5 w-2.5" /> FREE
                </span>
              )}
              <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md border ${levelClass[lesson.level] ?? ''}`}>
                {lesson.level}
              </span>
            </div>
          </div>

          {/* Title + description */}
          <div className="flex-1 space-y-1.5">
            <h3 className="font-black text-base leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {lesson.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {lesson.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            <span className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-md border ${categoryColor[lesson.category] ?? ''}`}>
              {lesson.category}
            </span>
            {!lesson.isComingSoon && (
              <div className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                រៀន <ArrowRight className="h-3 w-3" />
              </div>
            )}
          </div>
        </div>
      </div>
    );

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="h-full"
      >
        {lesson.isComingSoon ? (
          <div className="block group cursor-default h-full">{cardContent}</div>
        ) : (
          <Link to={`/lessons/${lesson.slug}`} className="block group h-full">
            {cardContent}
          </Link>
        )}
      </motion.div>
    );
  }
);

LessonCard.displayName = "LessonCard";
export default LessonCard;

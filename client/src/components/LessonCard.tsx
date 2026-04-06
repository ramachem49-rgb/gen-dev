import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Lesson } from "@/data/lessons";
import { languageLogos } from "@/data/languageLogos";
import { forwardRef } from "react";

const levelClass: Record<string, string> = {
  "\u1790\u17D2\u1793\u17B6\u1780\u17CB\u178A\u17BE\u1798": "level-beginner",
  "\u1798\u1792\u17D2\u1799\u1798": "level-intermediate",
  "\u1780\u1798\u17D2\u179A\u17B7\u178F\u1781\u17D2\u1796\u179F\u17CB": "level-advanced",
};

const LessonCard = forwardRef<HTMLDivElement, { lesson: Lesson; index?: number }>(
  ({ lesson, index = 0 }, ref) => {
    const logo = languageLogos[lesson.slug];

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to={`/lessons/${lesson.slug}`} className="block group">
          <div className="relative h-full glass gradient-border transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary-glow/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-6 space-y-5">
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-muted/40 border border-border/40 p-2.5 shadow-sm"
                >
                  {logo ? (
                    <img src={logo} alt={lesson.title} className="h-full w-full object-contain" loading="lazy" />
                  ) : (
                    <span className="text-2xl">{lesson.icon}</span>
                  )}
                </motion.div>
                <Badge variant="outline" className={`${levelClass[lesson.level]} text-xs font-semibold rounded-lg`}>
                  {lesson.level}
                </Badge>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors duration-300">
                  {lesson.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {lesson.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/40">
                <span className="text-xs text-muted-foreground font-medium">{"\u1798\u17C1\u179A\u17C0\u1793\u1791\u17B8"} {lesson.id}</span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-6px] group-hover:translate-x-0">
                  {"\u179A\u17C0\u1793\u17A5\u17A1\u17BC\u179C"}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
);

LessonCard.displayName = "LessonCard";

export default LessonCard;

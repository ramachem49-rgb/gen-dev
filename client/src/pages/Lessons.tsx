import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, BookOpen, Layers } from "lucide-react";
import { lessons } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageTransition from "@/components/PageTransition";

// Level Data
const levels = [
  { id: "all", label: "ទាំងអស់", icon: Layers },
  { id: "ថ្នាក់ដើម", label: "ថ្នាក់ដើម", icon: Sparkles },
  { id: "មធ្យម", label: "មធ្យម", icon: BookOpen },
  { id: "កម្រិតខ្ពស់", label: "កម្រិតខ្ពស់", icon: BookOpen },
];

const Lessons = () => {
  // State for filters
  const [activeLevel, setActiveLevel] = useState<string>("all");
  const [search, setSearch] = useState("");

  // Filtering Logic
  const filtered = lessons
    .filter((l) => activeLevel === "all" || l.level === activeLevel)
    .filter((l) =>
      search === "" ||
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.slug.toLowerCase().includes(search.toLowerCase()) ||
      l.category.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        {/* --- Decorative Background Gradients (Modern Look) --- */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* --- Header Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-sm font-semibold text-primary border border-purple-200/50 dark:border-purple-500/30 mb-6 shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              ប្រមូលផ្ដុំនូវមេរៀនគ្រប់គ្រាន់
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white">
              ស្វែងយល់ពីមេរៀន
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              ជ្រើសរើសមេរៀនដែលសមស្របទៅនឹងគោលដៅរបស់អ្នក។ 
              រៀនពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតខ្ពស់ជាមួយឧទាហរណ៍ជាក់ស្តែង។
            </p>
          </motion.div>

          {/* --- Filters & Search Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            {/* Search Bar (Floating Style) */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ស្វែងរកមេរៀន..."
                className="pl-12 pr-4 h-14 rounded-2xl shadow-lg border-2 border-transparent bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm focus:border-purple-500 focus:ring-0 transition-all text-base"
              />
            </div>

            {/* Filter Pills (CodeKhmer Style) */}
            <div className="flex flex-wrap justify-center gap-3">
              {levels.map((level) => (
                <Button
                  key={level.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => setActiveLevel(level.id)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 shadow-sm ${
                    activeLevel === level.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-500/30 hover:opacity-90"
                      : "bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:shadow-md"
                  }`}
                >
                  {level.icon && <level.icon className="w-4 h-4 mr-2" />}
                  {level.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* --- Lessons Grid --- */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeLevel + search}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                // Using auto-fill to make it responsive like CodeKhmer
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((lesson, i) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <LessonCard lesson={lesson} index={i} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Empty State
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 col-span-full"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6 text-4xl">
                  🔍
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">រកមិនឃើញមេរៀនទេ</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  សូមព្យាយាមប្រើពាក្យគន្លឹះផ្សេងទៀត ឬសម្អាត Filter ដើម្បីមើលមេរៀនទាំងអស់។
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </PageTransition>
  );
};

export default Lessons;
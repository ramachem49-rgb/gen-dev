import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { useLessons } from '@/hooks/useLessons';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import { getAdjacentLessons, flattenTree } from '@/lib/lessonUtils';
import LessonTree from '@/components/lessons/LessonTree';
import LessonProgress from '@/components/lessons/LessonProgress';
import LessonNavigation from '@/components/lessons/LessonNavigation';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CourseView() {
  const { courseId = 'c-prog', lessonId } = useParams<{ courseId: string; lessonId?: string }>();
  const { tree, loading, error } = useLessons(courseId);
  const { completed, isCompleted, progress } = useLessonProgress(courseId, tree);

  const allContent = flattenTree(tree).filter((n) => n.hasContent);
  const { prev, next } = lessonId
    ? getAdjacentLessons(lessonId, tree)
    : { prev: null, next: allContent[0] ?? null };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">ទំព័រដើម</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/lessons" className="hover:text-foreground transition-colors">មេរៀន</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">C Programming</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
            {/* Sidebar */}
            <aside className="space-y-4">
              <LessonProgress
                progress={progress}
                completedCount={completed.length}
                totalCount={allContent.length}
              />
              <div className="glass rounded-2xl p-4">
                <LessonTree
                  tree={tree}
                  loading={loading}
                  error={error}
                  activeId={lessonId}
                  completedIds={completed}
                />
              </div>
            </aside>

            {/* Main content */}
            <main>
              {lessonId ? (
                <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
                  <p className="text-muted-foreground text-sm">
                    ជ្រើសរើសមេរៀននៅខាងឆ្វេង ឬប្រើប៊ូតុងខាងក្រោម
                  </p>
                  <LessonNavigation prev={prev} next={next} />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-10 text-center space-y-4"
                >
                  <BookOpen className="h-12 w-12 text-primary mx-auto opacity-60" />
                  <h2 className="text-xl font-bold">ស្វាគមន៍មកកាន់វគ្គ C Programming</h2>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    ជ្រើសរើសមេរៀននៅខាងឆ្វេង ដើម្បីចាប់ផ្ដើមរៀន
                  </p>
                  {next && (
                    <LessonNavigation prev={null} next={next} />
                  )}
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

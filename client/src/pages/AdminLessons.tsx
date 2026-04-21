import { Settings } from 'lucide-react';
import LessonManager from '@/components/admin/LessonManager';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

export default function AdminLessons() {
  // In production, get courseId from route params or a selector
  const courseId = 'c-prog';

  return (
    <PageTransition>
      <div className="min-h-screen py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-black">Admin — គ្រប់គ្រងមេរៀន</h1>
              <p className="text-sm text-muted-foreground">Course: {courseId}</p>
            </div>
          </motion.div>

          <LessonManager courseId={courseId} />
        </div>
      </div>
    </PageTransition>
  );
}

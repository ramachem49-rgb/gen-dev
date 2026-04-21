import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LessonTreeNode } from '@/lib/lessonUtils';

interface LessonNavigationProps {
  prev: LessonTreeNode | null;
  next: LessonTreeNode | null;
}

export default function LessonNavigation({ prev, next }: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 pt-6 border-t border-border/30">
      {prev ? (
        <Button asChild variant="outline" className="gap-2 rounded-xl glass border-border/40 max-w-[45%]">
          <Link to={`/lessons/${prev.slug}`}>
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span className="truncate text-sm">{prev.title}</span>
          </Link>
        </Button>
      ) : <div />}

      {next ? (
        <Button asChild className="gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-deep shadow-lg shadow-primary/20 max-w-[45%]">
          <Link to={`/lessons/${next.slug}`}>
            <span className="truncate text-sm">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Button>
      ) : <div />}
    </div>
  );
}

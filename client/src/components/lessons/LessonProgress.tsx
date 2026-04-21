import { Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface LessonProgressProps {
  progress: number;
  completedCount: number;
  totalCount: number;
}

export default function LessonProgress({ progress, completedCount, totalCount }: LessonProgressProps) {
  const color = progress === 100 ? 'text-emerald-500' : progress > 50 ? 'text-primary' : 'text-muted-foreground';

  return (
    <div className="glass rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className={cn('h-4 w-4', color)} />
          <span className="text-sm font-semibold">វឌ្ឍនភាព</span>
        </div>
        <span className={cn('text-sm font-bold', color)}>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-xs text-muted-foreground">
        {completedCount}/{totalCount} មេរៀន
      </p>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Circle, Lock, Pencil, Trash2, FolderOpen, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LessonTreeNode } from '@/lib/lessonUtils';
import { motion, AnimatePresence } from 'framer-motion';

interface LessonNodeProps {
  node: LessonTreeNode;
  isCompleted: boolean;
  activeId?: string;
  adminMode?: boolean;
  defaultOpen?: boolean;
  onEdit?: (node: LessonTreeNode) => void;
  onDelete?: (node: LessonTreeNode) => void;
}

export default function LessonNode({
  node, isCompleted, activeId, adminMode, defaultOpen = false, onEdit, onDelete,
}: LessonNodeProps) {
  const [open, setOpen] = useState(defaultOpen || node.level === 0);
  const hasChildren = node.children.length > 0;
  const isActive = activeId === node._id;
  const indent = node.level * 20;

  const statusIcon = isCompleted
    ? <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
    : !node.isFree
    ? <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
    : <Circle className="h-4 w-4 text-muted-foreground/40 shrink-0" />;

  const nodeIcon = !node.hasContent
    ? <FolderOpen className="h-4 w-4 text-amber-500 shrink-0" />
    : <FileText className="h-4 w-4 text-primary shrink-0" />;

  const titleEl = (
    <span className={cn(
      'text-sm font-medium leading-snug transition-colors',
      isActive && 'text-primary',
      isCompleted && 'text-muted-foreground line-through',
    )}>
      <span className="text-muted-foreground/60 mr-1.5 font-mono text-xs">{node.numbering}</span>
      {node.title}
    </span>
  );

  return (
    <div>
      <div
        className={cn(
          'group flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-all duration-150',
          'hover:bg-primary/5',
          isActive && 'bg-primary/10 border-l-2 border-primary',
        )}
        style={{ paddingLeft: `${indent + 12}px` }}
        onClick={() => !node.hasContent && hasChildren && setOpen((o) => !o)}
      >
        {/* Expand arrow */}
        {hasChildren ? (
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.15 }}>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          </motion.div>
        ) : (
          <span className="w-3.5 shrink-0" />
        )}

        {nodeIcon}

        {/* Title — link if has content */}
        <div className="flex-1 min-w-0">
          {node.hasContent ? (
            <Link to={`/lessons/${node.slug}`} className="hover:text-primary transition-colors">
              {titleEl}
            </Link>
          ) : (
            titleEl
          )}
        </div>

        {/* Badges */}
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {!node.isFree && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-amber-500/30 text-amber-600">
              Pro
            </Badge>
          )}
          {adminMode && (
            <>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={(e) => { e.stopPropagation(); onEdit?.(node); }}>
                <Pencil className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={(e) => { e.stopPropagation(); onDelete?.(node); }}>
                <Trash2 className="h-3 w-3" />
              </Button>
            </>
          )}
          {statusIcon}
        </div>
      </div>

      {/* Children */}
      <AnimatePresence initial={false}>
        {open && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {node.children.map((child) => (
              <LessonNode
                key={child._id}
                node={child}
                isCompleted={false}
                activeId={activeId}
                adminMode={adminMode}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

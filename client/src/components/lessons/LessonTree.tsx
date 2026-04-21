import { useState, useEffect } from 'react';
import { Search, BookOpen, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LessonNode from './LessonNode';
import type { LessonTreeNode } from '@/lib/lessonUtils';
import { flattenTree } from '@/lib/lessonUtils';
import { motion } from 'framer-motion';

interface LessonTreeProps {
  tree: LessonTreeNode[];
  loading?: boolean;
  error?: string | null;
  activeId?: string;
  adminMode?: boolean;
  completedIds?: string[];
  onEdit?: (node: LessonTreeNode) => void;
  onDelete?: (node: LessonTreeNode) => void;
}

export default function LessonTree({
  tree, loading, error, activeId, adminMode, completedIds = [], onEdit, onDelete,
}: LessonTreeProps) {
  const [search, setSearch] = useState('');

  // Reset search when tree data changes (new courseId)
  const treeKey = tree.map((n) => n._id).join(',');
  useEffect(() => { setSearch(''); }, [treeKey]);

  // Filter tree by search — show matching nodes + their ancestors
  const filterTree = (nodes: LessonTreeNode[], query: string): LessonTreeNode[] => {
    if (!query) return nodes;
    return nodes.reduce<LessonTreeNode[]>((acc, node) => {
      const filteredChildren = filterTree(node.children, query);
      const matches = node.title.toLowerCase().includes(query.toLowerCase());
      if (matches || filteredChildren.length > 0) {
        acc.push({ ...node, children: filteredChildren });
      }
      return acc;
    }, []);
  };

  const displayTree = filterTree(tree, search);
  const totalLessons = flattenTree(tree).filter((n) => n.hasContent).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-muted-foreground gap-2">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span className="text-sm">កំពុងផ្ទុក...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-destructive text-sm">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2 px-1 mb-4">
        <BookOpen className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold">{flattenTree(tree).length} មេរៀន</span>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ស្វែងរកមេរៀន..."
          autoComplete="off"
          className="pl-9 h-9 text-sm rounded-xl bg-muted/50 border-border/40"
        />
      </div>

      {/* Tree */}
      <div className="space-y-0.5">
        {displayTree.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">
            {search ? 'រកមិនឃើញ' : 'មិនមានមេរៀន'}
          </p>
        ) : (
          displayTree.map((node, i) => (
            <motion.div
              key={node._id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <LessonNode
                node={node}
                isCompleted={completedIds.includes(node._id)}
                activeId={activeId}
                adminMode={adminMode}
                defaultOpen={i === 0}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

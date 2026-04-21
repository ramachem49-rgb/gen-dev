import { useState, useEffect } from 'react';
import { Plus, RefreshCw, HelpCircle, ChevronRight, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LessonTree from '@/components/lessons/LessonTree';
import LessonForm from './LessonForm';
import DeleteLessonDialog from './DeleteLessonDialog';
import QuizEditor from './QuizEditor';
import { useLessons } from '@/hooks/useLessons';
import type { LessonTreeNode, HLesson } from '@/lib/lessonUtils';
import { flattenTree } from '@/lib/lessonUtils';
import { loadQuiz } from '@/lib/quizUtils';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LessonManagerProps {
  courseId: string;
}

export default function LessonManager({ courseId }: LessonManagerProps) {
  const { tree, loading, error, refetch, createLesson, updateLesson, deleteLesson } = useLessons(courseId);

  const [formOpen, setFormOpen]     = useState(false);
  const [editNode, setEditNode]     = useState<LessonTreeNode | null>(null);
  const [deleteNode, setDeleteNode] = useState<LessonTreeNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<LessonTreeNode | null>(null);
  const [rightTab, setRightTab]     = useState<'info' | 'quiz'>('info');

  // Auto-select first node when tree loads
  useEffect(() => {
    if (!selectedNode && tree.length > 0) {
      const first = flattenTree(tree)[0];
      setSelectedNode(first ?? null);
    }
  }, [tree]);

  const handleEdit = (node: LessonTreeNode) => {
    setEditNode(node);
    setFormOpen(true);
  };

  const handleDelete   = (node: LessonTreeNode) => setDeleteNode(node);
  const handleSelect   = (node: LessonTreeNode) => { setSelectedNode(node); };

  const handleFormSubmit = async (data: Partial<HLesson>) => {
    if (editNode) await updateLesson(editNode._id, data);
    else          await createLesson(data);
    setEditNode(null);
  };

  const handleDeleteConfirm = async (options: { cascade: boolean; newParentId?: string }) => {
    if (!deleteNode) return;
    await deleteLesson(deleteNode._id, options);
    if (selectedNode?._id === deleteNode._id) setSelectedNode(null);
    setDeleteNode(null);
  };

  // Build section list for selected node (parse content into sections)
  const getSections = (node: LessonTreeNode | null) => {
    if (!node?.content) return [];
    const lines = node.content.split('\n');
    const secs: { id: string; number: string; title: string }[] = [];
    for (const line of lines) {
      const top = line.match(/^(\d+)\.\s+(.+)/);
      const sub = !top && line.match(/^(\d+\.\d+)\s+(.+)/);
      if (top) secs.push({ id: `s-${top[1]}`, number: top[1], title: top[2].trim() });
      else if (sub) secs.push({ id: `s-${sub[1].replace('.', '-')}`, number: sub[1], title: sub[2].trim() });
    }
    // If no sections parsed, use the node itself as one section
    if (secs.length === 0 && node.hasContent) {
      secs.push({ id: node._id, number: '1', title: node.title });
    }
    return secs;
  };

  const quizCount = (node: LessonTreeNode | null) => {
    if (!node?.slug) return 0;
    return loadQuiz(node.slug).length;
  };

  const allNodes = flattenTree(tree);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl overflow-hidden"
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/40 bg-muted/20">
        <h2 className="font-bold text-sm">គ្រប់គ្រងមេរៀន</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={refetch} className="rounded-xl h-8 w-8 p-0">
            <RefreshCw className="h-3.5 w-3.5" />
          </Button>
          <Button size="sm" onClick={() => { setEditNode(null); setFormOpen(true); }}
            className="rounded-xl gap-1.5 h-8 text-xs">
            <Plus className="h-3.5 w-3.5" /> បន្ថែមមេរៀន
          </Button>
        </div>
      </div>

      {/* ── Split layout ── */}
      <div className="flex min-h-[520px]">

        {/* LEFT — Lesson Tree */}
        <div className="w-64 xl:w-72 shrink-0 border-r border-border/40 overflow-y-auto">
          <div className="p-3">
            {/* Node list — clickable */}
            {loading ? (
              <div className="flex items-center justify-center py-16 text-muted-foreground text-sm gap-2">
                <RefreshCw className="h-4 w-4 animate-spin" /> កំពុងផ្ទុក...
              </div>
            ) : error ? (
              <p className="text-center text-destructive text-xs py-8">⚠️ {error}</p>
            ) : (
              <NodeList
                nodes={tree}
                selectedId={selectedNode?._id}
                onSelect={handleSelect}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>

        {/* RIGHT — Detail panel */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedNode ? (
              <motion.div key={selectedNode._id}
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.15 }}
                className="p-5 space-y-4"
              >
                {/* Node header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className="font-mono">{selectedNode.slug}</span>
                      <Badge variant="outline" className="text-[10px] px-1.5">
                        level {selectedNode.level}
                      </Badge>
                      {selectedNode.isFree
                        ? <Badge className="text-[10px] px-1.5 bg-emerald-500/20 text-emerald-600 border-emerald-500/30">Free</Badge>
                        : <Badge className="text-[10px] px-1.5 bg-amber-500/20 text-amber-600 border-amber-500/30">Pro</Badge>}
                    </div>
                    <h3 className="font-bold text-base">{selectedNode.title}</h3>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-xl gap-1.5 h-8 text-xs shrink-0"
                    onClick={() => handleEdit(selectedNode)}>
                    <Settings2 className="h-3.5 w-3.5" /> កែប្រែ
                  </Button>
                </div>

                {/* Tabs: Info | Quiz */}
                <Tabs value={rightTab} onValueChange={(v) => setRightTab(v as any)}>
                  <TabsList className="w-full">
                    <TabsTrigger value="info" className="flex-1 text-xs gap-1.5">
                      <Settings2 className="h-3.5 w-3.5" /> ព័ត៌មាន
                    </TabsTrigger>
                    <TabsTrigger value="quiz" className="flex-1 text-xs gap-1.5">
                      <HelpCircle className="h-3.5 w-3.5" /> Quiz
                      {quizCount(selectedNode) > 0 && (
                        <Badge className="h-4 px-1 text-[9px] bg-primary/20 text-primary">
                          {quizCount(selectedNode)}
                        </Badge>
                      )}
                    </TabsTrigger>
                  </TabsList>

                  {/* Info tab */}
                  <TabsContent value="info" className="space-y-3 pt-2">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { label: 'hasContent', value: selectedNode.hasContent ? '✅ Yes' : '❌ No' },
                        { label: 'isPublished', value: selectedNode.isPublished ? '✅ Yes' : '❌ No' },
                        { label: 'contentType', value: selectedNode.contentType ?? 'html' },
                        { label: 'order', value: String(selectedNode.order) },
                      ].map(({ label, value }) => (
                        <div key={label} className="glass rounded-xl px-3 py-2">
                          <p className="text-muted-foreground text-[10px]">{label}</p>
                          <p className="font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Children list */}
                    {selectedNode.children.length > 0 && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground">
                          មេរៀនរង ({selectedNode.children.length})
                        </p>
                        {selectedNode.children.map((child) => (
                          <button key={child._id} onClick={() => setSelectedNode(child)}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-muted/50 transition-colors text-left">
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                            <span className="text-xs flex-1 truncate">{child.title}</span>
                            {loadQuiz(child.slug).length > 0 && (
                              <Badge className="h-4 px-1 text-[9px] bg-primary/20 text-primary shrink-0">
                                {loadQuiz(child.slug).length} quiz
                              </Badge>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Content preview */}
                    {selectedNode.content && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground">Content preview</p>
                        <div className="glass rounded-xl p-3 text-xs font-mono text-muted-foreground max-h-32 overflow-y-auto whitespace-pre-wrap">
                          {selectedNode.content.slice(0, 300)}{selectedNode.content.length > 300 ? '...' : ''}
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  {/* Quiz tab */}
                  <TabsContent value="quiz" className="pt-2">
                    {selectedNode.slug ? (
                      <QuizEditor
                        lessonSlug={selectedNode.slug}
                        sections={getSections(selectedNode).length > 0
                          ? getSections(selectedNode)
                          : [{ id: selectedNode._id, number: '1', title: selectedNode.title }]
                        }
                      />
                    ) : (
                      <p className="text-xs text-muted-foreground text-center py-8">
                        មេរៀននេះគ្មាន slug — សូមកែប្រែជាមុន
                      </p>
                    )}
                  </TabsContent>
                </Tabs>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-20 text-muted-foreground gap-3">
                <HelpCircle className="h-10 w-10 opacity-20" />
                <p className="text-sm">ចុចលើមេរៀនដើម្បីមើលព័ត៌មាន</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Dialogs */}
      <LessonForm
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditNode(null); }}
        onSubmit={handleFormSubmit}
        initial={editNode}
        tree={tree}
      />
      <DeleteLessonDialog
        open={!!deleteNode}
        node={deleteNode}
        tree={tree}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteNode(null)}
      />
    </motion.div>
  );
}

// ── Recursive node list with click-to-select ──────────────────────────────────
function NodeList({
  nodes, selectedId, depth = 0, onSelect, onEdit, onDelete,
}: {
  nodes: LessonTreeNode[];
  selectedId?: string;
  depth?: number;
  onSelect: (n: LessonTreeNode) => void;
  onEdit: (n: LessonTreeNode) => void;
  onDelete: (n: LessonTreeNode) => void;
}) {
  return (
    <div className="space-y-0.5">
      {nodes.map((node) => (
        <NodeItem key={node._id} node={node} selectedId={selectedId} depth={depth}
          onSelect={onSelect} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

function NodeItem({
  node, selectedId, depth, onSelect, onEdit, onDelete,
}: {
  node: LessonTreeNode; selectedId?: string; depth: number;
  onSelect: (n: LessonTreeNode) => void;
  onEdit: (n: LessonTreeNode) => void;
  onDelete: (n: LessonTreeNode) => void;
}) {
  const [open, setOpen] = useState(depth === 0);
  const isSelected = selectedId === node._id;
  const qCount = loadQuiz(node.slug).length;

  return (
    <div>
      <div
        onClick={() => { onSelect(node); if (node.children.length) setOpen((o) => !o); }}
        className={cn(
          'group flex items-center gap-1.5 px-2 py-2 rounded-lg cursor-pointer transition-all text-xs',
          isSelected ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted/50',
        )}
        style={{ paddingLeft: `${depth * 14 + 8}px` }}
      >
        {node.children.length > 0 ? (
          <ChevronRight className={cn('h-3 w-3 shrink-0 transition-transform', open && 'rotate-90')} />
        ) : (
          <span className="w-3 shrink-0" />
        )}
        <span className="flex-1 truncate">{node.title}</span>
        {qCount > 0 && (
          <Badge className="h-4 px-1 text-[9px] bg-primary/20 text-primary shrink-0">{qCount}</Badge>
        )}
        {/* Edit/Delete on hover */}
        <span className="hidden group-hover:flex items-center gap-0.5 shrink-0">
          <button type="button" onClick={(e) => { e.stopPropagation(); onEdit(node); }}
            className="h-5 w-5 flex items-center justify-center rounded hover:bg-primary/20 text-muted-foreground hover:text-primary">
            <Settings2 className="h-3 w-3" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); onDelete(node); }}
            className="h-5 w-5 flex items-center justify-center rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive">
            ✕
          </button>
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && node.children.length > 0 && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.15 }} className="overflow-hidden">
            <NodeList nodes={node.children} selectedId={selectedId} depth={depth + 1}
              onSelect={onSelect} onEdit={onEdit} onDelete={onDelete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { LessonTreeNode } from '@/lib/lessonUtils';
import { flattenTree } from '@/lib/lessonUtils';

interface DeleteLessonDialogProps {
  open: boolean;
  node: LessonTreeNode | null;
  tree: LessonTreeNode[];
  onConfirm: (options: { cascade: boolean; newParentId?: string }) => void;
  onCancel: () => void;
}

export default function DeleteLessonDialog({ open, node, tree, onConfirm, onCancel }: DeleteLessonDialogProps) {
  const [mode, setMode] = useState<'cascade' | 'move'>('cascade');
  const [newParentId, setNewParentId] = useState<string>('none');

  const hasChildren = (node?.children.length ?? 0) > 0;
  const allNodes = flattenTree(tree).filter((n) => n._id !== node?._id);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="glass">
        <AlertDialogHeader>
          <AlertDialogTitle>លុបមេរៀន</AlertDialogTitle>
          <AlertDialogDescription>
            តើអ្នកចង់លុប <strong>"{node?.title}"</strong> មែនទេ?
            {hasChildren && ' មេរៀននេះមានមេរៀនរង។'}
          </AlertDialogDescription>
        </AlertDialogHeader>

        {hasChildren && (
          <div className="space-y-3 py-2">
            <div className="space-y-1.5">
              <Label>ជម្រើសសម្រាប់មេរៀនរង</Label>
              <Select value={mode} onValueChange={(v) => setMode(v as 'cascade' | 'move')}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cascade">លុបទាំងអស់ (Cascade)</SelectItem>
                  <SelectItem value="move">ប្តូរទៅ parent ថ្មី</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {mode === 'move' && (
              <div className="space-y-1.5">
                <Label>Parent ថ្មី</Label>
                <Select value={newParentId} onValueChange={setNewParentId}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Top level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Top level</SelectItem>
                    {allNodes.map((n) => (
                      <SelectItem key={n._id} value={n._id}>
                        {'—'.repeat(n.level)} {n.numbering} {n.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}

        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel} className="rounded-xl">បោះបង់</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onConfirm({
              cascade: mode === 'cascade',
              newParentId: mode === 'move' && newParentId !== 'none' ? newParentId : undefined,
            })}
            className="rounded-xl bg-destructive hover:bg-destructive/90"
          >
            លុប
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

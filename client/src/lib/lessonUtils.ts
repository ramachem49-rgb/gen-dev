export interface HLesson {
  _id: string;
  courseId: string;
  title: string;
  slug: string;
  parentId: string | null;
  order: number;
  level: number;
  hasContent: boolean;
  content?: string;
  contentType?: 'markdown' | 'html' | 'video';
  videoUrl?: string;
  duration?: number;
  isPublished: boolean;
  isFree: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface LessonTreeNode extends HLesson {
  children: LessonTreeNode[];
  numbering?: string;
}

/** Build nested tree from flat array */
export function buildLessonTree(lessons: HLesson[], parentId: string | null = null): LessonTreeNode[] {
  return lessons
    .filter((l) => {
      const lParent = l.parentId === undefined ? null : (l.parentId || null);
      const target = parentId === undefined ? null : parentId;
      return lParent === target;
    })
    .sort((a, b) => a.order - b.order)
    .map((l) => ({ ...l, children: buildLessonTree(lessons, l._id) }));
}

/** Attach auto-numbering to every node in the tree */
export function attachNumbering(nodes: LessonTreeNode[], prefix = ''): LessonTreeNode[] {
  return nodes.map((node, i) => {
    const num = prefix ? `${prefix}.${i + 1}` : `${i + 1}`;
    return {
      ...node,
      numbering: num,
      children: attachNumbering(node.children, num),
    };
  });
}

/** Flatten tree back to array (DFS order) */
export function flattenTree(nodes: LessonTreeNode[]): LessonTreeNode[] {
  return nodes.flatMap((n) => [n, ...flattenTree(n.children)]);
}

/** Get prev/next lesson in DFS order */
export function getAdjacentLessons(
  currentId: string,
  nodes: LessonTreeNode[]
): { prev: LessonTreeNode | null; next: LessonTreeNode | null } {
  const flat = flattenTree(nodes).filter((n) => n.hasContent);
  const idx = flat.findIndex((n) => n._id === currentId);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

/** Calculate progress percentage */
export function calculateProgress(completedIds: string[], allNodes: LessonTreeNode[]): number {
  const contentNodes = flattenTree(allNodes).filter((n) => n.hasContent);
  if (contentNodes.length === 0) return 0;
  const done = contentNodes.filter((n) => completedIds.includes(n._id)).length;
  return Math.round((done / contentNodes.length) * 100);
}

/** Mock data for development */
export const MOCK_LESSONS: HLesson[] = [
  { _id: '1', courseId: 'c-prog', title: 'Introduction to C Programming', slug: 'intro', parentId: null, order: 0, level: 0, hasContent: false, isPublished: true, isFree: true },
  { _id: '1-1', courseId: 'c-prog', title: 'Overview of C Programming', slug: 'overview', parentId: '1', order: 0, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '1-2', courseId: 'c-prog', title: 'History of C', slug: 'history', parentId: '1', order: 1, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '1-3', courseId: 'c-prog', title: 'Features of C', slug: 'features', parentId: '1', order: 2, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '1-4', courseId: 'c-prog', title: 'Setting Up the C Environment', slug: 'setup', parentId: '1', order: 3, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '1-5', courseId: 'c-prog', title: 'Structure of a C Program', slug: 'structure', parentId: '1', order: 4, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '2', courseId: 'c-prog', title: 'Variables and Data Types', slug: 'variables', parentId: null, order: 1, level: 0, hasContent: false, isPublished: true, isFree: true },
  { _id: '2-1', courseId: 'c-prog', title: 'Declaring Variables', slug: 'declaring', parentId: '2', order: 0, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '2-2', courseId: 'c-prog', title: 'Basic Data Types', slug: 'data-types', parentId: '2', order: 1, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '2-3', courseId: 'c-prog', title: 'Constants', slug: 'constants', parentId: '2', order: 2, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '2-4', courseId: 'c-prog', title: 'Type Casting and Conversion', slug: 'type-casting', parentId: '2', order: 3, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '2-5', courseId: 'c-prog', title: 'Storage Classes', slug: 'storage', parentId: '2', order: 4, level: 1, hasContent: true, isPublished: true, isFree: false },
  { _id: '3', courseId: 'c-prog', title: 'Operators in C', slug: 'operators', parentId: null, order: 2, level: 0, hasContent: false, isPublished: true, isFree: true },
  { _id: '3-1', courseId: 'c-prog', title: 'Arithmetic Operators', slug: 'arithmetic', parentId: '3', order: 0, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '3-2', courseId: 'c-prog', title: 'Relational Operators', slug: 'relational', parentId: '3', order: 1, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '3-3', courseId: 'c-prog', title: 'Logical Operators', slug: 'logical', parentId: '3', order: 2, level: 1, hasContent: true, isPublished: true, isFree: true },
];

const Lesson = require('../models/HierarchicalLesson');

// Build tree from flat array
function buildTree(lessons, parentId = null) {
  return lessons
    .filter((l) => String(l.parentId ?? null) === String(parentId))
    .sort((a, b) => a.order - b.order)
    .map((l) => ({ ...l.toObject(), children: buildTree(lessons, l._id) }));
}

// Calculate level recursively
async function calculateLevel(parentId) {
  if (!parentId) return 0;
  const parent = await Lesson.findById(parentId).select('level');
  return parent ? parent.level + 1 : 0;
}

// GET /api/hierarchical-lessons?courseId=xxx
exports.getLessons = async (req, res) => {
  try {
    const { courseId } = req.query;
    if (!courseId) return res.status(400).json({ success: false, error: 'courseId required' });

    const lessons = await Lesson.find({ courseId }).sort({ order: 1 });
    res.json({ success: true, data: lessons });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET /api/hierarchical-lessons/tree?courseId=xxx
exports.getTree = async (req, res) => {
  try {
    const { courseId } = req.query;
    if (!courseId) return res.status(400).json({ success: false, error: 'courseId required' });

    const lessons = await Lesson.find({ courseId }).sort({ order: 1 });
    const tree = buildTree(lessons);
    res.json({ success: true, data: tree });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET /api/hierarchical-lessons/:id
exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ success: false, error: 'Lesson not found' });
    res.json({ success: true, data: lesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// POST /api/hierarchical-lessons
exports.createLesson = async (req, res) => {
  try {
    const { courseId, title, parentId, order, hasContent, content, contentType, videoUrl, duration, isPublished, isFree } = req.body;

    const level = await calculateLevel(parentId || null);

    const lesson = await Lesson.create({
      courseId, title, parentId: parentId || null,
      order: order ?? 0, level, hasContent: hasContent ?? false,
      content: content ?? '', contentType: contentType ?? 'html',
      videoUrl, duration, isPublished: isPublished ?? false,
      isFree: isFree ?? true,
      createdBy: req.user?.id,
    });

    res.status(201).json({ success: true, data: lesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// PUT /api/hierarchical-lessons/:id
exports.updateLesson = async (req, res) => {
  try {
    const updates = { ...req.body, updatedBy: req.user?.id };

    // Recalculate level if parentId changed
    if ('parentId' in updates) {
      updates.level = await calculateLevel(updates.parentId || null);
    }

    const lesson = await Lesson.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!lesson) return res.status(404).json({ success: false, error: 'Lesson not found' });

    res.json({ success: true, data: lesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// DELETE /api/hierarchical-lessons/:id
exports.deleteLesson = async (req, res) => {
  try {
    const { cascade, newParentId } = req.query;
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ success: false, error: 'Lesson not found' });

    const children = await Lesson.find({ parentId: req.params.id });

    if (children.length > 0) {
      if (cascade === 'true') {
        // Cascade delete all descendants
        const deleteDescendants = async (id) => {
          const kids = await Lesson.find({ parentId: id });
          for (const kid of kids) await deleteDescendants(kid._id);
          await Lesson.deleteMany({ parentId: id });
        };
        await deleteDescendants(req.params.id);
      } else {
        // Move children to new parent
        const targetParent = newParentId || lesson.parentId;
        const newLevel = await calculateLevel(targetParent);
        await Lesson.updateMany(
          { parentId: req.params.id },
          { parentId: targetParent || null, level: newLevel }
        );
      }
    }

    await lesson.deleteOne();
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// POST /api/hierarchical-lessons/reorder
exports.reorder = async (req, res) => {
  try {
    const { items } = req.body; // [{ id, order, parentId }]
    if (!Array.isArray(items)) return res.status(400).json({ success: false, error: 'items array required' });

    const ops = items.map(({ id, order, parentId }) =>
      Lesson.findByIdAndUpdate(id, { order, parentId: parentId || null })
    );
    await Promise.all(ops);

    res.json({ success: true, message: 'Reordered successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

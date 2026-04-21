const mongoose = require('mongoose');
const { Schema } = mongoose;

const hierarchicalLessonSchema = new Schema(
  {
    courseId: { type: String, required: true, index: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'HierarchicalLesson', default: null },
    order: { type: Number, default: 0 },
    level: { type: Number, default: 0 }, // auto-calculated
    hasContent: { type: Boolean, default: false },
    content: { type: String, default: '' },
    contentType: { type: String, enum: ['markdown', 'html', 'video'], default: 'html' },
    videoUrl: { type: String },
    duration: { type: Number }, // minutes
    isPublished: { type: Boolean, default: false },
    isFree: { type: Boolean, default: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// Auto-generate slug from title
hierarchicalLessonSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  next();
});

// Compound index for ordering within a parent
hierarchicalLessonSchema.index({ courseId: 1, parentId: 1, order: 1 });

module.exports = mongoose.model('HierarchicalLesson', hierarchicalLessonSchema);

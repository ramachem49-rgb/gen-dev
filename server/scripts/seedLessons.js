require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Lesson = require('../models/HierarchicalLesson');

const MOCK_LESSONS = [
  { _id: '000000000000000000000001', courseId: 'c-prog', title: 'Introduction to C Programming', slug: 'intro', parentId: null, order: 0, level: 0, hasContent: false, isPublished: true, isFree: true },
  { _id: '000000000000000000000011', courseId: 'c-prog', title: 'Overview of C Programming', slug: 'overview', parentId: '000000000000000000000001', order: 0, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000012', courseId: 'c-prog', title: 'History of C', slug: 'history', parentId: '000000000000000000000001', order: 1, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000013', courseId: 'c-prog', title: 'Features of C', slug: 'features', parentId: '000000000000000000000001', order: 2, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000014', courseId: 'c-prog', title: 'Setting Up the C Environment', slug: 'setup', parentId: '000000000000000000000001', order: 3, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000015', courseId: 'c-prog', title: 'Structure of a C Program', slug: 'structure', parentId: '000000000000000000000001', order: 4, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000002', courseId: 'c-prog', title: 'Variables and Data Types', slug: 'variables', parentId: null, order: 1, level: 0, hasContent: false, isPublished: true, isFree: true },
  { _id: '000000000000000000000021', courseId: 'c-prog', title: 'Declaring Variables', slug: 'declaring', parentId: '000000000000000000000002', order: 0, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000022', courseId: 'c-prog', title: 'Basic Data Types', slug: 'data-types', parentId: '000000000000000000000002', order: 1, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000023', courseId: 'c-prog', title: 'Constants', slug: 'constants', parentId: '000000000000000000000002', order: 2, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000024', courseId: 'c-prog', title: 'Type Casting and Conversion', slug: 'type-casting', parentId: '000000000000000000000002', order: 3, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000025', courseId: 'c-prog', title: 'Storage Classes', slug: 'storage', parentId: '000000000000000000000002', order: 4, level: 1, hasContent: true, isPublished: true, isFree: false },
  { _id: '000000000000000000000003', courseId: 'c-prog', title: 'Operators in C', slug: 'operators', parentId: null, order: 2, level: 0, hasContent: false, isPublished: true, isFree: true },
  { _id: '000000000000000000000031', courseId: 'c-prog', title: 'Arithmetic Operators', slug: 'arithmetic', parentId: '000000000000000000000003', order: 0, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000032', courseId: 'c-prog', title: 'Relational Operators', slug: 'relational', parentId: '000000000000000000000003', order: 1, level: 1, hasContent: true, isPublished: true, isFree: true },
  { _id: '000000000000000000000033', courseId: 'c-prog', title: 'Logical Operators', slug: 'logical', parentId: '000000000000000000000003', order: 2, level: 1, hasContent: true, isPublished: true, isFree: true },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/learning_platform');
    console.log('✅ Connected to MongoDB');

    // Clear existing
    const deleted = await Lesson.deleteMany({ courseId: 'c-prog' });
    console.log(`🗑  Cleared ${deleted.deletedCount} existing lessons`);

    // Insert with fixed _ids
    const inserted = await Lesson.insertMany(MOCK_LESSONS);
    console.log(`✅ Seeded ${inserted.length} lessons`);

    await mongoose.disconnect();
    console.log('Done!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
}

seed();

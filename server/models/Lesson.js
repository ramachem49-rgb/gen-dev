const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a lesson title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  language: {
    type: String,
    required: [true, 'Please add a programming language'],
    enum: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust', 'TypeScript', 'Other']
  },
  level: {
    type: String,
    required: [true, 'Please add a difficulty level'],
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  videoUrl: {
    type: String,
    required: [true, 'Please add a video URL'],
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please add a valid URL'
    ]
  },
  image: {
    type: String,
    default: 'default-lesson.jpg'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);
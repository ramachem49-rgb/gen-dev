const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/hierarchicalLessonController');

// Public
router.get('/', ctrl.getLessons);
router.get('/tree', ctrl.getTree);
router.get('/:id', ctrl.getLessonById);

// Admin (add auth middleware here when ready: router.use(authMiddleware))
router.post('/', ctrl.createLesson);
router.put('/:id', ctrl.updateLesson);
router.delete('/:id', ctrl.deleteLesson);
router.post('/reorder', ctrl.reorder);

module.exports = router;

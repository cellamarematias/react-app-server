import express from 'express';
import tasksControllers from '../controllers/tasks.js';
// import tasksvalidation from '../validations/tasks.js';
import authorized from '../middleware/auth.js';

const router = express.Router();

// set the endpoints
router
    .get('/', authorized, tasksControllers.getTasks)
    .post('/', authorized, tasksControllers.createTask)
    .put('/:id', tasksControllers.editTask)
    .delete('/:id', tasksControllers.deleteTask)

export default router;
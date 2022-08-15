import express from 'express';
import tasksControllers from '../controllers/tasks.js';
// import tasksvalidation from '../validations/tasks.js';

const router = express.Router();

// set the endpoints
router
    .get('/', tasksControllers.getTasks)
    .post('/', tasksControllers.createTask)
    .put('/:id', tasksControllers.editTask)
    .delete('/:id', tasksControllers.deleteTask)

export default router;
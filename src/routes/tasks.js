import express from 'express';
import tasksControllers from '../controllers/tasks.js';
import tasksvalidation from '../validations/tasks.js';

const router = express.Router();

// set the endpoints
router
    .get('/', tasksControllers.getTasks)
    .post('/', tasksvalidation.taskValidation, tasksControllers.createTask)
    .put('/:id', tasksvalidation.taskValidation, tasksControllers.editTask)
    .delete('/:id', tasksControllers.deleteTask)

export default router;
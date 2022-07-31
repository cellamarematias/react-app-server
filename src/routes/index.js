import express from 'express';
import usersRoutes from './users.js'
import tasksRoutes from './tasks.js'

const router = express.Router();

// Set the routes
router
    .use('/users', usersRoutes)
    .use('/tasks', tasksRoutes)

export default router;
import express from 'express';
import usersRoutes from './users.js'
import tasksRoutes from './tasks.js'
import expensesRoutes from './expenses.js'
import couplesRoutes from './couples.js'

const router = express.Router();

// Set the routes
router
    .use('/users', usersRoutes)
    .use('/tasks', tasksRoutes)
    .use('/expenses', expensesRoutes)
    .use('/couples', couplesRoutes)


export default router;
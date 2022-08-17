import express from 'express';
import expensesController from '../controllers/expenses.js';
// import expenseValidation from '../validations/expenses.js';
import authorized from '../middleware/auth.js';

const router = express.Router();

// set the endpoints
router
    .get('/byCouple/:couple', authorized, expensesController.getexpenses)
    .get('/:id', authorized, expensesController.findexpense)
    .post('/', authorized, expensesController.createexpense)
    .put('/:id', expensesController.editexpense)
    .delete('/:id', expensesController.deleteexpense)

export default router;
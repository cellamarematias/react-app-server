import express from 'express';
import expensesController from '../controllers/expenses.js';
import expenseValidation from '../validations/expenses.js';

const router = express.Router();

// set the endpoints
router
    .get('/byCouple/:couple', expensesController.getexpenses)
    .get('/:id', expensesController.findexpense)
    .post('/', expenseValidation.expenseValidation, expensesController.createexpense)
    .put('/:id', expenseValidation.expenseValidation, expensesController.editexpense)
    .delete('/:id', expensesController.deleteexpense)

export default router;
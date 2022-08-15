import express from 'express';
import expensesController from '../controllers/expenses.js';
// import expenseValidation from '../validations/expenses.js';

const router = express.Router();

// set the endpoints
router
    .get('/byCouple/:couple', expensesController.getexpenses)
    .get('/:id', expensesController.findexpense)
    .post('/', expensesController.createexpense)
    .put('/:id', expensesController.editexpense)
    .delete('/:id', expensesController.deleteexpense)

export default router;
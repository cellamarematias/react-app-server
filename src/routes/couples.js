import express from 'express';
import coupleController from '../controllers/couple.js';
import coupleValidation from '../validations/couple.js';

const router = express.Router();

// set the endpoints
router
    .get('/', coupleController.getCouples)
    .get('/:id', coupleController.findCouple)
    .post('/', coupleValidation.coupleValidation, coupleController.createCouple)
    .put('/:id', coupleValidation.coupleValidation, coupleController.editCouple)
    .patch('/:id', coupleController.pushExpense)
    .delete('/expense/:id', coupleController.pullExpense)
    .delete('/:id', coupleController.deleteCouple)

export default router;
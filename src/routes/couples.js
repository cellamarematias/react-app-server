import express from 'express';
import coupleController from '../controllers/couple.js';
// import coupleValidation from '../validations/couple.js';
import authorized from '../middleware/auth.js';


const router = express.Router();

// set the endpoints
router
    .get('/:user', authorized, coupleController.getCouples)
    .get('/byId/:id', authorized, coupleController.findCouple)
    .post('/', authorized, coupleController.createCouple)
    .put('/:id', coupleController.editCouple)
    .patch('/:id', coupleController.pushExpense)
    .delete('/expense/:id', coupleController.pullExpense)
    .delete('/:id', coupleController.deleteCouple)

export default router;
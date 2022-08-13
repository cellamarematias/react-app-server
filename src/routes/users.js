import express from 'express';
import usersController from '../controllers/users.js';
import usersValidation from '../validations/users.js';

const router = express.Router();

// set the endpoints
router
    .get('/', usersController.getAllUsers)
    .get('/:id', usersController.getUser)
    .post('/', usersValidation.usersValidation, usersController.createUser)
    .put('/:id', usersValidation.usersValidation, usersController.editUser )
    .patch('/:id', usersController.addCouple)
    .delete('/:id', usersController.deleteUser)
    .delete('/couples/:id', usersController.deleteCouple);

export default router;
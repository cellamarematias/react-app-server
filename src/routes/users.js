import express from 'express';
import usersController from '../controllers/users.js';
import usersValidation from '../validations/users.js';

const router = express.Router();

// set the endpoints
router
    .get('/', usersController.getAllUsers)
    .post('/', usersValidation.usersValidation, usersController.createUser)
    .put('/:id', usersValidation.usersValidation, usersController.editUser )
    .delete('/:id', usersController.deleteUser)

export default router;
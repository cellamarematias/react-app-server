import express from 'express';
import usersController from '../controllers/users.js';

const router = express.Router();

// set the endpoints
router
    .get('/', usersController.getAllUsers)
    .get('/:id', usersController.getUser)
    .get('/email/:email', usersController.findUserByEmail)
    .post('/', usersController.createUser)
    .put('/:id', usersController.editUser )
    .patch('/:id', usersController.addCouple)
    .delete('/:id', usersController.deleteUser)
    .delete('/couples/:id', usersController.deleteCouple);

export default router;
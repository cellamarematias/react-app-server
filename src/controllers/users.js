import UsersModel from '../models/users.js';

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UsersModel.find({});
        return res.status(200).json({
            message: 'All users.',
            data: allUsers,
            error: false,
        }
            );
} catch (error) {
    res.status(500).json({
        message: 'There was an error bringing users.',
        data: error,
        error: true,
    });
}
};

const createUser = async (req, res) => {
    try {
        const newUser = new UsersModel({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        });
        const result = await newUser.save();
        return res.status(201).json({
            message: 'User created',
            data: newUser,
            error: false,
        });
    } catch (error) {
        return res.json({
            message: 'Error during user creation',
            data: error,
            error: true,
        })
    }
}

const editUser = async (req, res) => {
    const id = req.params.id;
    try {
        const userEdited = await UsersModel.findByIdAndUpdate(id, req.body, {new: true})
          .populate('tasks');
        if (userEdited) {
            return res.status(200).json({
                message: 'User edited',
                data: userEdited,
                error: false,
              });
        }
        return res.status(400).json({
            message: (`User Id: ${id} doesn't exist.`),
            data: undefined,
            error: true,
          });
    }
    catch (error) {
    return res.status(500).json({
      message: 'Error during the edition',
      data: error,
      error: true,
    });
  }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedUser = await UsersModel.findByIdAndDelete(id);
      if (deletedUser) {
        return res.status(200).json({
          message: 'User Deleted',
          data: deletedUser,
          error: false,
        });
      }
      return res.status(404).json({
        message: `User with id: ${id} not found`,
        data: undefined,
        error: true,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Error during the deletion',
        data: error,
        error: true,
      });
    }
  };

export default {
    getAllUsers,
    createUser,
    editUser,
    deleteUser
}
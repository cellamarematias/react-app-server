import User from '../models/users.js';

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
            // .populate('couples');
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

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ "_id": req.params.id});
        if (user) {
            return res.status(200).json({
                message: `User with Id: ${req.params.id} found.`,
                data: user,
                error: false,
            });
        }
        return res.status(404).json({
            message: `User with Id: ${req.params.id} doesn't exist.`,
            data: undefined,
            error: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: `An error has ocurred: ${error}`,
            data: undefined,
            error: true,
        });
    }
};

const findUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ "email": req.params.email});
        if (user) {
            return res.status(200).json({
                message: `User with email: ${req.params.email} found.`,
                data: user,
                error: false,
            });
        }
        return res.status(404).json({
            message: `User with email: ${req.params.email} doesn't exist.`,
            data: undefined,
            error: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: `An error has ocurred: ${error}`,
            data: undefined,
            error: true,
        });
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = new User({
            _id: req.body._id,
            fullName: req.body.fullName,
            email: req.body.email,
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
};

const addCouple = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate( id );
        if (user) {
            user.couples.push(req.body.couples);
            const resultSave = await user.save();
            const result = await User.findOne({ "_id": req.params.id})
                .populate('couples');
            return res.status(201).json({
                message: 'Couple added',
                data: result,
                error: false,
            });
        }
        return res.status(404).json({
            message: `User with Id: ${id} doesn't exist.`,
            data: undefined,
            error: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: `An error has ocurred: ${error}`,
            data: undefined,
            error: true,
        });
    }
}

const deleteCouple = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByIdAndUpdate( id );
            if (user) {
                user.couples.pull(req.body.couple);
                const resultSave = await user.save();
                const result = await User.findOne({ "_id": req.params.id});
                return res.status(201).json({
                    message: 'Couple deleted',
                    data: result,
                    error: false,
                });
            }
            return res.status(404).json({
                message: `User with Id: ${id} doesn't exist.`,
                data: undefined,
                error: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: `An error has ocurred: ${error}`,
                data: undefined,
                error: true,
            });
        }
    }

const editUser = async (req, res) => {
    const id = req.params.id;
    try {
        const userEdited = await User.findByIdAndUpdate(id, req.body, {new: true})
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
      const deletedUser = await User.findByIdAndDelete(id);
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
    getUser,
    createUser,
    editUser,
    deleteUser,
    addCouple,
    deleteCouple,
    findUserByEmail
}
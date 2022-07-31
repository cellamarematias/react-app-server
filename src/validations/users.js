import Joi from 'Joi';

const usersValidation = (req, res, next) => {
  const conditions = Joi.object({
    tasks: Joi.array(),
    fullName: Joi.string().min(3).max(200).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    date: Joi.date(),
  });
  const validationUsers = conditions.validate(req.body);
  if (validationUsers.error) {
    return res.status(400).json({
      message: validationUsers.error.message,
      error: true,
      data: undefined,
    });
  }
  return next();
};

export default {
    usersValidation,
};
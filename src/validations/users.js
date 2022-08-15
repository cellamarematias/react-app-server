import Joi from 'Joi';

const usersValidation = (req, res, next) => {
  const conditions = Joi.object({
    _id: Joi.string().required(),
    fullName: Joi.string().min(3).max(200).required(),
    email: Joi.string().min(3).max(200).required(),
    couples: Joi.array(),
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
import joi from '../../../node_modules/joi/lib/index.js';

const usersValidation = (req, res, next) => {
  const conditions = joi.object({
    _id: joi.string().required(),
    fullName: joi.string().min(3).max(200).required(),
    email: joi.string().min(3).max(200).required(),
    couples: joi.array(),
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
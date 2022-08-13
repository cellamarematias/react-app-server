import Joi from 'Joi';

const expenseValidation = (req, res, next) => {
  const conditions = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    user: Joi.string().required(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
    coupleId: Joi.string().required(),
  });
  const validationexpense = conditions.validate(req.body);
  if (validationexpense.error) {
    return res.status(400).json({
      message: validationexpense.error.message,
      error: true,
      data: undefined,
    });
  }
  return next();
};

export default {
    expenseValidation,
};
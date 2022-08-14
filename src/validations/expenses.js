import Joi from 'Joi';

const expenseValidation = (req, res, next) => {
  const conditions = Joi.object({
    coupleId: Joi.string().required(),
    userId: Joi.string().required(),
    amount: Joi.number().required(),
    name: Joi.string().min(3).max(50).required(),
    date: Joi.date().required(),
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
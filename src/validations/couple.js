// import Joi from 'Joi';

// const coupleValidation = (req, res, next) => {
//   const conditions = Joi.object({
//     name: Joi.string().min(3).max(50).required(),
//     userOne: Joi.string().required(),
//     userTwo: Joi.string(),
//     balance: Joi.number(),
//     default: Joi.boolean(),
//   });
//   const validateCouple = conditions.validate(req.body);
//   if (validateCouple.error) {
//     return res.status(400).json({
//       message: validateCouple.error.message,
//       error: true,
//       data: undefined,
//     });
//   }
//   return next();
// };

// export default {
//     coupleValidation,
// };
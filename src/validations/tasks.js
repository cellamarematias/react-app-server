// import Joi from 'Joi';

// const taskValidation = (req, res, next) => {
//   const conditions = Joi.object({
//     user: Joi.string(),
//     title: Joi.string().min(3).max(200).required(),
//     description: Joi.string().min(3).max(200).required(),
//     date: Joi.date(),
//     done: Joi.string(),
//     uid: Joi.string(),
//   });
//   const validationTask = conditions.validate(req.body);
//   if (validationTask.error) {
//     return res.status(400).json({
//       message: validationTask.error.message,
//       error: true,
//       data: undefined,
//     });
//   }
//   return next();
// };

// export default {
//     taskValidation,
// };
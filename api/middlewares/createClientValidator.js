import joi from 'joi';

/**
 * name: String,
  birthday: Date,
  addresses: String,
  references: [
    {
      name: String,
      phone: String,
    },
  ],
  email: String,
  phone: String,
 */

const createClientSchema = joi.object({
  name: joi.string().required(),
  birthday: joi.date().required(),
  addresses: joi.array().items(joi.string()),
  references: joi.array().items(
    joi.object({
      name: joi.string(),
      phone: joi.string(),
    })
  ),
  email: joi.string(),
  phone: joi.string(),
});

export default async (req, res, next) => {
  try {
    await createClientSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};

/**
 * 1.- Un schema de joi
 * 2.- Validar en un try catch
 */
import joi from 'joi';

const createBookSchema = joi.object({
  author: joi.string().required(),
  title: joi.string().required(),
  genre: joi.string(),
  category: joi.string(),
  language: joi.string(),
  editorial: joi.string(),
  printingDate: joi.date(),
  pages: joi.number().integer().positive(),
  isbn: joi.string(),
  coverage: joi.string(),
});

export default async (req, res, next) => {
  try {
    await createBookSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};

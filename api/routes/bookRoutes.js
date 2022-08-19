import express from 'express';
import * as bookController from '../controllers/bookController.js';
import createBookValidator from '../middlewares/createBookValidator.js';

const router = express.Router();

/**
 * TODO: Acá van todas las rutas de libros
 */

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(createBookValidator, bookController.createBook);

router
  .route('/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default router;

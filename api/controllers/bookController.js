import Book from '../models/Book.js';

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      //status code 200
      msg: 'Libro creado',
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear libro',
      error,
    });
  }
};

const getAllBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: 'Libros encontrados',
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libros',
      error,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      msg: 'Libro encontrado',
      data: {
        book,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libro por id',
      error,
    });
  }
};

const updateBookById = (req, res) => {};
const deleteBookById = (req, res) => {};

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };

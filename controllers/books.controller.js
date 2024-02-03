const service = require("../services/books.service");
const {
  createBookValidation,
  updateBookValidation,
} = require("../validators/books.validator");

//route handler==============================

//creat book
const createBook = async (req, res) => {
  try {
    createBookValidation(req.body);
    let book = await service.createBook(req.body);
    res.send(book);
  } catch (err) {
    res.status(400).send({
      error: "Can't create the book",
      message: err.message,
    });
  }
};

// get all boods
const getAllBooks = async (req, res) => {
  try {
    let all = await service.getAllBooks();
    res.send(all);
  } catch (err) {
    res.status(400).send({ error: "Internal Error" });
    console.log(err);
  }
};

// get book by id
const getBookById = async (req, res) => {
  try {
    let book = await service.getBookById(req.params.id);
    res.send(book);
  } catch (err) {
    res.status(404).send({ error: "no such book" });
    console.log(err);
  }
};

// patch
const updateBook = async (req, res) => {
  try {
    updateBookValidation(req.body);
    let book = await service.updateBook(req.params.id, req.body);
    res.send(book);
  } catch (err) {
    res.status(404).send({
      error: "no such book",
      reason: err,
    });
    console.log(err);
  }
};

// delete
const deleteBook = async (req, res) => {
  try {
    let deleted = await service.deleteBook(req.params.id);
    res.send(deleted);
  } catch (err) {
    res.status(404).send({ error: "no such book" });
    console.log(err);
  }
};

module.exports = {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
};

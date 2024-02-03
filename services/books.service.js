const Book = require("../models/book.model");


  // CRUD operations for the Book collection in the database

const createBook = async (book) => await Book.create(book);
const deleteBook = async (id) => await Book.deleteOne({_id: id});
const getAllBooks = async () => await Book.find({});
const getBookById = async (id) => await Book.findById(id);
const updateBook = async (id, updates) => await Book.findOneAndUpdate({_id: id}, updates);

module.exports = {
	createBook,
	deleteBook,
	getAllBooks,
	getBookById,
	updateBook
};

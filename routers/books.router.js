const express = require("express");
const booksRouter = express.Router();

const {
	createBook,
	deleteBook,
	getAllBooks,
	getBookById,
	updateBook
} = require("../controllers/books.controller");


booksRouter.get("/", getAllBooks);
booksRouter.post("/", createBook);

booksRouter.get("/:id", getBookById);
booksRouter.delete("/:id", deleteBook);
booksRouter.patch("/:id", updateBook);


module.exports = booksRouter;

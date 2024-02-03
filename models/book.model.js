const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 5,
      maxLength: 128,
    },
    author: {
      type: String,
      minLength: 5,
      maxLength: 128,
    },
    puplicationDate: Date,
    price: Number,
  },
  { versionKey: false }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

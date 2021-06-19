const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookCover: {
    type: String,
    required: [true, "Adicione uma image"],
  },
  bookName: {
    type: String,
    required: [true, "Insira o nome do livro"],
  },

  price: {
    type: Number,
    required: [true, "Insira o valor do livro"],
  },

  autorName: String,
  description: String,
  quantity: Number,
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;

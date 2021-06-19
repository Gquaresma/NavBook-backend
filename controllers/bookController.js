const Book = require("../models/bookModel");

module.exports = {
  allBooks: async (req, res) => {
    try {
      console.log("hi get");

      const books = await Book.find({});

      if (books.length === 0)
        return res.status(404).json({ message: "Nenhum livro encontrado" });

      return res.status(200).json(books);
    } catch (err) {
      console.log("hi get erro");
      return res.status(500).json(err);
    }
  },

  createBook: async (req, res) => {
    try {
      const { bookCover, bookName, price, autorName, description, quantity } = req.body;

      const newBook = new Book({
        bookCover,
        bookName,
        price,
        autorName,
        description,
        quantity,
      });

      const book = await newBook.save();

      return res.status(201).json(book);
    } catch (err) {
      console.log("hi post erro");
      return res.status(500).json(err);
    }
  },

  bookInfo: async (req, res) => {
    try {
      console.log("bookInfo");

      const find = await Book.findById({ _id: req.params.id });

      return res.status(200).json(find);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  deleteBook: async (req, res) => {
    try {
      const bookId = req.params.id;

      await Book.findByIdAndDelete(bookId);

      console.log("ihuu");

      return res.status(200).json({ message: "Livro deletado" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  updateBook: async (req, res) => {
    try {
      console.log("irei criar")
      const bookId = req.params.id;

      const { bookCover, bookName, price, autorName, description, quantity } = req.body;

      const book = await Book.findOne({ _id: bookId });

      if (!book) {
        console.log("!book");
        throw new Error("Deu ruim");
      }

      const bookUpdate = {
        bookCover: bookCover || book.bookCover,
        bookName: bookName || book.bookName,
        price: price || book.price,
        autorName: autorName || book.autorName,
        description: description || book.description,
        quantity: quantity || book.quantity,
      };

      const update = await Book.findOneAndUpdate({ _id: bookId }, bookUpdate);

      return res.status(201).json(update);
    } catch (err) {
      console.log("errrrrrou");
      return res.status(500).json(err);
    }
  },
};

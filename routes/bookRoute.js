const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.use(express.urlencoded({ extended: true }));

router.route("/").get(bookController.allBooks).post(bookController.createBook);

router
  .route("/:id")
  .get(bookController.bookInfo)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;

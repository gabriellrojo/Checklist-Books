const express = require("express")
const BooksController = require("../controllers/BooksController")
const router = express.Router()

router.get("/", BooksController.allBooks)
router.get("/add", BooksController.addBooks)
router.post("/save", BooksController.saveBooks)
router.get("/edit/:id", BooksController.editBook)
router.post("/edit/save", BooksController.editBookSave)
router.post("/delete", BooksController.bookDelete)
router.post("/done", BooksController.bookDone)

module.exports = router
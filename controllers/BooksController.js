const Books = require("../models/Books")

module.exports = class BooksController {
    static allBooks = async (req, res) => {
        const books = await Books.findAll({raw: true})

        res.render("home", { books })
    }
    static addBooks = (req, res) => {
        res.render("add")
    }

    static saveBooks = async (req, res) => {
        const title = req.body.title
        const author = req.body.author
        const done = false

        const books = {
            title: title,
            author: author,
            done: false
        }

        await Books.create(books)

        res.redirect("/books")
    }

    static editBook = async (req, res) => {
        const id = req.params.id
        const book = await Books.findOne({raw: true, where: {id: id}})
        
        res.render("edit", { book })
    }

    static editBookSave = async (req, res) => {
        const id = req.body.id;
        const title = req.body.title;
        const author = req.body.author;

        const editBook = {
            title: title,
            author: author
        }

        await Books.update(editBook, {where: {id: id}})

        res.redirect("/books")
    }

    static bookDelete = async (req, res) => {
        const id = req.body.id;

        await Books.destroy({where: {id: id}})
        res.redirect("/books")
    }

    static bookDone = async (req, res) => {
        const id = req.body.id;
        const done = req.body.done;

        const read = {
            done: done === "0" ? true : false
        }

        await Books.update(read, {where: {id: id}})

        res.redirect("/books")
    }


}
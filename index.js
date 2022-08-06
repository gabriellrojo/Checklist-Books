const chalk = require("chalk")
const express = require("express")
const exphbs = require("express-handlebars")
const BooksController = require("./controllers/BooksController")
const conn = require("./db/conn")
const Books = require("./models/Books")
const route = require("./routes/routes")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use("/books", route)

conn.sync()
.then(() => {
    app.listen(3000)
    console.log(`${chalk.green("Conexão efetuada com sucesso")}`)
})
.catch(err => console.log(`${chalk.red("Houve um erro:")} ${err}`))
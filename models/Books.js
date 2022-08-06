const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Books = conn.define("Books", {
    title: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Books
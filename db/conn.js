const { Sequelize } = require("sequelize")

const sequelize = new Sequelize ("booksmvc", "root", "root123", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize
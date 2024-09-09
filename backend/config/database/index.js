const Sequelize = require('sequelize')
const config = require('../database')

const Pessoa = require('../../models/pessoa')

const connection = new Sequelize(config)

Pessoa.init(connection)
Pessoa.associate(connection.models)

module.exports = connection;
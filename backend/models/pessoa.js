const { Model, DataTypes, Sequelize } = require('sequelize');
/*const Sequelize = require('sequelize');
const { type } = require('os');
const { isNumberObject } = require('util/types');*/
const sequelize = new Sequelize('postgres://postgres:banco123@localhost:5432/apinode');

class Pessoa extends Model {}

Pessoa.init({
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CPF: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'pessoas',
        timestamps: true
    });

    module.exports = Pessoa;
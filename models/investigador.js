const Sequelize = require('sequelize');

const Investigador = (sequelize) => {
    sequelize.define('Investigador',{
        departamento: Sequelize.STRING,
        nombre: Sequelize.STRING
    })
}
module.exports = Investigador;
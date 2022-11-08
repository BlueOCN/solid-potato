const Sequelize = require('sequelize');

const Proyectodoctorado = (sequelize) => {
    sequelize.define('Proyectodoctorado',{
        areas: Sequelize.STRING,
        duracion: Sequelize.INTEGER,
        tema: Sequelize.STRING,
        descripcion: Sequelize.STRING
    })
}
module.exports = Proyectodoctorado;
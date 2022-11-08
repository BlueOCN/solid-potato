const Sequelize = require('sequelize');

const Universidad = (sequelize) => {
    sequelize.define('Universidad',{
        nombreUniversidad: Sequelize.STRING,
        paisUniversidad: Sequelize.STRING,
        paginaWebUniversidad: Sequelize.STRING
    })
}
module.exports = Universidad;
const Sequelize = require('sequelize');

const Unatabla = (sequelize) => {
    sequelize.define('Unatabla',{
        atributo1: Sequelize.STRING,
        atributo2: Sequelize.STRING,
        atributo3: Sequelize.STRING
    })
}
module.exports = Unatabla;
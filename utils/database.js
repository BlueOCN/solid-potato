// Configuración de sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');

// Objeto de conexión
const sequelize = new Sequelize('Actividad1', 'admin','a01376803',{
    dialect: 'mysql',
    host: 'database-1.cx9ihy0wq1pf.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            // Carísticas especiales de la conexión
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

// Cargar los modelos
const modelDefiners = [
    require('../models/universidad'),
    require('../models/investigador'),
    require('../models/proyectodoctorado'),
];

// Adherir los modelos al objeto de conexión
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

// Generar las relaciones entre las tablas
applyRelations(sequelize);

// Exportar el objeto sequalize
module.exports = sequelize;












// module.exports = sequelize;

// const Consola = sequelize.define('consola',{
//     // Atributos
//     nombre:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     marca:{
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// Prueba de conexión
// sequelize.sync()
//     .then(resultado=>{
//         console.log("Conexión existosa!")
//     })
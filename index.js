//  Importar bibliotecas
const express = require('express');

// Traer el objeto de conexion sequelize
const sequelize = require("./utils/database")
const path = require('path');
const consolaRoutes = require('./routes/consola')
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola',consolaRoutes);

// Recursos

// Inicia la base de datos y dropea todas las tablas
sequelize.sync()
    .then(()=>{
        console.log("Conexión exitosa!");
        // Lanzar la aplicación
        app.listen(8080,()=>{
            console.log('Servidor en línea!');
        });
    }).catch(error=>console.log(error))
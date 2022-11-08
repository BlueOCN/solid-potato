//  Importar bibliotecas
const express = require('express');

// Traer el objeto de conexion sequelize
const sequelize = require("./utils/database")


const path = require('path');
const universidadRoutes = require('./routes/universidad')
const investigadorRoutes = require('./routes/investigador')
const proyectodoctoradoRoutes = require('./routes/proyectodoctorado')
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/universidad', universidadRoutes);
app.use('/investigador', investigadorRoutes);
app.use('/proyectodoctorado', proyectodoctoradoRoutes);

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
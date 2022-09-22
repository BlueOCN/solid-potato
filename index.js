//  Importar bibliotecas
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/examen')
const app = express();

// const consolaRoutes = require('./routes/consola');

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/examen',consolaRoutes);

// Lanzar la aplicación
app.listen(8081,()=>{
    console.log('Servidor en línea!');
});
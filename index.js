//  Importar bibliotecas
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola')
const app = express();

// const consolaRoutes = require('./routes/consola');

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola',consolaRoutes);

// Recursos
// Definición de nuestra aplicación en localhost/bigote
app.get('/bigote',(request,response)=>{
    console.log('Hola mundo!');
    response.send('<h1>Hola Mundo!</h1>');
});

// Definición de nuestra aplicación en localhost
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index1.html'));
});

app.get('/profile', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index2.html'));
});

// Prueba query
app.get('/prueba1', (req,res)=>{
    console.log(req.query);
    res.send("Datos enviados por querry "+req.query.name);
});

// Prueba params
app.get('/prueba2/:name/:age', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send("Datos enviados por params: " + req.params.name);
    res.send("Datos enviados por querry " + req.query.país);
});

app.post('/prueba3',(req,res)=>{
    console.log(req.body)
    res.send("Datos recibidos!")
});

// Lanzar la aplicación
app.listen(8080,()=>{
    console.log('Servidor en línea!');
});
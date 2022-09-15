const path = require("path");

///create, read, update,delete(CRUD) ABCC

exports.getAltaConsola = (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views','formulario.html'));
};

exports.postAltaConsola = (req,res)=>{
    console.log(req.body);
    res.json({estado: "Exitoso"});
};

exports.getConsultaConsola=(req,res)=>{
    res.send('<h1>Datos de las consolas</h1>');
};

// Actividad 2
exports.getA2 = (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views','formulario2.html'));
};

exports.postA2 = (req,res)=>{
    console.log(req.body);
    res.json({estado: "Exitoso"});
};

exports.getCA2 = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>');
};
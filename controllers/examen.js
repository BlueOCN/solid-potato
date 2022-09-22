const path = require("path");

///create, read, update,delete(CRUD) ABCC

exports.getAltaConsola = (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views','forma.html'));
};

exports.postAltaConsola = (req,res)=>{
    console.log(req.body);
    //  si todos los datos recibidos tienen un valor asociado
    filled = 1;
    if (req.body.dato1 == ''){
        console.log("Falta dato 1");
        filled = 0;
    } else if (req.body.dato2 == ''){
        console.log("Falta dato 2");
        filled = 0;
    } else if (req.body.dato3 == ''){
        console.log("Falta dato 2");
        filled = 0;
    } else if (req.body.dato4 == '') {
        console.log("Falta dato 3");
        filled = 0;
    }

    if (filled) {
        res.json({datosCompletos: "afirmativo"});
    } else {    // En caso de que falte algún dato respuesta del servidor deberá ser;
        res.json({datosCompletos: "negativo"});
    }

};
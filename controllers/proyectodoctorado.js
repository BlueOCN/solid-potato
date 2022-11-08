const path = require("path");
const Proyectodoctorado = require("../utils/database").models.Proyectodoctorado;
const sequalize = require("../utils/database");
const Sequelize = require("sequelize");


/*
    CREATE
    INSERT INTO Proyectodoctorado VALUES ();
*/
exports.postCrearProyectodoctorado = (req, res) => {
    console.log(req.body);
    Proyectodoctorado.create(req.body)
        .then(resultado => {
            console.log("Registro exitoso");    // Imprime en el servidor
            res.send("Registro exitoso")        // Imprime en cliente
        })
        .catch(error => {
            console.log(error);                 // Servidor
            res.send("ocurrio un error")        // Cliente
        })
};
/*
    READ
    SELECT * from Proyectodoctorado;
*/
exports.getLeerProyectodoctorado = (req, res) => {
    Proyectodoctorado.findAll()
        .then(elementos => {
            console.log("Elementos", elementos);
            res.send(elementos);
        })
        .catch(e => {
            console.log(e);
            res.send("Error");
        })
}
/*
    UPDATE
    UPDATE Proyectodoctorado SET WHERE id=
*/
exports.postActualizarProyectodoctorado = (req, res) => {
    console.log(req.body)
    Proyectodoctorado.update({ areas: req.body.areas, duracion: req.body.duracion, tema: req.body.tema, descripcion: req.body.descripcion }, {
        where:{
            id: req.body.id
        }
    }).then(() => {
        console.log("Elemento actualizada")
        res.send("Elemento actualizada")
    }).catch((e) => {
        console.log(e)
        res.send("Error")
    })
}
/*
    DELETE
    DELETE FROM Proyectodoctorado WHERE id=
*/
exports.postBorrarProyectodoctorado = (req, res) => {
    console.log(req.body)
    Proyectodoctorado.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        console.log("Elemento eliminada")
        res.send("Elemento eliminada")
    }).catch((e) => {
        console.log(e)
        res.send("Error")
    })

}
const path = require("path");
const Universidad = require("../utils/database").models.Universidad;
const sequalize = require("../utils/database");
const Sequelize = require("sequelize");

/*
    CREATE
    INSERT INTO Universidad VALUES ();
*/
exports.postCrearUniversidad = (req, res) => {
    console.log(req.body);
    Universidad.create(req.body)
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
    SELECT * from Universidad;
*/
exports.getLeerUniversidad = (req, res) => {
    Universidad.findAll()
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
    UPDATE Elemento SET WHERE id=
*/
exports.postActualizarUniversidad = (req, res) => {
    console.log(req.body)
    Universidad.update({ nombreUniversidad: req.body.nombreUniversidad, paisUniversidad: req.body.paisUniversidad, paginaWebUniversidad: req.body.paginaWebUniversidad}, {
        where:{
            id: req.body.id
        }
    }).then(() => {
        console.log("Universidad actualizada")
        res.send("Universidad actualizada")
    }).catch((e) => {
        console.log(e)
        res.send("Error")
    })
}
/*
    DELETE
    DELETE FROM Elemento WHERE id=
*/
exports.postBorrarUniversidad = (req, res) => {
    console.log(req.body)
    Universidad.destroy({
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

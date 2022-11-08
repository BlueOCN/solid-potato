const path = require("path");
const Investigador = require("../utils/database").models.Investigador;
const sequalize = require("../utils/database");
const Sequelize = require("sequelize");

/*
    CREATE
    INSERT INTO Investigador VALUES ();
*/
exports.postCrearInvestigador = (req, res) => {
    console.log(req.body);
    Investigador.create(req.body)
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
    SELECT * from Investigador;
*/
exports.getLeerInvestigador = (req, res) => {
    Investigador.findAll()
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
    UPDATE Investigador SET WHERE id=
*/
exports.postActualizarInvestigador = (req, res) => {
    console.log(req.body)
    Investigador.update({ departamento: req.body.departamento, nombre: req.body.nombre }, {
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
    DELETE FROM Investigador WHERE id=
*/
exports.postBorrarInvestigador = (req, res) => {
    console.log(req.body)
    Investigador.destroy({
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

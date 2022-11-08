const path = require("path");
const Universidad = require("../utils/database").models.Universidad;
const Investigador = require("../utils/database").models.Investigador;
const Proyectodoctorado = require("../utils/database").models.Proyectodoctorado;
const sequalize = require("../utils/database");
const Sequelize = require("sequelize");

// ----------------------------------------------------------- //
// -------------------- CRUD UNIVERSIDAD --------------------- //
// ----------------------------------------------------------- //

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
        id: req.body.id
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

// ----------------------------------------------------------- //
// ------------------- CRUD INVESTIGADOR --------------------- //
// ----------------------------------------------------------- //

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
        id: req.body.id
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

// ----------------------------------------------------------- //
// ----------------- CRUD PROYECTODOCTORADO ------------------ //
// ----------------------------------------------------------- //

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
        id: req.body.id
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
const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola');


// CRUD
// router.post('/altaElemento',consolaController.postAltaElemento);                // Create elemento
// router.get('/consultaTabla', consolaController.getElementos);                   // Read elementos
// router.post('/bajaElemento',consolaController.postEliminarElemento);            // Delete elemento
// router.post('/actualizarElemento',consolaController.postActualizarElemento);    // Update elemento

// UNVERSIDAD
router.post('/crearUniversidad',consolaController.postCrearUniversidad);                // Create
router.get('/leerUniversidad', consolaController.getLeerUniversidad);                   // Read
router.post('/actualizarUniversidad',consolaController.postActualizarUniversidad);      // Update
router.post('/borrarUniversidad',consolaController.postBorrarUniversidad);              // Delete

// INVESTIGADOR
router.post('/crearInvestigador',consolaController.postCrearInvestigador);                // Create
router.get('/leerInvestigador', consolaController.getLeerInvestigador);                   // Read
router.post('/actualizarInvestigador',consolaController.postActualizarInvestigador);      // Update
router.post('/borrarInvestigador',consolaController.postBorrarInvestigador);              // Delete 

// PROYECTODOCTORADO
router.post('/crearProyectodoctorado',consolaController.postCrearProyectodoctorado);                // Create
router.get('/leerProyectodoctorado', consolaController.getLeerProyectodoctorado);                   // Read
router.post('/actualizarProyectodoctorado',consolaController.postActualizarProyectodoctorado);      // Update
router.post('/borrarProyectodoctorado',consolaController.postBorrarProyectodoctorado);              // Delete

module.exports = router;
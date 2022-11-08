const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/proyectodoctorado');

// PROYECTODOCTORADO
router.post('/crearProyectodoctorado',consolaController.postCrearProyectodoctorado);                // Create
router.get('/leerProyectodoctorado', consolaController.getLeerProyectodoctorado);                   // Read
router.post('/actualizarProyectodoctorado',consolaController.postActualizarProyectodoctorado);      // Update
router.post('/borrarProyectodoctorado',consolaController.postBorrarProyectodoctorado);              // Delete

module.exports = router;
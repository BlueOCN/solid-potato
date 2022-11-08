const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/universidad');

// UNVERSIDAD
router.post('/crearUniversidad',consolaController.postCrearUniversidad);                // Create
router.get('/leerUniversidad', consolaController.getLeerUniversidad);                   // Read
router.post('/actualizarUniversidad',consolaController.postActualizarUniversidad);      // Update
router.post('/borrarUniversidad',consolaController.postBorrarUniversidad);              // Delete

module.exports = router;
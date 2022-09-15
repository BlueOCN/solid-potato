const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola');

///create, read, update,delete(CRUD) ABCC
router.get('/altaConsola',consolaController.getAltaConsola);
router.post('/altaConsola',consolaController.postAltaConsola);
router.get('/consultaConsola',consolaController.getConsultaConsola);

/// Actividad 2
router.get('/A2',consolaController.getA2);
router.post('/A2',consolaController.postA2);
router.get('/consultaA2',consolaController.getCA2);


module.exports = router;
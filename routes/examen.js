const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/examen');

///create, read, update,delete(CRUD) ABCC
router.get('/formulario',consolaController.getAltaConsola);
router.post('/validacion',consolaController.postAltaConsola);

module.exports = router;
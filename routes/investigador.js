const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/investigador');

// INVESTIGADOR
router.post('/crearInvestigador',consolaController.postCrearInvestigador);                // Create
router.get('/leerInvestigador', consolaController.getLeerInvestigador);                   // Read
router.post('/actualizarInvestigador',consolaController.postActualizarInvestigador);      // Update
router.post('/borrarInvestigador',consolaController.postBorrarInvestigador);              // Delete

module.exports = router;
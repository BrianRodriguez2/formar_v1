const express = require('express');
const empController = require('../controllers/emprendimientoController');
const router = express.Router();
 
 
router.get('/', empController.empAll )
// router.get('/empredimientos/:detalle', empController.empOne)
 
 
module.exports = router;
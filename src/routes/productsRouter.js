const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* Rutas */

router.get('/', productsController.getAll);

/* Rutas parametrizada de detalle de producto */
router.get('/detalle/:id', productsController.getOne); //Color es opcional.


module.exports = router;
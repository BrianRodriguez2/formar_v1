const express = require('express');
const app = express();
const path = require('path');
const process =  require ('process')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
 


// Enrutador
 
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productsRouter');
const emprendimientoRouter = require('./routes/emprendimientosRouter')
 
app.use(express.static(path.join(__dirname,'../public')));

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

// Middlewares de Rutas
app.use('/', indexRouter); //  home , contact
app.use('/productos', productRouter);//listado, detalle
app.use('/emprendimiento', emprendimientoRouter)//Emprendimiento
 
// app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./views/index.html')))
 
 
app.listen(PORT , ()=> console.log(`Servidor abierto en:
http://localhost:${PORT}`))

const express = require('express');
const app = express();
const path = require('path');
const process =  require ('process')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
 
 
// Enrutador
 
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const emprendimientoRouter = require('./routes/emprendimientoRouter')
 
app.use(express.static(path.join(__dirname,'public')));
 
// Middlewares de Rutas
 
app.use('/', indexRouter); //  home , contact
app.use('/productos', productRouter);//listado, detalle
app.use('/emprendimiento', emprendimientoRouter)//Emprendimiento
 
// app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./views/index.html')))
 
 
app.listen(PORT , ()=> console.log(`KLK MANO vo sabe tamo en
http://localhost:${PORT}`))

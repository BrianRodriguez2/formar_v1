const { getProducts } = require('../data')

module.exports = {
    index: (req, res) => {
        res.render('index', {
            titulo: "Homepage",
            products_title: "Productos",
            imagen: "desayuno.jpg",
            nombre: "Desayuno",
            precio: 3000,
            descripcion: "Lorem ipsum dolor sit amet consectetur." 
         }) 
    },
    contact: (req, res) => res.send("CONTACTO DESDE EL CONTROLLER")
};
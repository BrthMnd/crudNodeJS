const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
    res.render('index', {titulo : "Lo logramos"})
    } catch (error) {	
    console.log("hola")
    }
})
router.get('/servicios', (req, res, next) => {
    res.render('servicios', {tituloServicios : "Lo logramos en servicios"})
})




module.exports = router;
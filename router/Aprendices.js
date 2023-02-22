const express = require('express');
const router = express.Router();

const Aprendices = require('../models/aprendiz')
router.get('/', async (req, res, next) => {
    try {

        const arrayAprendiz = await Aprendices.find();
        // console.log(arrayAprendiz)
        res.render('aprendices', {aprendices : arrayAprendiz})

    } catch (err){
        console.error(err);
    }
})
router.get('/crear', async (req, res, next) =>{
    res.render('crear')
})

router.post('/', async (req, res, next) =>{
    const body = req.body
    console.log(body)
    try {
        // const aprendizNew = new Aprendices(body)
        // await aprendizNew.save();

        await Aprendices.create(body);
        // console.log("aqui: "+aprendizNew);
        res.redirect('/aprendices')
    } catch (error) {
        console.error(error)
    }
})

router.get('/:documento', async (req, res, next) =>{
    const documento =req.params.documento
    console.log("el documento es: "+documento)   

    try {
        const aprendizEdit = await Aprendices.findOne({documento: documento});
        console.log(aprendizEdit)
        res.render('detalle',{
            aprendiz : aprendizEdit,
            error: false
        })
    } catch (error) {
        console.error(error)
         res.render('detalle',{
            mensaje: "No se encontró",
            error: true
        })
    }
})

module.exports = router
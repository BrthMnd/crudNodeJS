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

router.get('/:id', async (req, res, next) =>{

    const identi = req.params.id
    console.log("el documento es: ", identi)   


    try {
        const aprendizEdit = await Aprendices.findOne({ _id : identi });
        
        if (!aprendizEdit) {
            throw new Error('El aprendiz no se encontró en la base de datos');
          }
        res.render('detalle',{
            aprendiz : aprendizEdit,
            error: false,
        })
    } catch (error) {
        console.error(error)
         res.render('detalle',{
            mensaje: "No se encontró",
            error: true
        })
    }
})
router.post('/editar/:id', async (req, res, next) =>{
    const identi = req.params.id
    const body = {
        documento: req.body.documento,
        nombre: req.body.nombre,
        notaJs: req.body.notaJs,
        notaPhp: req.body.notaPhp,
        notaIngles: req.body.notaIngles
    }
    try {
        
        await Aprendices.updateOne({ _id : identi }, body )
        res.redirect('/aprendices/')

    } catch (error) {
        console.error(error)
    }

    console.log("Body es:", body)
})
router.get('/borrar/:id', async (req, res, next) =>{

    const identi = req.params.id
    console.log("el documento eliminado es: ", identi)   


    try {
        
          await Aprendices.deleteOne({ _id : identi });
        res.redirect('/aprendices')
    } catch (error) {
        console.error(error)
    }
})
// router.delete( '/:id' , async (req, res, next) =>
// {
//     const identi = req.params.identi
//     console.log("el documento es: ", identi)

//     try {
//         const mascotaDelete = await Aprendices.findByIdAndDelete({ _id : identi });
//         if (mascotaDelete) {

//             res.json({ estado: true, message: "eliminado" })
            
//         }else{
            
//             res.json({ estado: false, message: "no elminado" })

//         }
//     } catch (error) {
//         console.log(error)
//     }
//  }
// )

module.exports = router

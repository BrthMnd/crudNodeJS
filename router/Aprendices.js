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
        console.log(aprendizEdit)
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
router.delete( '/:id' , async (req, res, next) =>
{
    const identi = req.params.identi
    console.log("el documento es: ", identi)

    try {
        const mascotaDelete = await Aprendices.findByIdAndDelete({ _id : identi });
        if (mascotaDelete) {
            res.json({ estado: true, message: "eliminado" })
        }else{
            
            res.json({ estado: false, message: "no elminado" })

        }
    } catch (error) {
        console.log(error)
    }



 }
)

module.exports = router

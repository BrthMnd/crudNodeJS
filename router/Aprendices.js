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

module.exports = router
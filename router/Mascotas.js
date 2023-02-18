const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'laksjdñals', nombre: 'laksjdñals', descripc: 'laksjdñals'},
            {id: 'laksjdñals', nombre: 'laksjdñals', descripc: 'laksjdñals'}
        ]
    })
})


module.exports = router;
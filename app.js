///////////////////////////////////// Export //////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const port = 3000;


//////////////////////////////// EJS //////////////////////////////////
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res, next) => {
    res.render('index', {titulo : "Lo logramos"})
})
app.get('/servicios', (req, res, next) => {
    res.render('servicios', {tituloServicios : "Lo logramos en servicios"})
})

//////////////////////////////// Utilidades //////////////////////////////////
// app.get('/', (req, res, next) => {
//     res.send('');
// })



//////////////////////////////// Midleworld //////////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    
    res.status(404).render('404' ,{
        titulo : "404",
        texto : "La página no existe"
    })
});








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
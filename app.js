///////////////////////////////////// Export //////////////////////////////////////////////////////////////////
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
//////////////////////////////// body parse Configuration //////////////////////////////////
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//////////////////////////////// EJS //////////////////////////////////
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//////////////////////////////// Midleworld //////////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

///////////////// rutas Web Application //////////////////////////////////////////////////////////////////

app.use('/', require('./router/RutasWeb'))
app.use('/aprendices', require('./router/Aprendices')) 
app.use((req, res, next) => {
    
    res.status(404).render('404' ,{
        titulo : "404",
        texto : "La página no existe"
    })
});







try{
app.listen(port, () => {
    
    console.log(`escuchando en puerto http://localhost:${port}`)
})} catch( err ){ console.log(err) }

///////////////////////////////////// Export //////////////////////////////////////////////////////////////////
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
//////////////////////////////// body parse Configuration //////////////////////////////////
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//////////////////////////////// Mongoose //////////////////////////////////

const uri = `mongodb+srv://${process.env.USER_ADMIN}:${process.env.PASSWORD}@cluster0.nsvkq9w.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // strictQuery: false
    // useCreateIndex: true,
}).then(()=> console.log('Base de datos conectada')).catch(err => console.error(err));

//////////////////////////////// EJS //////////////////////////////////
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//////////////////////////////// Midleworld //////////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

// rutas Web Application //////////////////////////////////////////////////////////////////

app.use('/', require('./router/RutasWeb'))
app.use('/aprendices', require('./router/Aprendices'))  
// app.use('/mascotas', require('./router/Mascotas'))
// app.use('/mascotas', require('./router/Mascotas'))
// 
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

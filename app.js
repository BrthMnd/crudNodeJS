///////////////////////////////////// Export //////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { TextEncoder } = require('text-encoding');
const utf8Encoder = new TextEncoder();

//////////////////////////////// Mongoose //////////////////////////////////
const user = 'Brandon';
const password = '1allahuakbar123';
const db = 'Curso'
const uri = `mongodb+srv://${user}:${password}@cluster0.nsvkq9w.mongodb.net/${db}?retryWrites=true&w=majority`


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
// 
app.use((req, res, next) => {
    
    res.status(404).render('404' ,{
        titulo : "404",
        texto : "La página no existe"
    })
});








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
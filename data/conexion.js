
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER_ADMIN}:${process.env.PASSWORD}@cluster0.nsvkq9w.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`


const conexion = mongoose.createConnection(
    uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = conexion

//primero descargar librerias externas 
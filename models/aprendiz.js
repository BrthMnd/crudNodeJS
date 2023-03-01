const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AprendizSchema = new Schema({
    documento: String,
    nombre: String,
    notaJs: Number,
    notaPhp: Number,
    notaIngles: Number
});

const Aprendiz = mongoose.model('Aprendices', AprendizSchema);

module.exports = Aprendiz;

// Falta la conexion a la base de datos

const mongoose = require('../data/conexion.js');
const Schema = require('mongoose').Schema;

const AprendizSchema = new Schema({
    // _id: String,
    documento: String,
    nombre: String,
    notaJs: Number,
    notaPhp: Number,
    notaIngles: Number
});

const Aprendiz = mongoose.model('Aprendices', AprendizSchema);

module.exports = Aprendiz;

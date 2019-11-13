const mongoose = require("mongoose");

const AlunasSchema = new mongoose.Schema({
    nome: {type: String},
    dateOfBirth: {type: Number},
    nasceuEmSp: {type: Boolean},
    livros: [{
        titulo: String,
        leu: Boolean,
    }]
})
//var sampleSchema = new Schema ({name: {type:String, required: true}})

const Alunas = mongoose.model("Alunas", AlunasSchema);

module.exports = Alunas

// mongoose.Schema({})
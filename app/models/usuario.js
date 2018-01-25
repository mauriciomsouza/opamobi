var mongoose = require('mongoose');

var schema = mongoose.Schema({

    senha: {
        type: String,
        required: true
    },
    cnpj: {
        type: String, 
        required: true
    },
    razao: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

mongoose.model('Usuario', schema);
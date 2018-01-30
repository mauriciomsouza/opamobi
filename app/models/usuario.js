var mongoose = require('mongoose');

var schema = mongoose.Schema({

    cnpj: {
        type: String,
        required: true
    },
    razao: {
        type: String, 
        required: true
    },
    logradouro: {
        type: String,
        required: false
    },
    numero: {
        type: String,
        required: false
    },
    complemento: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    confirm: {
        type: String,
        required: false
    },
    situacao: {
        type: String,
        required: false
    }
});

mongoose.model('Usuario', schema);
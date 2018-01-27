var mongoose = require('mongoose');

var schema = mongoose.Schema({

    cnpj: {
        type: String,
        required: false
    },
    razao: {
        type: String, 
        required: false
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
        required: false
    },
    cidade: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: false
    },
    cep: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    senha: {
        type: String,
        required: false
    },
    confirm: {
        type: String,
        required: false
    }
});

mongoose.model('Usuario', schema);
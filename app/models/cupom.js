var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
	foto: {
		type: String,
		required: true
	},
    empresa: {
		type: String,
		required: true
	},
    validade: {
		type: String,
        required: true
	},
    descricao: {
		type: String,
		required: true
	},
    code: {
		type: String,
		required: true
	},
	categoria: {
		type: String,
		required: true
	},
    empresa_cnpj: {
        type: String,
        required: true
    },
    criado: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    }
});

mongoose.model('Cupom', schema);



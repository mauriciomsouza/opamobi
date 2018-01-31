var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo: {
		type: String,
		required: false
	},
	foto: {
		type: String,
		required: false
	},
    empresa: {
		type: String,
		required: false
	},
    validade: {
		type: String,
        required: false
	},
    descricao: {
		type: String,
		required: false
	},
    code: {
		type: String,
		required: false
	},
	categoria: {
		type: String,
		required: false
	},
    empresa_cnpj: {
        type: String,
        required: false
    },
    criado: {
        type: Date, default: Date.now
    },
    telefone: {
        type: String,
        required: false
    },
    endereco: {
        type: String,
        required: false
    }, pego: {
        type: Number,
        default: 0
    }
});

mongoose.model('Cupom', schema);



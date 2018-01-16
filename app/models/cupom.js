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
        required: false
	},
    descricao: {
		type: String,
		required: true
	},
    code: {
		type: String,
		required: false
	},
	categoria: {
		type: String,
		required: true
	}
});

mongoose.model('Cupom', schema);



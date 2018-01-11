var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		required: true
	},
    cover: {
		type: String,
		required: true
	},
    testimonial: {
		type: String,
        required: false
	},
    descricao: {
		type: String,
		required: true
	},
    foto1: {
		type: String,
		required: false
	},
    foto2: {
		type: String,
		required: false
	},
    foto3: {
		type: String,
		required: false
	},
    foto4: {
		type: String,
		required: false
	},
    foto5: {
		type: String,
		required: false
	},
	categoria: {
		type: String,
		required: true
	}
});

mongoose.model('Projeto', schema);



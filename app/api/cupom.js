var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Cupom');

	api.lista = function(req, res) {

		model.find()
		.then(function(cupoms) {
			res.json(cupoms);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.buscaPorId = function(req, res) {

		model.findById(req.params.id)
		.then(function(cupom) {
			if (!cupom) throw new Error('Projeto não encontrado');
			res.json(cupom);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.removePorId = function(req, res) {

		model.remove({'_id' : req.params.id})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.adiciona = function(req, res) {
		model.create(req.body)
		.then(function(cupom) {
			res.json(cupom);
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.atualiza = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(cupom) {
			res.json(cupom);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};
    
    api.pegar = function(req,res) {
        model.findByIdAndUpdate(req.params.id, {$inc: {pego:1}})
        .then(function(cupom) {
            res.json(cupom);
        })
    };
    
	return api;
};
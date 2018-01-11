var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Projeto');

	api.lista = function(req, res) {

		model.find()
		.then(function(projetos) {
			res.json(projetos);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.buscaPorId = function(req, res) {

		model.findById(req.params.id)
		.then(function(projeto) {
			if (!projeto) throw new Error('Projeto não encontrado');
			res.json(projeto);
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
		.then(function(projeto) {
			res.json(projeto);
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.atualiza = function(req, res) {

		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(projeto) {
			res.json(projeto);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	return api;
};


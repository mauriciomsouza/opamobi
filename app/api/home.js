var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

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

	return api;
};


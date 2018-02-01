var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Usuario');

	api.lista = function(req, res) {
		model.find()
		.then(function(usuarios) {
			res.json(usuarios);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.buscaPorCNPJ = function(req, res) {
		model.findOne({'cnpj' : req.params.cnpj})
		.then(function(usuario) {
			if (!usuario) throw new Error('Projeto não encontrado');
			res.json(usuario);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.atualiza = function(req, res) {
		model.create(req.body)
		.then(function(usuario) {
            console.log('deu certo');
			res.json(usuario);
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};
    
    api.mudarSenha = function(req, res) {
		model.findOneAndUpdate({'cnpj' : req.params.cnpj}, {$set: {'senha': req.body.senha}})
		.then(function(usuario) {
			res.json(usuario);
		}, function(error) {
			res.sendStatus(500);
		});
	};

	return api;
};
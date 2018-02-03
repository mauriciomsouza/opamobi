module.exports = function(uri) {

	let mongoose = require('mongoose');
    mongoose.Promise = Promise;

	mongoose.connect(uri, {
    useMongoClient: true});

	mongoose.connection.on('connected', function() {
		console.log('Conectado à Opa! Data')
	});

	mongoose.connection.on('error', function(error) {
		console.log('Erro na conexão: ' + error);
	});	

	mongoose.connection.on('disconnected', function() {
		console.log('Desconectado da Opa! Data')
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Aplicação terminada, conexão fechada')
			process.exit(0);
		});
		
	})
};



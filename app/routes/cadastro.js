module.exports = function(app) {
	
	var api = app.api.cadastro;

	app.route('/v1/usuarios')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/usuarios/:cnpj')
		.get(api.buscaPorCNPJ)
        .post(api.adiciona);
        
};
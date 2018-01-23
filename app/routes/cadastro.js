module.exports = function(app) {
	
	var api = app.api.cadastro;

	app.route('/v1/empresas')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/empresas/:id')
		.get(api.buscaPorId)
		.put(api.atualiza);
};
module.exports = function(app) {
	
	var api = app.api.projeto;

	app.route('/v1/projetos')
		.get(api.lista);

	app.route('/v1/projetos/:id')
		.get(api.buscaPorId);
};
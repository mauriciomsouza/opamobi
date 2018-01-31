module.exports = function(app) {
	
	var api = app.api.access;

	app.route('/v1/lista')
		.get(api.lista);

	app.route('/v1/lista/:id')
		.get(api.buscaPorId);
    
    app.route('/v1/pega/:id')
		.put(api.pegar);
};
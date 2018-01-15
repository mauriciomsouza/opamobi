module.exports = function(app) {
	
	var api = app.api.cupom;

	app.route('/v1/cupoms')
		.get(api.lista);

	app.route('/v1/cupoms/:id')
		.get(api.buscaPorId);
};
module.exports = function(app) {
	
	var api = app.api.categoria;
	app.get('/v1/categorias', api.lista);
};
module.exports = function(app) {
	
	var api = app.api.cupom;

	app.route('/v1/cupoms')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/cupoms/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
    
    app.route('/v1/pega/:id')
		.put(api.pegar);
};
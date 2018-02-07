module.exports = function(app) {
	
	var api = app.api.usuario;

	app.route('/v1/usuarios')
		.get(api.lista)
        .put(api.atualiza);

	app.route('/v1/usuarios/:cnpj')
		.get(api.buscaPorCNPJ)
        .patch(api.mudarSenha)
        .put(api.atualizarCadastro);
};
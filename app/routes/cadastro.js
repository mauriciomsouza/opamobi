module.exports = function(app) {
	
	var api = app.api.cadastro;
    
    app.route('/v1/cadastro')
        .post(api.adicionaUser);

	app.route('/v1/cadastro/:cnpj')
        .post(api.adicionaUser);
        
};
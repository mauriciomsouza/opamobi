module.exports = function(app) {

    var api = app.api.auth;
    app.post('/autenticar', api.autentica);
    app.get('/usuario', api.verificaUser);
    app.use('/*', api.verificaToken);
};
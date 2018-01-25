var mongoose = require('mongoose');
var jwt  = require('jsonwebtoken'); 

module.exports = function(app) {

     var api = {};
     var model = mongoose.model('Usuario');

     api.autentica = function(req, res) {
         model.findOne({
             cnpj: req.body.cnpj,
             senha: req.body.senha
         })
         .then(function(usuario) {
             if (!usuario) {
                 console.log('cnpj/senha inválidos');
                 res.sendStatus(401);
             } else {
                console.log(usuario.cnpj)
                 var token = jwt.sign({cnpj: usuario.cnpj}, app.get('secret'), {
                     expiresIn: 84600
                 });
                 console.log('Autenticado: token adicionado na resposta');
                 res.set('x-access-token', token); 
                 res.end(); 
             }
         });
     };

    api.verificaToken = function(req, res, next) {

         var token = req.headers['x-access-token'];

         if (token) {
             console.log('Token recebido, decodificando');
             jwt.verify(token, app.get('secret'), function(err, decoded) {
                 if (err) {
                     console.log('Token rejeitado');
                     return res.sendStatus(401);
                 } else {
                     console.log('Token aceito')
                     req.usuario = decoded;
                     next();
                  }
            });
        } else {
            console.log('Nenhum token enviado');
            return res.sendStatus(401);
          }
    }
    
    api.verificaUser = function(req, res) {

         var token = req.headers['x-access-token'];

         if (token) {
             console.log('Token recebido, decodificando');
             jwt.verify(token, app.get('secret'), function(err, decoded) {
                 if (err) {
                     console.log('Token rejeitado');
                     return res.sendStatus(401);
                 } else {
                     console.log('Token aceito')
                     req.usuario = decoded;
                     var usuario = req.usuario;
                     res.json(usuario);
                     res.end();
                  }
            });
          } else {
            console.log('Nenhum token enviado');
            return res.sendStatus(401);
            res.json(usuario);
          }
    }

    return api;
};
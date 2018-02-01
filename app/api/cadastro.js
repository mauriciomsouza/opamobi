var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Usuario');
    
    api.listaUser = function(req, res) {
		model.find()
		.then(function(usuarios) {
			res.json(usuarios);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};
	
    api.buscaPorCNPJ = function(req, res) {
		model.findOne({'cnpj' : req.params.cnpj})
		.then(function(usuario) {
			if (!usuario) throw new Error('Empresa não encontrada');
			res.json(usuario);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.adicionaUser = function(req, res) {
		model.create(req.body)
		.then(function(usuario) {
			res.json(usuario);
             
            var transporter = nodemailer.createTransport({
                host: 'smtpout.secureserver.net',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'contato@mauriciomelo.design',
                    pass: 'mauricio0306$'
                }
            });

            // setup email data with unicode symbols
            var mailOptions = {
                from: '"Opa! Admin" <no-reply@opamobi.com.br>', // sender address
                to: 'romulo@2ml.design, mauricio@2ml.design', // list of receivers
                subject: 'Novo Usuário Cadastrado', // Subject line
                text: 'Opa! Temos um novo usuário.', // plain text body
                html: '<b>Alguém se cadastrou</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};

	return api;
};
var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://admin:rominho@ds157702.mlab.com:57702/heroku_cvs34dv9');

var port = process.env.PORT || 5555;

http.createServer(app)
.listen(port, function() {
	console.log('Servidor Opa! [ON]');
});
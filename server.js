var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://opamobi:123@ds249787.mlab.com:49787/heroku_jnjgbv0t');

var port = process.env.PORT || 5555;

http.createServer(app)
.listen(port, function() {
	console.log('Servidor Opa! [ON]');
});
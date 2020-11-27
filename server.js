var http = require('http');
var app = require('./config/express');

require('./config/database')('mongodb+srv://opamobi:123@cluster0.szmad.mongodb.net/heroku_jnjgbv0t?retryWrites=true&w=majority');

var port = process.env.PORT || 80;

http.createServer(app)
.listen(port, function() {
	console.log('Servidor Opa! [ON]');
});

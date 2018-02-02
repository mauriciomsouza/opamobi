var https = require('https');
var sslRedirect = require('heroku-ssl-redirect');
var app = require('./config/express');
require('./config/database')('mongodb://opamobi:123@ds249787.mlab.com:49787/heroku_jnjgbv0t');

// enable ssl redirect
app.use(sslRedirect());

app.listen(3000);

var port = process.env.PORT || 5555;

https.createServer(app)
.listen(port, function() {
	console.log('Servidor Opa! [ON]');
});
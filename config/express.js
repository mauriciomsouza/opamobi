var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var nodemailer = require('nodemailer');
var path = require('path');

var app = express();

app.set('secret', 'homemavestruz'); 
app.use(express.static('./public'));
app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true,
  parameterLimit:100000
}));

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes/access.js')
    .then('routes/cadastro.js')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

module.exports = app;

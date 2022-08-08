//npm init
//npm install express --save
//var canciones = require('./canciones');
var canciones = require('./canciones');
var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () { //escucha en el puerto 3000
  console.log('Escuchando en puerto 3000!');
});

////////MIDDLEWARE GENERAL////
app.use(function (req, res, next) {
  console.log('middleware server.js');
  next();
});

///////ROUTER//////
app.use('/canciones', canciones);

app.get('/',function (req, res) {
	res.sendFile(path.join(__dirname,'templates','index.html'));
});

app.get('/tabla',function (req, res) {
	res.sendFile(path.join(__dirname,'templates','tabla.html'));
});

app.post('/TESTPOST', function (req, res) {
  console.log('Respuesta a Post');
  next();
});

app.put('/TESTPUT', function (req, res) {
  console.log('Respuesta a PUT');
  next();
});

app.delete('/TESTDELETE', function (req, res) {
  console.log('Respuesta a DELETE');
});




/*
canciones.use('/templates/index.html', canciones);

canciones.get('/templates/index.html',function (req, res) {
	res.send('TEST');
});

module.exports = canciones;
*/
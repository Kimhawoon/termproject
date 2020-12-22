const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');
const createError = require('http-errors');


app.use(express.static(__dirname+'/public'));

nunjucks.configure('views', {
    express: app,
    watch: true
  });
  
  app.set('view engine', 'html');

  app.use(morgan('dev'));  // morgan('dev')

app.listen(8080, function(){
   console.log('listening on 8080'); 
});

app.get('/', function(req, res){
    res.sendfile(__dirname +'/index.html');
});

app.get('/todo', function(req, res){
    res.sendfile(__dirname +'/todo.html');
});

app.get('/weather', function(req, res){
    res.sendfile(__dirname +'/weather.html');
});

app.get('/gallery', function(req, res){
    res.sendfile(__dirname +'/gallery.html');
});

app.get('/phrase', function(req, res){
    res.sendfile(__dirname +'/phrase.html');
});


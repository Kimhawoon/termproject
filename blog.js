const express = require('express');
const app = express();
const PORT = process.env.PORT;
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

  app.use(morgan('dev'));  

app.listen(PORT, function(){
   console.log('listening on 8080'); 
});

app.get('/', function(req, res){
    res.sendfile(__dirname +'/index.html');
});

app.get('/gallery', function(req, res){
    res.sendfile(__dirname +'/gallery.html');
});

app.get('/quote', function(req, res){
    res.sendfile(__dirname +'/quote.html');
});


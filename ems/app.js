var express = require('express');
var path = require('path');
var logger = require('morgan');
const { response } = require('express');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home Page'
  });
});

app.listen(8080, function() {
  console.log('App started on port 8080');
});

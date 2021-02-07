var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let nameArr = ['Kayla', 'Tony', 'Avery', 'Jeff', 'Jose'];

app.get('/', function(req, res) {
  res.render('index', {
    names: nameArr
  });
});

app.listen(8080, function() {
  console.log('App listening on port 8080');
});

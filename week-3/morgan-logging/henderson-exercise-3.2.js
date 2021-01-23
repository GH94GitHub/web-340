/*=====================
; Title: Exercise 3.2
; Author: George Henderson
; Date: 23 January 2021
; Description: Uses 'Morgan' for logging and 'ejs' for view engine.
;=====================*/

const { response } = require('express');
var express = require('express');
var logger = require('morgan');
var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('short'));
app.get('/', function(req, res, next) {
  res.render('index', {
    message: 'Watch Morgan Logger in action!'
  });
});

app.listen(8080, function() {
  console.log('Application started on port 8080');
});


/*===================
; Title: Exercise 3.3
; Author: George Henderson
; Date 23 January 2021
; Description: Grabs parameters out of the URI.
;===================*/

var express = require('express');
var logger = require('morgan');
var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));
app.get('/:employeeId', function(req, res) {
  var employeeId = parseInt(req.params.employeeId, 10);
  res.render('index', {
    employeeId: employeeId
  });
});

app.listen(8080, function() {
  console.log('Application started on port 8080');
});

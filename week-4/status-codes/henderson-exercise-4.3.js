/*===================================
; Title: Exercise 4.3
; Author: George Henderson
; Date: 31 January 2021
; Description: Demonstrates using response status codes.
;===================================*/

const { response } = require('express');
var express = require('express');

var app = express();

app.get('/not-found', function(req, res) {
  res.status(404);
  res.json({
    error:"Can't find the resource you are looking for. :("
  });
});

app.get('/ok', function(req, res) {
  res.status(200);
  res.json({
    message: 'Page Correctly Loaded!'
  });
});

app.get('/not-implemented', function(req, res) {
  res.status(501);
  res.json({
    error: 'Not Implemented!'
  });
});

app.listen(8080, function() {
  console.log('App listening on port 8080');
});

/*===================================
; Title: Exercise 4.2
; Author: George Henderson
; Date: 31 January 2021
; Description: Demonstrates creating an API endpoint returning JSON.
;===================================*/

const { response } = require('express');
var express = require('express');

var app = express();

app.get('/customer/:id', function(req, res) {
  var custId = parseInt(req.params.id, 10);

  res.json({
    firstName: 'George',
    lastName: 'Henderson',
    date: new Date()
  });
});

app.listen(8080, function() {
  console.log('App listening on port 8080');
});

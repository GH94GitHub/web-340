const { response } = require('express');
/*====================
; Title: Exercise 2.3
; Author: George Henderson
; Date: 12 January 2021
; Description: Demonstrates using routes with express.
;====================*/

/*
  Expected:

  After running this file you should be able to go to localhost:3000/
  & pick one of the routes below to display a different message.
*/

const express = require('express');

let app = express();

// Route('/')
app.get('/', function(req, res) {
  res.end('Welcome to the homepage!');
});

// Route('/about')
app.get('/about', function(req, res) {
  res.end('Welcome to the about page!');
});

// Route('/contact')
app.get('/contact', function(req, res) {
  res.end('Welcome to the contact page!');
});

// Default Route
app.use(function(req, res) {
  res.statusCode = 404;
  res.end('404');
});

app.listen(3000, () => console.log('App listening on port 3000'));

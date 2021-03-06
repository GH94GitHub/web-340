/*===============================
; Title: Assignment 2.4
; Author: George Henderson
; Date: 12 January 2021
; Description: Uses ejs to render web pages
;===============================*/
const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    firstName: 'Jeff',
    lastName: 'Jefferson',
    address: '1234 Jefferson Street'
  });
});

app.listen(3000, () => console.log('EJS-Views app started on port 3000.'));

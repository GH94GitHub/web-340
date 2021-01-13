/*=========================
; Title: Exercise 2.2
; Author: George Henderson
; Date: 12 January 2021
; Description: Demonstrates using express to handle a request
;=========================*/

/*
  Expected Output:

  After running this file you should be able to
  open a browser and go to localhost:3000 and see "Hello World".
*/
const express = require('express');

let app = express();

// Request Handler - Logs the url requested & sends 'Hello World' to the requesting browser.
app.use(function(req, res) {
  console.log('In comes a request to:' + req.url);
  res.end('Hello World');
});

// Used express method instead of requiring http module.
app.listen(3000, () => console.log('app listening on port 3000'));

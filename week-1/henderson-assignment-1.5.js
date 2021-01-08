/*===========================
; Title: Assignment 1.5
; Author: George Henderson
; Date: 08 January 2021
; Description:
;===========================*/
const http = require('http');

function processRequest(req, res) {
  let body = 'Hello my friends.';
  let contentLen = body.length;

  res.writeHead(200, {
    'Content-Length': contentLen,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

let server = http.createServer(processRequest);

server.listen(8080);

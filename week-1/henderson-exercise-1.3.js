/*==========================
; Title: Exercise 1.3
; Author: George Henderson
; Date: 08 January 2021
; Description: Practice/Demonstrates using built-in url module.
;==========================*/
const { parse } = require("path");
const url = require("url");
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 1.3') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 1.3
  Date: 1/8/2021

  https:
  www.twitch.tv
  hello
*/

let parsedURL = url.parse('https://www.twitch.tv/forsen?hello');

// Output
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

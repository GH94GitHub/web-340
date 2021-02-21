var assert = require('assert');
var strSplit = require('../henderson-exercise-7.2');

describe('String#split', function() {
  it('should return an array of fruits', function() {
    assert(Array.isArray(strSplit('Apple,Orange,Mango')));
  });
});


var tap = require('tap')

var addition = require('./addition')

tap.test('should add two numbers', function(t){
  var first = 7;
  var second = 12;

  var results = addition(first, second);
  t.equal(results, 19);
  t.end();
})

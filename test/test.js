var user = require('../lib/user');
var consoleGreet = require('../lib/greet');
var expect = require('chai').expect;

describe('user.js', function() {
  it('will say "hello Hana" when passed Hana', function() {
    expect(user.greet('Hana')).to.eql('hello Hana');
  });
});
  
describe('greet.js', function() {
  it('will process arguments passed from the console', function() {
    // Nick helped me figure out how to write the test to make sure arguments are being processed.
    var consoleInput = ["node", "greet.js", "Hana"];
    expect(user.greet(consoleInput[2])).to.eql('hello Hana');
  });
});

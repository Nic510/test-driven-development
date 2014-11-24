var expect = require('chai').expect;

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});

// Write the method that will make this test pass.
var reverseString = function(s) {
  var o = '';
  for (var i = 0 ; i < s.length; i++) {
    o = s[i] + o;
  }
  return o;
}
reverseString('Hello');
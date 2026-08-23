const assert = require('assert');

function reverse(str) {
  return str.split('').reverse().join('');
}

// Unit test
assert.strictEqual(reverse('hello'), 'olleh');
assert.strictEqual(reverse(''), '');
assert.strictEqual(reverse('a'), 'a');
assert.strictEqual(reverse('racecar'), 'racecar');
console.log('All tests passed!');

module.exports = reverse;

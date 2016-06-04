const assert = require('assert');

describe('fizzBuzz', () => {
  it('Test 1', () => {
    assert.equal(1, fizzBuzz(1));
  });
  it('Test 3', () => {
    assert.equal('Fizz', fizzBuzz(3));
  });
  it('Test 5', () => {
    assert.equal('Buzz', fizzBuzz(5));
  });
  it('Test 15', () => {
    assert.equal('FizzBuzz', fizzBuzz(15));
  });
  it('Test Prime', () => {
    assert.equal(67, fizzBuzz(67));
  });
});

function fizzBuzz(n) {
  var result = '';

  if (n % 3 == 0){
    result = 'Fizz';
  }

  if (n % 5 == 0){
    result = result + 'Buzz';
  }
  
  if (result == ''){
    result = n;
  }

  return result;
}

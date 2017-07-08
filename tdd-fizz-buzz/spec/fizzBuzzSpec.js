describe('function fizzBuzz', function () {

  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  });
  it('should be a function', function () {
    var result = fizzBuzz
    var expected = 'function'
    expect(typeof result).toBe(expected)
  });
  it('should return an array', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toBeTruthy()
  });
  it('should return an array with 100 elements', function () {
    var result = fizzBuzz()
    var expected = 100;
    expect(result.length).toBe(expected)
  });
  it('should return 1 when there are not multiples', function () {
    var result = fizzBuzz()
    var expected = 1;
    expect(result[0]).toBe(expected)
  });
  it('should return FizzBuzz when value is divisible by 3 and 5', function () {
    var result = fizzBuzz()
    var expected = 'FizzBuzz';
    expect(result[14]).toBe(expected)
  });
  it('should return Fizz when value is divisible by 3', function () {
    var result = fizzBuzz()
    var expected = 'Fizz';
    expect(result[2]).toBe(expected)
  });
   it('should return Buzz when value is divisible by 5', function () {
    var result = fizzBuzz()
    var expected = 'Buzz';
    expect(result[4]).toBe(expected)
  });

});

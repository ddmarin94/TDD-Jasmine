
describe('function peopleWithAgeDrink', function() {

  it('should exist', function() {
    expect(peopleWithAgeDrink).toBeDefined()
  });
  it('should be a function', function() {
    expect(typeof peopleWithAgeDrink).toBe("function")
  });
  it('should return drink toddy if age is 13', function() {
    var result = peopleWithAgeDrink(13)
    expect(result).toBe("drink toddy")
  });
  it('should return drink coffee if age is 17', function() {
    var result = peopleWithAgeDrink(17)
    expect(result).toBe("drink coke")
  });
    it('should return drink beer if age is 18', function() {
    var result = peopleWithAgeDrink(18)
    expect(result).toBe("drink beer")
  });
    it('should return drink beer if age is 20', function() {
    var result = peopleWithAgeDrink(20)
    expect(result).toBe("drink beer")
  });
    it('should return drink whisky if age is 30', function() {
    var result = peopleWithAgeDrink(30)
    expect(result).toBe("drink whisky")
  });
});

// Write a *getPrimes*  function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis. 
// The generated prime numbers should be in an array. 
// If no prime number is obtainable for the input, return an empty array.
// Your logic should be as efficient as possible (with minimal iterations).
// Your code should also address edge cases (invalid input, negative input value, or zero as input).
var location = require('../app/getPrimes.js');
describe("getPrimes tests", function() {

  describe("should determine prime numbers from 0 to n", function(){

    it("should determine prime numbers from 0 to 20", function() {
      expect(location.getPrimes(20)).toEqual([1,2,3,5,7,11,13,17,19]);
    });
    it("should determine prime numbers from 0 to 10", function() {
      expect(location.getPrimes(10)).toEqual([1,2,3,5,7]);
    });
    it("should determine prime numbers from 0 to 50", function() {
      expect(location.getPrimes(50)).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });
  });

  describe("should determine if input entered is invalid", function(){
    it("should return invalid input if 0 is entered", function() {
    expect(location.getPrimes(0)).toEqual('invalid input');
    })
    it("should return invalid input if a negative number is entered", function() {
    expect(location.getPrimes(-20)).toEqual('invalid input');
    })
    it("should return invalid input if a string is entered", function() {
    expect(location.getPrimes('o')).toEqual('invalid input');
    })
  });

});
  
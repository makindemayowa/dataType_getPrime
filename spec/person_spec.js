(function(){
  'use strict';
  var Person = require('../app/person.js').Person;
  var Man = require('../app/person.js').Man;

  describe("Person Class: Create a Person instance", function() {

    it("The person should be a type of `object`, and an instance of the `Person` class", function() {
      var mayowa = new Person('mayowa', 26, 'male');
      expect(typeof mayowa).toEqual(typeof {});
      expect(mayowa instanceof Person).toBeTruthy();
    });

    it("The person should throw an error for gender if passed another parameter instead of male or female", function() {
      var dayo = new Person('dayo', 18, 'male');
      expect(dayo.gender).toBe('male');
    });

    it("The person's age should be a property of the person", function() {
      var ife  = new Person('ife', 20, 'female');
      expect(ife.age).toBe(20);
    });

    it("The person should have a an info property", function() {
      var mayowa  = new Person("mayowa", 26, "male", "Anthony", "07038399928");
      expect(mayowa.info()).toBe('My name is mayowa, aged: 26, phone number is 07038399928 and I reside in Anthony');
    });

    it("The Person class should have attribute sayHello", function() {
      var mayowa  = new Person('mayowa', 25, 'male');
      expect(mayowa.sayHello()).toBe('Hello my name is mayowa. Pleased to meet you. :)');
    });
  });

  describe("Man Class: Create a Man instance", function() {
  	it("The person should be male", function() {
  		var mayowa = new Man("mayowa", 26, "Anthony", "07038399928");
      	expect(mayowa.gender).toBe('male');
    })
  })

})();



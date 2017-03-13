'use strict'
function Person(name, age, gender, location, phone, eyeColor) {
  this.name = name;
  this.age = age;
  if (gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'female') {
    throw new Error('Gender can only be male or female');
  }
  this.gender = gender;
  this.location = location;
  this.phone = phone;
  this.eyeColor = eyeColor;
  this.info = function() {
    return "My name is " + this.name + ", aged: " + this.age + ", phone number is " + this.phone + " and I reside in " + this.location;
  };
}

Person.prototype.smile = function () {
  console.log(':)');
}

Person.prototype.cry = function() {
  console.log(';(');
}

Person.prototype.sayHello = function () {
  return ('Hello my name is ' + this.name + '. Pleased to meet you. :)');
}

Man.prototype = Object.create(Person.prototype)

function Man(name, age, location, phone, eyeColor) {
  var man = Object.create(Man.prototype);
  Person.call(man, name, age, "male", location, phone, eyeColor);
  return man;
}

module.exports.Person = Person;
module.exports.Man = Man;
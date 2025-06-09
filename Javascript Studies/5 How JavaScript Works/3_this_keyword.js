'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(this);
};

calcAge(2002);

// in arrow function this refers to this of global scope
const calcAgeArrow = (birthYear) => {
  console.log(this);
};

calcAgeArrow(2002);

const afonso = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

afonso.calcAge(2002);

const matilda = {
  year: 2017,
};

// this keyword always points to the object that calls the method
matilda.calcAge = afonso.calcAge;
matilda.calcAge();

const a = afonso.calcAge;
// this results in undefined,beacause none object is used to call this method
a();

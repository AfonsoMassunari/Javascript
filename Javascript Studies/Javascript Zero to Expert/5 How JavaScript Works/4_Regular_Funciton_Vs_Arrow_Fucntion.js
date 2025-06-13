'use strict';

const afonso = {
  firstName: 'Afonso',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    //   // function inside a method
    //   const self = this;
    //   const isMillenial = function () {
    //     // this here doest work
    //     // console.log(this.year >= 1981 && this.year <= 1996);
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
//the whole Object is not a scope,for this the arrow function uses the global 'this'
// arrow function doesnt gets this keyword
afonso.greet();
console.log(this.firstName);
// if you declare a var the arrow function will use this as a argument to the method
var firstName = 'Matilda';
afonso.greet();
//never uses a arrow function as a method
afonso.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Arrow Functions can't use "arguments"
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

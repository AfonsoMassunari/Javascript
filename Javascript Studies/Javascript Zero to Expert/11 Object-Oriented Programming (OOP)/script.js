'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this, never create methods inside contructor functions
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};

const afonso = new Person('Afonso', 2002);
console.log(afonso);

// 1. New {object} is created
// 2. function is called, this = {object}
// 3. {object} linked to prototype
// 4. function automatically return {object}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(afonso instanceof Person);

///////////////////////////////////////////////////////
//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

afonso.calcAge();
matilda.calcAge();

console.log(afonso.__proto__);
console.log(afonso.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(afonso));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Home Sapiens';
console.log(afonso.species, matilda.species);
console.log(afonso.hasOwnProperty('firstName'));
console.log(afonso.hasOwnProperty('species'));

// Prototypal Inheritance on Built-In Objects
console.log(afonso.__proto__);
// Object.prototype (top of prototype chain)
console.log(afonso.__proto__.__proto__);
console.log(afonso.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 66, 8, 4, 3, 64, 32, 2, 66]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Never add new methods to prototypes of general objects
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir((x) => x + 1);

///////////////////////////////////////
// Coding Challenge #1

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
const ferrari = new Car('Ferrari', 120);
const lamborghini = new Car('Lamborghini', 150);

ferrari.accelerate();
ferrari.brake();
ferrari.accelerate();
ferrari.brake();

lamborghini.accelerate();
lamborghini.brake();
lamborghini.accelerate();
lamborghini.brake();

///////////////////////////////////////////////////////////////////////////
//ES6 Classes

//class expression
// const PersonCl = class{}

///class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Method will be add to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }
}

const emily = new PersonCl('Emily');
console.log(emily);
emily.calcAge();

console.log(emily.__proto__ == PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
emily.greet();

// 1. Classes are NOT  hoised
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

///////////////////////////////////////////////////////
//Setters and Getters

const account = {
  owner: 'Afonso',
  movements: [200, 300, 124, 435],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

console.log(afonso.age);

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instances methods
  //Method will be add to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const murilo = new PersonCl2('murilo alvarenga', 2002);
console.log(murilo);
console.log(murilo.age);

///////////////////////////////////////////////////
//Static methods

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

// afonso.hey();
PersonCl2.hey();

/////////////////////////////////////////////////////////////
//Object.create

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const saphira = Object.create(PersonProto);
console.log(saphira);
saphira.name = 'Saphira';
saphira.birthYear = 2002;
saphira.calcAge();

console.log(saphira.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1985);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

// DATA CAR 1: 'Ford' going at 120 km/h

// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUs) {
    this.speed = speedUs * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(`Ford is going at ${ford.speedUS} mi/h`);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

////////////////////////////////////////////////////////
//Inheritance Between "Classes": Constructor Functions

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ryan = new Student('Ryan', 2020, 'Computer Science');
console.log(ryan);
ryan.introduce();
ryan.calcAge();

console.log(ryan.__proto__);
console.log(ryan.__proto__.__proto__);

console.log(ryan instanceof Student);
console.log(ryan instanceof Person);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

//////////////////////////////////////
// Coding Challenge #3

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes
EV.prototype = Object.create(Car.prototype);

//Adjusting the constructor
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

//////////////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class StudentCl extends PersonCl2 {
  constructor(fullName, birthYear, course) {
    //Always should happens first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2025 - this.birthYear} years old, but I fell more like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const sophia = new StudentCl('Sophia Carvalho', 2002, 'Biomedical Engeneering');
sophia.introduce();
sophia.calcAge();

////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto2 = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto2);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const stevan = Object.create(StudentProto);
stevan.init('Stevan', 2002, 'Computer Engeneering');
stevan.introduce();
stevan.calcAge();

////////////////////////////////////////////////
// Another Class Example and Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  locale = navigator.language;
  //Private
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;
  }

  //Private methods
  #approveLoan(val) {
    //Fake method
    return true;
  }

  //Public interface (API)
  getMovements() {
    return this.#movements;
    //Not chainable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Afonso', 'BRL', 1111);
// acc1.movements.push(230);
// acc1.movements.push(-130);
acc1.deposit(230);
acc1.withdraw(130);
acc1.requestLoan(1000);

console.log(acc1);
// console.log(acc1.#movements);

/////////////////////////////////////////////////////////////
//Chaining Methods

const acc2 = new Account('Luiz', 'EUR', 2222);
const movements = acc2
  .deposit(300)
  .withdraw(200)
  .withdraw(100)
  .requestLoan(2000)
  .getMovements();

console.log(movements);

///////////////////////////////////////
// Coding Challenge #4

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUs) {
    this.speed = speedUs * 1.6;
  }
}

class EVCl extends CarCl2 {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla2 = new EVCl('Tesla', 120, 23);
console.log(tesla2);

tesla2.accelerate().accelerate().brake().chargeBattery(50).accelerate();

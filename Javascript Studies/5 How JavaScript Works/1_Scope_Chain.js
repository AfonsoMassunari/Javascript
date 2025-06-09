'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //JavaScript tries to look for the variable name in the current scope. So now the firstName will be Steven in this scope
      //Creating a NEW  variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope´s variable
      output = 'NEW OUTPUT';

      const str = `Oh, and You're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //Thus is a new variable with same name
    }
    // console.log(str);
    console.log(millenial);
    // This below just works without the 'use strict'
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Afonso';
calcAge(1991);

// in this two cases qe can not acess the variables,because they are not in scope
// console.log(age);
// printAge();

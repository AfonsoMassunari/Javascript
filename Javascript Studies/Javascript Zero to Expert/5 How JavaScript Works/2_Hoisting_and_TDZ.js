'use strict';

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Afonso';
let job = 'teacher';
const year = 1991;

//Funtions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

//The only function that you can use before declaration is the function declaration
function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//Example:

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x == window.x);
console.log(y == window.y);
console.log(z == window.z);

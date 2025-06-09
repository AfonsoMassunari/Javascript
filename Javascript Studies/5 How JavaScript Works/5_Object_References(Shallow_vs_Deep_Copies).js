'use strict';

const afonso = {
  firstName: 'Afonso',
  lastName: 'Massunari',
  age: 22,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedAfonso = marryPerson(afonso, 'Luiz');
// this is the same object,because uses the same reference
// const marriedAfonso = afonso;
// marriedAfonso.firstName = 'Luiz';

console.log('Before:', afonso);
console.log('After:', marriedAfonso);

// creating a new copy of Object
const afonso2 = {
  firstName: 'Afonso',
  lastName: 'Massunari',
  age: 22,
  family: ['Alice', 'Bob'],
};

//Shallow copy
const afonsoCopy = { ...afonso2 };
afonsoCopy.firstName = 'Davis';

// arrays in javascript ar3e objects and are saved in heap, so if you change an array in a copy of obejct will change the array in object too
console.log(afonso2, afonsoCopy);
afonsoCopy.family.push('Mary');
afonsoCopy.family.push('John');

console.log('Before', afonso2);
console.log('After', afonsoCopy);

//Deep copy
const afonsoClone = structuredClone(afonso2);
afonsoClone.family.push('Luiza');
afonsoClone.family.push('Sarah');

console.log('Original', afonso2);
console.log('Clone', afonsoClone);

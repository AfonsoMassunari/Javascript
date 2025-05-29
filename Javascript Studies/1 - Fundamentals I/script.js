// let js = "amazing";
// if (js == "amazing") alert("Javascript is Fun");
// console.log(40 + 8 + 23 - 10);

// VALUES AND VARIABLES

/*
console.log("Afonso");
console.log(23);

let firstName = "Afonso";
console.log(firstName);

let person = "otavio";
let PI = 3.1415; // write constats in Uppercase

let myFirstJob = "Programer";
let myCurrentJob = "Teacher";

let country = "Brazil";
let continent = "South America";
let population = 200;

console.log(country);
console.log(continent);
console.log(population);
*/

// DATA TYPES

// In Javascript the value has a typr not the variablea

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //This is a Bug, it appears like a object
*/

// LET,CONST and VAR

/*
let age = 30;
// we mutate the variable
age = 31;

const birthYear = 1991; //This variable can't be mutaded

var job = "Programmer"; //Var is not useful
job = "Teacher";
*/

//BASIC OPERATORS

//Math Operators
/*
const currentYear = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Afonso";
const lastName = "Massunari";
console.log(firstName + " " + lastName);

//Assignment Operaators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);
*/

//Comparison Operators

/*
console.log(ageJonas > ageSarah); //>, <, >=, <=, ==
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(currentYear - 1991 > currentYear - 2018);
*/

//Operator Precedent

/*
const currentYear = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(currentYear - 1991 > currentYear - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
*/

//CHALLENGE 1

/*
let massMark = 78,
    heightMark = 1.69;

let massJohn = 92,
    heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark),
    BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

// STRINGS AND TEMPLATES LITERAL
/*
const firstName = "Afonso";
const job = "teacher";
const birthYear = 2002;
const year = 2025;

const afonso =
    "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job + "!";
console.log(afonso);

const afonsoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(afonso);

console.log(`Just a regular string...`);

console.log(
    "String with \n\
multiple\n\
lines"
);

console.log(`String
multiple
lines`);
*/

// IF/ELSE STATEMENTS
/*
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2002;

let century = 20;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

// CHALLENGE 2

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`"John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
*/

// TYPE CONVERSION AND COERCION

//type coversion
/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); //gives Number

console.log(String(23), 23);

//type coercion
console.log("I am" + 23 + "years old");
console.log("I am" + "23" + "years old"); // console.log('I am' + String(23) + 'years old')
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // String = '11'
n = n - 1; //Number = 10
console.log(n);
*/

//TRUTHY AND FALSY VALUES

//0,'',undefined,null,NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean(""));

const money = 0;

if (money) {
    console.log("Don´t spend it all");
} else {
    console.log("You should get a job!");
}

let height = 0;

//this can cause a bug because 0 is defined 
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}
*/

//EQUALITY OPERATORS == VS ===
/*
const age = 18;

if (age === 18) {
    console.log("TYou just became an adult");
}

if (age == "18") {
    console.log("TYou just became an adult");
}
//== perform type coercion, so 18 == '18' is true, don´t use ==

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amzing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not a 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/

//LOGICAL OPERATORS

/*
const hasDriverLicense = true;
const hasGoodVision = false;
const isTired = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

let shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Sarah is not able to drive!");
}
*/

// CHALLEGE 3
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins>=100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas>=100) {
    console.log("Koalas win the trophy");
} else if(scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100){
    console.log("Both win the trophy");
} else{
    console.log('No one wins the trophy');
}
*/

// THE SWIFTCH STATEMENT
/*
const day = "wednesday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theaory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
    case "friday":
        console.log("Recorded videos");
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a vali day!");
}
*/

//STATEMENT AND EXPRESSIONS

/*
if (day === "monday") {
    console.log("Plan course strucutre");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thurday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}

if (23 > 10) {
    const str = "23 is bigger";
}

//statement don't produce a value 

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`); //expression produce value like 2037 - 1991

const age = 23;

//THE CONDITIONAL TERNARY OPERATOR

/*age >= 18 ? console.log("I like to drink wine🍷")
    : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

//CHALLENGE 4
let bill = 275;
let tip;

if (bill >= 50 && bill <= 300) {
    tip = (15 / 100) * bill;
} else {
    tip = (20 / 100) * bill;
}

let totalValue = bill + tip;

console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);

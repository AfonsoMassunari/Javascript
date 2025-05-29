"use strict"; //forbid some errors and warn you about errors
/*
all erros above,they are notified by use strict 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio";
const private = 534;
*/

// FUNCTIONS

/*
function logger() {
    console.log("My name is Afonso");
}

// calling the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

// FUNCTION DECLARATIONS VS EXPRESSIONS

/*

// function declaration
//function that can be used before it's declared
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// this function is an expression,so produces value,functions in javascript are values
// Function expression
const calcAge2 = function (birthYear) {
    return 20237 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// ARROW FUNCTION
/*
//This fuction has no 'this' keyword
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement("Afonso", 2002));
*/

// Function calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

//REVIEW FUNCTIONS

/*
const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
};

console.log(yearsUntilRetirement(2002, "Afonso"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//CHALLENGE 5
/*
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);
*/

// ARRAYS
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const afonso = ["Afonso", "Massunari", 2037 - 1991, "teacher", friends];
console.log(afonso);
console.log(afonso.length);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const years = new Array(1991, 1984, 2008, 2020);

console.log(calcAge(years[0]));
console.log(calcAge(years[years.length - 1]));

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];

console.log(ages);
*/

// ARRAY OPERATIONS
/*
const friends = ["Michael", "Steven", "Peter"];

// add a element in the end of array and return lentgh
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// add a element in the beginning of array and return lentgh
friends.unshift("John");
console.log(friends);

// Remove elements and return the remove element
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

*/

// CHALLENGE 6
/*
function calcTip(billValue) {
    if (billValue <= 300 && billValue >= 50) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [
    calcTip(bills[0]) + bills[0],
    calcTip(bills[1]) + bills[1],
    calcTip(bills[2]) + bills[2],
];

console.log(totals);
*/

// INTRODUCION TO OBJECTS

// const afonso = {
//     firstName: "Afonso",
//     lastName: "Massunari",
//     age: 2037 - 1991,
//     job: "Student",
//     friends: ["Luiz", "Ryan", "Maria"],
// };

// console.log(afonso);

// Dot vs Bracket Notation

// console.log(afonso.lastName);
// console.log(afonso["lastName"]);

// const nameKey = "Name";
// console.log(afonso["first" + nameKey]);
// console.log(afonso["last" + nameKey]);

// const inteerestIn = prompt(
//     "What do you want to know about Afonso? Choose between fistNmae, lastName, age, job and friends"
// );

// if (afonso[inteerestIn]) {
//     console.log(afonso[inteerestIn]);
// } else {
//     console.log("Wrong request!");
// }

// afonso.location = "Brazil";
// afonso["twitter"] = "@afonsoMassunari";
// console.log(afonso);

// console.log(
//     `${afonso.firstName} has ${afonso.friends.length} friends ,and his best friend is called ${afonso.friends[0]}`
// );

//OBJECT METHODS
// const afonso = {
//     firstName: "Afonso",
//     lastName: "Massunari",
//     birthYear: 2002,
//     job: "Student",
//     friends: ["Luiz", "Ryan", "Roberta"],
//     hasDriverLicense: true,

//     calcAge1: function (birthYear) {
//         return 2025 - birthYear;
//     },

//     calcAge2: function () {
//         return 2025 - this.birthYear;
//     },

//     calcAge3: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `My name is ${this.firstName} ${
//             this.lastName
//         }, I am ${this.calcAge3()} years old ${this.job}`;
//     },
// };

// console.log(afonso.calcAge1(2002));
// console.log(afonso["calcAge1"](2002));

// console.log(afonso.calcAge2());
// console.log(afonso.calcAge3());

// console.log(afonso.getSummary());

// CHALLENGE 7
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// const john = {
//     fullName: "Mark Miller",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(
//         `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//             john.fullName
//         }'s (${john.calcBMI()})!`
//     );
// } else if (mark.calcBMI() < john.calcBMI()) {
//     console.log(
//         `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//             john.fullName
//         }'s (${john.calcBMI()})!`
//     );
// }

//´LOOPS
// const afonso = [
//     "Afonso",
//     "Massunari",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
// ];

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i}`);
// }

// const types = [];

// for (let i = 0; i < afonso.length; i++) {
//     //Reading from afonso array
//     console.log(afonso[i], typeof afonso[i]);

//     //Filling types array
//     // types[i] = typeof afonso[i];
//     types.push(typeof afonso[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2025 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < afonso.length; i++) {
//     if (typeof afonso[i] !== "string") continue;
//     console.log(afonso[i], typeof afonso[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < afonso.length; i++) {
//     if (typeof afonso[i] === "number") break;
//     console.log(afonso[i], typeof afonso[i]);
// }

//LOOPING BACKWARDS AND LOOPS IN LOOPS

// const afonso = [
//     "Afonso",
//     "Massunari",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true,
// ];

// //0,1,...,4
// //4,3,...,0

// for (let i = afonso.length - 1; i >= 0; i--) {
//     console.log(i, afonso[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weigth repetition ${rep}`);
//     }
// }

//THE WHILE LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6);
// console.log(dice);
+                                                                                                                                                                                                                     
            /////
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log("Loop is about to end...");
// }

// CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

console.log(`${bills}`);
console.log(`${tips}`);
console.log(`${totals}`);

function calcAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(`${calcAverage(totals)}`);

// "parâmetros" são os nomes definidos na declaração
// de uma função que atuam como espaços reservados,
// enquanto "argumentos" são os valores reais que são
// passados para esses parâmetros quando a função é chamada.

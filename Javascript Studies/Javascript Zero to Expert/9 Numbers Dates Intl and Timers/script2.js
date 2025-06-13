//Base 10 to 9. 1/10 = 0.1   3/10 = 3.33333333
//Binary base 2
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('px30', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

//This method is not good,Check if alue is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN('OI'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

//Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
//////////////////////////////////////////////////////////
//Math and Rounding

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));

//Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

////////////////////////////////////////
// The Remainder Operator

console.log(5 % 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

///////////////////////////////////////////////////
//Numeric Separators

//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const traferFee = 15_00;
const tranferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

//This doesn't work
console.log(Number('230_000'));

////////////////////////////////////////////////////
//Working with BigInt

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

//These are not safe numbers
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(123456098764259871234578746744n);
//These works with smaller numbers
console.log(BigInt(12345609876425987));

//Operations
console.log(10000n + 10000n);
console.log(24323515235123553253n * 10000000n);

const huge = 2028312314124012423424n;
const num = 23;
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
//Is different because they don't have the same primitive type
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + 'is REALLY big !!!');

//Division
console.log(10n / 3n);
console.log(10 / 3);

//Create a date
const now2 = new Date();
console.log(now2);

console.log(new Date('May 28 2025 16:43:49'));
console.log(new Date('August 31,2002'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
//3 days 24 hours 60minutes 60 seconds 10000 miliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const future = new Date(2050, 7, 31, 0, 0);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2545527600000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

///////////////////////////////////////////////////////////////
//Operations With Dates

const future2 = new Date(2050, 7, 31, 0, 0);
console.log(+future2);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const daysPassed = calcDaysPassed(new Date(2050, 7, 1), new Date(2050, 7, 31));
// console.log(daysPassed);

/////////////////////////////////////////////////////////////////
//Internationalizing Numbers (Intl)

const num3 = 3884764.23;

const options2 = {
  style: 'currency', //'currency','unit','percent'
  // unit: 'celsius',
  currency: 'BRL',
  // useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options2).format(num3));
console.log('BR: ', new Intl.NumberFormat('pt-BR', options2).format(num3));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num3));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options2).format(num3));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options2).format(num3)
);

//////////////////////////////////////////////////////////
//Timers: setTimeout and setInterval

//setTimeout
const ingridients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is yout pizza ${ing1} ${ing2} 🍕`),
  3000,
  ...ingridients
);
console.log('Waiting...');

//without 'spinach' the pizza timer runs
if (ingridients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval

// setInterval(function () {
//   const now3 = new Date();
//   console.log(now3);
// }, 3000);

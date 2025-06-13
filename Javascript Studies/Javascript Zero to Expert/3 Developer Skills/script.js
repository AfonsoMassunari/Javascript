// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM 1
//Given an array of température of one day,
//  calculate the temperature amplitude.
//  Kepp in mind that sometimes there might
//  be a sensor error.

// 1) Understand the problem
// - what is emp amplitude? Answer: difference between highest and lowst temp
// - How to compute max and min temperatures?
//- What's a sensor error? And what to do?

// 2) Braking up into sub-problems
// - How to ignore errors?
// -Find max value in temp array:
// - Find min value in temp Array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
//function should now receive 2 arrays of temps
// 1) Understand the problem
//you should not nedd to implement twice!

// 2) Braking up into sub-problems
//- Merge 2 arrays

const temperature1 = [3, -2, -6, -1, 'error'];
const temperature2 = [9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude2 = calcTempAmplitude2(temperature1, temperature2);
console.log(amplitude2);

//DEBUGGING CODES

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //FIX
    value: Number(prompt('Degrees celsius:')),
  };
  //FIND
  console.log(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const temperature3 = [3, -2, -6, -1, 'error'];
const temperature4 = [9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude3 = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude3 = calcTempAmplitude3(temperature3, temperature4);
console.log(amplitude3);

//CHALLENGE 1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C° in ${i + 1} days ...`;
  }
  console.log('... ' + str);
}

printForecast(data1);
printForecast(data2);

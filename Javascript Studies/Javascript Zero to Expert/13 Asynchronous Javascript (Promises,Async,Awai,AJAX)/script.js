'use strict';

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1_000_000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//////////////////////////////////////////////////////
const getCountryAndNeighbour = function (country) {
  //AJAX CALL country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX CALL country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('brazil');

//Callback hell
const CallBackHell = function () {
  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('2 second passed');
      setTimeout(() => {
        console.log('3 second passed');
        setTimeout(() => {
          console.log('4 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

// CallBackHell();

///////////////////////////////////////
//Promises and the Fecth API
const request = fetch('https://restcountries.com/v2/name/brazil');
console.log(request);

///////////////////////////////////////
//Consuming Promises

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//Chaining Promises and Hadling Rejected Promises and Throwing Error manually
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders[0];
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data, 'neighbour'))
//     .catch((err) => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('brazil');
// getCountryData('fsfsffsf');

//////////////////////////////////////////
//Throwing Errors Manually

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
    .then((data) => {
      renderCountry(data[0]);
      console.log('aqui');
      const neighbour = data[0]?.borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      //Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData('brasil');

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

///////////////////////////////////////
// Coding Challenge #1

// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
// The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding(${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Problem with country(${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => {
//       console.log(`${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/////////////////////////////////
//Event loop in practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then((res) => console.log(res));
// Promise.resolve('Resolved promise 2').then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

////////////////////////////////
//Building a Simple Pormise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 🩻'));
    }
  }, 2000);
});

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log('1 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// Promise.resolve('Abc').then((x) => console.log(x));
// Promise.reject(new Error('Abc Probelm!')).catch((x) => console.log(x));

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding(${res.status})`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with country(${res.status})`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(`${err.message}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

// Build the image loading functionality that I just showed you on the screen.

// Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and
// sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise.
// The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// If this part is too tricky for you, just watch the first part of the solution.

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.

// TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

const callCreateImg = function () {
  createImage('img/img-1.jpg')
    .then((img) => {
      currentImg = img;
      console.log('Image 1 loaded');
      return wait(2);
    })
    .then(() => {
      currentImg.style.display = 'none';
      return createImage('img/img-2.jpg');
    })
    .then((img) => {
      currentImg = img;
      console.log('Image 2 loaded');
      return wait(2);
    })
    .then(() => {
      currentImg.style.display = 'none';
      return createImage('img/img-3.jpg');
    })
    .then((img) => {
      currentImg = img;
      console.log('Image 3 loaded');
      return wait(2);
    })
    .then(() => {
      currentImg.style.display = 'none';
    })
    .catch((err) => console.log(err));
};

// callCreateImg();

///////////////////////////////////////////////
// Consuming Promises with Async/Await

const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI2 = async function () {
  // Geolocation
  const pos = await getPosition2();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
    {
      headers: {
        'User-Agent': 'MyReverseGeoApp/1.0 (your-email@example.com)',
      },
    }
  );
  if (!resGeo.ok) throw new Error('Localization Error');
  const dataGeo = await resGeo.json();

  // Country data
  const country = dataGeo.address.country;
  //This is the same of using await and async, is just syntetic sugar
  //   fetch(`https://restcountries.com/v2/name/${country}`).then((res) =>
  //     console.log(res)
  //   );
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  if (!res.ok) throw new Error('Country not found');

  const data = await res.json();
  renderCountry(data[0]);
};

// btn.addEventListener('click', whereAmI2);

/////////////////////////////////////////
//Error Handling With try...catch

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.log(err.message);
// }

const whereAmI3 = async function () {
  try {
    // Geolocation
    const pos = await getPosition2();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      {
        headers: {
          'User-Agent': 'MyReverseGeoApp/1.0 (your-email@example.com)',
        },
      }
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const country = dataGeo.address.country;
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${
      dataGeo.address.city || dataGeo.address.town || dataGeo.address.village
    }, ${country}`;
  } catch (err) {
    console.log(err);
    renderError(`${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};

btn.addEventListener('click', whereAmI3);

///////////////////////////////////////////
//Returning Values from Async Functions
console.log('1: Will get location');

//This return a promise and not the string
// const city = whereAmI3();
// console.log(city);

//This return a string,with you want to test the catch, put countryErro "const res = await fetch(`https://restcountries.com/v2/name/${countryErro}`);"
// whereAmI3()
//   .then((city) => console.log(city))
//   .catch((err) => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

//This works
// (async function () {
//   try {
//     const city = await whereAmI3();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2 : ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

/////////////////////////////////////////////
//Running Promises in Parallel
const getJSON2 = function (url, errorMsg = 'Something went wrong') {
  //   console.log('Fetching:', url);
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status})`);

    return response.json();
  });
};

const get3countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON2(`https://restcountries.com/v2/name/${c1}`),
      getJSON2(`https://restcountries.com/v2/name/${c2}`),
      getJSON2(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3countries('brazil', 'japan', 'usa');

///////////////////////////////////////////
//Other Promise Combinators: race, allSettled and any

//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON2(`https://restcountries.com/v2/name/italy`),
    getJSON2(`https://restcountries.com/v2/name/egypt`),
    getJSON2(`https://restcountries.com/v2/name/germany`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON2(`https://restcountries.com/v2/name/italy`), timeout(1)])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//Promise.allsettled
Promise.allSettled([
  Promise.resolve('Sucess'),
  Promise.reject('ERROR'),
  Promise.resolve('Another sucess'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//Promise.any [ES2021]
Promise.any([
  Promise.resolve('Sucess'),
  Promise.reject('ERROR'),
  Promise.resolve('Another sucess'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

// PART 1
// Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
// Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
const wait2 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer2 = document.querySelector('.images');

const createImage2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    //Load image 1
    let img = await createImage2('img/img-1.jpg');
    await wait2(2);
    img.style.display = 'none';

    //Load image 2
    img = await createImage2('img/img-2.jpg');
    await wait2(2);
    img.style.display = 'none';

    //Load image 3
    img = await createImage2('img/img-3.jpg');
    await wait2(2);
    img.style.display = 'none';
  } catch (err) {
    (err) => console.error(err);
  }
};

// loadNPause();

//PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = Promise.all(imgs);
    imgsEl.forEach((img) => img.classList.add('parallel'));
  } catch (err) {
    (err) => console.log(err);
  }
};

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

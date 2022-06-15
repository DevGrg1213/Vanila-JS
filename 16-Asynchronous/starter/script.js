'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*


const getCountry = function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();

request.addEventListener('load',function(){
	// console.log(this.responseText);
	const data = JSON.parse(this.responseText);
	console.log(data);
	let html = `
	        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>

	`;
	countriesContainer.insertAdjacentHTML('');
	countriesContainer.style.opacity = 1;
	})
};
getCountry('usa');
getCountry('nepal');

*/

////////////////////////////////////
//////////////promise and fetch API
///////////////////////////////////

// how we used to fetch API

/*

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/peru');
request.send();

request.addEventListener('load',function(){
	const [data] = JSON.parse(this.responseText);

	console.log(data);
})

*/

// modern way

// const countryData = function(country){
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 	.then(function(response){
// 		return response.json();
// 	})
// 	.then(function(data){
// 		console.log(data[0]);
// 	})
// }

// countryData('nepal');

// coding challenge #1

// const country = new XMLHttpRequest();
// country.open('https://geocode.xyz/12.22,34.333?geoit=json');
// country.send();

// country.addEventListener('load', function () {
//   console.log(this.responseText);
// });

// const whereAmI = function () {
//   navigator.geolocation.getCurrentPosition(
//     function (location) {
//       const { latitude, longitude } = location.coords;
//       fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
//         .then(
//           response => response.json(),
//           error => console.error(error)
//         )
//         .then(data => console.log(data));
//     },
//     error => console.log(error)
//   );
// };
// whereAmI();

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(
//       response => response.json(),
//       error => console.error(error)
//     )
//     .then(data => console.log(data));
// };
// whereAmI(52.508, 13.381);

// Event loop

// console.log('Test start');
// setTimeout(() => console.log('hello'), 0);
// Promise.resolve('The resolved promise 1').then(res => console.log(res));
// Promise.resolve('Thre resolved promise 2').then(res => {
//   for (let i = 1; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test ends');

///////////////////////////
//// creating new promise
/////////////////////////

/*

console.log('Creating a new Promise');


const lotery = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You win');
  } else {
    reject('Better luck next time');
  }
});
lotery.then(
  res => console.log(res),
  error => console.log(error)
);

*/

////////////////////////
// promisifying timeout
/////////////////////

/*

console.log('------ promisifying timeout -----');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('I have waited 2 seconds');
    return wait(10);
  })
  .then(() => {
    console.log('I have waited 11 second');
    return wait(3);
  })
  .then(() => {
    console.log('I have waited 3 second');
    return wait(3);
  });

  */

/*

const whereAmI = function () {
  return navigator.geolocation.getCurrentPosition(
    function (location) {
      console.log(location);
      const { latitude, longitude } = location.coords;
      console.log(latitude, longitude);
    },
    function (error) {
      console.error(error);
    }
  );
};


const getMyLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   location => resolve(location),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getMyLocation().then(
  location => console.log(location.coords),
  error => console.error(error)
);

*/

/* 

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imageContainer = document.querySelector('.images');
const errorSection = document.createElement('h1');

const createImage = function (path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = path;
    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImage;
createImage('./img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image is loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('second image is loaded.');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .catch(error => console.error(error));

  */

////////////////////////////////////////
// consuming promise using async await
/////////////////////////////////////

/*

const getMyLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   location => resolve(location),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const getCountryData = async function () {
  try {
    // geo loaction
    const location = await getMyLocation();
    if (!location) throw new Error('Problem getting location');
    console.log(location);
    const { latitude: lat, longitude: lng } = location.coords;

    // reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res) throw new Error('Problem getting country data');
    const data = await res.json();
    console.log(data);

    return `I am at Latitude ${lat}, and Longitude ${lng}`;
  } catch (error) {
    console.error(err.message);

    // rejecting the promise if error occurs

    throw error;
  }
};

const result = getCountryData()
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('The promise is ended');
  });

(async function () {
  try {
    const res = await getCountryData();
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  console.log('The promise is ended');
})();

*/

///////////////////////////////
// running promise in parallel
/////////////////////////////
/*

// https://restcountries.com/v3.1/name/${country}
// const getJSON = async function (url) {
//   const country = await fetch(url);
//   const [data] = await country.json();
//   return data;
// };
const getJSON = function (url, errorMessage = 'unable to fetch the data') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMessage}(${response.status})`);
    return response.json();
  });
};
const getThreeCountires = async function (c1, c2, c3) {
  try {
    const fc = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    const [data1] = await fc.json();
    const sc = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
    const [data2] = await sc.json();
    const tc = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
    const [data3] = await tc.json();

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(country => country[0].capital));
    // const fthc = getJSON(`https://restcountries.com/v3.1/name/${c1}`);

    console.log(data1.capital, data2.capital, data3.capital);
  } catch (error) {
    console.error(error.message);
  }
};
getThreeCountires('nepal', 'japan', 'india');

*/
//////////////////////
///coding challnge #3
///////////////////

const imgsPath = ['./img/img-1.jpg','./img/img-2.jpg','./img/img-2.jpg'];

const loadAll = function(...imgsPath){
  
}
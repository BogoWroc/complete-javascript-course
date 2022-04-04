'use strict';

import fetch from "node-fetch";

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function whereAmI(lat, lon){
    fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
        .then(res => res.json())
        .then(res => console.log(`You are in ${res.state}, ${res.country}`))
        .catch(err => console.log(err));
}

whereAmI(52.508,13.381);
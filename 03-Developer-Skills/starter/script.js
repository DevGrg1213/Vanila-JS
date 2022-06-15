// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*-----------------coding challenge #1---------------- */
const test1 = [17,21,23];
const test2 = [15,5,-5,0,4];

const printForecast = function(arr){
    let str = '';
    for(let i = 0;i < arr.length;i++){
        // console.log(`${arr[i]}`);
        // console.log(`${arr[i]} degree celcius in ${i+1} day`);
        str = str + `${arr[i]} degree celcius in ${i+1} day${i < 1?'':'s'} ... `;
    }
    console.log('... '+str);
}


printForecast(test1);
printForecast(test2);
'use strict';

console.log("-------------- closure -------------");



console.log("-----------closure challenge #2---------");

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click',function(){
        header.style.color = 'blue';
    })
})()

// function first(){
//     let count = 0;
//     return function second(){
//         count++;
//         console.log(`${count} counts`);
//     }
// }
// const closureFun = first();
// closureFun();
// closureFun();
// closureFun();
// closureFun();
// console.dir(closureFun);


// console.log("=======--Immediately invoked function--========");
/*
// regular function declaration
(function(){
    console.log("This function can be called only once");
})();

// arrow function

(()=>console.log("This function can be called only once too..."))();

// anonymous function or function expression
let add = function(a,b){
    console.log(a+b);
}(12,13);

*/

// ============================================================
// console.log("---------------- coding challenge #1 -------------------");
/*
const myArr = [];
// console.log(typeof myArr);
const poll = document.querySelector('.poll');
poll.addEventListener('click',function(e){
    const polls = {
        question:"What is your favourite programming language ?",
        options:['Javascript','python','Rust','c++'],
        answer:new Array(4).fill(0),
    };
    console.log(polls.options.join('\n'));
    console.log(polls.answer);
    const  optionEr = function(arr){
        let str = "";
        for(const[i,value] of arr.entries()){
            str += `\n${i}.${value}`;
        }
        return str;
    }
    const displayResults = function(arr){
        if(typeof arr === "object"){
            console.log(`${arr}`);
        }
        else if(typeof arr === "string"){
            console.log(`polls results are ${polls.answer}`);
        }
    }
    const question = Number(prompt(`${polls.question}${optionEr(polls.options)}\n(write option number)`));
    if(question <= 3 && question >= 0 && question === "number"){
        polls.answer[question]++;
        displayResults(polls.answer);
        // console.log(polls.answer);
    }
    else{
        alert("Invalid options");
    }

    // console.log(polls.options);
});
*/
/*
console.log("------------ using bind method ---------");
const buddhaAir = {
    flight:"BH002",
    model:"LH20",
    booking:[],
    book(userName,seat){
        console.log(`${userName} booked  flight ${this.flight} seat ${seat}`);
        this.booking.push(userName,seat);
    }

}
const yetiAir = {
    flight:"YT210",
    booking:[],
}
const booking = buddhaAir.book;
// const books = yetiAir.book;
const bookYt = booking.bind(yetiAir);
bookYt("Alpha","ABH123");
// console.log(yetiAir.bookYt("Dev",10021));
console.log(yetiAir);

*/

/*
console.log("---------- call and apply method -----------");

const buddhaAir = {
    flight:"BH002",
    model:"LH20",
    booking:[],
    book(userName,seat){
        console.log(`${userName} booked  flight ${this.flight} seat ${seat}`);
        this.booking.push(userName,seat);
    }

}
buddhaAir.book("Dev","200A");
buddhaAir.book("Gulsan","10AB");
console.log(buddhaAir);

const yetiAir = {
    flight:"YT002",
    model:"X",
    booking:[],
}
const book = buddhaAir.book;

const bookingArr = ["Luffy","20A"];
book.call(yetiAir,"Dev","20001");
book.apply(yetiAir,bookingArr);
book.call(yetiAir,...bookingArr);
*/
// =========================================================
// console.log("------------- function returning the function ------------");
/*
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeter = greet("Hey");
greeter("Dev");

greet("hello")("Gulsan");

// using arrow function
const greetings = greeting => function(name){
    console.log(`${greeting} ${name}`);
}

greetings("Hello")("Don Dada");

*/


// ===============================================================
// console.log("------- function accepting call back function -------");
/*
function word(str){
    return str.toLowerCase().replaceAll(' ','');
}
// console.log(word("Now this is bunch of the string"));
const capitalize = function(str){
    str = str.toLowerCase();
    const [first,...other] = str.split(' ');
    return [first.toUpperCase(),...other].join(' ');
}
// console.log(capitalize("this is the bUnch OF string"));


const higherOrderFunction  = function(str,func){
    console.log(`Before:${str}`);
    console.log(`After:${func(str)}`);
}
higherOrderFunction("THis is the string",capitalize);


*/

/*
console.log(" ---------------value vs reference -----------");
const flightName = "LH00021";
const person = {
    fullName : "Gulsan",
    password : 232111111111,
};

const checkingIn = function(flightName,userDetails){
    userDetails.fullName = "Mr. Gulsan";
    flightName = "LH0021";
    if(userDetails.password === 232111111111){
        alert("valid person");
    }else{
        alert("invalid person");
    }
    console.log(flightName);
}
console.log(flightName);
// checkingIn(flightName,person);
console.log(person);
const createPassword = function(person){
    person.password = Math.floor(Math.random() * 1000000000000000);
}
console.log(createPassword(person));
console.log(person);

*/


// =================================================================

/*
console.log("---------- default parameters -------------");
const bookingDetails = [];
const creatingBooking = function(flightName,noOfPassanger = 1,cost = 999 * noOfPassanger){
    // ES5
    // flightName = flightName || "1113OH";
    // noOfPassanger = noOfPassanger || 1;
    // cost = cost || 3999 * noOfPassanger;
    const booking = {
        flightName,
        noOfPassanger,
        cost,
    };
    // console.log(booking);
    bookingDetails.push(booking);
}
console.log(bookingDetails);
creatingBooking("13HH01",2);
creatingBooking("123oop");
*/
'use strict'


/*

function makeJuice(apple,banana){
    console.log("Juice is being ready");
    const juice = `The juice contain ${apple} apples and ${banana} bananas`;
    return juice;

}
console.log(makeJuice(12,2));
const output = makeJuice(3,4);
console.log(output);

*/
/*---------Function declaration vs Function expression-----------*/

// Function declaration
/*

    function calcAge1(birthYear){
        return 2078 - birthYear;
    }
    const age1 = calcAge1(2058);

// Function expression

    const calcAge2 = function (birthYear){
        return 2078 - birthYear;
    }
    const age2 = calcAge2(2058);

    console.log(age1,age2);

    */

    /*
    In function declaration we can call the function before its inititalization 
    but we cannot invoke the expression function before its initialization 
    */

    
    // Arrow function

    /*

    const calcAge3 = birthYear => 2078 - birthYear;
    const age3 = calcAge3(2058);
    console.log(age3);
    */

    // Arrow function with multiple parameters
/*
    const calcRetirement = (birthYear,firstName)=>{
        const age = 60;
        const retirement = age - birthYear;
        return `${firstName} have ${retirement} years to retire`; 
    }
    console.log(calcRetirement(20,"Ram"));

    // Function inside function

    const frutitCutter = function(fruit){
        return fruit*4;
    }

    const fruitProcessor = (apple,orange) =>{
        const applePiece = frutitCutter(apple);
        const orangePiece = frutitCutter(orange);
        return `Juice with ${applePiece} pieces of apple and ${orangePiece} pieces of orange`;
    }
    console.log(fruitProcessor(3,4));


    // #coding challenge 1

    const calcAverage = (firstScore,secondScore,thirdScore) =>{
        return firstScore+secondScore+thirdScore/3;
    }

    const dolphinAverage = calcAverage(44,22,71);
    const koalasAverage = calcAverage(65,54,49);

    const checkWinner = function(avgDolphin,avgKoalas){
        if(avgDolphin > avgKoalas * 2){
            console.log("Dolphin is the winner");
        }
        else if(avgKoalas > avgDolphin * 2){
            console.log("Koalas is the winner");
        }
        else if(avgDolphin === avgKoalas){
            console.log("Both score the same point");
        }
        else{
            console.log("No one wins the game");
        }
    }

    checkWinner(dolphinAverage,koalasAverage);
*/


    // Array 
     
 /*   
    const friends = ['Dev','Ram','Shyam','Hari'];
    console.log(friends[0]);


    const years = new Array(2020,2021,1991,2001);
    console.log(years[0]);

    console.log(years[years.length - 1]);

    friends[0] = "Gulsan";
    console.log(friends);

    const admin = friends[0];

    friends[3] = admin;

    console.log(friends);

    console.log(friends[0].length);

    */

    /*------------ Array operations ----------*/

 /*   

    const names = ['Michael','John','Luffy','Ronoroa'];
    console.log(names);
    // Entering the data

    // push operation
    // entering the data at back
    const nameLength = names.push('Dev');
    console.log(names);
    console.log(`The  items is pushed at index: ${nameLength}`);

    // push function return the length of the function
    
    // unshift operation 
    // Entering the data at front

    names.unshift('Sanji');
    console.log(names);

    // Removing the data from an array

    // pop
    const removedName = names.pop();
    console.log(names);
    console.log(`The removed item is : ${removedName}`);

    // pop method return the removed item and removes the item at the rear

    // shift

    const nameRemoved = names.shift();
    console.log(names);
    console.log(`The item removed is : ${nameRemoved}`);

    // shift method removes the item from the front and returns the removed item

    console.log(names.indexOf('John'));
    console.log(names.indexOf('Zoro'));

    console.log(names.includes('Luffy'));
    console.log(names.includes('Tom'));

    if(names.includes('Luffy')){
        console.log("You have a friend name Luffy");
    }

*/

// coding challange #2

/*
let tip;
const calctip = (bill) =>{
    if(bill >= 50 && bill <= 300){
         tip = 15*bill/100;
        // return `Total amount of bill is ${(tip + bill)}`;
        return tip;
    }
    else{
        tip = 20*bill/100;
        // return `Total amount of bill is ${(tip + bill)}`;
        return tip;
    }
}

const bills = [125,555,44];
const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])];
const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

console.log(bills,tips,total);

*/

/*------------------------ Objects ---------------------*/


/*
const person = {
    firstName:"Dev",
    lastName:"Gurung",
    age:2078-2058,
    friends:['Luffy','Zoro','Nami']
};

// console.log(person.firstName);
// console.log(person['firstName']);

const repeatedString = 'Name';

console.log(person['first'+repeatedString]);
console.log(person['last'+repeatedString]);

const input = prompt("Choose between firstName lastName age and friends");
// console.log(person[input]);
// console.log(person.input);

if(person[input]){
    console.log(person[input]);
}
else{
    console.log("Invalid option! Choose between firstName lastName age and friends");
}

const result = `${person.firstName} has ${person.friends.length} friends and his best friend name is called ${person.friends[0]}`;
console.log(result);

*/


/*-----------------Object methods----------------*/

/*
const person = {
    firstName:"Dev",
    lastName:"Gurung",
    birthYear:2058,
    friends:['Luffy','Zoro','Nami'],
    hasLicence:true,
    
    // calcAge:function(birthYear){
    //     return 2078-birthYear;
    // }

//    calcAge:function(){
//        return 2078-this.birthYear;
//    }

    calcAge:function(){
        this.age = 2078-this.birthYear;
        return this.age;
    },
    getSummary:function(){
        return `${this.firstName} is a ${this.calcAge()} years old and has ${this.hasLicence ? 'a' : 'no'} driver licence`;
    }
};

// console.log(person['calcAge'](2058));

console.log(person.calcAge());
console.log(person.age);
console.log(person.age);
console.log(person.getSummary());
*/


/*-------------------------coding challenge #3 ----------------------------*/
/*

const mark = {
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.markBMI = this.mass/this.height**2
        return this.markBMI;
    }
};
const john = {
    fullName:'John smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.johnBMI = this.mass/this.height**2;
        return this.johnBMI;

    }
};

if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s (${mark.markBMI}) has greater than ${john.fullName}'s (${john.calcBMI()}) BMI`);
} else{
    console.log(`${john.fullName}'s (${john.johnBMI}) has greater than ${mark.fullName}'s (${mark.calcBMI()}) BMI`);
}

*/

/*-------------------loop-------------*/

/*
const person = [
    'dev',
    'gurung',
    2078-2058,
    ['alpha','beta','theta'],
    true,
    'luffy'
];
const data = [];

for(let i = 0; i < person.length; i++){
    console.log(person[i],typeof person[i]);
    data.push(typeof person[i]);
}
console.log(data);

for(let i=0;i<person.length;i++){
    // if(typeof person[i] !== 'string')continue;
    if(typeof person[i] === 'number')break;
    console.log(person[i]);
}



// while

let dice = Math.floor(Math.random() * 10);

while(dice !== 5){
    console.log(`you rolled a dice ${dice}`);
    dice = Math.floor(Math.random() * 10);
    if(dice === 5){
        console.log("the game is about to end...........");
    }
    
}

*/

/*---------------coding challenge #4 -------------------------*/
/*

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tip = [];
const total = [];


    const tipCalc = function(){
        for(let i = 0; i < bills.length; i++){
        if(bills[i] >= 50 && bills[i] <= 300){
            tip[i] = bills[i] * 0.15;
            total[i] = bills[i] + tip[i];
        }
        else{
            tip[i] = bills[i] * 0.2;
            total[i] = bills[i] + tip[i];
        }
    }
}
tipCalc();
console.log(bills,tip,total);
*/
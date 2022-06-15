'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  placeOrder:function(item,time){
    return [item,time];
  },
  displayMessage : function({firstName,lastName,DOB,age}){
    console.log(`My name is ${firstName} ${lastName} and I am ${age()} (${DOB}) years Old`);
  },
  orderPizza : function(mainIngredient,...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};
console.log("============== String Methods ===========");



// ==================================================================
console.log("============== coding challenge #4 ===========");
/*
const change = document.querySelector('#change');
change.addEventListener('click',function(e){
  e.preventDefault();
  const input = document.getElementById('camelInput').value;
  // console.log(input);
  const rows = input.split('\n');
  // console.log(rows);
  // console.log(splitInput);
  // const[firstWord,secondWord] = splitInput;
  // const capitalize = secondWord[0].toUpperCase()+secondWord.slice(1);
  // const camelCaseLetter = firstWord+capitalize;
  // console.log(camelCaseLetter);
  for(const [i,word] of rows.entries()){
    const splitWord = word.toLowerCase().split('_');
    const [firstWord,secondWord] = splitWord;
    const camelCaseWord = firstWord + secondWord[0].toUpperCase()+secondWord.slice(1);
    console.log(`${camelCaseWord.padEnd(20)}${'✅'.repeat(i+1)}`);
  }

});
*/
// =============================================================
console.log("-------------------- string method ---------------");

const myStr = "This is the string";
console.log(myStr);
console.log(myStr.charAt(0));
console.log('Hey'[0]);
console.log(myStr.length);

console.log(myStr.lastIndexOf('is'));
console.log(myStr.lastIndexOf('the'));

console.log(myStr.slice(2,6));
console.log(myStr.slice(2,-1));

const findMySeat = function(seat){
  // C and F are middle seat
  const mySeat = seat.toUpperCase().slice(-1);
  if(mySeat === 'C' || mySeat === 'F'){
    console.log("You have got the middle seat");
  }else{
    console.log("You have got lucky");
  }
}
findMySeat('100D');
findMySeat('101c');
findMySeat('100F');
findMySeat('105G');

console.log("---------- Fixing the customer name ----------");
const fixName = function(name){
  const lowerCaseName = name.toLowerCase();
  const correctName = name[0].toUpperCase() + lowerCaseName.slice(1);
  return console.log(`Form ${name} to ${correctName}`);
}
fixName("GULSAN");
fixName("dev");
fixName("GuruNG");
// console.log(Object.getOwnPropertyNames(String.prototype));
// console.log(myStr.prototype);

console.log("----------------checking the email-------------");
const myEmail = "gulsan@gmail.com";

const validEmail = function (email){
  // const lowerEmail = email.toLowerCase();
  // const trimedEmail = lowerEmail.trim();
  // const comparedEmail = trimedEmail === myEmail;
  // console.log(trimedEmail,comparedEmail);
  const transformedEmail = email.toLowerCase().trim();
  const isValid = transformedEmail === myEmail;
  console.log(transformedEmail,isValid);
}
validEmail("Gulsan@GMAIL.Com");

console.log("----------- replacing the string ------------------");

const myLocalStr = "this is some random text is am is there some";
// console.log(myLocalStr.includes('some'));
const replacedString = myLocalStr.replaceAll('is','are');
console.log(myLocalStr,replacedString);
const myReplacedStr = myLocalStr.replace(/is/g,'are');
console.log(myReplacedStr);

console.log("----------- Checking the illegal items -----------");

const checking = function(baggage){
  const newBaggage = baggage.toLowerCase();
  if(newBaggage.includes('knife') || newBaggage.includes('gun')){
    console.log("Sorry you cannot aboard");
  }else{
    console.log("Welcome to aboard");
  }
}
checking("This bag contains a lots of Apples and Banana");

console.log("------------- split and join methods ------------- ");

const myFullName = "Gulsan Gurung";
console.log(myFullName.split(" "));
const [firstName,lastName] = myFullName.split();
console.log(firstName,lastName);

console.log("-------------- capitalizing the text -------------");
const capitalizeText = function(text){
  const newText  = text.split(" ");
  console.log(newText);
  for(const word of newText){
    const lowercaseWord = word.toLowerCase();
    const finalWord = word[0].toUpperCase() + lowercaseWord.slice(1);
    console.log(finalWord);
  }
}
capitalizeText("gulsAn guRUng");

console.log("------------ padding in the string -----------");

const padStr = "this is the string";
const newPadStr = padStr.padStart(25,'+')
console.log(padStr.padEnd(25,'+'));
console.log(newPadStr);
// =======================================================================================
console.log("------------- coding challenge #3 ----------");
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = new Set(gameEvents.values());
console.log(events);
console.log(gameEvents);
// for(const [time,event] of gameEvents){
//   console.log(`${time}${event}`);
// }

// 2.
const deleted = gameEvents.delete(64);
console.log(gameEvents);

// 3.
for(const[time,event] of gameEvents){
  console.log(`${event} is happened at ${time} minutes`);
}


// 4.
for(const [time,event] of gameEvents){
  const result = time < 40 ? console.log(`[first half] ${time}: ${event}`) : console.log(`[second half] ${time}: ${event}`);
  result;
}


// --------------------------iteration of the map

const question = new Map([
  ['question',"What is the national animal of the Nepal ?"],
  [1,'Bull'],
  [2,'Cow'],
  [3,'OX'],
  ['answer',2],
  [true,'🎉 correct answer'],
  [false,'🥲 Incorrect answer']
]);
console.log(question.get('question'));

for(const [index,value] of question){
  console.log(`${index} ${value}`);
};

// const answer = Number(prompt(question.get('question')));
// const result = answer === question.get('answer') ? prompt(question.get(true)) : question.get(false) ;


console.log("changing map into array");
console.log(...question);
console.log(...question.keys());
console.log(...question.values());


// ----------------------------------- Map ---------------------------

const myMap = new Map();

myMap
.set('Name','Gulsan')
.set('categorey',['Anime','Comedy','Action','Horror'])
.set(true,'We are open :D')
.set(false,'We are close :(')
.set(1110,"this is your roll no")
.set('open',11)
.set('close',21)

console.log(myMap.get(true));
console.log(myMap.get(false));
console.log(myMap.get('Name'));
console.log(myMap.get(1110));

const time = 12;

const isOpen = time > myMap.get('open') && time < myMap.get('close') ? myMap.get(true) : myMap.get(false)
console.log(isOpen);

console.log(myMap);
console.log(myMap.get('categorey'));


// ================================================================================
// -----------------------------sets------------------

const mySets = new Set(["Luffy","Nami","Sanji","Ussop","Nami","Liffy"]);
// console.log(mySets);
// mySets.clear();
// mySets.add("Ronorona")
// console.log(mySets);
// mySets.delete("Nami");
// console.log(mySets);
// console.log(mySets.has("Ussop"));
// console.log(mySets.has("Buleno"));

mySets.forEach(set => {
  // console.log(`${set}`);
});

for(const set of mySets){
  // console.log(`${set}`);
}
const myNewSet = [...new Set(mySets)];
// console.log(`${myNewSet}`)













// ===================================================================================
// =========================== coding challenge
console.log("=================== coding challenge #2 ==================");
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const goalScore = game.scored.entries(game.scored);
// console.log(`${goalScore}`);
for(const [goals,player] of goalScore){
  console.log(`Goal ${goals + 1} : ${player}`);
}

// 2.
const gameOdd = Object.values(game.odds);
let average = 0;
for(const odd of gameOdd){
  average += odd;
}
console.log(`Average = ${average / gameOdd.length}`);

// 3.
// const {team1,team2} = game;
// console.log(`out of victory ${team1} ${gameOdd[0]}`);
// console.log(`out of draw ${gameOdd[1]}`);
// console.log(`out of victory ${team2} ${gameOdd[2]}`);

for(const [team,odd] of Object.entries(game.odds)){
  // console.log(team,odd);
  // if(odd === 3.25){
  //   console.log(`out of draw : ${odd}`);
  // }else{
  // console.log(`out of victory ${team} ${odd}`);
  // }
  const str =  team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`out of ${str} ${odd}`);
}

// console.log(team1,team2);
// console.log(gameOdd);












// ------------------------- Looping object -------------

console.log("=========== Looping object ==============");

// --------------------on the basis of keys

const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
for(const day of properties){
  console.log(`${day}`);
}
console.log(`We open ${properties.length} days a week`);

// --------------------on the basis of values

const objValues = Object.values(restaurant.openingHours);
console.log(objValues);

const [{open:op,close:cl}] =  objValues;
console.log(op,cl);
// looping the entire object

const loopingObj = Object.entries(restaurant.openingHours);
for(const [days,{open,close}] of loopingObj){
  console.log(`${days} ${open} ${close}`);
}



// ============================================================================================

// ----------------------------- Optional Chaining ---------------------  //
const dayWeek = ["sun","mon","tue","thu","fri","sat"];

for(const day of dayWeek){
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`We open on ${day}, at  ${open}`);
}

// method

// console.log(restaurant.placeOrder?.(12,13) ?? "Method does not exist");


// array
const users = [{usernmae:"Dev",age:20}];
console.log(users);
// console.log(users[0]?.usernmae ?? "this element doesnt exist");

// ============================================================================================




/*--------------------------- Enhanced object literals ----------------------*/
// const dayWeek = ["sun","mon","tue","thus","fri","sat"];
// console.log(dayWeek);
/*
const openingHours = {
  [dayWeek[0]]: {
    open: 12,
    close: 22,
  },
  [dayWeek[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  whichDay(day){
    return day;
  }
};

*/
const newObj = {
  userDetails:{
    userName:"dev",
    roll:20
  },
  openingHours,
}
// console.log(newObj);
// console.log(openingHours);
// console.log(openingHours.whichDay("sunday"));

// ------------------------- for in ----------------
const data = ["Iceberg","luchhi","fankey","Buleno"];
// console.log(data);
for(let item of data) console.log(item);
for(let item of data.entries()) console.log(item);

for(let [i,element] of data.entries()){
  // console.log(`${i + 1}:${element}`);
}

// --------------------coding challenge #1

/*

console.log("---------coding challenge #1---------------");
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const player1 = game.players[0];
// const player2 = game.players[1];
const[player1,player2] = game.players;
const gk = player1[0];
const [,...fieldPlayers] = player1;
const allPlayer = [...game.players[0],...game.players[1]];
const player1Final = [...allPlayer,'Thiago', 'Coutinho','Perisic'];

const{odds:{
  team1,x:score,team2
}} = game;

const printGoals = function (...players){
  console.log(`${players.length} goals were scored.`);
}
printGoals(...game.scored);
team1 > team2 || console.log("Team1 wins the game");
team1 < team2 || console.log("Team2 wins the game");

*/
// console.log(score);
// console.log(player2);
// console.log(player1Final);
// console.log(gk);
// console.log(player1);
// console.log(allPlayer);
// console.log(fieldPlayers);



// short circuiting
console.log("---------- OR ------------");
// console.log(12 || 0)
// console.log(0 || "dev");
// console.log(undefined || null || 0 || ""|| "ALpha");

let cp9 = 0;
const water7 = cp9 ? cp9 : 10;
// console.log(water7);

const newWater7 = cp9 || 10;
// console.log(newWater7);

console.log("---------- AND ------------");
// console.log(10 && "Dev" && 0);

console.log("---------- nullish coalescing operator -----------");
// console.log(cp9 ?? 10);
// -----------------------------------------------------------------------------------
/*--------------------spread operator-------------------*/
const listItem = [1,4,5];
const badArray = [1,2,3,listItem[0],listItem[1],listItem[2]];
// console.log(badArray);
const newArray = [1,2,3,...listItem]
// console.log(newArray);

// --------------------copy array

const newMenu = [...restaurant.starterMenu];
// console.log(newMenu);

// --------------------join two array

const newMenuBar = [...newMenu,...restaurant.mainMenu];
// console.log(newMenuBar);

// ---------------function that accepts multiple parameters
const dataArray = [
  // prompt("Enter your name"),
  // prompt("Enter your age")
];
const myDetails = function(userName,age){
  return `My name is ${userName} and my age is ${age} years`;
}

// console.log(myDetails(...dataArray));


// -------------spread operator in object

const newRestaurant = {
  foundedIn:1920,
  ...restaurant,
  name:'Amazon',
}
// console.log(newRestaurant);
// console.log(newRestaurant.name);
// console.log(restaurant.name);

const myRestaurant = {...restaurant};
// console.log(myRestaurant);

// ----------------------rest pattern
// is used to pack the array
const [x,y,...group] = [1,2,3,3,3,4,4];
// console.log(x,y,group);

restaurant.orderPizza("hello",...restaurant.starterMenu);

// ----------------------------------------------------------------------------------------------

/*-------------------object destructuring----------------*/
const {location:l,categories:c} = restaurant;
// console.log(l,c);

// ------------------Nested

const {thu:{open,close}} = restaurant.openingHours;
// console.log(open,close);

// ----------------setting parameters using object destructuring


restaurant.displayMessage({
  firstName : "Dev",
  lastName: "Gurung",
  DOB:2058,
  age :function(){
    return 2078 - 2058;
  },
});


/*---------------Array Destructuring------------------*/
let [primary,,secondary] = restaurant.categories;
// console.log(primary,secondary);

/*---------------Swapping---------*/
// Method 1
const temp = primary;
primary = secondary;
secondary = temp;
// console.log(primary,secondary);

// Method 2

[secondary,primary] = [primary,secondary]
// console.log(primary,secondary);


/*------------nested--------------*/
const nestedItem = [1,2,3,[4,5,6]];
const [first,,,[second,third,fourth]] = nestedItem;
// console.log(first,second,third,fourth);

/*------------function------------*/
// const [a,b,c=10] = restaurant.placeOrder("Pizza",10);
// console.log(a,b,c)


'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
const updateUi = function(acc){
      // displaying movements
      displayMovement(acc.movements);

      // displaying total balance
      calcDisplayBalance(acc);

      // displaying balance summary
      calcDisplaySummary(acc);
}


const displayMovement = function(movement,sort = false){
  containerMovements.innerHTML = '';
  const movs = sort ? movement.slice().sort((a,b) => a-b ):movement;
  movs.forEach(function(mov,index){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${index + 1}${type}
    </div>
    <div class="movements__value">${mov}</div>
  </div>
`;
  containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}
// displayMovement(account1.movements);

const calcDisplayBalance = function(account){
  account.balance = movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent = `${account.balance} EUR`;
}

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function(account){
  const deposit = account.movements.filter(mov=> mov > 0)
  .reduce((acc,mov)=> acc+ mov,0);

  labelSumIn.textContent = `${deposit} EUR`;

  const withdrawal = account.movements.filter(mov => mov < 0)
  .reduce((acc,mov) => acc+mov,0);

  labelSumOut.textContent = `${Math.abs(withdrawal)} EUR`;

  const interest = account.movements.filter(mov=> mov > 0)
  .map(deposit => (deposit * account.interestRate)/100)
  .filter(int => int > 1)
  .reduce((acc,int)=>acc+int,0);

  labelSumInterest.textContent = `${interest} EUR`;
}
// calcDisplaySummary(account1.movements);

const createUserName = function(accs){
  accs.forEach(function(acc){
   acc.userName =  acc.owner
  .toLowerCase()
  .split(' ')
  .map(names=>names[0])
  .join('');
  })
}
createUserName(accounts);
// console.log(accounts);

let currentAccount;
// adding event

console.log(accounts);

btnLogin.addEventListener('click',function(e){
  e.preventDefault();

  currentAccount = accounts.find(acc =>
    acc.userName === inputLoginUsername.value);
    // console.log(currentAccount);
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // console.log('test');
    // displaying UI

    labelWelcome.textContent = `welcome back ${currentAccount.owner.split()[0]}`;
    containerApp.style.opacity = 100;
    //Clearing the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});


// transfering money
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.userName === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if(amount > 0
    && receiverAccount
    && currentAccount.balance >= amount
    && receiverAccount.userName !== currentAccount){
      currentAccount.movements.push(-amount);
      receiverAccount.movements.push(amount);

      updateUi(currentAccount);
      console.log(accounts);
    }
})

// request a loan

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
 if(amount > 0 && currentAccount.movements.some(acc => acc >= amount * 0.1)){
   currentAccount.movements.push(amount);
   updateUi(currentAccount);
 }

})


// delete acc
btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin){
      const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
      console.log(index);
      accounts.splice(index,1);
      containerApp.style.opacity = 0;
      inputClosePin.value = inputCloseUsername.value = '';
    }
})
let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovement(movements,!sorted);
  sorted = !sorted;
})


// =========================================================================
console.log("---------------coding challenge #4--------------");

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach(dog=>{
  dog.recommendedFood = dog.weight**0.75*28;
})
console.log(dogs);

dogs.forEach(dog=>{
  if(dog.owners.includes('Sarah')){
    const result = dog.curFood > dog.recommendedFood ? `${dog.owners[0]}'s dog eats too much `:`${dog.owners[0]}'s dog eats too little`;
    console.log(result);
  }
});


const ownerEatsTooMuch = dogs
.filter(dog=> dog.curFood > dog.recommendedFood)
.flatMap(dog => dog.owners);
console.log(ownerEatsTooMuch);

const ownerEatsTooLittle = dogs
.filter(dog=> dog.curFood < dog.recommendedFood)
.flatMap(dog => dog.owners);
console.log(ownerEatsTooLittle);

console.log(`${ownerEatsTooMuch.join(' and ')} eats too much.`);
console.log(`${ownerEatsTooLittle.join(' and ')} eat too little.`);

//===================================================
// console.log("----------- some and every method ---------------");

// const history = [120,22,10,40];
// console.log(history.some(move => move > 20));
// console.log(history.every(mov => mov > 20));



// console.log("---------- flat and flatMap ---------");

// const movementsArr = accounts.map(acc=> acc.movements);
// const totalMovements = movementsArr.flat(2);
// console.log(totalMovements);
// const overAllMovements = totalMovements.reduce((acc,mov) => acc+mov,0);
// console.log(overAllMovements);






/*
console.log("--------------- coding challenge #1 ----------------");

const dogsJulia = [3,5,2,12,7];
const dogsKate = [4,1,15,8,3];
const copyJulia = [...dogsJulia];
const correctedJulia = copyJulia.splice(1,3);
console.log(dogsJulia);
console.log(copyJulia);
console.log(correctedJulia);
const checkDogs = function(dog1,dog2){
  const allDogs = dog1.concat(dog2);
  // console.log(allDogs);
  allDogs.forEach(function(dog,i){
    const result = dog > 3 ? `Dog number ${i+1} is a adult, and it is ${dog} years old`:
    `Dog number ${i+1} is still a puppy`;
    console.log(result);
  });
}
checkDogs(correctedJulia,dogsKate);
*/

// console.log("-------- coding challenge #2 ---------");
/*
const calcAverageHumanAge  = function(ages){
  const humanAge = ages.map(dogAge =>{
    if(dogAge <= 2) return 2 * dogAge;
    else return 16 + dogAge * 4;
  });
  // console.log(humanAge);
  const remainingDog = humanAge.filter(age => age >= 18)

  const averageHumanAge = remainingDog.reduce((acc,currentAge) => acc + currentAge,0)/remainingDog.length;
  // console.log(`The average age of human is ${averageHumanAge}`);
  return averageHumanAge
};
console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));

*/

console.log("-------- coding challenge #3 ------------");

const calcAverageHumanAge = ages => ages
  .map(dogAge =>(dogAge <= 2 ? 2 * dogAge :16 + dogAge * 4))
  .filter(dogAge => dogAge >= 18)
  .reduce((acc,age,index,arr)=>{
    console.log(arr.length);
    acc+age/arr.length,0});
// console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));
////////////////////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


//////////////////////////////////////////////////////////
console.log("------------ Find method -----------");
// const findWithdrawal = function(movements){
//   return movements.find(mov => mov < 0);
// }
// console.log(findWithdrawal(account1.movements));
// const highestBalance = function(movements){
//   const highest = movements.reduce((acc,mov)=>{
//     if(acc > mov) return acc;
//     else return mov;
//   },movements[0]);
//   console.log(highest);
// }
// highestBalance(account1.movements);

// const USD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawal = movements.filter(function(mov){
//   return mov < 0;
// });

// console.log(withdrawal);

// const newMovement = movements.map(function(mov){
//   return mov * USD;
// });
// const newMovement = movements.map(mov => mov * USD );
// console.log(newMovement);
// const trackingMovements = movements.map((value,index)=>
// `${index+1}:you ${value > 0 ? 'deposit' : 'withdrew'} Rs ${Math.abs(value)}`)
// console.log(trackingMovements);
/////////////////////////////////////////////////


/*
console.log("---------- iterating map and set -------------");
const myMap = new Map([
  ['userName',"Dev"],
  ['age',20],
  ['DOB',2058],
]);

myMap.forEach(function(value,key,Map){
    console.log(`${key}:${value}`);
})

const mySet = new Set(
  ['dev','gulsan','alpha','dev']
);
mySet.forEach(function(value){
  console.log(`${value}`);
});

*/

// =======================================================================


// console.log('------ using for of ---------');

// for(const [index,movement] of movements.entries()){
//   if(movement > 0){
//     console.log(`You diposited Rs ${movement}.`);
//   }else{
//     console.log(`You withdrew Rs ${Math.abs(movement)}`);
//   }
// }

// console.log('------ using forEach --------');

// movements.forEach(function(move,index,array){
//   if(move > 0){
//     console.log(`You diposited Rs ${move}.`);
//   }else{
//     console.log(`You withdrew Rs ${Math.abs(move)}`);
//   }
// });



// ==========================================================================

// const newArr = ['a','b','c','d','e'];
// const oldArr = ['f','g','h','i','j'];

// console.log(newArr.slice(1));
// console.log(newArr.slice(2,4));
// console.log(newArr.slice(-1));
// console.log(newArr.slice(1,-2));
// console.log(newArr.slice());
// console.log([...newArr]);


// console.log(newArr.splice(1,2));
// console.log(newArr.splice(-2));
// console.log([...newArr]);


// console.log(newArr.reverse());
// console.log(newArr.concat(oldArr));
// console.log([...newArr,...oldArr]);

// console.log(newArr.join('_'));




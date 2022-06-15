// Importing module
/*
import './shopping.js';
import { product, cost, quantity as qty } from './shopping.js';
import { totalCost } from './shopping.js';
console.log('Importing module');
totalCost(product, qty, cost);
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// importing everything

/*
import * as ShoppingCar from './shopping.js';

console.log(ShoppingCar.product);
ShoppingCar.totalCost('Apple', 12, 10);
*/

// Importing default

/*

import add, { details } from './shopping.js';
add(12, 'Pen');
console.log(details);

*/

const user = {
  detail: [{ userName: 'Dev', roll: 12 }],
  college: 'Divyagyan',
  student: { paid: true },
};
const colneUser = Object.assign({}, user);
const deepCloneUser = cloneDeep(user);
user.student.paid = false;
console.log(colneUser);
console.log(deepCloneUser);

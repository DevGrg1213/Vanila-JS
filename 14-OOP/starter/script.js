'use strict';

//////////////////////////////
/// constructor function
///////////////////////////
/*
const Person  = function(userName,birthYear){
	this.userName = userName;
	this.birthYear = birthYear;

	// never do this
	// this.calcAge = function(){
	// 	console.log(2058-this.age);
	// }
}

// 4 steps
// 1.creates a empty object
// 2.function is called, this = {}
// 3.{} is linked to the prototype
// 4.function automatically return {}

const ram = new Person('Ram',2058);
console.log(ram.userName,ram.birthYear);

console.log(ram instanceof Person);

const shyam = new Person('Shyam',2050);
console.log(shyam.userName,shyam.birthYear);

// prototypes

Person.prototype.calcAge = function(){
	console.log(2078-this.birthYear);
}


shyam.calcAge();

console.log(shyam.__proto__);
console.log(ram.__proto__);

console.log(Person.prototype.isPrototypeOf(shyam));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(shyam.hasOwnProperty('calcAge'));
console.log(shyam.hasOwnProperty('userName'));

// setting the properties 
Person.prototype.species = 'Homo Sepian';

console.log(ram.species);

// prototypes are mechanism by which javascript object inherit 
// features from one to another.

*/


// console.log('----------- coding challenge #1 ----------')
/*

const Car = function(speed){
	this.speed = speed;
}
Car.prototype.accelerate = function(){
	this.speed += 10;
	console.log(`current speed is ${this.speed}`);
}
Car.prototype.brake = function(){
		this.speed -= 5;
		console.log(`current speed is ${this.speed}`);
}

const bmw = new Car(120);
console.log('--- for BMW -----');
bmw.accelerate();
bmw.brake();
bmw.accelerate();


console.log('---- for mercedies -------');
const mercedies = new Car(95);
mercedies.brake();
mercedies.accelerate();
mercedies.brake();

*/


//////////////////////
///////ES6 classes
////////////////////
/*
class Person {
	constructor(userName,birthYear){
		this.userName = userName;
		this.birthYear = birthYear;
	}

	calcAge(){
		console.log(2078-this.birthYear);
	}

	greet(){
		console.log(`Hello ${this.userName}`);
	}
	set fullName(newName){
		if(newName.trim().includes(' ')) this.userName = newName;
		else return `${newName} is not a full Name`;
	}
}

const hari = new Person('Hari',2057);
hari.username = 'Hari Ram';
console.log(hari.userName);
console.log(hari.birthYear);

hari.calcAge();
hari.greet();

console.log(hari.__proto__ === Person.prototype);
*/



///////////////////////////
/////setters and getters
//////////////////////////
/*

const account  = {
	owner : 'Dev',
	movements : [20,300,500,2000],

	get updated(){
		console.log(this.movements.slice(-1).pop());
	},

	set newMovement(mov){
		this.movements.push(mov);
	}
}

account.updated;

account.newMovement = 50;

*/


/////////////////////
/// static method
////////////////////
// they are not avilable to the instances

/*

class Details{
	constructor(fullName,age){
		this.fullName = fullName;
		this.age = age;
	}
	meth(){
		console.log(this);
	}

	static hey(){
		console.log('this is the static method');
		console.log(this);
	}
}

const obj = new Details('Gulsan Gurung',20);

obj.meth();
Details.hey();

*/


/////////////////////////
/////// object.create
////////////////////////

/*


const personProto = {
	calcAge(){
		console.log(2078 - this.birthYear);
	},

	init(userName,birthYear){
		this.userName = userName;
		this.birthYear = birthYear;
	}
}

const ram = Object.create(personProto);

ram.init('Ram',2058);
console.log(ram.userName);
console.log(ram.birthYear);
ram.calcAge();

// when we create object using object.create the passed object will become the protoype function of that object;

*/


/--------------------- coding challenge ----------------------/

// console.log('--------- coding challenge #2 ----------');

/*

class Car {
	constructor(make,speed){
		this.make = make;
		this.speed = speed;
	}

	get speedUS(){
		return this.speed /= 1.6;
	}

	set speedUS(speed){
		return this.speed = speed  *  1.6;
	}

	accelerate(){
		this.speed += 10;
		console.log(`The current speed of the ${this.make} is ${this.speed} km/hr`);
	}

	brake(){
		this.speed -= 5;
		console.log(`The current speed of the ${this.make} is ${this.speed} km/hr`);
	}
}

const ford = new Car('Ford',120);
ford.make;

ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford.speed);

*/

////////////////////////////////////////////////
//////class inheritance : constructor function;
//////////////////////////////////////////////

/*

const Person  = function(firstName,birthYear){
	this.firstName = firstName;
	this.birthYear = birthYear;
}

Person.prototype.clacAge = function(){
	console.log(2078-this.birthYear);
}

const Student = function(firstName,birthYear,course){
	Person.call(this,firstName,birthYear);
	this.course = course;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function(){
	console.log(`Hello, myself ${this.firstName} currently studying ${this.course}`);
}
const s1 = new Student('Ram',2000,'JAVA');


s1.clacAge();
s1.intro();


console.log(s1 instanceof Student);
console.log(s1 instanceof Person);
console.log(s1 instanceof Object);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/

////////////////////////////////////
/////////class inheritance
//////////////////////////////////

/*

class person {
	constructor(userName,birthYear){
		this.userName = userName;
		this.birthYear = birthYear;
	}

	calcAge(){
		console.log(2078-this.birthYear);
	}

	greet(){
		console.log(`Hello ${this.userName}`);
	}
	set fullName(newName){
		if(newName.trim().includes(' ')) this.userName = newName;
		else return `${newName} is not a full Name`;
	}
};

class student extends person{
	constructor(userName,birthYear,course){
		super(userName,birthYear);
		this.course = course;
	}
	calcAge(){
		console.log(`I am ${2078 - this.birthYear} old`);
	}
}

const s1 = new student('Dev Gurung',2057,'Javascript');
s1.greet();
s1.calcAge();
console.dir(student.prototype.constructor);

*/

///////////////////////////////////
//class ineritance : Object.create
/////////////////////////////////

/*

const personProto = {
	calcAge(){
		console.log(2078 - this.birthYear);
	},

	init(userName,birthYear){
		this.userName = userName;
		this.birthYear = birthYear;
	}
}

const person = Object.create(personProto);

const student = Object.create(personProto);
student.init = function(userName,birthYear,course){
	person.init.call(this,userName,birthYear);
	this.course = course;
}

const s1 = Object.create(student);
s1.init('Dev',2057,'Javascript');
console.log(s1.userName);
console.log(s1.calcAge());

*/

///////////////////////////
///more on classes
//////////////////////////

/*

class Account{
	constructor(userName,age,pin){
		this.userName = userName;
		this.age = age;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;
	}
	deposit(val){
		this.movements.push(val);
	}
	withdraw(val){
		this.deposit(-val);
	}
	approve(val){
		return true;
	}
	requestLoan(val){
		if(this.approve){
			this.deposit(val);
			console.log(`Loan is approved Rs ${val}`);
		}
	}
	totalBalance(){
		return this.movements.reduce((acc,mov)=>acc+mov,0);
	}
}

const acc1 = new Account('Gulsan',20,1111);
console.log(acc1);
acc1.deposit(120);
acc1.withdraw(20);
acc1.requestLoan(100);
console.log(acc1.totalBalance());
console.log(acc1);

*/

//////////////////////
////// Enncapsulation
////////////////////

// private feild
// public feild
// private method
// public method

/*

class Account{
	// public feild
	_movements = [];

	// private feild
	#pin;
	constructor(userName,age,pin){
		this.userName = userName;
		this.age = age;
		this.#pin = pin;
		this.locale = navigator.language;
	}
	deposit(val){
		this._movements.push(val);
		return this;
	}
	withdraw(val){
		this.deposit(-val);
		return this;
	}
	approve(val){
		return true;
	}
	requestLoan(val){
		if(this.approve){
			this.deposit(val);
			console.log(`Loan is approved Rs ${val}`);
			return this;
		}
	}
	// public method
	totalBalance(){
		return this._movements.reduce((acc,mov)=>acc+mov,0);
	}
	// Private method
	#personalDetails(){
		console.log("This feild is private.");
	}
}

const acc2 = new Account('Dev',21,2222);

// acc2.#pin;
acc2.deposit(120);
console.log(acc2._movements);
// acc2.#personalDetails();


// chaining

acc2.deposit(200).deposit(300).withdraw(400).requestLoan(200);
console.log(acc2._movements);

*/

// coding challenge #4

class CarCl{

	#charge;
	constructor(make,speed,charge){
		this.make = make;
		this.speed = speed;
		this.#charge = charge;
	}
	accelerate(){
		this.speed += 10;
		this.#charge -= 10;
		console.log(`The current speed of the ${this.make} is ${this.speed} km/hr with ${this.#charge}% of charge.`);
		return this;
	}
	brake(){
		this.speed -= 5;
		console.log(`The current speed of the ${this.make} is ${this.speed} km/hr with ${this.#charge}% of charge.`);
		return this;
	}
	chargeBattery(chargeTO){
		this.#charge += chargeTO;
		return this;
	}
}

class EVCL extends CarCl{
	constructor(make,speed,charge){
		super(make,speed,charge);
	}
}

const evcl = new EVCL('EVCL',120,20);
evcl.accelerate().chargeBattery(20).brake().chargeBattery(30);
console.log(evcl.speed);
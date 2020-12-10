/* []BASIC VARIABLES & CONSOLE[] */


// console.log("Hello World")
// console.error("This is an error")
// console.warn("This is a warning")

// const age = 10;
// let score;
// console.log(score);
// console.log(age);


/* []STRING, NUMBERS, BOOLEAN, NULL, UNDEFINED[] */


// const name = "john";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x)


/* []CONCATENATION[] */


// const name = "john";
// const age = 30;

// console.log("My name is " + name + " and I am " + age);


/* []TEMPLATE STRING][] */


// const hello =(`My name is ${name} and I am ${age}`);
// console.log(hello);


/* []ARRAYS[] */


// const s = "technology, computers, it, code";

// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(', '));


/* []ARRAYS - variables that hold multiple values[] */


// const fruits = ["apples", "oranges", "pears", 10, true];

// console.log(fruits[1]);
// fruits[3] = "grapes";
// fruits.push("mangos");
// fruits.unshift("strawberries");
// fruits.pop();
// console.log(Array.isArray("hello"));
// console.log(fruits.indexOf("oranges"))
// console.log(fruits)


/* []OBJECT LITERALS[] */


// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 30,
// 	hobbies: ["music", "movies", "sports"],
// 	address: {
// 		street: "50 main st",
// 		city: "Boston",
// 		state: "MA"
// 	}
// }

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1])
// console.log(person.address.city);

// const { firstName, lastName, address: { city }} = person;
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person)


/* []ARRAYS OF OBJECTS[] */


// const todos = [
// 	{
// 		id: 1,
// 		text: 'Take out trash',
// 		isCompleted: true
// 	},
// 	{
// 		id: 2,
// 		text: 'Meeting with boss',
// 		isCompleted: true
// 	},
// 	{
// 		id: 3,
// 		text: 'Dentist appt',
// 		isCompleted: false
// 	}
// ];

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


/* []For Loops[] */


// for(let i = 0; i <= 10; i++) {
// 	console.log(`For Loop Number: ${i}`);
// };


/* []While Loops[] */


// let i = 0;
// while(i <= 10) {
// 	console.log(`While Loop Number: ${i}`);
// 	i++;
// }


/* []Loop Through Arrays[] */


// for(let i = 0; i < todos.length; i++) {
// 		console.log(todos[i].text);
// 	};


/* []For of Loop[] */


// for(let todo of todos) {
// 	console.log(todo.id)
// }


/* [] Suggested | High Order Array Method[]
	forEach, map, filter */
	

// todos.forEach(function(todo) {
// 	console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
// 	return todo.text;
// });
// console.log(todoText)

// const todoCompleted = todos.filter(function(todo) {
// 	return todo.isCompleted === true;
// }).map(function(todo) {
// 	return todo.text;
// });

// console.log(todoCompleted);


/* []CONDITIONALS[] */
/* || == or | && == and */


// const x = 6;
// const y = 11;

// if(x > 5 && y > 10) {
// 	console.log('x is more than 5 or y is more than 10');
// 	}

// 	console.log('x is 10');
// } else if(x > 10) {
// 	console.log('x is greater than 10');
// } else {
// 	console.log('x is less than 10');
// }


/* []TURINARY OPERATOR */


// const x = 9;

// const color = x > 10 ? 'red' : 'green';

// switch(color) {
// 	case 'red':
// 		console.log('color is red');
// 		break;
// 	case 'blue':
// 		console.log('color is blue');
// 		break;
// 	default:
// 		console.log('color is NOT red or blue');
// 		break;
// }


/* []FUNCTION[] */


// function addNums(num1 = 1, num2 = 2) {
// 	return num1 + num2
// }

// console.log(addNums(5, 5));


/* []ARROW FUNCTION[] */


// const addNums = num1 => num1 + 5;
// console.log(addNums(5));

// todos.forEach((todo) => console.log(todo));


/* []OBJECT ORIENTED PROGRAMMING[] */


// // Constructor function
// function Person(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
// 	return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
// 	return `${this.firstName} ${this.lastName}`
// }

// // Class
// class Person {
// 	constructor(firstName, lastName, dob) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.dob = new Date(dob);
// 	}

// 	getBirthYear() {
// 		return this.dob.getFullYear();
// 	}

// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`
// 	}
// }


// // Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970")
// console.log(person1)
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());


/* []DOM SELECTORS[] */


// // Single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("h1"));

// // Multiple element
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByTagName("li"));


// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item))


/* []DOM MANIPULATION | User Interface [] */


// const ul = document.querySelector(".items");

// ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";


// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseout", (e) => {
// 	e.preventDefault();
// 	// console.log(e.target);
// 	document.querySelector("#my-form").style.background = "#ccc";
// 	document.querySelector("body").classList.add("bg-dark");
// 	document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello</h1>"
// });


/* []SMALL APPLICATION | FORM SCRIPT */

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if(nameInput.value === "" || emailInput.value === "") {
		msg.classList.add("error");
		msg.innerHTML = "Please enter all fields";

		setTimeout(() => msg.remove(), 3000);
	} else {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

		userList.appendChild(li);

		// Clear Fields
		nameInput.value = "";
		emailInput.value = "";
	}
}
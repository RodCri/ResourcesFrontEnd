/* 
  No puede ser redeclarada
  Se debe declarar antes de usar
  Tiene block scope
  ES6 2015
*/
let varibale = 12;

const suma = ()=>{
  varibale = 10;
  return varibale;
}

console.log(suma()); // 10
console.log(variable); // 12


// Hoisting -> se debe declarar la variables antes de usarlas 


/*
  No pueden ser redeclaradas
  No pueden se reasignadas
  Se deben inicializar cuando son declaradas
  Tiene block scope
  ES6 2015
*/ 
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

/*
  Use const when you declare:
  A new Array
  A new Object
  A new Function
  A new RegExp
*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// typeof	Returns the type of a variable
// ==	equal to
// ===	equal value and equal type
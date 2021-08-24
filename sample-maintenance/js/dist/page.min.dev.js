"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Accordion JS below 
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var accordionPanel = this.nextElementSibling;

    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  });
} // Learning Sample Code Closure


function display() {
  var a = 100;

  function x() {
    console.log(a);
  }

  a = 400;
  return x;
}

var result = display(); //result();

function printNumber() {
  for (var i = 0; i < 5; i++) {
    var renderThis = function renderThis(pram) {
      setTimeout(function () {
        console.log(pram);
      }, pram * 1000);
    };

    renderThis(i);
  }

  console.log("print 01");
  console.log("print 02");
} //printNumber();
//First class function : Ability to be used as a values 

/*let a = 100;
var b = 10;
const c = 4;
if(true){
    console.log(b);
    const c = 2;
    console.log(c);
    var b = 20;
    let a;
    console.log(a);
    a=12;
    console.log(a);
}
console.log(a);
console.log(b);
console.log(c);

function hoistingDisplay() {
  var b = 40;
  console.log(b);
}
hoistingDisplay();
console.log(b);
*/
// Closure encapsulation and data hiding 


function counter() {
  var count = 0;

  function increament() {
    ++count;
    console.log(count);
  }

  return increament;
} //console.log(count);


var abc = counter();
/*abc();
abc();
abc();*/

function check(param) {
  var count = param;

  this.increament = function () {
    ++count;
    console.log(count);
  };

  return {
    outside: this.increament
  };
}

var sample1 = new check(2);
console.log("contructor"); //sample1.outside();
//sample1.outside();
//sample1.increament();
//The destructuring assignment syntax is a JavaScript expression 
//that makes it possible to unpack values from arrays, 
//or properties from objects, into distinct variables.

var person = {
  firstName: 'John',
  lastName: 'Doe'
}; //console.log(person);

var firstName = person.firstName,
    lastName = person.lastName,
    _person$middleName = person.middleName,
    middleName = _person$middleName === void 0 ? '' : _person$middleName,
    _person$currentAge = person.currentAge,
    currentAge = _person$currentAge === void 0 ? 18 : _person$currentAge; //console.log(currentAge);
// Spread opertor It expands the array into individual elements. 
//So, it can be used to expand the array in a places where zero 
//or more elements are expected.

function sum(x, y, z) {
  return x + y + z + "Rs is there with " + this.firstName;
}

var numbers = [1, 2, 3];
var myObject = {
  firstName: "Enson",
  total: 600
}; // Spread operator is usefull to pass as object or array in function initialisation
//console.log(sum(...numbers));
// expected output: 6
//console.log(sum.apply(null, numbers));
// expected output: 6

console.log(sum.apply(myObject, numbers));
console.log(sum.call(myObject, 4, 2, 3));
var myBind = sum.bind(myObject, 4, 2, 3);
console.log(myBind()); // Some exmaples 

function Calculate(param) {
  var fee = param;

  this.getMonthlyFee = function () {
    var remainingAmount = this.total - fee;
    return "Hello " + this.firstName + " you have so much amount " + remainingAmount;
  };

  return this.getMonthlyFee();
}

var employee = new Calculate(40);
console.log(employee.getMonthlyFee.call(myObject)); //Sort the array

var sortArray = [333, 1, 232, 2, 21312, 45, 4, 5, 232, 1, 2];
var a = sortArray[0],
    b = sortArray[1],
    c = sortArray[2],
    d = sortArray[3];
console.log(a);
sortArray.sort(function (a, b) {
  return a - b;
});
console.log(sortArray); // Map filter reduce for each

var map = sortArray.map(function (ele, index, arr) {
  return ele * 2;
});
console.log(map);
var filter = sortArray.filter(function (ele, index, arr) {
  return arr.indexOf(ele) === index;
});
var useSet = new Set(sortArray);
console.log(filter);
console.log(useSet.size);
console.log(useSet.has(11));
console.log(_toConsumableArray(useSet));
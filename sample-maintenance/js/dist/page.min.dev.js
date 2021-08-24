"use strict";

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
console.log(b);*/
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
  return x + y + z;
}

var numbers = [1, 2, 3]; //console.log(sum(...numbers));
// expected output: 6
//console.log(sum.apply(null, numbers));
// expected output: 6
//Sort the array

var sortArray = [333, 1, 232, 2, 21312, 45];
sortArray.sort(function (a, b) {
  return a - b;
}); //console.log(sortArray);
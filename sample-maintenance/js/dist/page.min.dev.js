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
// closure is a function along with its lexical scope bundle together to form a closure 


function display() {
  var a = 100;

  function x() {
    console.log(a);
  }

  a = 400;
  return x;
}

var result = display(); //result();
// closure 2

function printNumber() {
  for (var i = 0; i < 5; i++) {
    var renderThis = function renderThis(pram) {
      setTimeout(function () {
        console.log(pram);
      }, pram * 1000);
    };

    renderThis(i);
  } //console.log("print 01");
  //console.log("print 02");

} //printNumber();
//First class function : Ability to be used as a values 
// Hoisting


var a = 100;
var b = 10;
var c = 4;

if (true) {
  //console.log(a);
  console.log(b); //console.log(c);
  //const c = 2;

  console.log(c);
  var b = 20; //let a;

  console.log(a);
  a = 12;
  console.log(a);
}

console.log(a);
console.log(b);
console.log(c);

function hoistingDisplay() {
  var b = 40;
  var a = 2;
  console.log(a);
  console.log(b);
  console.log("funct" + c);
}

hoistingDisplay();
console.log(a);
console.log(b); // Closure encapsulation and data hiding 

function counter() {
  var count = 0;

  function increament() {
    ++count; //console.log(count);
  }

  return increament;
} //console.log(count);


var abc = counter();
/*abc();
abc();
abc();*/

function Check(param) {
  var count = param;

  this.increament = function () {
    ++count; //console.log(count);
  };

  return {
    outside: this.increament
  };
}

var sample1 = new Check(2); //console.log("contructor");
//sample1.outside();
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
// This will reduce use of apply or call methods 
//console.log(sum(...numbers));
// expected output: 6
//console.log(sum.apply(null, numbers));
// expected output: 6
//console.log(sum.apply(myObject, numbers));
//console.log(sum.call(myObject, 4,2,3));

var myBind = sum.bind(myObject, 4, 2, 3); //console.log(myBind());
// Some exmaples 

function Calculate(param) {
  var fee = param;

  this.getMonthlyFee = function () {
    var remainingAmount = this.total - fee;
    return "Hello " + this.firstName + " you have so much amount " + remainingAmount;
  };

  return this.getMonthlyFee();
}

Calculate.prototype.display = function () {
  return "this is display function";
};

var employee = new Calculate(40); //console.log(employee.getMonthlyFee.call(myObject));
//console.log(employee.display());
//Sort the array

var sortArray = [333, 1, 232, 2, 21312, 45, 4, 5, 232, 1, 2];
var r = sortArray[0],
    b = sortArray[1],
    h = sortArray[2],
    d = sortArray[3]; //console.log(a);

sortArray.sort(function (a, b) {
  return a - b;
}); //console.log(sortArray);
// Map, filter, reduce,  for each

var map = sortArray.map(function (ele, index, arr) {
  return ele * 2;
}); //console.log("Map funct  "+map);

var filter = sortArray.filter(function (ele, index, arr) {
  return arr.indexOf(ele) === index;
}); //console.log("filter "+filter);

var reduce = sortArray.reduce(function (initial, sum) {
  return initial + sum;
}); //console.log("Reduce "+reduce);
// String and Array

var str = "Heloothere"; //console.log(str.slice(0, -4));
//console.log(str.substring(0, 4));

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //console.log(array.slice(0, 4));
//console.log(array.splice(4, 2, "Enson"));
//console.log(array)
// Async, wait and promise kindly check ... React js for more details
///////////////////////////////////////////// Map & Weak Maps ///////////////////////////////////
// Data structures 
// map binds arbitary values to other values 

var x = {};
var z = {
  num: 1
};
var newMap = new Map();
newMap.set(x, 'check').set(z, 'check1').set(x, 'efc'); //z = null;
//console.log(newMap);

/*for ([key, value] of newMap.entries()) {
  console.log(key, value);
}*/
//console.log(newMap);
//console.log([...newMap]) // 2 dimentional Array

var myMap = new Map();
var myWeakMap = new WeakMap();
var obj1 = {
  "firstName": "Enson",
  "LastName": "Rod"
};
var obj2 = {
  "firstName": "Jason",
  "LastName": "Rod"
};
myMap.set(obj1, "myMap data");
myWeakMap.set(obj2, "myWeakMap data");
console.log(myMap.get(obj1));
console.log(myWeakMap.get(obj2));
obj1 = null;
obj2 = null;
console.log(myMap);
console.log(myWeakMap);
var useSet = new Set(sortArray); //console.log(Array.from(useSet));
//console.log(useSet.size);
//console.log(useSet.has(11));
//console.log([...useSet]);
//let useSetObject =  new WeakSet([{a:1},{b:2}]);
//console.log(useSetObject);
//console.log("simple array logic for  1 1 1 2 2 3 3 4 4 5 5")

var thtd = [1, 1, 1, 3, 3, 4, 5, 5];

var coutElements = function coutElements(params) {
  //console.log(params)
  var count = 0;

  for (var _i = 0; _i < params.length; _i++) {
    if (params.indexOf(params[_i] + 1) != -1) {
      count = ++count;
    }
  } //console.log(count);

}; //console.log(coutElements(thtd));
// Logical question based on the input given 


var ghjf = ["5", "2", "C", "D", "+"];

var sumDisplay = function sumDisplay(params) {
  //console.log(params)
  var myArr = [];

  for (var _i2 = 0; _i2 < params.length; _i2++) {
    if (!isNaN(params[_i2])) {
      //console.log("yes number");
      myArr.push(parseInt(params[_i2]));
    }

    switch (params[_i2]) {
      case "C":
        myArr.pop();
        break;

      case "D":
        myArr.push(myArr[myArr.length - 1] * 2);
        break;

      case "+":
        myArr.push(myArr[myArr.length - 1] + myArr[myArr.length - 2]);
        break;
    }
  }

  var MynewArry = myArr.reduce(function (sum, start) {
    return sum + start;
  }); //console.log(MynewArry);
}; //console.log(sumDisplay(ghjf));
//duplicateArray


var duplicateArray = [1, 1, 1, 3, 3, 4, 5, 5];

var coutElements = _toConsumableArray(new Set(duplicateArray));

console.log(coutElements); // Remove duplicate in array of objects 
// Expected output unique place 

var arr = [{
  place: "here",
  name: "x",
  other: "other stuff1"
}, {
  place: "there",
  name: "x",
  other: "other stuff2"
}, {
  place: "here",
  name: "y",
  other: "other stuff4"
}, {
  place: "here",
  name: "z",
  other: "other stuff5"
}];

function getUniqueListBy(arr, key) {
  return _toConsumableArray(new Map(arr.map(function (item) {
    return [item[key], item];
  })).values());
}

var arr1 = getUniqueListBy(arr, 'place');
console.log(arr1); // last char of word uppercase
//out put hello enson ---> hellO ensoN

var stringLast = "hello enson how take , are you";
var stringLast = stringLast.split(" ").map(function (target) {
  var letter = target.charAt(target.length - 1).toUpperCase();
  return target.split("").reverse().join("").replace(target.charAt(target.length - 1), letter).split("").reverse().join("");
}); //console.log(stringLast.join(" "));
// Object covert into array of keys or values 

var simpleObj = {
  first: "Enson",
  last: "Rod",
  age: 23,
  address: "Malad"
}; //console.log(Object.values(simpleObj));

var myString = "Hello how are you and how is hello hello are are are";
var countCheck = myString.toLocaleLowerCase().split(" ").reduce(function (prev, cur) {
  console.log(prev[cur]);
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, []);
console.log(countCheck);

var removeDuplicateCheck = _toConsumableArray(new Set(myString.toLocaleLowerCase().split(" ")));

console.log(removeDuplicateCheck);
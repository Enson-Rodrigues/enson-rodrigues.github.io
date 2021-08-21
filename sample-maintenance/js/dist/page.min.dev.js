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


var a = 100;
{
  //console.log(a);
  var _a;

  console.log(_a);
  _a = 12;
  console.log(_a);
}
console.log(a);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.decrement = exports.increment = void 0;

var increment = function increment(num) {
  return {
    type: 'INCREMENT',
    payload: num
  };
};

exports.increment = increment;

var decrement = function decrement() {
  return {
    type: 'DECREMENT'
  };
};

exports.decrement = decrement;

var user = function user() {
  return {
    type: "SIGN_IN"
  };
};

exports.user = user;
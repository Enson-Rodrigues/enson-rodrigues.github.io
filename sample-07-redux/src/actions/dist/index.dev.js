"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.decrement = exports.increment = void 0;

var _actionType = require("./actionType");

var increment = function increment(num) {
  return {
    type: _actionType.ActionTypes.INCREMENT,
    payload: num
  };
};

exports.increment = increment;

var decrement = function decrement() {
  return {
    type: _actionType.ActionTypes.DECREMENT
  };
};

exports.decrement = decrement;

var user = function user() {
  return {
    type: _actionType.ActionTypes.SIGN_IN
  };
};

exports.user = user;
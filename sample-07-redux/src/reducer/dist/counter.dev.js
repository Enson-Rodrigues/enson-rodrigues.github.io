"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

//reducer 
var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload || 1);

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

var _default = counterReducer;
exports["default"] = _default;
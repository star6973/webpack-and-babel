"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Keypad = _interopRequireDefault(require("./Keypad"));

var _react = _interopRequireDefault(require("react"));

function Console() {
  return /*#__PURE__*/_react.default.createElement(_Keypad.default, null);
}

var _default = Console;
exports.default = _default;
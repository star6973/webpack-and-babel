"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App.js"));

_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_App.default, null), document.getElementById('root'));
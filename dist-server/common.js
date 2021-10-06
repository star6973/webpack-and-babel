"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LottieControl = LottieControl;

var _reactLottie = _interopRequireDefault(require("react-lottie"));

function LottieControl(_ref) {
  var loop = _ref.loop,
      autoplay = _ref.autoplay,
      data = _ref.data;
  return /*#__PURE__*/React.createElement(_reactLottie.default, {
    options: {
      loop: loop,
      autoplay: autoplay,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  });
}
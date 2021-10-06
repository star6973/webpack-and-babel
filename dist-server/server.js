"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./App"));

var url = _interopRequireWildcard(require("url"));

var _styledComponents = require("styled-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express.default)();

var html = _fs.default.readFileSync(_path.default.resolve(__dirname, '../dist/index.html'), 'utf-8');

app.use('/dist', _express.default.static('dist'));
app.get('*', function (req, res) {
  //* 문자열로 된 주소값을 구조체 변환
  var parsedUrl = url.parse(req.url, true);
  var page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'console'; //* 스타일을 추출하는데 사용될 객체

  var sheet = new _styledComponents.ServerStyleSheet(); //* renderToString 함수를 이용해 App 컴포넌트를 렌더링

  var renderString = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react.default.createElement(_App.default, {
    page: page
  }))); //* 스타일 정보 추출

  var styles = sheet.getStyleTags(); //* client에 전달할 초기 데이터

  var initialData = {
    page: page
  };
  var result = html.replace('<div id="root"></div>', "<div id=\"root\">".concat(renderString, "</div>")).replace('__DATA_FROM_SERVER__', JSON.stringify(initialData)).replace('__STYLE_FROM_SERVER__', styles);
  res.send(result);
});
app.listen(3000);
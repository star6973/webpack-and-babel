'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(
    require('@babel/runtime/regenerator')
);

var _asyncToGenerator2 = _interopRequireDefault(
    require('@babel/runtime/helpers/asyncToGenerator')
);

var _slicedToArray2 = _interopRequireDefault(
    require('@babel/runtime/helpers/slicedToArray')
);

var _axios = _interopRequireDefault(require('axios'));

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(
        nodeInterop
    ) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (
        obj === null ||
        (_typeof(obj) !== 'object' && typeof obj !== 'function')
    ) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (
            key !== 'default' &&
            Object.prototype.hasOwnProperty.call(obj, key)
        ) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

var Keypad = function Keypad() {
    var _useState = (0, _react.useState)(''),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        robotName = _useState2[0],
        setRobotName = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        correctPassWord = _useState4[0],
        setcorrectPassWord = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
        password = _useState6[0],
        setPassWord = _useState6[1];

    var pw = '';

    var handleClickNumber = function handleClickNumber(e, dots) {
        e.preventDefault();
        e.target.classList.add('grow');
        dots[pw.length].classList.add('active');
        pw += e.currentTarget.innerText;

        if (pw.length >= 4) {
            setPassWord(pw);
            pw = '';
        }
    };

    (0, _react.useEffect)(
        function () {
            var Initializing = /*#__PURE__*/ (function () {
                var _ref = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/ _regenerator.default.mark(function _callee() {
                        var resPreferences;
                        return _regenerator.default.wrap(function _callee$(
                            _context
                        ) {
                            while (1) {
                                switch ((_context.prev = _context.next)) {
                                    case 0:
                                        _context.next = 2;
                                        return _axios.default.get(
                                            './document/preferences.json'
                                        );

                                    case 2:
                                        resPreferences = _context.sent;

                                        if (resPreferences.status === 200) {
                                            setRobotName(
                                                resPreferences.data.ROBOT_NAME
                                            );
                                            setcorrectPassWord(
                                                resPreferences.data.PASSWORD
                                            );
                                            console.log(resPreferences.data);
                                        }

                                    case 4:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        },
                        _callee);
                    })
                );

                return function Initializing() {
                    return _ref.apply(this, arguments);
                };
            })();

            Initializing();
            var dots = Array.from(
                document.getElementsByClassName('secure__dot')
            );
            var keys = Array.from(
                document.getElementsByClassName('secure__key')
            );

            var clickEvent = function clickEvent(e) {
                return handleClickNumber(e, dots);
            };

            keys.forEach(function (_, idx) {
                keys[idx].addEventListener('mousedown', clickEvent);

                if (password.length === 4) {
                    console.log(password, correctPassWord);

                    if (password === correctPassWord) {
                        dots.forEach(function (_, jdx) {
                            dots[jdx].classList.add('correct');
                        });
                    } else {
                        dots.forEach(function (_, jdx) {
                            dots[jdx].classList.add('wrong');
                        });
                    }

                    setTimeout(function () {
                        dots.forEach(function (dot) {
                            return (dot.className = 'secure__dot');
                        });
                    }, 900);
                }
            });
            return function () {
                for (var i = 0; i < keys.length; i++) {
                    if (keys[i]) {
                        keys[i].removeEventListener(
                            'mousedown',
                            handleClickNumber
                        );
                    }
                }
            };
        },
        [password]
    );
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: 'password__ctrl',
        },
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: 'secure__top',
            },
            /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                    className: 'robot__tag',
                },
                robotName
            )
        ),
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: 'secure__middle',
            },
            /*#__PURE__*/ _react.default.createElement(
                'p',
                null,
                '\uAD00\uB9AC\uC790 \uC554\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694'
            ),
            /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                    className: 'secure__dots',
                },
                /*#__PURE__*/ _react.default.createElement('div', {
                    className: 'secure__dot',
                }),
                /*#__PURE__*/ _react.default.createElement('div', {
                    className: 'secure__dot',
                }),
                /*#__PURE__*/ _react.default.createElement('div', {
                    className: 'secure__dot',
                }),
                /*#__PURE__*/ _react.default.createElement('div', {
                    className: 'secure__dot',
                })
            )
        ),
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: 'secure__bottom',
            },
            /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                    className: 'secure__key__contianer',
                },
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '1'
                ),
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '2'
                ),
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '3'
                )
            ),
            /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                    className: 'secure__key__contianer',
                },
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '4'
                ),
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '5'
                ),
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '6'
                )
            ),
            /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                    className: 'secure__key__contianer',
                },
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '7'
                ),
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '8'
                ),
                /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                        className: 'secure__key',
                    },
                    '9'
                )
            )
        )
    );
};

var _default = Keypad;
exports.default = _default;

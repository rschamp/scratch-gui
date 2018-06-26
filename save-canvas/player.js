var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[1],{

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_stage-only_3WHZN * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"stage-only": "player_stage-only_3WHZN",
	"stageOnly": "player_stage-only_3WHZN"
};

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(410);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _box = __webpack_require__(17);

var _box2 = _interopRequireDefault(_box);

var _gui = __webpack_require__(152);

var _gui2 = _interopRequireDefault(_gui);

var _hashParserHoc = __webpack_require__(116);

var _hashParserHoc2 = _interopRequireDefault(_hashParserHoc);

var _appStateHoc = __webpack_require__(115);

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _player = __webpack_require__(411);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrappedGui = (0, _hashParserHoc2.default)((0, _appStateHoc2.default)(_gui2.default));

if ("production" === 'production' && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    // Warn before navigating away
    window.onbeforeunload = function () {
        return true;
    };
}

var Player = function (_React$Component) {
    _inherits(Player, _React$Component);

    function Player(props) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

        _this.handleSeeInside = _this.handleSeeInside.bind(_this);
        _this.handleSeeCommunity = _this.handleSeeCommunity.bind(_this);
        _this.state = {
            isPlayerOnly: true
        };
        return _this;
    }

    _createClass(Player, [{
        key: 'handleSeeInside',
        value: function handleSeeInside() {
            this.setState({ isPlayerOnly: false });
        }
    }, {
        key: 'handleSeeCommunity',
        value: function handleSeeCommunity() {
            this.setState({ isPlayerOnly: true });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _box2.default,
                {
                    className: (0, _classnames2.default)(_defineProperty({}, _player2.default.stageOnly, this.state.isPlayerOnly))
                },
                this.state.isPlayerOnly && _react2.default.createElement(
                    'button',
                    { onClick: this.handleSeeInside },
                    'See inside'
                ),
                _react2.default.createElement(WrappedGui, {
                    enableCommunity: true,
                    isPlayerOnly: this.state.isPlayerOnly,
                    onSeeCommunity: this.handleSeeCommunity
                })
            );
        }
    }]);

    return Player;
}(_react2.default.Component);

var appTarget = document.createElement('div');
document.body.appendChild(appTarget);

_reactDom2.default.render(_react2.default.createElement(Player, null), appTarget);

/***/ })

},[[412,0]]]);
//# sourceMappingURL=player.js.map
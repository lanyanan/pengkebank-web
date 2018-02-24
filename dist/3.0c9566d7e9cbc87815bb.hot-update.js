webpackHotUpdate(3,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(190);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(191);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(192);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(193);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
	(0, _inherits3.default)(Header, _Component);

	function Header() {
		(0, _classCallCheck3.default)(this, Header);
		return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	(0, _createClass3.default)(Header, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'header' },
				'"header"'
			);
		}
	}]);
	return Header;
}(_react.Component);

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(190);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(191);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(192);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(193);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sildbar = function (_Component) {
	(0, _inherits3.default)(Sildbar, _Component);

	function Sildbar() {
		(0, _classCallCheck3.default)(this, Sildbar);
		return (0, _possibleConstructorReturn3.default)(this, (Sildbar.__proto__ || Object.getPrototypeOf(Sildbar)).apply(this, arguments));
	}

	(0, _createClass3.default)(Sildbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'sildbar' },
				'"sildbar"'
			);
		}
	}]);
	return Sildbar;
}(_react.Component);

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(190);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(191);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(192);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(193);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_Component) {
	(0, _inherits3.default)(Container, _Component);

	function Container() {
		(0, _classCallCheck3.default)(this, Container);
		return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	}

	(0, _createClass3.default)(Container, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'header' },
				'"container"'
			);
		}
	}]);
	return Container;
}(_react.Component);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(76);

var _redux = __webpack_require__(19);

var _reactLoadable = __webpack_require__(99);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRedux = __webpack_require__(64);

__webpack_require__(111);

var _reducers = __webpack_require__(123);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(134);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(135);

var _Loading = __webpack_require__(136);

var _Loading2 = _interopRequireDefault(_Loading);

var _header = __webpack_require__(246);

var _header2 = _interopRequireDefault(_header);

var _sildbar = __webpack_require__(247);

var _sildbar2 = _interopRequireDefault(_sildbar);

var _container = __webpack_require__(248);

var _container2 = _interopRequireDefault(_container);

var _reactRouterDom = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Home from './Home';
var AsyncHome = (0, _reactLoadable2.default)({
		loader: function loader() {
				return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 162));
		},
		loading: _Loading2.default
});

var AsyncTiming = (0, _reactLoadable2.default)({
		loader: function loader() {
				return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 163));
		},
		loading: _Loading2.default
});

var AsyncList = (0, _reactLoadable2.default)({
		loader: function loader() {
				return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 164));
		},
		loading: _Loading2.default
});

// import {Lamp} from './Lamp';
// import {Reseting} from './Reseting';
// import {Music} from './Music';
// import {List} from './list';
// import {Timing} from './Timing';
// import {Toast} from './toast';
// import {Switch} from './Switch';


var loggerMiddleware = (0, _reduxLogger.createLogger)();

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware)(_redux.createStore);

var store = createStoreWithMiddleware(_reducers2.default);

//等DOM加载完成
//这种是hash值改变的
document.addEventListener('DOMContentLoaded', function () {
		(0, _reactDom.render)(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(
						_reactRouterDom.HashRouter,
						null,
						_react2.default.createElement(
								_reactRouterDom.Switch,
								null,
								_react2.default.createElement(_reactRouterDom.Route, { exzact: true, path: '/home', component: AsyncHome }),
								_react2.default.createElement(_reactRouterDom.Route, { exzact: true, path: '/timing', component: AsyncTiming }),
								_react2.default.createElement(_reactRouterDom.Route, { exzact: true, path: '/list', component: AsyncList }),
								_react2.default.createElement(_reactRouterDom.Redirect, { path: '/', to: { pathname: '/home' } })
						)
				)
		), document.getElementById('ROOT'));
});

/***/ })

})
//# sourceMappingURL=3.0c9566d7e9cbc87815bb.hot-update.js.map
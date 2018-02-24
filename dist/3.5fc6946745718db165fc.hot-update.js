webpackHotUpdate(3,{

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(102);

var _redux = __webpack_require__(35);

var _reactLoadable = __webpack_require__(125);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRedux = __webpack_require__(15);

__webpack_require__(137);

var _reducers = __webpack_require__(141);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(152);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(153);

var _Loading = __webpack_require__(154);

var _Loading2 = _interopRequireDefault(_Loading);

var _admin = __webpack_require__(155);

var _admin2 = _interopRequireDefault(_admin);

var _reactRouterDom = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Home from './Home';
var AsyncHome = (0, _reactLoadable2.default)({
		loader: function loader() {
				return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 218));
		},
		loading: _Loading2.default
});

var AsyncTiming = (0, _reactLoadable2.default)({
		loader: function loader() {
				return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 219));
		},
		loading: _Loading2.default
});

var AsyncList = (0, _reactLoadable2.default)({
		loader: function loader() {
				return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 220));
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
								_react2.default.createElement(_reactRouterDom.Route, { exzact: true, path: '/admin', component: _admin2.default }),
								_react2.default.createElement(_reactRouterDom.Redirect, { path: '/', to: { pathname: '/admin' } })
						)
				)
		), document.getElementById('ROOT'));
});

/***/ })

})
//# sourceMappingURL=3.5fc6946745718db165fc.hot-update.js.map
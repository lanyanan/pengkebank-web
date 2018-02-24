webpackJsonp([2],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _ListAction = __webpack_require__(98);

var _FetchAction = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
	(0, _inherits3.default)(List, _Component);

	function List() {
		(0, _classCallCheck3.default)(this, List);
		return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	}

	(0, _createClass3.default)(List, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.dispatch((0, _FetchAction.fetchPostsIfNeeded)(_ListAction.getDataList, './mock/datalist.json'));
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    dispatch = _props.dispatch,
			    listReducer = _props.listReducer;

			var arr = listReducer.arr || [1, 2, 3, 4, 5];
			console.log(listReducer);
			return _react2.default.createElement(
				'div',
				null,
				arr.map(function (item, index) {
					return _react2.default.createElement(
						'p',
						{ key: index },
						item
					);
				})
			);
		}
	}]);
	return List;
}(_react.Component);

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。


function select(state) {
	console.log(state);
	return {
		listReducer: state.ListReducer
	};
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(List);

/***/ })

});
//# sourceMappingURL=2.bundle.js.map
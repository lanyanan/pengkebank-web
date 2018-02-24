webpackHotUpdate(0,{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColorPicker = undefined;

var _classCallCheck2 = __webpack_require__(190);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(191);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(192);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(193);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base64img = __webpack_require__(231);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(76);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorPicker = exports.ColorPicker = function (_Component) {
    (0, _inherits3.default)(ColorPicker, _Component);

    function ColorPicker() {
        (0, _classCallCheck3.default)(this, ColorPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

        _this.wh = document.body.clientWidth * 0.6;
        _this.state = {
            x: _this.wh / 4 - 10,
            y: _this.wh / 4 - 10,
            r: 94,
            g: 245,
            b: 132,
            a: 1
        };
        return _this;
    }

    (0, _createClass3.default)(ColorPicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var c = _reactDom2.default.findDOMNode(this.refs.canvas);
            var cxt = c.getContext('2d');
            var img = new Image();
            img.src = _Base64img.Base64Img;
            img.onload = function () {
                cxt.drawImage(img, 0, 0, _this2.wh, _this2.wh);
            };
        }
    }, {
        key: 'selectColor',
        value: function selectColor(e) {
            var c = _reactDom2.default.findDOMNode(this.refs.canvas);
            var cxt = c.getContext('2d');
            var offset = this.getOffset(c);
            console.log(offset);
            var x = e.targetTouches[0].pageX - offset.x;
            var y = e.targetTouches[0].pageY - offset.y;
            var R1 = parseInt(c.clientWidth / 2);
            var R2 = parseInt(c.clientWidth / 4);
            //圆心为 R1,R1;
            if (x < R1 && y <= R1) {
                if (Math.pow(R1 - x, 2) + Math.pow(R1 - y, 2) < Math.pow(R1, 2) && Math.pow(R1 - x, 2) + Math.pow(R1 - y, 2) > Math.pow(R2, 2)) {
                    var rgba = cxt.getImageData(x, y, 1, 1).data;
                    console.log(rgba);
                    this.setState({
                        x: x,
                        y: y,
                        r: rgba[0],
                        g: rgba[1],
                        b: rgba[2],
                        a: rgba[3] / 255
                    });
                }
            } else if (x >= R1 && y <= R1) {
                if (Math.pow(x - R1, 2) + Math.pow(R1 - y, 2) < Math.pow(R1, 2) && Math.pow(x - R1, 2) + Math.pow(R1 - y, 2) > Math.pow(R2, 2)) {
                    var _rgba = cxt.getImageData(x, y, 1, 1).data;
                    console.log(_rgba);
                    this.setState({
                        x: x,
                        y: y,
                        r: _rgba[0],
                        g: _rgba[1],
                        b: _rgba[2],
                        a: _rgba[3] / 255
                    });
                }
            } else if (x >= R1 && y > R1) {
                if (Math.pow(x - R1, 2) + Math.pow(y - R1, 2) < Math.pow(R1, 2) && Math.pow(x - R1, 2) + Math.pow(y - R1, 2) > Math.pow(R2, 2)) {
                    var _rgba2 = cxt.getImageData(x, y, 1, 1).data;
                    console.log(_rgba2);
                    this.setState({
                        x: x,
                        y: y,
                        r: _rgba2[0],
                        g: _rgba2[1],
                        b: _rgba2[2],
                        a: _rgba2[3] / 255
                    });
                }
            } else if (x < R1 && y >= R1) {
                if (Math.pow(R1 - x, 2) + Math.pow(y - R1, 2) < Math.pow(R1, 2) && Math.pow(R1 - x, 2) + Math.pow(y - R1, 2) > Math.pow(R2, 2)) {
                    var _rgba3 = cxt.getImageData(x, y, 1, 1).data;
                    console.log(_rgba3);
                    this.setState({
                        x: x,
                        y: y,
                        r: _rgba3[0],
                        g: _rgba3[1],
                        b: _rgba3[2],
                        a: _rgba3[3] / 255
                    });
                }
            }
        }
    }, {
        key: 'closePicker',
        value: function closePicker(e) {
            e.preventDefault();
            if (typeof this.props.close === 'function') {
                this.props.close({
                    r: this.state.r,
                    g: this.state.g,
                    b: this.state.b,
                    a: this.state.a
                });
            }
            if (typeof this.props.cancle === 'function') {
                this.props.cancle();
            }
        }
    }, {
        key: 'cancelPicker',
        value: function cancelPicker(e) {
            e.preventDefault();
            if (typeof this.props.cancle === 'function') {
                this.props.cancle();
            }
        }
    }, {
        key: 'submitColor',
        value: function submitColor(e) {
            if (typeof this.props.cb === 'function') {
                this.props.cb({
                    r: this.state.r,
                    g: this.state.g,
                    b: this.state.b,
                    a: this.state.a
                });
            }
        }
    }, {
        key: 'getOffset',
        value: function getOffset(dom) {
            var xy = { x: 0, y: 0 };
            while (dom.className != 'colorpicker' && dom.tagName != 'BODY' && dom.tagName != 'HTML') {
                xy.x += dom.offsetLeft;
                xy.y += dom.offsetTop;
                dom = dom.parentNode;
            }
            // xy.y += dom.offsetTop;
            xy.y += document.body.scrollTop;
            return xy;
        }
        // 阻止页面滚动

    }, {
        key: 'stopBodyScroll',
        value: function stopBodyScroll(e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            var rgba = 'rgba(' + this.state.r + ', ' + this.state.g + ', ' + this.state.b + ', ' + this.state.a + ')';
            return _react2.default.createElement(
                'section',
                { className: 'colorpicker', style: { display: this.props.show ? 'block' : 'none' }, onTouchStart: this.cancelPicker.bind(this) },
                _react2.default.createElement(
                    'div',
                    { className: 'cp-wrap', onTouchStart: this.stopBodyScroll },
                    _react2.default.createElement(
                        'div',
                        { className: 'cp-hd' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cp-preview', onTouchStart: this.cancelPicker.bind(this) },
                            '\u53D6\u6D88'
                        ),
                        _react2.default.createElement(
                            'b',
                            { onTouchStart: this.closePicker.bind(this), style: { color: "#1bb1e4", fontSize: "16px" } },
                            '\u786E\u5B9A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: 'wrap', className: 'canvas-wrap', style: { width: this.wh, height: this.wh, marginLeft: -this.wh / 2 + "px" }, onTouchMove: this.selectColor.bind(this),
                            onTouchStart: this.selectColor.bind(this), onTouchEnd: this.submitColor.bind(this) },
                        _react2.default.createElement('canvas', { ref: 'canvas', width: this.wh, height: this.wh }),
                        _react2.default.createElement('i', { style: { top: this.state.y - 10, left: this.state.x - 10 } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'cp-lamp', style: { backgroundColor: rgba } },
                            _react2.default.createElement('img', { src: __webpack_require__(228) }),
                            _react2.default.createElement('img', { src: __webpack_require__(228) })
                        )
                    )
                )
            );
        }
    }]);
    return ColorPicker;
}(_react.Component); /**
                      * 颜色拾取组件
                      * @prop {boolean}  show    是否显示
                      * @prop {function} close   关闭按钮回调函数
                      * @prop {function} cb      选择完成时的回调函数
                      */


;

/***/ })

})
//# sourceMappingURL=0.ebe14be30c10e74bf53a.hot-update.js.map
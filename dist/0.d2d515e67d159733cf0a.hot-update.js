webpackHotUpdate(0,{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(64);

var _HomeAction = __webpack_require__(71);

var _FetchAction = __webpack_require__(11);

var _colorPicker = __webpack_require__(230);

var _reactRouterDom = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
    (0, _inherits3.default)(Home, _Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            colorArray: ['#ff7c7c', '#ffd376', '#a0e674', '#5be6bd', '#88a1fe'],
            colorPickerShow: false
        };
        return _this;
    }

    (0, _createClass3.default)(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _FetchAction.fetchPostsIfNeeded)(_HomeAction.changeSwitchState, '/api/1.1/news/index'));
        }
    }, {
        key: 'close',
        value: function close() {
            if (!this.props.visibleTodos.lightSwitchState) this.props.dispatch((0, _HomeAction.changeSwitchState)(true));
            if (this.props.visibleTodos.lightSwitchState) this.props.dispatch((0, _HomeAction.changeSwitchState)(false));
        }
    }, {
        key: 'getCircle',
        value: function getCircle() {
            var btn = document.getElementById("btn");
            var xingyue = document.getElementById("xingyue");
            var top = document.getElementById("lampTop");
            var lampSpace = document.getElementById("lampSpace");
            var lampTop = top.clientHeight + lampSpace.clientHeight;
            var xingyueWidth = xingyue.clientHeight;
            var preLeft = xingyue.offsetLeft;
            var preTop = xingyue.offsetTop;
            //圆心坐标
            window.R = parseInt(xingyueWidth / 2);
            window.x = preLeft + parseInt(xingyueWidth / 2);
            window.y = preTop + lampTop + parseInt(xingyueWidth / 2);

            console.log(R, x, y);
        }
    }, {
        key: 'addBackground',
        value: function addBackground(e) {
            //document.getElementsByClassName('lamp-color').
            var pcolorArr = document.getElementsByClassName('lamp-color');
            var colorArr = [];
            colorArr.push(pcolorArr[0].getElementsByTagName('i'));
            var Dom = e.target;
            var index = e.target.getAttribute('data-key');
            var DomPre = Dom.parentNode;
            var computedStyle = document.defaultView.getComputedStyle(DomPre, null);
            var rgbaString = computedStyle.backgroundColor;
            var rgbArr = rgbaString.substring(4, rgbaString.length - 1).split(",");
            this.props.dispatch((0, _HomeAction.changeColor)(rgbArr[0], rgbArr[1], rgbArr[2], 1, index, this.props.visibleTodos.lightingPatternNumber));
        }
    }, {
        key: 'selectColor',
        value: function selectColor() {
            this.setState({
                colorPickerShow: true
            });
        }
    }, {
        key: 'cancleColorPicker',
        value: function cancleColorPicker() {
            this.setState({
                colorPickerShow: false
            });
        }
    }, {
        key: 'changeLightImg',
        value: function changeLightImg() {
            this.props.dispatch((0, _HomeAction.changeColor)(this.props.visibleTodos.R, this.props.visibleTodos.G, this.props.visibleTodos.B, 1, this.props.visibleTodos.i, 0));
        }
    }, {
        key: 'changeSceneImg',
        value: function changeSceneImg() {
            this.props.dispatch((0, _HomeAction.changeColor)(this.props.visibleTodos.R, this.props.visibleTodos.G, this.props.visibleTodos.B, 1, this.props.visibleTodos.i, 1));
        }
    }, {
        key: 'changeLampColor',
        value: function changeLampColor(data) {
            this.props.dispatch((0, _HomeAction.changeColor)(data.r, data.g, data.b, 1, 0, this.props.lightingPatternNumber));
            var colorArr = this.state.colorArray;
            var item = 'rgb(' + data.r + "," + data.g + "," + data.b + ")";
            var color = '#' + pad0(data.r.toString(16)) + pad0(data.g.toString(16)) + pad0(data.b.toString(16));
            function pad0(hex) {
                return hex.replace(/^\b(?=.$)/, '0');
            }
            colorArr.unshift(color);
            this.setState({
                colorArray: colorArr
            });
        }
    }, {
        key: 'startMove',
        value: function startMove(e) {
            this.getCircle();
            e.preventDefault();
            e.stopPropagation();
            this.clientX = e.touches[0].clientX;
            this.clientY = e.touches[0].clientY;
            console.log(this.clientX);
        }
    }, {
        key: 'moveIng',
        value: function moveIng(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log(2);
            var distance = Math.pow(e.touches[0].clientX - window.x, 2) + Math.pow(e.touches[0].clientY - window.y, 2);
            var radius = Math.pow(window.R, 2);
            // console.log(distance,radius);
            if (distance - radius < 6400 && distance - radius > -6400) {
                var sin = (e.touches[0].clientY - window.y) / Math.sqrt(distance);
                var rotuer = Math.asin(sin) * 180 / Math.PI;
                if (e.touches[0].clientX > window.x && e.touches[0].clientY < window.y) rotuer = 180 - Math.abs(rotuer);
                if (e.touches[0].clientX > window.x && e.touches[0].clientY >= window.y) rotuer = 180 + Math.abs(rotuer);
                if (e.touches[0].clientX <= window.x && e.touches[0].clientY < window.y) rotuer = Math.abs(rotuer);
                if (e.touches[0].clientX <= window.x && e.touches[0].clientY >= window.y) rotuer = -Math.abs(rotuer);
                var lightness = parseInt((rotuer + 45) / 2.27) < 0 ? 0 : parseInt((rotuer + 45) / 2.27) > 120 ? 120 : parseInt((rotuer + 45) / 2.27);

                this.props.dispatch((0, _HomeAction.changeLightness)(lightness));
            }
        }
    }, {
        key: 'endMove',
        value: function endMove(e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, {
        key: 'startChange',
        value: function startChange(e) {
            this.getCircle();
            e.preventDefault();
            e.stopPropagation();
            this.initX = e.touches[0].clientX;
            this.initY = e.touches[0].clientY;
            console.log(this.initY);
        }
    }, {
        key: 'endChange',
        value: function endChange(e) {
            e.preventDefault();
            e.stopPropagation();
            //console.log(this.initY)
            var distance = Math.pow(this.initX - window.x, 2) + Math.pow(this.initY - window.y, 2);
            var radius = Math.pow(window.R, 2);
            //console.log(distance,radius);
            if (distance - radius < 2500 && distance - radius > -2500) {
                console.log(9);
                var sin = (this.initY - window.y) / Math.sqrt(distance);
                var rotuer = Math.asin(sin) * 180 / Math.PI;
                if (this.initX > window.x && this.initY < window.y) rotuer = 180 - Math.abs(rotuer);
                if (this.initX > window.x && this.initY >= window.y) rotuer = 180 + Math.abs(rotuer);
                if (this.initX <= window.x && this.initY < window.y) rotuer = Math.abs(rotuer);
                if (this.initX <= window.x && this.initY >= window.y) rotuer = -Math.abs(rotuer);
                var lightness = parseInt((rotuer + 45) / 2.27) < 0 ? 0 : parseInt((rotuer + 45) / 2.27) > 120 ? 120 : parseInt((rotuer + 45) / 2.27);
                console.log(lightness);
                this.props.dispatch((0, _HomeAction.changeLightness)(lightness));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // 通过调用 connect() 注入:
            var _props = this.props,
                dispatch = _props.dispatch,
                visibleTodos = _props.visibleTodos;

            var lightImg = visibleTodos.lightingPatternNumber == 0 ? __webpack_require__(232) : __webpack_require__(233);
            var sceneImg = visibleTodos.lightingPatternNumber == 0 ? __webpack_require__(234) : __webpack_require__(235);
            var lightColor = visibleTodos.lightingPatternNumber == 0 ? "#1bb1e4" : "#919191";
            var sceneColor = visibleTodos.lightingPatternNumber == 0 ? "#919191" : "#1bb1e4";
            var rotate = visibleTodos.lightness * 2.27 < 0 ? 0 : visibleTodos.lightness * 2.27;
            rotate = rotate > 273 ? 273 : rotate;
            var rotateZ = "rotateZ(" + rotate + "deg)";
            var lightness = visibleTodos.lightness < 0 ? 0 : parseInt((visibleTodos.lightness > 120 ? 120 : visibleTodos.lightness) / 1.2);
            console.log(rotateZ);
            var rgba = visibleTodos.lightingPatternNumber == 0 ? 'rgba(210,210,225,1)' : 'rgba(' + visibleTodos.R + ', ' + visibleTodos.G + ', ' + visibleTodos.B + ', ' + visibleTodos.A + ')';
            console.log(rgba);
            var lampColor = [{ pName: "lamp-color-one" }, { pName: "lamp-color-two" }, { pName: "lamp-color-three" }, { pName: "lamp-color-four" }, { pName: "lamp-color-five" }];
            return _react2.default.createElement(
                'div',
                { className: 'lamp' },
                _react2.default.createElement(
                    'div',
                    { id: 'lampTop', className: 'lamp-btn', style: { height: !this.props.visibleTodos.lightSwitchState ? "30%" : "9.9166666rem" } },
                    _react2.default.createElement(
                        'div',
                        { className: 'home-btn-timing' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/timing' },
                            _react2.default.createElement('img', { src: __webpack_require__(236) }),
                            _react2.default.createElement(
                                'h3',
                                null,
                                '\u95F9\u94C3'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'home-btn-title', style: { visibility: 'visible' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'timing-title' },
                            '09:55'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'home-btn-music' },
                        _react2.default.createElement('img', { src: __webpack_require__(237) }),
                        _react2.default.createElement(
                            'h3',
                            null,
                            '\u97F3\u4E50'
                        )
                    )
                ),
                _react2.default.createElement('div', { id: 'lampSpace', style: { width: "100%", height: "2.666667rem" } }),
                _react2.default.createElement(
                    'div',
                    { id: 'lampChart', className: 'lamp-chart' },
                    _react2.default.createElement('img', { className: 'lamp-pic-four', src: __webpack_require__(238) }),
                    _react2.default.createElement('img', { className: 'lamp-pic-one', style: { display: rotate <= 135 ? "block" : "none", transform: rotate <= 135 ? rotateZ : "rotateZ(" + 0 + "deg)" }, src: __webpack_require__(239) }),
                    _react2.default.createElement('img', { className: 'lamp-pic-two', style: { display: rotate >= 0 && rotate <= 225 ? "block" : "none", transform: rotate > 135 && rotate <= 225 ? "rotateZ(" + (rotate - 135) + "deg)" : "rotateZ(" + 0 + "deg)" }, src: __webpack_require__(240) }),
                    _react2.default.createElement('img', { className: 'lamp-pic-three', style: { display: rotate >= 0 && rotate <= 270 ? "block" : "none", transform: rotate > 225 && rotate <= 270 ? "rotateZ(" + (rotate - 225) + "deg)" : "rotateZ(" + 0 + "deg)" }, src: __webpack_require__(241) }),
                    _react2.default.createElement('img', { style: { transform: rotateZ }, className: 'lamp-pic-five', src: __webpack_require__(242) }),
                    _react2.default.createElement(
                        'div',
                        { id: 'xingyue', className: 'lamp-xingyue' },
                        _react2.default.createElement(
                            'div',
                            { className: 'lamp-xingyue-pic', style: { background: rgba } },
                            _react2.default.createElement('img', { className: 'lamp-xingyue-bg', src: __webpack_require__(229) }),
                            _react2.default.createElement('img', { className: 'lamp-xingyue-opacity', src: __webpack_require__(229) })
                        ),
                        _react2.default.createElement(
                            'h3',
                            { className: 'lamp-xingyue-tips', style: { color: "#2ccaff" } },
                            lightness == null ? "--" : lightness
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'lamp-pic', style: { transform: rotateZ } },
                        _react2.default.createElement('div', { className: 'lamp-pic-logo', onTouchStart: this.startChange.bind(this), onTouchEnd: this.endChange.bind(this) }),
                        _react2.default.createElement('span', { id: 'btn', className: 'lamp-pic-btn', onTouchStart: this.startMove.bind(this), onTouchMove: this.moveIng.bind(this), onTouchEnd: this.endMove.bind(this), style: { display: "block", width: "2.5rem", height: "2.5rem", borderRadius: "2.5rem", position: "absolute", left: "50%", bottom: "1.6rem", marginLeft: "-7.0rem" } })
                    ),
                    _react2.default.createElement('span', { className: 'lamp-hidden' }),
                    _react2.default.createElement('span', { className: 'close-btn', onTouchStart: this.close.bind(this) }),
                    _react2.default.createElement('span', { className: 'setting-btn' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'lamp-color', style: { visibility: visibleTodos.lightingPatternNumber == 1 ? "visible" : "hidden" } },
                    lampColor.map(function (item, index) {
                        if (index == visibleTodos.i) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: item.pName, onTouchStart: _this2.addBackground.bind(_this2), style: { background: _this2.state.colorArray[index] } },
                                _react2.default.createElement('i', { 'data-key': index, className: 'lamp-color-selected' })
                            );
                        } else {
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: item.pName, onTouchStart: _this2.addBackground.bind(_this2), style: { background: _this2.state.colorArray[index] } },
                                _react2.default.createElement('i', { 'data-key': index })
                            );
                        }
                    }),
                    _react2.default.createElement(
                        'span',
                        { className: 'lamp-color-select', onTouchStart: this.selectColor.bind(this) },
                        _react2.default.createElement('img', { src: __webpack_require__(243) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'lamp-scene' },
                    _react2.default.createElement(
                        'div',
                        { className: 'lamp-scene-light lamp-scene-style', onTouchStart: this.changeLightImg.bind(this) },
                        _react2.default.createElement('img', { src: lightImg }),
                        _react2.default.createElement(
                            'h3',
                            { style: { color: lightColor } },
                            '\u7167\u660E'
                        )
                    ),
                    _react2.default.createElement('div', { className: 'lamp-scene-space' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'lamp-scene-air lamp-scene-style', onTouchStart: this.changeSceneImg.bind(this) },
                        _react2.default.createElement('img', { src: sceneImg }),
                        _react2.default.createElement(
                            'h3',
                            { style: { color: sceneColor } },
                            '\u6C1B\u56F4'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-on', style: { bottom: this.props.visibleTodos.lightSwitchState ? "-70%" : "0" } },
                    _react2.default.createElement('img', { src: __webpack_require__(244), onTouchStart: this.close.bind(this) }),
                    _react2.default.createElement(
                        'h3',
                        { onTouchStart: this.close.bind(this) },
                        '\u5F00\u542F\u667A\u80FD\u706F'
                    )
                ),
                _react2.default.createElement(_colorPicker.ColorPicker, { show: this.state.colorPickerShow, cancle: this.cancleColorPicker.bind(this), close: this.changeLampColor.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'lamp-setting', style: { visibility: "hidden" } },
                    _react2.default.createElement('div', { className: 'lamp-setting-space' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'lamp-setting-lists' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/reseting' },
                            _react2.default.createElement(
                                'div',
                                { className: 'lamp-setting-list' },
                                '\u8BBE\u5907'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'lamp-setting-list' },
                            '\u8BBE\u5907\u8BE6\u60C5'
                        )
                    )
                )
            );
        }
    }]);
    return Home;
}(_react.Component);

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。


function select(state) {
    console.log(state);
    return {
        visibleTodos: state.HomeReducer
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Home);

/***/ })

})
//# sourceMappingURL=0.d2d515e67d159733cf0a.hot-update.js.map
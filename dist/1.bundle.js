webpackJsonp([1],{

/***/ 219:
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

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(15);

var _TimingAction = __webpack_require__(96);

var _FetchAction = __webpack_require__(26);

var _PickerTime = __webpack_require__(238);

var _reactRouterDom = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timing = function (_Component) {
    (0, _inherits3.default)(Timing, _Component);

    function Timing(props) {
        (0, _classCallCheck3.default)(this, Timing);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Timing.__proto__ || Object.getPrototypeOf(Timing)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Timing, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _FetchAction.fetchPostsIfNeeded)(_TimingAction.changeLightTiming, './timing.json'));
        }
    }, {
        key: 'setTime',
        value: function setTime() {
            this.setState({
                hours: parseInt(arguments[0]),
                minutes: parseInt(arguments[1])
            });
        }
    }, {
        key: 'changeDay',
        value: function changeDay(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.state.daySelect == "none") {
                this.setState({
                    daySelect: "block"
                });
            } else {
                this.setState({
                    daySelect: "none"
                });
            }
        }
    }, {
        key: 'selectWork',
        value: function selectWork(e) {
            this.setState({
                work: "selected",
                week: "",
                repeat: "工作日"
            });
            console.log(this.state.work);
        }
    }, {
        key: 'selectWeek',
        value: function selectWeek(e) {
            this.setState({
                work: "",
                week: "selected",
                repeat: "周末"
            });
        }
    }, {
        key: 'setTiming',
        value: function setTiming() {
            if (this.state.music == "timing-setting-music-right-on") {
                this.setState({
                    music: 'timing-setting-music-right-off'
                });
            } else {
                this.setState({
                    music: 'timing-setting-music-right-on'
                });
            }
        }
    }, {
        key: 'setLight',
        value: function setLight() {
            if (this.state.light == "timing-setting-light-right-on") {
                this.setState({
                    light: 'timing-setting-light-right-off'
                });
            } else {
                this.setState({
                    light: 'timing-setting-light-right-on'
                });
            }
        }
    }, {
        key: 'submitClock',
        value: function submitClock() {
            console.log(this.state);
            var id = this.props.location.query.id ? 0 : 1;
            if (id == 1) {
                var repeat = this.state.repeat == "周末" ? 192 : 126;
                var light = this.state.light == "timing-setting-light-right-on" ? 1 : 0;
                var later = this.state.later == "timing-remind-right-on" ? 1 : 0;
                var hours = this.state.hours;
                var minutes = this.state.minutes;
                var dataJson = {
                    id: 1,
                    alarmClock1Bell: later,
                    alarmClock1Hour: hours,
                    alarmClock1Light: this.state.alarmClock1Light,
                    alarmClock1LightMode: light,
                    alarmClock1Minute: minutes,
                    alarmClock1Nap: later,
                    alarmClock1Repeat: repeat,
                    alarmClock1Ring: this.state.alarmClock1Ring,
                    alarmClock1Switch: this.state.alarmClock1Switch,
                    alarmClock2Bell: this.state.alarmClock2Bell,
                    alarmClock2Hour: this.state.alarmClock2Hour,
                    alarmClock2Light: this.state.alarmClock2Light,
                    alarmClock2LightMode: this.state.alarmClock2LightMode,
                    alarmClock2Minute: this.state.alarmClock2Minute,
                    alarmClock2Nap: this.state.alarmClock2Nap,
                    alarmClock2Repeat: this.state.alarmClock2Repeat,
                    alarmClock2Ring: this.state.alarmClock2Ring,
                    alarmClock2Switch: this.state.alarmClock2Switch,
                    controlNumber: 0x03
                };
                Actions.saveClock(dataJson);
                console.log(dataJson);
            } else {
                //console.log(0x40|0x80) 周末 192;
                //console.log(0x02|0x04|0x08|0x010|0x20) 工作日 62;
                var _repeat = this.state.repeat == "周末" ? 192 : 62;
                var _light = this.state.light == "timing-setting-light-right-on" ? 1 : 0;
                var _later = this.state.later == "timing-remind-right-on" ? 1 : 0;
                var _hours = this.state.hours;
                var _minutes = this.state.minutes;
                var _dataJson = {
                    id: 0,
                    alarmClock1Bell: this.state.alarmClock1Bell,
                    alarmClock1Hour: this.state.alarmClock1Hour,
                    alarmClock1Light: 100,
                    alarmClock1LightMode: this.state.alarmClock1LightMode,
                    alarmClock1Minute: this.state.alarmClock1Minute,
                    alarmClock1Nap: this.state.alarmClock1Nap,
                    alarmClock1Repeat: this.state.alarmClock1Repeat,
                    alarmClock1Ring: this.state.alarmClock1Ring,
                    alarmClock1Switch: this.state.alarmClock1Switch,
                    alarmClock2Bell: _later,
                    alarmClock2Hour: _hours,
                    alarmClock2Light: 100,
                    alarmClock2LightMode: _light,
                    alarmClock2Minute: _minutes,
                    alarmClock2Nap: _later,
                    alarmClock2Repeat: _repeat,
                    alarmClock2Ring: this.state.alarmClock2Ring,
                    alarmClock2Switch: this.state.alarmClock2Switch,
                    controlNumber: 0x03
                };
                Actions.saveClock(_dataJson);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dispatch = _props.dispatch,
                visibleTodos = _props.visibleTodos;

            return _react2.default.createElement(
                'div',
                { className: 'timing' },
                _react2.default.createElement(
                    'div',
                    { className: 'timing-select' },
                    _react2.default.createElement('div', { className: 'timing-space' }),
                    _react2.default.createElement(_PickerTime.PickerTime, { submitClock: this.setTime.bind(this), hoursIndex: 10, minIndex: 10, state: 7 })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'timing-setting' },
                    _react2.default.createElement(
                        'div',
                        { className: 'timing-setting-list timing-setting-day', onTouchStart: this.changeDay.bind(this) },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u91CD\u590D'
                        ),
                        _react2.default.createElement(
                            'i',
                            { className: 'timing-setting-day-right' },
                            visibleTodos.repeat
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'timing-setting-music timing-setting-list' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u94C3\u58F0'
                        ),
                        _react2.default.createElement(
                            'i',
                            { className: 'timing-setting-day-right' },
                            '\u6B22\u5FEB\u8DF3\u8DC3'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'timing-light-remind timing-setting-list' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u706F\u5149\u5524\u9192'
                        ),
                        _react2.default.createElement('i', { className: this.state.light, onTouchStart: this.setLight.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'timing-remind timing-setting-list' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u94C3\u58F0\u5524\u9192'
                        ),
                        _react2.default.createElement('i', null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'timing-submit', onTouchEnd: this.submitClock.bind(this) },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.btnCont
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'select-day', style: { display: this.state.daySelect }, onTouchStart: this.changeDay.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'select-list' },
                        _react2.default.createElement(
                            'div',
                            { id: 'workDays', onTouchStart: this.selectWork.bind(this) },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5DE5\u4F5C\u65E5'
                            ),
                            _react2.default.createElement('i', { className: this.state.work })
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'week', onTouchStart: this.selectWeek.bind(this) },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5468\u672B'
                            ),
                            _react2.default.createElement('i', { className: this.state.week })
                        )
                    )
                )
            );
        }
    }]);
    return Timing;
}(_react.Component);

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。


function select(state) {
    console.log(state);
    return {
        visibleTodos: state.TimingReducer
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Timing);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PickerTime = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerTime = exports.PickerTime = function (_Component) {
    (0, _inherits3.default)(PickerTime, _Component);

    function PickerTime(porps) {
        (0, _classCallCheck3.default)(this, PickerTime);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (PickerTime.__proto__ || Object.getPrototypeOf(PickerTime)).call(this, porps));

        _this2.state = {
            hours: "00",
            minutes: "00"
        };
        return _this2;
    }

    (0, _createClass3.default)(PickerTime, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this = this;
            window.mySwiper0 = new Swiper('.pickerTime-hours', {
                direction: 'vertical',
                freeMode: true,
                freeModeSticky: true,
                onInit: function onInit(swiper) {
                    if (swiper.activeIndex < 10) {
                        _this.setState({
                            hours: "0" + swiper.activeIndex
                        });
                    } else {
                        _this.setState({
                            hours: swiper.activeIndex
                        });
                    }
                    _this.submitclock();
                },
                onSlideChangeEnd: function onSlideChangeEnd(swiper) {
                    if (swiper.activeIndex < 10) {
                        _this.setState({
                            hours: "0" + swiper.activeIndex
                        });
                    } else {
                        _this.setState({
                            hours: swiper.activeIndex
                        });
                    }
                    _this.submitclock();
                },
                onTouchEnd: function onTouchEnd(swiper) {
                    if (swiper.activeIndex < 10) {
                        _this.setState({
                            hours: "0" + swiper.activeIndex
                        });
                    } else {
                        _this.setState({
                            hours: swiper.activeIndex
                        });
                    }
                    _this.submitclock();
                }
            });
            window.mySwiper1 = new Swiper('.pickerTime-min', {
                direction: 'vertical',
                freeMode: true,
                freeModeSticky: true,
                onInit: function onInit(swiper) {
                    _this.submitclock();
                },
                onSlideChangeEnd: function onSlideChangeEnd(swiper) {
                    console.log(swiper.activeIndex);
                    if (swiper.activeIndex < 10) {
                        _this.setState({
                            minutes: "0" + swiper.activeIndex
                        });
                    } else {
                        _this.setState({
                            minutes: swiper.activeIndex
                        });
                    }
                    _this.submitclock();
                },
                onTouchEnd: function onTouchEnd(swiper) {
                    console.log(swiper.activeIndex);
                    if (swiper.activeIndex < 10) {
                        _this.setState({
                            minutes: "0" + swiper.activeIndex
                        });
                    } else {
                        _this.setState({
                            minutes: swiper.activeIndex
                        });
                    }
                    _this.submitclock();
                }
            });
        }
    }, {
        key: "submitclock",
        value: function submitclock(e) {
            if (typeof this.props.submitClock === 'function') {
                this.props.submitClock(this.state.hours, this.state.minutes);
            } else {
                console.log('error:the submit callback is not a function');
            }
        }
    }, {
        key: "stopDefult",
        value: function stopDefult(e) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;
            var list = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
            var arr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
            return _react2.default.createElement(
                "div",
                { className: "pickerTime" },
                _react2.default.createElement("div", { className: "pickerTime-top", onTouchStart: this.stopDefult.bind(this) }),
                _react2.default.createElement(
                    "div",
                    { className: "pickerTime-center" },
                    _react2.default.createElement(
                        "span",
                        null,
                        "\u65F6"
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        "\u5206"
                    )
                ),
                _react2.default.createElement("div", { className: "pickerTime-bottom", onTouchStart: this.stopDefult.bind(this) }),
                _react2.default.createElement(
                    "div",
                    { className: "pickerTime-hours" },
                    _react2.default.createElement(
                        "div",
                        { className: "swiper-wrapper" },
                        list.map(function (items, index) {
                            return _react2.default.createElement(
                                "div",
                                { key: index, className: "swiper-slide" },
                                items
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pickerTime-min" },
                    _react2.default.createElement(
                        "div",
                        { className: "swiper-wrapper" },
                        arr.map(function (items, index) {
                            return _react2.default.createElement(
                                "div",
                                { key: index, className: "swiper-slide" },
                                items
                            );
                        })
                    )
                )
            );
        }
    }]);
    return PickerTime;
}(_react.Component); /**
                      * 基于 swiper的选择器
                      * 说明：大多数数据都是写死的而且是基于swiper的所以应用面非常窄
                      * @prop {function} submitClock 点击确认触发回调函数(无默认,传入空值或者非法值时console提示)
                      * @author   Yanan
                      */

/***/ })

});
//# sourceMappingURL=1.bundle.js.map
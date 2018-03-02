/**
 * @description 按钮组件
 * @augments {function} btncallback 点击之后的回调函数
 * @augments {String} btnClassName  按钮的样式名
 * @augments {String} btnTitle      按钮的名字
 * @dateTime 2018-02-28
 */


import React, {Component} from 'react';

class Btn extends Component {
	constructor(props){
		super(props);
	}
	callback() {
		this.props.btnCallback();
	}
	render() {
		return  <span className="all-btn">
					<button onClick={this.callback.bind(this)} className={this.props.btnClassName}>{this.props.btnTitle}</button>
				</span>
	}
}

export default Btn;
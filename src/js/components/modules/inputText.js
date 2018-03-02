/**
 * @description inputText输入框组件
 * @prop {function} tabCallback tab点击过后的回调函数
 * @prop {string} domId  输入框的Id
 * @prop {string} value  输入框的value
 * @dateTime 2018-02-28
 */


import React, {Component} from 'react';

class InputText extends Component {
	constructor(props){
		super(props);
	}
	render() {
		let styles = {
			width:"270px",
			height:"32px",
		}		
		return  <div style={styles} className="input-user-text">
					<input type="text" ref={this.props.domId} defaultValue={this.props.value||""} className="form-control" placeholder="Text input"/>
				</div>
	}
}

export default InputText;
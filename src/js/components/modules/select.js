/**
 * @description select下拉选择框
 * @prop {Array} optionArr 下拉选择框数组
 * @prop {string} domId 选择框的id
 * @dateTime 2018-03-01
 */


import React, {Component} from 'react';

class Select extends Component {
	constructor(props){
		super(props);
	}
	render() {
		let styles = {
			width:"270px",
			height:"32px",
		}
		return  <div style={styles} className="user-select">
					<select className="form-control" ref={this.props.domId}>
						<option>请选择</option>
						{this.props.optionArr.map((item, index)=>{
							return <option key={index}>{item}</option> 
						})}
					</select>
				</div>
	}
}

export default Select;
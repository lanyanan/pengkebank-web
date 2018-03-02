/**
 * 内容导航标题组件
 * @prop {obj} option 单选框的配置参数
 * @dateTime 2018-02-27
 */

import React, {Component} from 'react';

class Radio extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render() {
		let options = this.props.options || [];
		return  <div className="user-checkbox">
						{options.map((item, index)=>{
							return  <label key={index} className="radio-inline">
									  	<input type="radio" name="inlineRadioOptions" ref={item.id} value={item.value}/>{item.value}
									</label>
						})}
						
				</div>
	}
}

export default Radio;
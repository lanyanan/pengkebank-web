/**
 * @description tab切换组件
 * @prop {Array} tabArr tab数组
 * @prop {function} tabCallback tab点击过后的回调函数
 * @prop {string} showKey 当前tab所在的key值
 * @dateTime 2018-02-28
 */


import React, {Component} from 'react';

class TabNav extends Component {
	constructor(props){
		super(props);
	}
	tabcallback(e) {
		let index = e.target.getAttribute("data-key");
		this.props.btnCallback(index);
	}
	render() {
		let arr = this.props.tabArr || [];
		
		return  <div className="container-tab-nav">
				{ 
					arr.map((item, index)=>{
						if(this.props.showKey == index) {
							return <div key={index} data-key={index} onClick={this.tabcallback.bind(this)} className="container-tab-nav-item container-tab-nav-item-this">{item}</div>
						}else{
							return <div key={index} data-key={index} onClick={this.tabcallback.bind(this)} className="container-tab-nav-item">{item}</div>
						}

					})
				}
				</div>
	}
}

export default TabNav;
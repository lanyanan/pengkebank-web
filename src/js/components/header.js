import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			showUpDown: false,
			thisNavBar: 0
		}
	}
	showUpDown(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			showUpDown:!(this.state.showUpDown)
		})
	}
	hideUpDown(e) {
		e.preventDefault();
		e.stopPropagation();
		if(this.state.showUpDown){
			this.setState({
				showUpDown:!(this.state.showUpDown)
			})
		}
	}
	showNavBarChilder(e) {
		let index;
		if(e.target.getAttribute("class") && (e.target.getAttribute("class") == "header-nav-item")) {
			console.log(e.target.getAttribute("data-key"))
			index = e.target.getAttribute("data-key");
		}else{
			index = e.target.parentNode.getAttribute("data-key");
		}
		this.setState({
			thisNavBar: index
		})
		this.props.navBarCallBack(index);

	}
	render() {
		let navArr = ['系统管理','招商','合同','客户关系管理','财务管理'] 
		return  <div className="header">
					<div className="header-icon-logo">
						<img src={require('../../img/01logo.png')} alt="" />
					</div>
					<div className="header-nav-left">
						{navArr.map((item,index)=>{
							if(this.state.thisNavBar == index) {
								return  <div data-key={index} key={index} className="header-nav-item header-nav-item-this" onClick={this.showNavBarChilder.bind(this)}>
											<span>{item}</span>
										</div>
							}else{
								return  <div data-key={index} key={index} className="header-nav-item" onClick={this.showNavBarChilder.bind(this)}>
											<span>{item}</span>
										</div>
							}

						})}
					</div>
					<div className="header-nav-right">
<<<<<<< HEAD
						<div className="header-nav-item header-nav-updown" onMouseMove={this.showUpDown.bind(this)} onMouseOver={this.showUpDown.bind(this)}>
							<span>admin</span>
							<i style={{display:!(this.state.showUpDown)?"inline-block":"none"}} className="fa fa-caret-down fa-lg"></i>
							<i style={{display:this.state.showUpDown?"inline-block":"none"}} className="fa fa-caret-up fa-lg"></i>
						</div>
						<div className="header-nav-item header-nav-item-refresh">
							<i className="fa fa-refresh fa-lg"></i>
=======
						<div data-key="1" className="header-nav-item" onClick={this.showNavBarChilder.bind(this)}>
							<span className="login">登录</span>
							<span style={{fontSize:"16px"}}>|</span>
							<span className="sign">注册</span>
>>>>>>> 9d601ad1f2fd474b28b13852f416c60c567990d6
						</div>
					</div>
				</div>
	}
}

export default Header;

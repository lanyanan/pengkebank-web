import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			showUpDown: false, 
		}
	}
	componentDidMount() {
		
	}
	showUpDown(e) {
		this.setState({
		showUpDown: true 
	})
	}
	render() {
		return  <div className="header">
					<div className="header-nav-left">
						<div className="header-nav-item">
							<i className="fa fa-cog fa-lg"></i>
							<span>系统管理</span>
						</div>
						<div className="header-nav-item">
							<i className="fa fa-camera-retro fa-lg"></i>
							<span>招商</span>
						</div>
						<div className="header-nav-item">
							<span>合同</span>
						</div>
						<div className="header-nav-item">
							<span>客户关系管理</span>
						</div>
						<div className="header-nav-item">
							<span>财务管理</span>
						</div>
					</div>
					<div className="header-nav-right">
						<div className="header-nav-item header-nav-updown" onMouseMove={this.showUpDown.bind(this)} onMouseOver={this.showUpDown.bind(this)}>
							<span>admin</span>
							<i style={{display:!(this.state.showUpDown)?"inline-block":"none"}} className="fa fa-caret-down fa-lg"></i>
							<i style={{display:this.state.showUpDown?"inline-block":"none"}} className="fa fa-caret-up fa-lg"></i>
						</div>
						<div className="header-nav-item header-nav-item-refresh">
							<i className="fa fa-refresh fa-lg"></i>
						</div>
					</div>
				</div>
	}
}

export default Header;

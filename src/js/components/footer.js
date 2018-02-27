import React, {Component} from 'react';

class Footer extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render() {
		return  <div className="footer">
					<div className="footer-container">
						<span>关于大地零一</span>
						<span>|</span>
						<span>帮助中心</span>
						<span>|</span>
						<span>联系客服</span>
						<span>|</span>
						<span>粤ICP备 11125485201号</span>
					</div>
				</div>
	}
}

export default Footer;
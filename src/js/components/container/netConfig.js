import React, {Component} from 'react';
//import {connect} from 'react-redux';
 import Btn from '../modules/btn';
// import TabNav from '../modules/tabBar';
 import InputText from '../modules/inputText';
// import Select from '../modules/select';
// import DateTime from '../modules/dateTime';
// import Radio from '../modules/radio';
//import CheckBox from '../modules/checkBox';


class netConfig extends Component {
	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		// console.log($('.input-user-dateTime input'))
		// $('.input-user-dateTime input').datetimepicker({format: 'yyyy-mm-dd hh:ii'});
	}
	submit() {

	}
	render() {

		return  <div className="index-netConfig">
					<div className="container-title">
						<div className="container-title-name">网站参数</div>
					</div>
					<div className="netConfig-container">
						<div className="net-name">
							<span>网站名称</span>
							<InputText value="ERP商业管理软件系统"/>
							<span>网站名称，显示在浏览器标签上</span>
						</div>
						<div className="application-name">
							<span>网站名称</span>
							<InputText value="易点商业ERP商业管理软件系统"/>
							<span>网站名称，显示在浏览器标签上</span>
						</div>
						<div className="copyright-name">
							<span>网站名称</span>
							<InputText value="易点商业ERP© 2017~2037"/>
							<span>网站名称，显示在浏览器标签上</span>
						</div>
					</div>
					<Btn btnClassName="btn btn-user-three" btnTitle="保存配置" btnCallback={this.submit.bind(this)} />
				</div>
	}
}

export default netConfig
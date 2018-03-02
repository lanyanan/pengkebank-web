import React, {Component} from 'react';
//import {connect} from 'react-redux';
// import Btn from '../modules/btn';
// import TabNav from '../modules/tabBar';
// import InputText from '../modules/inputText';
// import Select from '../modules/select';
// import DateTime from '../modules/dateTime';
// import Radio from '../modules/radio';
//import CheckBox from '../modules/checkBox';


class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			showKey:0
		}
	}
	componentDidMount(){
		// console.log($('.input-user-dateTime input'))
		// $('.input-user-dateTime input').datetimepicker({format: 'yyyy-mm-dd hh:ii'});
	}
	render() {

		return  <div className="index-main">
					<div className="container-title">
						<div className="container-title-name">后台首页</div>
					</div>
					<div className="alert alert-danger alert-dismissible fade in danger-tips" role="alert">
					    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
					    <h1 className="danger-tips-title">安全提示</h1>
					    <p className="danger-tips-title-txt">超级管理员默认密码未修改，建议马上<a href="">修改！</a></p>
				    </div>
				    <div className="search-result">
						<table className="table">
					        <thead>
						        <tr>
						            <th className="text-center">系统信息</th>
						        </tr>
					        </thead>
					        <tbody>
						        <tr>
						            <td>81</td>
						        </tr>
						        <tr>
						            <td>68</td>
						        </tr>
						        <tr>
						            <td>67</td>
						        </tr>
						        <tr>
						            <td>66</td>
						        </tr>
					        </tbody>
					    </table>
					</div>
				</div>
	}
}

export default Main;
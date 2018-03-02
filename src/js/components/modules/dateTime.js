/**
 * @description DateTime 日期选择组件
 * @prop {function} tabCallback tab点击过后的回调函数
 * @prop {string} domId  输入框的Id
 * @dateTime 2018-03-01
 */


import React, {Component} from 'react';

class DateTime extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
	    	$('.form_date').datetimepicker({
		        language:  'zh-CN',
		        weekStart: 1,
		        todayBtn:  1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				forceParse: 0,
				format:'yyyy-mm-dd'
		    });
	}
	render() {
		let styles = {
			width:"270px",
			height:"32px",
		}		
		return  <div style={styles} className="input-user-dateTime">
					<div className="input-group date form_date col-md-12" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
	                    <input id="dateTime" className="form-control" size="16" type="text" value="" />
						<span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span></span>
	                </div>
				</div>
	}
}

export default DateTime;
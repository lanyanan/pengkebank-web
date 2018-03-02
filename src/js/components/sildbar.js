import React, {Component} from 'react';
import {connect} from 'react-redux';
import sildBarConfig from './sildBarConfig';
import {Link} from 'react-router-dom';

let sildbar = new sildBarConfig();

let sildBarData = sildbar.data;



class Sildbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			showSildBarKey: [],
			showSildbarSecond: true, 
			secondId:0
		}
	}
	componentDidMount() {
		
	}
	showSildBarSecond(e) {
		console.log(e.target.getAttribute("data-key"));
		let index = e.target.getAttribute("data-key");
		let arr = sildBarData[this.props.sildbarId].childerList;
		arr[index].show = !(arr[index].show);
		this.setState({
			showSildbarSecond: !this.state.showSildbarSecond
		})
	}
	changeSecondKey(e) {
		this.setState({
			secondId:e.target.getAttribute("data-key")
		})
	}
	render() {
		let arr = sildBarData[this.props.sildbarId].childerList;
		return  <div className="sildbar">
					<div className="sildbar-container">
						{arr.map((item, index)=>{
								return <div className="sildbar-container-item" key={index}>
											<div className="sildbar-container-item-title"  data-key={index} onClick={this.showSildBarSecond.bind(this)}>
												<i style={{display:!item.show?"inline-block":"none"}} className="fa fa-caret-right" aria-hidden="true"></i>
												<i style={{display:item.show?"inline-block":"none"}} className="fa fa-caret-down" aria-hidden="true"></i>{item.sildBarName}</div>
											<div className="sildbar-container-second" style={{display:item.show?"block":"none"}}>
												{
													item.sildBarChilder.map((i, d)=>{
													if(i.secondId==this.state.secondId){
														return <Link className="sildbar-container-second-item" onClick={this.changeSecondKey.bind(this)} key={d} to={"/admin/"+i.secondName}>
															<div  data-key={i.secondId} className="sildbar-container-second-item sildbar-container-second-this">
															{i.secondSildBarName}</div>
															</Link>
													}else {
														return <Link className="sildbar-container-second-item" onClick={this.changeSecondKey.bind(this)} key={d} to={"/admin/"+i.secondName}>
																<div  data-key={i.secondId} className="sildbar-container-second-item">
																{i.secondSildBarName}</div>
															</Link>
													}

													
												})
												}
											</div>
										</div>
							})}
					</div>
				</div>
	}
}

export default Sildbar;

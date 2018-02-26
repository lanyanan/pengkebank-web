import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import Sildbar from './sildbar';
import Container from './container';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sildbarId: 0,
			containerId: 0
		}
	}
	componentDidMount() {
		
	}
	changeNavBarChilder(index){
		this.setState({
			sildbarId: index
		})
	}
	changeContainer(index) {
		this.setState({
			containerId: index
		})
	}
	render() {
		return  <div>
					<Header navBarCallBack={this.changeNavBarChilder.bind(this)}/>
		        	<Sildbar sildbarId = {this.state.sildbarId}/>
		        	<Container/>
				</div>
	}
}

export default Admin;
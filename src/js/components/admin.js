import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import Sildbar from './sildbar';
import Container from './container';

class Admin extends Component {
	componentDidMount() {
		
	}
	render() {
		return  <div>
					<Header/>
		        	<Sildbar/>
		        	<Container/>
				</div>
	}
}

export default Admin;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Edit from './container/edit';
import {Route, Switch} from 'react-router-dom';

class Container extends Component {
	componentDidMount() {
		
	}
	render() {
		return  <div className="container">
					<Switch>
						<Route exzact path="/admin/0" component={Edit} />
						<Route exzact path="/admin/1" component={Edit} />
						<Route exzact path="/admin/2" component={Edit} />
					</Switch>
				</div>
	}
}

export default Container;
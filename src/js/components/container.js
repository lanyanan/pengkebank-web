import React, {Component} from 'react';
import {connect} from 'react-redux';
import Edit from './container/edit';
import Main from './container/main';
import netConfig from './container/netConfig';
import Area from './container/area';
import OrganizationList from './container/organizationList';
import OrganizationNumber from './container/organizationNumber';
import {Route, Switch} from 'react-router-dom';
console.log(Main)

class Container extends Component {
	componentDidMount() {
		
	}
	render() {
		return  <div className="user-container">
					<Switch>
						<Route exzact path="/admin/main" component={Main} />
						<Route exzact path="/admin/config" component={netConfig} />
						<Route exzact path="/admin/area" component={Area} />
						<Route exzact path="/admin/organizationlist" component={OrganizationList} />
						<Route exzact path="/admin/organizationNumber" component={OrganizationNumber} />
					</Switch>
				</div>
	}
}

export default Container;
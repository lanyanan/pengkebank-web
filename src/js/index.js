import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import '../css/style.css';
import Store from './reducers/Reducers';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
//import Home from './Home';
import Loading from './components/loading';
import Admin from './components/admin';


// const AsyncHome = Loadable({
//   loader: () => import("./components/Home"),
//   loading: Loading
// });

// const AsyncTiming = Loadable({
//   loader: () => import("./components/Timing"),
//   loading: Loading
// });

// const AsyncList = Loadable({
//   loader: () => import("./components/List"),
//   loading: Loading
// });

// import {Lamp} from './Lamp';
// import {Reseting} from './Reseting';
// import {Music} from './Music';
// import {List} from './list';
// import {Timing} from './Timing';
// import {Toast} from './toast';
// import {Switch} from './Switch';
import {Router, Route, Switch, BrowserRouter, HashRouter, Redirect} from 'react-router-dom'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

let store = createStoreWithMiddleware(Store)

//等DOM加载完成
//这种是hash值改变的
document.addEventListener('DOMContentLoaded', ()=>{
	render((   
		<Provider store={store}>
	        <HashRouter>
	        	<Switch>
		        	<Route exzact path="/admin" component={Admin} />
		        	<Redirect path="/" to={{pathname: '/admin'}} />
		        </Switch>
	        </HashRouter>
	  	</Provider>		
	), document.getElementById('ROOT'))
});

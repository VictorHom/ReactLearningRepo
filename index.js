import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router';
import About from './modules/About';
import Repos from './modules/Repos';
import Tutorial from './modules/Tutorial';

//render(<App/>, document.getElementById('app'))

// With implementation of react router
render((
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/repos" component={Repos} />
		<Route path="/about" component={About} />
		<Route path="/tutorial" component={Tutorial} />
	</Router>
	), document.getElementById('app'));

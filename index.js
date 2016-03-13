import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router';
import About from './modules/About';
import Repos from './modules/Repos';
import Tutorial from './modules/Tutorial';
import Product from './modules/Product';

//render(<App/>, document.getElementById('app'))
let data = [
	{id : 1, author : "Pete Hunt", text : "This is one comment" },
	{id : 2, author : 'Jordan Walke', text : "This is *another* comments" }
];
// With implementation of react router
render((
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/repos" component={Repos} />
		<Route path="/about" component={About} />
		<Route path="/tutorial" component={Tutorial} />
		<Route path="/product" component={Product} />
	</Router>
	), document.getElementById('app'));

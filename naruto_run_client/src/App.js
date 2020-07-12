import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from './components/layout/AppNavBar';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<AppNavBar branding='Naruto Run' />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Posts}></Route>
						<Route exact path='/about' component={About}></Route>
						<Route exact path='/post' component={Post}></Route>
						<Route component={NotFound}></Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from './components/layout/AppNavBar';
import About from './components/pages/About';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<AppNavBar branding='Naruto Run' />
				<div className='container'>
					<Switch>
						<Route exact path='/about' component={About}></Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;

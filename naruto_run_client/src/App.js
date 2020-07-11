import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from './components/layout/AppNavBar';

const App = () => {
	return (
		<div>
			<Router>
				<AppNavBar branding='Naruto Run' />
				<div className='container'>
					<h1>Naruto Run</h1>
					<p>Run headfirst at all the things... faster</p>
				</div>
			</Router>
		</div>
	);
};

export default App;

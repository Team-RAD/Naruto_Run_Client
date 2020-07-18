import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import stateReducer from './config/stateReducer';
import { StateContext } from './config/store';
import { getAllNarutoPosts } from './services/narutoPostServices';
import AppNavBar from './components/layout/AppNavBar';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
	const initialState = {
		loggedInUser: null,
		narutoPosts: [],
		error: null
	};

	const [store, dispatch] = useReducer(stateReducer, initialState);

	function fetchNarutoPosts() {
		getAllNarutoPosts()
			.then((narutoData) => {
				dispatch({ type: 'setNarutoPosts', data: narutoData });
			})
			.catch((error) => {
				console.log(
					'Error occurred while fetching Naruto Posts from server',
					error
				);
			});
	}

	useEffect(() => {
		fetchNarutoPosts();
	}, []);

	return (
		<StateContext.Provider value={{ store, dispatch }}>
			<div className='App'>
				<Router>
					<AppNavBar branding='Naruto Run' />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Posts}></Route>
							<Route exact path='/about' component={About}></Route>
							<Route exact path='/post' component={Post}></Route>
							<Route exact path='/login' component={Login}></Route>
							<Route exact path='/register' component={Register}></Route>
							<Route component={NotFound}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		</StateContext.Provider>
	);
};

export default App;

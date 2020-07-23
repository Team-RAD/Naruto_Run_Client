import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import stateReducer from './config/stateReducer';
import { StateContext } from './config/store';
import { getAllNarutoPosts } from './services/narutoPostServices';
import AppNavBar from './components/layout/AppNavBar';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Posts from './components/posts/Posts';
import ViewPost from './components/posts/ViewPost';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
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
				<BrowserRouter>
					<AppNavBar branding='Naruto Run' />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Landing}></Route>
							<Route exact path='/posts' component={Posts}></Route>
							<Route exact path='/about' component={About}></Route>
							<Route exact path='/posts/new' component={NewPost} />
							<Route exact path='/posts/:id' component={ViewPost}></Route>
							<Route exact path='/posts/:id/edit' component={EditPost} />
							<Route exact path='/login' component={Login}></Route>
							<Route exact path='/register' component={Register}></Route>
							<Route component={NotFound}></Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</StateContext.Provider>
	);
};

export default App;

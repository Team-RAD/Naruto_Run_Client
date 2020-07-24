import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import stateReducer from './config/stateReducer';
import { StateContext } from './config/store';
import {
	getAllNarutoPosts,
	getPostById,
	getPostByUser
} from './services/narutoPostServices';
import {
	userAuthenticated,
	setLoggedInUser,
	getLoggedInUser
} from './services/authServices';
import AppNavBar from './components/layout/AppNavBar';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Posts from './components/posts/Posts';
import NarutoPost from './components/posts/Post';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
	const initialState = {
		loggedInUser: null,
		narutoPosts: []
	};

	function fetchNarutoPosts() {
		getAllNarutoPosts()
			.then((narutoData) => {
				dispatch({ type: 'setNarutoPosts', data: narutoData });
			})
			.catch((error) => {
				dispatch({
					type: 'setError',
					data: true
				});
				console.log('Error occurred while fetching Naruto Posts from server');
			});
	}

	const [store, dispatch] = useReducer(stateReducer, initialState);
	const { narutoPosts, error } = store;

	useEffect(() => {
		fetchNarutoPosts();
		userAuthenticated()
			.then(() => {
				dispatch({
					type: 'setLoggedInUser',
					data: getLoggedInUser()
				});
			})
			.catch((error) => {
				console.log(
					'Received an error while trying to check authenticated user:',
					error
				);
				setLoggedInUser(null);
				dispatch({
					type: 'setLoggedInUser',
					data: null
				});
			});
		// return a function that specifies any actions on component unmount
		return () => {};
	}, []);

	return (
		<StateContext.Provider value={{ store, dispatch }}>
			<div className='App'>
				<BrowserRouter>
					<AppNavBar branding='Naruto Run' />
					<div className='container'>
						{error ? (
							<NotFound />
						) : (
							<Switch>
								<Route exact path='/' component={Landing}></Route>
								<Route exact path='/posts' component={Posts}></Route>
								<Route exact path='/about' component={About}></Route>
								<Route exact path='/posts/new' component={NewPost} />
								<Route
									exact
									path='/posts/:id'
									render={(props) => (
										<NarutoPost
											{...props}
											post={getPostById(narutoPosts, props.match.params.id)}
											showControls
										/>
									)}
								/>
								<Route
									exact
									path='/posts/myposts'
									render={(props) => (
										<NarutoPost
											{...props}
											post={getPostByUser(
												narutoPosts,
												props.match.params.username
											)}
											showControls
										/>
									)}
								/>
								<Route exact path='/posts/edit/:id' component={EditPost} />
								<Route exact path='/login' component={Login}></Route>
								<Route exact path='/register' component={Register}></Route>
							</Switch>
						)}
					</div>
				</BrowserRouter>
			</div>
		</StateContext.Provider>
	);
};

export default App;

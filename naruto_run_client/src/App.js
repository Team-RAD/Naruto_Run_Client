import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import stateReducer from './config/stateReducer';
import { StateContext } from './config/store';
import { getAllNarutoPosts, getPostById } from './services/narutoPostServices';
import { userAuthenticated } from './services/authServices';
import AppNavBar from './components/layout/AppNavBar';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import Posts from './components/posts/Posts';
import MyPosts from './components/posts/MyPosts';
import NarutoPost from './components/posts/Post';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
	//Set initial state
	const initialState = {
		loggedInUser: null,
		narutoPosts: []
	};

	//Get all NR posts from server
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

	//Provide context for state and store
	const [store, dispatch] = useReducer(stateReducer, initialState);
	const { narutoPosts } = store;

	//Provide post access to authenticated users
	useEffect(() => {
		fetchNarutoPosts();
		userAuthenticated()
			.then((username) => {
				dispatch({
					type: 'setLoggedInUser',
					data: username
				});
			})
			.catch(() => {
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
						<Switch>
							<Route exact path='/' component={Landing}></Route>
							<Route exact path='/posts' component={Posts}></Route>
							<Route exact path='/about' component={About}></Route>
							<Route exact path='/posts/new' component={NewPost} />
							<Route exact path='/posts/myposts' component={MyPosts} />
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
							<Route exact path='/posts/edit/:id' component={EditPost} />
							<Route exact path='/login' component={Login}></Route>
							<Route exact path='/register' component={Register}></Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</StateContext.Provider>
	);
};

export default App;

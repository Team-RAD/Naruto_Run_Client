import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../config/store';
import { logoutUser } from '../../services/authServices';

const AppNavBar = () => {
	function handleLogout() {
		logoutUser()
			.then((response) => {
				console.log('Logged out response received:', response.status);
			})
			.catch((error) => {
				console.log('Server not found. Exception on logout:', error);
			});
		dispatch({
			type: 'setLoggedInUser',
			data: null
		});
	}

	const { store, dispatch } = useGlobalState();
	const { loggedInUser } = store;

	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark mb-3 py-0'>
			<div className='container'>
				<Link to='/' className='navbar-brand h1 text-info'>
					Naruto Run
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarMain'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse flex-grow-0' id='navbarMain'>
					<ul className='navbar-nav text-right mr-auto'>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								<i className='fas fa-home'></i> Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/about' className='nav-link'>
								<i className='fas fa-info'></i> About
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/posts' className='nav-link'>
								<i className='fas fa-file-upload'></i> All Posts
							</Link>
						</li>
						{loggedInUser
							? [
									<li className='nav-item'>
										<Link to='/posts/new' className='nav-link'>
											<i className='fas fa-plus-circle'></i> Add Post
										</Link>
									</li>,
									<li className='nav-item'>
										<Link to='/posts/myposts' className='nav-link'>
											<i className='fas fa-sign-in-alt'></i> My Posts
										</Link>
									</li>,
									<li className='nav-item'>
										<Link to='/' onClick={handleLogout} className='nav-link'>
											<i className='fas fa-sign-in-alt'></i> Logout
										</Link>
									</li>
							  ]
							: [
									<li className='nav-item'>
										<Link to='/register' className='nav-link'>
											<i className='fas fa-file-alt'></i> Register
										</Link>
									</li>,
									<li className='nav-item'>
										<Link to='/login' className='nav-link'>
											<i className='fas fa-sign-in-alt'></i> Login
										</Link>
									</li>
							  ]}
					</ul>
				</div>
			</div>
		</nav>
	);
};

AppNavBar.defaultProps = {
	branding: 'Naruto Run'
};

AppNavBar.propTypes = {
	branding: PropTypes.string.isRequired
};

export default AppNavBar;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppNavBar = (props) => {
	const { branding } = props;
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0'>
			<div className='container'>
				<a href='/' className='navbar-brand'>
					{branding}
				</a>
				<div>
					<ul className='navbar-nav mr-auto'>
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
							<Link to='/post' className='nav-link'>
								<i className='fas fa-plus-circle'></i> POST
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/login' className='nav-link'>
								<i className='fas fa-sign-in-alt'></i> Login
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/register' className='nav-link'>
								<i className='fas fa-file-alt'></i> Register
							</Link>
						</li>
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

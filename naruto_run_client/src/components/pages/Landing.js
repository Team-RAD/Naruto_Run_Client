import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../NR_logo.svg';

export default () => {
	return (
		<div>
			<div>
				<div>
					<h1 className='display-3 text-center'>Welcome to</h1>
				</div>
				<br />
				<div>
					<img src={logo} alt='Naruto Run Logo' />
				</div>
				<br />
				<div>
					<h4 className='text-secondary text-center'>
						Run head-first into a career in tech!
					</h4>
				</div>
				<br />
				<Link
					role='button'
					className='btn btn-info btn-lg btn-block'
					to='/posts'
				>
					RUN!
				</Link>
				<Link
					role='button'
					className='btn btn-secondary btn-lg btn-block'
					to='/register'
				>
					Register
				</Link>
			</div>
		</div>
	);
};

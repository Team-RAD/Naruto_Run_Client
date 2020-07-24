import React from 'react';
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
				<a role='button' class='btn btn-info btn-lg btn-block' href='/posts'>
					RUN!
				</a>
				<a
					role='button'
					class='btn btn-secondary btn-lg btn-block'
					href='/register'
				>
					Register
				</a>
			</div>
		</div>
	);
};

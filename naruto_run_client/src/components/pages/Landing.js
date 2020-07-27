import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../NR_logo.svg';
import { useGlobalState } from '../../config/store';

export default () => {
	const { store } = useGlobalState();
	const { loggedInUser } = store;
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
					<h4 className='text-center'>
						Find the best way to run head-first into tech!
					</h4>
				</div>
				<br />
				<div>
					{loggedInUser
						? [
								<Link
									role='button'
									className='btn btn-info btn-lg btn-block'
									to='/posts'
								>
									RUN!
								</Link>
						  ]
						: [
								<Link
									role='button'
									className='btn btn-info btn-lg btn-block'
									to='/posts'
								>
									RUN!
								</Link>,
								<Link
									role='button'
									className='btn btn-secondary btn-lg btn-block'
									to='/register'
								>
									Register
								</Link>
						  ]}
				</div>
			</div>
		</div>
	);
};

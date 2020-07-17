import React, { useState } from 'react';
import { useGlobalState } from '../../config/store';
import { loginUser, setLoggedInUser } from '../../services/authServices';

const Login = ({ history }) => {
	const initialFormState = {
		username: '',
		password: ''
	};

	const [userDetails, setUserDetails] = useState(initialFormState);
	const { dispatch } = useGlobalState();

	function onChange(e) {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		setUserDetails({
			...userDetails,
			[name]: value
		});
	}

	function onSubmit(e) {
		e.preventDefault();
		loginUser(userDetails)
			.then(() => {
				setLoggedInUser(userDetails.username);
				dispatch({ type: 'setLoggedInUser', data: userDetails.username });
				history.push('/');
			})
			.catch((error) => {
				// TODO - handle error messages
				console.log(`An error occurred while authenticating: ${error}`);
			});
	}

	return (
		<div className='row'>
			<div className='col-md-6 mx-auto'>
				<div className='card'>
					<div className='card-body'>
						<h1 className='text-center pb-4 pt-3'>
							<span className='text-warning'>
								<i className='fas fa-sign-in-alt'></i>
							</span>{' '}
							Login{' '}
						</h1>
						<form onSubmit={onSubmit}>
							<div className='form-group'>
								<label htmlFor='username'>Username</label>
								<input
									type='text'
									className='form-control'
									name='username'
									required
									value={initialFormState.username}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									className='form-control'
									name='password'
									required
									value={initialFormState.password}
									onChange={onChange}
								/>
							</div>
							<input
								type='submit'
								value='Login'
								className='btn btn-warning btn-block'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

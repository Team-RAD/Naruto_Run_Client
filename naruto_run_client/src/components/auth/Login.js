import React, { useState } from 'react';
import { useGlobalState } from '../../config/store';
import { loginUser, setLoggedInUser } from '../../services/authServices';

const Login = ({ history }) => {
	const initialFormState = {
		username: '',
		password: ''
	};

	const [userDetails, setUserDetails] = useState(initialFormState);
	const [errorMessage, setErrorMessage] = useState(null);
	const { dispatch } = useGlobalState();

	function onSubmit(e) {
		e.preventDefault();
		loginUser(userDetails)
			.then(() => {
				setLoggedInUser(userDetails.username);
				dispatch({ type: 'setLoggedInUser', data: userDetails.username });
				history.push('/');
			})
			.catch((error) => {
				if (error.response && error.response.status === 401)
					setErrorMessage(
						'Invalid login details. Please check your username and password.'
					);
				else
					setErrorMessage(
						'The server is not responding. Please wait a moment and try again.'
					);
			});
	}

	function onChange(e) {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		setUserDetails({
			...userDetails,
			[name]: value
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
							{errorMessage && (
								<div class='alert alert-danger text-center' role='alert'>
									{errorMessage}
								</div>
							)}
							<br />
							<div className='form-group'>
								<label htmlFor='username'>Username</label>
								<input
									type='text'
									className='form-control'
									name='username'
									placeholder='Enter your username...'
									required
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									className='form-control'
									name='password'
									placeholder='Enter your password...'
									required
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

import React, { useState } from 'react';
import { useGlobalState } from '../../config/store';
import { registerUser } from '../../services/authServices';

const Register = ({ history }) => {
	//Set initial state for register form
	const initialFormState = {
		username: '',
		email: '',
		password: ''
	};

	//Provide global state and context
	const [userDetails, setUserDetails] = useState(initialFormState);
	const [errorMessage, setErrorMessage] = useState(null);
	const { dispatch } = useGlobalState();

	//Handle form field changes for registration of details
	function onChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setUserDetails({
			...userDetails,
			[name]: value
		});
	}

	//Handle submit action on login form
	function onSubmit(e) {
		e.preventDefault();
		registerUser(userDetails)
			.then(() => {
				dispatch({ type: 'setLoggedInUser', data: userDetails.username });
				history.push('/');
			})
			.catch((error) => {
				const status = error.response ? error.response.status : 500;
				if (status === 409) {
					setErrorMessage(
						'This user already exists. Please login or specify a valid username'
					);
				} else {
					setErrorMessage(
						'There was an unexpected issue with the server. Please wait a moment and try again.'
					);
				}
				console.log(
					`Registration failed with error ${error} and status ${status}`
				);
			});
	}

	return (
		<div className='row'>
			<div className='col-md-6 mx-auto'>
				<div className='card'>
					<div className='card-body'>
						<h1 className='text-center pb-4 pt-3'>
							<span className='text-info'>
								<i className='fas fa-file-alt'></i>
							</span>{' '}
							Register{' '}
						</h1>
						<form onSubmit={onSubmit}>
							{errorMessage && (
								<div className='alert alert-danger text-center' role='alert'>
									{errorMessage}
								</div>
							)}
							<div className='form-group'>
								<label htmlFor='username'>Name</label>
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
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									className='form-control'
									name='email'
									placeholder='Enter your email...'
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
								value='Register'
								className='btn btn-info btn-block'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;

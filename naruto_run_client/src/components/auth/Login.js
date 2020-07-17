import React, { Component, useState } from 'react';
import authServices, {
	loginUser,
	setLoggedInUser
} from '../../services/authServices';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		loginUser(userDetails)
			.then(() => {
				dispatch({ type: 'setLoggedInUser', data: userDetails.username });
				history.push('/');
			})
			.catch((error) => {
				console.log(`An error occurred while authenticating: ${error}`);
			});
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
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
							<form onSubmit={this.onSubmit}>
								<div className='form-group'>
									<label htmlFor='email'>Email</label>
									<input
										type='text'
										className='form-control'
										name='email'
										required
										value={this.state.email}
										onChange={this.onChange}
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='password'>Password</label>
									<input
										type='password'
										className='form-control'
										name='password'
										required
										value={this.state.password}
										onChange={this.onChange}
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
	}
}

export default Login;

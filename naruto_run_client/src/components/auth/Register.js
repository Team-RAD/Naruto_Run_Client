import React, { Component } from 'react';

class Register extends Component {
	state = {
		email: '',
		password: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		// const { email, password } = this.state;
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div className='row'>
				<div className='col-md-6 mx-auto'>
					<div className='card'>
						<div className='card-body'>
							<h1 className='text-center pb-4 pt-3'>
								<span className='text-danger'>
									<i className='fas fa-file-alt'></i> Register{' '}
								</span>
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
									value='Register'
									className='btn btn-danger btn-block'
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;

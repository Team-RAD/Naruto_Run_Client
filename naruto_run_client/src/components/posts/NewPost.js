import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../config/store';
import { addNarutoPost } from '../../services/narutoPostServices';

const NewPost = ({ history }) => {
	function onChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setFormState({
			...formState,
			[name]: value
		});
	}

	function onSubmit(e) {
		e.preventDefault();
		const newPost = {
			username: formState.username,
			// modified_date,
			pre_tech_job: formState.pre_tech_job,
			current_tech_job: formState.current_tech_job,
			education: formState.education,
			resources_required: formState.resources_required,
			time_taken: formState.time_taken,
			cost: formState.cost,
			journey: formState.journey,
			tech_stack: formState.tech_stack,
			os_allegiance: formState.os_allegiance,
			fueled_by: formState.fueled_by,
			favourite_coding_playlist: formState.favourite_coding_playlist,
			follow_me_links: formState.follow_me_links
		};

		addNarutoPost(newPost)
			.then((newPost) => {
				dispatch({
					type: 'setNarutoPosts',
					data: [newPost, ...narutoPosts]
				});
				history.push(`/posts/${newPost._id}`);
			})
			.catch((error) => {
				const status = error.response ? error.response.status : 500;
				console.log('There was an error making the post:', error.message);
				if (status === 403)
					setErrorMessage(
						'Sorry! Your session has gone missing. Please ensure that 3rd party cookies are not blocked in your browser settings.'
					);
				else
					setErrorMessage(
						'Oops... There was a problem on the server. Please try again in a moment.'
					);
			});
	}
	const initialFormState = {
		username: '',
		// modified_date,
		pre_tech_job: '',
		current_tech_job: '',
		education: '',
		resources_required: '',
		time_taken: '',
		cost: '',
		journey: '',
		tech_stack: '',
		os_allegiance: '',
		fueled_by: '',
		favourite_coding_playlist: '',
		follow_me_links: ''
	};

	const [formState, setFormState] = useState(initialFormState);
	const [errorMessage, setErrorMessage] = useState(null);
	const { store, dispatch } = useGlobalState();
	const { narutoPosts } = store;

	return (
		<div>
			<div>
				<h1 className='display-3 text-center'>
					Add Your<span className='text-info'> Naruto Post</span>
				</h1>
			</div>
			<div className='card'>
				<div className='card-header'>
					<div className='card-body'>
						<form onSubmit={onSubmit}>
							{errorMessage && (
								<div className='alert alert-danger text-center' role='alert'>
									{errorMessage}
								</div>
							)}
							<div className='form-group'>
								<label htmlFor='pre_tech_job'>Pre Tech Job:</label>
								<input
									type='text'
									className='form-control'
									name='pre_tech_job'
									placeholder='Enter your previous job/career to tech...'
									required
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='current_tech_job'>Current Tech Job:</label>
								<input
									type='text'
									className='form-control'
									name='current_tech_job'
									placeholder='Enter your current tech job title...'
									required
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='education'>Education:</label>
								<input
									type='text'
									className='form-control'
									name='education'
									placeholder='Enter the education route you took...'
									required
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='resources_required'>Resources Required:</label>
								<input
									type='text'
									className='form-control'
									name='resources_required'
									placeholder='Enter the resources you used to learn...'
									required
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='time_taken'>Time Taken:</label>
								<input
									type='text'
									className='form-control'
									name='time_taken'
									required
									placeholder='Enter the approximate time taken to land your first tech job...'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='cost'>Cost:</label>
								<input
									type='text'
									className='form-control'
									name='cost'
									required
									placeholder='Enter the approximate cost of your journey into tech...'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='journey'>Your journey:</label>
								<textarea
									type='text'
									className='form-control'
									name='journey'
									rows='5'
									required
									placeholder='Give a brief description of your journey into tech, any advice, anything you would have done differently...'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='tech_stack'>Top 3 Techs:</label>
								<input
									type='text'
									className='form-control'
									name='tech_stack'
									required
									placeholder='Enter your three recommended technologies to learn...'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='os_allegiance'>OS Allegiance:</label>
								<input
									type='text'
									className='form-control'
									name='os_allegiance'
									required
									placeholder='Pledge your operating system allegiance...'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='fueled_by'>Fueled by:</label>
								<input
									type='text'
									className='form-control'
									name='fueled_by'
									placeholder='What fuels your tech life? Coffee, Ramen, Exercising etc....'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='favourite_coding_playlist'>
									Favourite Coding Playlist:
								</label>
								<input
									type='text'
									className='form-control'
									name='favourite_coding_playlist'
									placeholder='Enter your favourite coding playlist...'
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='follow_me_links'>Social Links:</label>
								<input
									type='text'
									className='form-control'
									name='follow_me_links'
									placeholder='Enter your social media links...'
									onChange={onChange}
								/>
							</div>
							<input
								type='submit'
								value='Create'
								className='btn btn-info btn-block'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(NewPost);

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../config/store';
import {
	updateNarutoPost,
	getPostById
} from '../../services/narutoPostServices';

const EditPost = ({ history, match }) => {
	const { store, dispatch } = useGlobalState();
	const { narutoPosts } = store;
	const postId = match && match.params ? match.params.id : -1;
	const post = getPostById(narutoPosts, postId);

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
		const updatedPost = {
			_id: post._id,
			username: formState.username,
			// modified_date: new Date(),
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

		updateNarutoPost(updatedPost)
			.then(() => {
				const otherPosts = narutoPosts.filter(
					(post) => post._id !== updatedPost._id
				);
				dispatch({
					type: 'setNarutoPosts',
					data: [updatedPost, ...otherPosts]
				});
				history.push(`/posts/${post._id}`);
			})
			.catch((error) => {
				const status = error.response ? error.response.status : 500;
				console.log('There was an error editing the post:', error);
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

	useEffect(() => {
		// Set the formState to the fields in the post after mount and when post changes
		post &&
			setFormState({
				username: post.username,
				pre_tech_job: post.pre_tech_job,
				current_tech_job: post.current_tech_job,
				education: post.education,
				resources_required: post.resources_required,
				time_taken: post.time_taken,
				cost: post.cost,
				journey: post.journey,
				tech_stack: post.tech_stack,
				os_allegiance: post.os_allegiance,
				fueled_by: post.fueled_by,
				favourite_coding_playlist: post.favourite_coding_playlist,
				follow_me_links: post.follow_me_links
			});
	}, [post]);

	return (
		<div>
			<div>
				<h1 className='display-3 text-center'>
					Edit Your<span className='text-info'> Naruto Post</span>
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
									value={formState.pre_tech_job}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='current_tech_job'>Current Tech Job:</label>
								<input
									type='text'
									className='form-control'
									name='current_tech_job'
									value={formState.current_tech_job}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='education'>Education:</label>
								<input
									type='text'
									className='form-control'
									name='education'
									value={formState.education}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='resources_required'>Resources Required:</label>
								<input
									type='text'
									className='form-control'
									name='resources_required'
									value={formState.resources_required}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='time_taken'>Time Taken:</label>
								<input
									type='text'
									className='form-control'
									name='time_taken'
									value={formState.time_taken}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='cost'>Cost:</label>
								<input
									type='text'
									className='form-control'
									name='cost'
									value={formState.cost}
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
									value={formState.journey}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='tech_stack'>Top 3 Techs:</label>
								<input
									type='text'
									className='form-control'
									name='tech_stack'
									value={formState.tech_stack}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='os_allegiance'>OS Allegiance:</label>
								<input
									type='text'
									className='form-control'
									name='os_allegiance'
									value={formState.os_allegiance}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='fueled_by'>Fueled by:</label>
								<input
									type='text'
									className='form-control'
									name='fueled_by'
									value={formState.fueled_by}
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
									value={formState.favourite_coding_playlist}
									onChange={onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='follow_me_links'>Social Links:</label>
								<input
									type='text'
									className='form-control'
									name='follow_me_links'
									value={formState.follow_me_links}
									onChange={onChange}
								/>
							</div>
							<input
								type='submit'
								value='Update'
								className='btn btn-info btn-block'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(EditPost);

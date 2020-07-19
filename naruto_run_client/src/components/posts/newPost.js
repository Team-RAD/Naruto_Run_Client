import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useGlobalState } from '../../config/store';
import { addNarutoPost } from '../../services/narutoPostServices';

const NewNarutoPost = ({ history }) => {
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
				console.log('There was an error making the post:', error);
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
		<h1>Hello</h1>
		// <form id='newPostForm' onSubmit={onSubmit}>
		// 	{errorMessage && (
		// 		<div className='alert alert-danger text-center' role='alert'>
		// 			{errorMessage}
		// 		</div>
		// 	)}
		// 	<div>
		// 		<label>Pre Tech Job</label>
		// 		<input
		// 			type='text'
		// 			name='pre_tech_job'
		// 			placeholder='Enter your job prior to tech'
		// 			onChange={onChange}
		// 		/>
		// 	</div>
		// 	<div>
		// 		<label>Current Tech Job</label>
		// 		<input
		// 			type='text'
		// 			name='current_tech_job'
		// 			placeholder='Enter your current job in tech'
		// 			onChange={onChange}
		// 		/>
		// 	</div>
		// 	<div>
		// 		<label>Education Route</label>
		// 		<input
		// 			type='text'
		// 			name='education'
		// 			placeholder='Enter the education route you took'
		// 			onChange={onChange}
		// 		/>
		// 	</div>
		// 	<div>
		// 		<label>Resources You Needed</label>
		// 		<input
		// 			type='text'
		// 			name='resources_required'
		// 			placeholder='Enter the resources you needed'
		// 			onChange={onChange}
		// 		/>
		// 	</div>
		// 	<div>
		// 		<label>Time Taken</label>
		// 		<input
		// 			type='text'
		// 			name='time_taken'
		// 			placeholder='Enter the approx time taken'
		// 			onChange={onChange}
		// 		/>
		// 	</div>
		// 	<input
		// 		type='submit'
		// 		value='Submit'
		// 		className='btn btn-warning btn-block'
		// 	/>
		// </form>
	);
};

export default NewNarutoPost;

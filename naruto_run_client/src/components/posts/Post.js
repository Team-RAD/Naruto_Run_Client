import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../config/store';
import { deleteNarutoPost } from '../../services/narutoPostServices';

const NarutoPost = ({ history, post, showControls }) => {
	//Provide context for state, error handling and store
	const { store, dispatch } = useGlobalState();
	const { narutoPosts, loggedInUser } = store;
	const [errorMessage, setErrorMessage] = useState(null);

	// If we don't have a post, return null
	if (!post) return null;

	//Define the schema of a post
	const {
		username,
		pre_tech_job,
		current_tech_job,
		education,
		resources_required,
		time_taken,
		cost,
		journey,
		tech_stack,
		os_allegiance,
		fueled_by,
		favourite_coding_playlist,
		follow_me_links
	} = post;

	//If valid user is logged in, allow access to edit/delete functionality
	const allowEditDelete = loggedInUser && loggedInUser === post.username;

	// Handle the delete button
	function handleDelete(e) {
		e.preventDefault();
		deleteNarutoPost(post._id)
			.then(() => {
				console.log('Deleted post');
				const updatedPosts = narutoPosts.filter(
					(narutoPost) => narutoPost._id !== post._id
				);
				dispatch({
					type: 'setNarutoPosts',
					data: updatedPosts
				});
				history.push('/');
			})
			.catch((error) => {
				const status = error.response ? error.response.status : 500;
				console.log('Caught an error on edit', error);
				if (status === 403)
					setErrorMessage(
						'Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.'
					);
				else
					setErrorMessage(
						'Well, this is embarrassing... There was a problem on the server.'
					);
			});
	}

	// Handle the edit button
	function handleEdit(e) {
		e.preventDefault();
		history.push(`/posts/edit/${post._id}`);
	}

	return (
		<div>
			{errorMessage && (
				<div className='alert alert-danger text-center' role='alert'>
					{errorMessage}
				</div>
			)}

			<div>
				<Link to={`/posts/${post._id}`}>
					<h1 className='display-5 text-center text-info'>{username}</h1>
				</Link>
				<br />
				{showControls && allowEditDelete && (
					<div>
						<input
							type='submit'
							value='Delete'
							className='btn btn-danger'
							onClick={handleDelete}
						/>
						<input
							type='submit'
							value='Edit'
							className='btn btn-secondary'
							onClick={handleEdit}
						/>
					</div>
				)}
				<div className='card'>
					<div className='card-header'>
						<div className='card-body'>
							<form>
								{errorMessage && (
									<div className='alert alert-danger text-center' role='alert'>
										{errorMessage}
									</div>
								)}
								<div className='form-group'>
									<label htmlFor='pre_tech_job'>Pre Tech Job:</label>
									<input
										className='form-control'
										name='pre_tech_job'
										value={pre_tech_job}
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='current_tech_job'>Current Tech Job:</label>
									<input
										type='text'
										className='form-control'
										name='current_tech_job'
										value={current_tech_job}
									/>
								</div>
								{showControls && (
									<div>
										<div className='form-group'>
											<label htmlFor='education'>Education:</label>
											<input
												type='text'
												className='form-control'
												name='education'
												value={education}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='resources_required'>
												Resources Required:
											</label>
											<input
												type='text'
												className='form-control'
												name='resources_required'
												value={resources_required}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='time_taken'>Time Taken:</label>
											<input
												type='text'
												className='form-control'
												name='time_taken'
												value={time_taken}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='cost'>Cost:</label>
											<input
												type='text'
												className='form-control'
												name='cost'
												value={cost}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='journey'>Your journey:</label>
											<textarea
												type='text'
												className='form-control'
												name='journey'
												rows='3'
												value={journey}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='tech_stack'>Top 3 Techs:</label>
											<input
												type='text'
												className='form-control'
												name='tech_stack'
												value={tech_stack}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='os_allegiance'>OS Allegiance:</label>
											<input
												type='text'
												className='form-control'
												name='os_allegiance'
												value={os_allegiance}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='fueled_by'>Fueled by:</label>
											<input
												type='text'
												className='form-control'
												name='fueled_by'
												value={fueled_by}
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
												value={favourite_coding_playlist}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='follow_me_links'>Social Links:</label>
											<input
												type='text'
												className='form-control'
												name='follow_me_links'
												value={follow_me_links}
											/>
										</div>
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
	);
};

export default NarutoPost;

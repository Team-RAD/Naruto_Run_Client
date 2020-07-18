import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import TimeAgo from 'react-timeago';
import { useGlobalState } from '../../config/store';
import { deleteNarutoPost } from '../../services/narutoPostServices';

const NarutoPost = ({ history, post, showControls }) => {
	const { store, dispatch } = useGlobalState();
	const { narutoPosts, loggedInUser } = store;
	const [errorMessage, setErrorMessage] = useState(null);
	// If we don't have a post, return null
	if (!post) return null;

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
	const allowEditDelete = loggedInUser && loggedInUser === post.username;
	// Handle the delete button
	function handleDelete(e) {
		e.preventDefault();
		deleteNarutoPost(post._id)
			.then(() => {
				console.log('deleted post');
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
				console.log('caught error on edit', error);
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
			<Link to={`/posts/${post._id}`}>
				<h1 className='display-5 text-center text-warning'>{username}</h1>
			</Link>
			{/* <TimeAgo date={modified_date} /> */}
			<p>{pre_tech_job}</p>
			<p>{current_tech_job}</p>
			<p>{education}</p>
			<p>{resources_required}</p>
			<p>{time_taken}</p>
			<p>{cost}</p>
			<p>{journey}</p>
			<p>{tech_stack}</p>
			<p>{os_allegiance}</p>
			<p>{fueled_by}</p>
			<p>{favourite_coding_playlist}</p>
			<p>{follow_me_links}</p>
			{showControls && allowEditDelete && (
				<div>
					<input
						type='submit'
						value='Delete'
						className='btn btn-outline-danger'
						onClick={handleDelete}
					/>
					<input
						type='submit'
						value='Edit'
						className='btn btn-outline-dark'
						onClick={handleEdit}
					/>
				</div>
			)}
		</div>
	);
};

export default NarutoPost;

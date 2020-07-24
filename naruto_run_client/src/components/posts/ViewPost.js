import React from 'react';
import { useGlobalState } from '../../config/store';
import { getPostById } from '../../services/narutoPostServices';
import NarutoPost from '../posts/Post';

const ViewPost = ({ match }) => {
	const { store } = useGlobalState();
	const { narutoPosts } = store;
	const postId = match && match.params ? match.params.id : -1;
	const post = getPostById(narutoPosts, postId);

	return (
		<div>
			<NarutoPost key={post._id} post={post} />
		</div>
	);
};

export default ViewPost;

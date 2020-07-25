import React from 'react';
import NarutoPost from './Post';
import { useGlobalState } from '../../config/store';

const MyPosts = () => {
	const { store } = useGlobalState();
	const { narutoPosts } = store;
	return (
		<div>
			<div>
				<h1 className='display-3 text-center'>
					My <span className='text-info'>Naruto Posts</span>:
				</h1>
			</div>
			<br />
			{narutoPosts
				.sort((a, b) => b.modified_date - a.modified_date)
				.map((post) => (
					<NarutoPost key={post._id} post={post} />
				))}
		</div>
	);
};
export default MyPosts;

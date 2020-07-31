import React from 'react';
import NarutoPost from './Post';
import { useGlobalState } from '../../config/store';
import logo from '../../NR icon.svg';

const Posts = () => {
	//Provide context for state and store
	const { store } = useGlobalState();
	const { narutoPosts } = store;
	return (
		<div>
			<div>
				<h1 className='display-3 text-center'>
					<img src={logo} alt='Naruto Run Logo' className='posts-logo' />{' '}
					Success Stories
				</h1>
			</div>
			<br />
			<div className='text-center'>
				<h5>
					<em>
						Fast advice from community members that made their run into tech!
					</em>
				</h5>
			</div>
			<br />
			{/* Display all posts on server date created order */}
			{narutoPosts
				.sort((a, b) => b.modified_date - a.modified_date)
				.map((post) => (
					<NarutoPost key={post._id} post={post} />
				))}
		</div>
	);
};

export default Posts;

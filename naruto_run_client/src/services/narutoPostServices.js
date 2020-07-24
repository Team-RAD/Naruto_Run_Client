import api from '../config/api';

//Gets all Naruto Posts
export async function getAllNarutoPosts() {
	const response = await api.get('/posts');
	return response.data;
}

//Retrieve a Naruto Post by ID
export function getPostById(narutoPosts, id) {
	const post = narutoPosts.find((post) => post._id === id);
	return post;
}

//Retrieve a Naruto Post by User
export function getPostByUser(narutoPosts, username) {
	const post = narutoPosts.find((post) => post.username === username);
	return post;
}

// Deletes a Naruto Post
export async function deleteNarutoPost(id) {
	const response = await api.delete(`/posts/${id}`);
	return response.data;
}

// Adds a Naruto Post
export async function addNarutoPost(newPost) {
	const response = await api.post('/posts', newPost);
	return response.data;
}

// Edits a Naruto Post
export async function updateNarutoPost(post) {
	const response = await api.put(`/posts/${post._id}`, post);
	return response.data;
}

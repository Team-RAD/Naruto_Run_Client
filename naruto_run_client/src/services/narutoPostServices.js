import api from '../config/api';

//Gets all Naruto Posts from the server
export async function getAllNarutoPosts() {
	const response = await api.get('/posts');
	return response.data;
}

// Deletes a Naruto Post from the server
export async function deleteNarutoPost(id) {
	const response = await api.delete(`/posts/${id}`);
	return response.data;
}

// Adds a Naruto Post from the server
export async function addNarutoPost(newPost) {
	const response = await api.post('/posts', newPost);
	return response.data;
}

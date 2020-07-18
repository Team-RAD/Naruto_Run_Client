import api from '../config/api';

export async function getAllNarutoPosts() {
	const response = await api.get('/posts');
	return response.data;
}

export async function deleteNarutoPost(id) {
	const response = await api.delete(`/posts/${id}`);
	return response.data;
}

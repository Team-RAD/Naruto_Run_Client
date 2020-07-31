import api from '../config/api';

//post user details to login auth route and return response confirming retrieval
export async function loginUser(userInfo) {
	const response = await api.post('/auth/login', userInfo);
	console.log('Retrieved user from server', response);
	return response.data;
}

//return get user details to logout auth route
export async function logoutUser() {
	return api.get('/auth/logout');
}

//post user details to register auth route and return response confirming retrieval
export async function registerUser(userInfo) {
	const response = await api.post('/auth/register', userInfo);
	console.log('Retrieved user from server', response);
	return response.data;
}

//get response checking if user is authenticated via user auth route, throw an error if not
export async function userAuthenticated() {
	try {
		const response = await api.get('/auth/user');
		return response.data;
	} catch {
		return null;
	}
}

//get the logged in user from localStorage
export function getLoggedInUser() {
	return localStorage.getItem('loggedInUser');
}

//store the logged in user to localStorage
export function setLoggedInUser(user) {
	user
		? localStorage.setItem('loggedInUser', user)
		: localStorage.removeItem('loggedInUser');
}

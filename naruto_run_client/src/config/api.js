import axios from 'axios';

export default axios.create({
	baseURL: 'https://naruto-run.herokuapp.com',
	timeout: 5000
	// withCredentials: true
});

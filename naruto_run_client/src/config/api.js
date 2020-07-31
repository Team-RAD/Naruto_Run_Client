import axios from 'axios';

//Provide axios instance on server URL with 5s timeous and credential validation
export default axios.create({
	baseURL: 'https://naruto-run.herokuapp.com',
	timeout: 5000,
	withCredentials: true
});

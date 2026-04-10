import axios from 'axios';

const steamApi = axios.create({
	baseURL: 'https://api.steampowered.com',
});

export default steamApi;

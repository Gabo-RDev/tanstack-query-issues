import axios from 'axios';

export const githubAPI = axios.create({
	baseURL: `https://api.github.com/repos/facebook/react`,
	headers: {
		// TODO: API key of GitHub
		Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
	},
});

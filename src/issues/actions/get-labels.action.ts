import { githubAPI } from '../../api/github.api';
import { sleep } from '../../helpers';
import { GithubLabel } from '../interfaces';

export const getLabels = async (): Promise<GithubLabel[]> => {
	// small artificial delay for demo purposes
	await sleep(1500);

	const { data } = await githubAPI.get<GithubLabel[]>('/labels');

	return data;
};

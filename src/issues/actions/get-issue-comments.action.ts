import { githubAPI } from '../../api/github.api';
import { sleep } from '../../helpers';
import type { GithubIssue } from '../interfaces';

export const getIssuesComments = async (
	issueNumber: number
): Promise<GithubIssue[]> => {
	await sleep(1500);

	const { data } = await githubAPI.get<GithubIssue[]>(
		`/issues/${issueNumber}/comments`
	);
	return data;
};

import { useQuery } from '@tanstack/react-query';
import { STALE_TIME_MINUTE } from '../../helpers';
import { getIssue, getIssuesComments } from '../actions';

export const useIssue = (issueNumber: number) => {
	const issueQuery = useQuery({
		queryKey: ['issues', issueNumber],
		queryFn: () => getIssue(issueNumber),
		staleTime: STALE_TIME_MINUTE,
	});

	const commentsQuery = useQuery({
		queryKey: ['issues', issueQuery.data?.number, 'comments'],
		queryFn: () => getIssuesComments(issueQuery.data!.number),
		staleTime: STALE_TIME_MINUTE,
		enabled: issueQuery.data !== undefined,
	});

	return {
		issueQuery,
		commentsQuery,
	};
};

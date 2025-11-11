import { useQueryClient } from '@tanstack/react-query';
import { FiCheckCircle, FiInfo, FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { STALE_TIME_MINUTE } from '../../helpers';
import { getIssue, getIssuesComments } from '../actions';
import { GithubIssue, State } from '../interfaces';

interface Props {
	issue: GithubIssue;
}

export const IssueItem = ({ issue }: Props) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const prefetchData = () => {
		queryClient.prefetchQuery({
			queryKey: ['issues', issue.number],
			queryFn: () => getIssue(issue.number),
			staleTime: STALE_TIME_MINUTE,
		});

		queryClient.prefetchQuery({
			queryKey: ['issues', issue.number, issue.comments],
			queryFn: () => getIssuesComments(issue.number),
			staleTime: STALE_TIME_MINUTE,
		});
	};

	return (
		<div
			className='animate-fadeIn flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800'
			onMouseEnter={prefetchData}
		>
			{issue.state === State.Close ? (
				<FiCheckCircle
					size={30}
					color='green'
					className='min-w-10'
				/>
			) : (
				<FiInfo
					size={30}
					color='red'
					className='min-w-10'
				/>
			)}
			{/* <FiCheckCircle size={30} color="green" /> */}

			<div className='flex flex-col flex-grow px-2'>
				<a
					onClick={() => navigate(`/issues/issue/${issue.number}`)}
					className='hover:underline cursor-pointer'
				>
					{issue.title}
				</a>
				<span className='text-gray-500'>
					#{issue.number} opened {issue.created_at.toLocaleString()} by{' '}
					<span className='font-bold'>{issue.user.login}</span>
				</span>
			</div>

			<img
				src={issue.user.avatar_url}
				alt={issue.user.login}
				className='w-8 h-8 rounded-full'
			/>
			<div className='flex flex-col mx-2 items-center'>
				<FiMessageSquare
					size={30}
					className='min-w-5'
					color='gray'
				/>
				<span className='px-4 text-gray-400'>{issue.comments}</span>
			</div>
		</div>
	);
};

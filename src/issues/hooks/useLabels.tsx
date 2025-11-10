import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../actions';
import { GithubLabel } from '../interfaces';

export const useLabels = () => {
	const labelsQuery = useQuery({
		queryKey: ['labels'],
		queryFn: getLabels,
		staleTime: 1000 * 60 * 60, // 1 hour of stale time
		/* placeholderData: [
			{
				id: 6955781886,
				node_id: 'LA_kwDOAJy2Ks8AAAABnpjO_g',
				url: 'https://api.github.com/repos/facebook/react/labels/Compiler:%20todo',
				name: 'Compiler: todo',
				color: 'C2E0C6',
				default: false,
			} satisfies GithubLabel,

			{
				id: 127893911,
				node_id: 'MDU6TGFiZWwxMjc4OTM5MTE=',
				url: 'https://api.github.com/repos/facebook/react/labels/Component:%20DOM',
				name: 'Component: DOM',
				color: 'fef2c0',
				default: false,
			} satisfies GithubLabel,
		], */
		initialData: [
			{
				id: 6955781886,
				node_id: 'LA_kwDOAJy2Ks8AAAABnpjO_g',
				url: 'https://api.github.com/repos/facebook/react/labels/Compiler:%20todo',
				name: 'Compiler: todo',
				color: 'C2E0C6',
				default: false,
			} satisfies GithubLabel,

			{
				id: 127893911,
				node_id: 'MDU6TGFiZWwxMjc4OTM5MTE=',
				url: 'https://api.github.com/repos/facebook/react/labels/Component:%20DOM',
				name: 'Component: DOM',
				color: 'fef2c0',
				default: false,
			} satisfies GithubLabel,
		],
	});
	return { labelsQuery };
};

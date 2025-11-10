import { useQuery } from '@tanstack/react-query';
import { sleep } from '../../helpers';

const getLabels = async (): Promise<any[]> => {
	// small artificial delay for demo purposes
	await sleep(1500);

	const res = await fetch(
		`https://api.github.com/repos/facebook/react/labels`
	).then((data) => data.json());

	console.log(res);

	return res;
};

export const LabelPicker = () => {
	const labelsQuery = useQuery({
		queryKey: ['labels'],
		queryFn: getLabels,
	});

	if (labelsQuery.isLoading) {
		return (
			<div className='flex justify-center items-center h-52'>Espere...</div>
		);
	}

	return (
		<>
			<span
				className='px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer'
				style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
			>
				Primary
			</span>
		</>
	);
};

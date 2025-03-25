import { useBooksInfo } from './useBooksInfo';

export function useOptionsInfo() {
	const { allCount, activeCount, deactivatedCount } = useBooksInfo();

	return [
		{
			value: 'all',
			label: `Show All ${allCount}/${allCount}`,
		},
		{
			value: 'active',
			label: `Show Active ${activeCount}/${allCount}`,
		},
		{
			value: 'deactivated',
			label: `Show Deactivated ${deactivatedCount}/${allCount}`,
		},
	];
}

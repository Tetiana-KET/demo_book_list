import styles from './Filter.module.scss';
import { Select } from '@components/ui/Select';
import { useOptionsInfo } from '@hooks/useOptionsInfo';

interface FilterProps {
	filter: string;
	setFilter: (filter: string) => void;
}

export function Filter({ filter, setFilter }: FilterProps) {
	const options = useOptionsInfo();

	return (
		<div className={styles.actionsSelectWrap}>
			<Select
				name='filter'
				value={filter}
				onChange={setFilter}
				options={options}
			/>
		</div>
	);
}

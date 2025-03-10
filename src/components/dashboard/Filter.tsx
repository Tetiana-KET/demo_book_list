import styles from './Filter.module.scss';

interface FilterProps {
	filter: string;
	setFilter: (filter: string) => void;
}

export function Filter({ filter, setFilter }: FilterProps) {
	return (
		<div className={styles.actionsSelectWrap}>
			<select
				name='filter'
				value={filter}
				onChange={e => setFilter(e.target.value)}
			>
				<option value='all'>Show All</option>
				<option value='active'>Show Active</option>
				<option value='deactivated'>Show Deactivated</option>
			</select>
		</div>
	);
}

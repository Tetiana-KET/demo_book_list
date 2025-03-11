import { useBooks } from '@context/BooksContext';
import styles from './Filter.module.scss';

interface FilterProps {
	filter: string;
	setFilter: (filter: string) => void;
}

export function Filter({ filter, setFilter }: FilterProps) {
	const { books } = useBooks();

	const allCount = books.length;
	const activeCount = books.filter(book => book.isActive).length;
	const deactivatedCount = allCount - activeCount;

	return (
		<div className={styles.actionsSelectWrap}>
			<select
				name='filter'
				value={filter}
				onChange={e => setFilter(e.target.value)}
			>
				<option value='all'>Show All {`${allCount}/${allCount}`}</option>
				<option value='active'>
					Show Active {`${activeCount}/${allCount}`}
				</option>
				<option value='deactivated'>
					Show Deactivated {`${deactivatedCount}/${allCount}`}
				</option>
			</select>
		</div>
	);
}

import styles from './DashboardActions.module.scss';
import { Filter } from './Filter';
import { Search } from './Search';

interface DashboardActionsProps {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	searchQuery: string;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function DashboardActions({
	filter,
	setFilter,
	searchQuery,
	setSearchQuery,
}: DashboardActionsProps) {
	return (
		<div className={styles.actions}>
			<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<Filter filter={filter} setFilter={setFilter} />
		</div>
	);
}

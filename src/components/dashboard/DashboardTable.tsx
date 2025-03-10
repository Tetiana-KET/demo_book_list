import { BookRow } from './BookRow';
import styles from './DashboardTable.module.scss';
import { Book } from 'src/types/Book';

interface DashboardTableProp {
	books: Book[];
	filter: string;
}

export function DashboardTable({ books, filter }: DashboardTableProp) {
	return (
		<table className={styles.dashboardTable}>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Category</th>
					<th>ISBN</th>
					<th>Created</th>
					<th>Modified</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{books &&
					books.map(book => (
						<BookRow key={book.id} book={book} filter={filter} />
					))}
			</tbody>
		</table>
	);
}

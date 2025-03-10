import { useBooks } from '@context/BooksContext';
import { BookRow } from './BookRow';
import styles from './DashboardTable.module.scss';

export function DashboardTable() {
	const { books } = useBooks();
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
				{books && books.map(book => <BookRow key={book.id} {...book} />)}
			</tbody>
		</table>
	);
}

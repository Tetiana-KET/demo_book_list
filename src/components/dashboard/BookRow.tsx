import { Book } from 'src/types/Book';
import { formatDateTime } from '@utils/formatDateTime';
import { EditIcon } from '@components/ui/EditIcon';
import { DeleteIcon } from '@components/ui/DeleteIcon';
import { Toggler } from '@components/ui/Toggler';
import styles from './BookRow.module.scss';
import { useBooks } from '@context/BooksContext';

export function BookRow(book: Book) {
	const { id, title, author, category, isbn, createdAt, modifiedAt, isActive } =
		book;
	const { toggleActive } = useBooks();

	const created = formatDateTime(createdAt);
	const modified = modifiedAt ? formatDateTime(modifiedAt) : null;

	return (
		<tr className={styles.bookRow}>
			<td data-label='Title'>{title}</td>
			<td data-label='Author'>{author}</td>
			<td data-label='Category'>{category}</td>
			<td data-label='ISBN'>{isbn}</td>
			<td data-label='Created'>{created}</td>
			<td data-label='Modified'>{modified ?? '—'}</td>
			<td data-label='Actions' className={styles.actionButtons}>
				<button>
					<EditIcon />
				</button>
				<button>
					<DeleteIcon />
				</button>
				<Toggler
					isActive={isActive}
					id={id}
					onToggle={() => toggleActive(id)}
				/>
			</td>
		</tr>
	);
}

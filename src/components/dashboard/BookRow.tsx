import { useState } from 'react';

import { Book } from 'src/types/Book';
import { formatDateTime } from '@utils/formatDateTime';
import { EditIcon } from '@components/ui/EditIcon';
import { DeleteIcon } from '@components/ui/DeleteIcon';
import { ConfirmationModal } from '@components/ui/ConfirmationModal';
import { Toggler } from '@components/ui/Toggler';
import { useBooks } from '@context/BooksContext';
import styles from './BookRow.module.scss';

interface BookRowProps {
	book: Book;
	filter: string;
}

export function BookRow({ book, filter }: BookRowProps) {
	const { id, title, author, category, isbn, createdAt, modifiedAt, isActive } =
		book;
	const { toggleActive, deleteBookById } = useBooks();
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	const [isDisappearing, setDisappearing] = useState(false);

	const created = formatDateTime(createdAt);
	const modified = modifiedAt ? formatDateTime(modifiedAt) : null;

	const handleDeleteClick = () => {
		setModalOpen(true);
	};

	const handleConfirmDelete = () => {
		deleteBookById(id);
		setModalOpen(false);
	};

	const handleCancelDelete = () => {
		setModalOpen(false);
	};

	const handleToggle = () => {
		if (filter !== 'all') {
			setDisappearing(true);

			setTimeout(() => {
				toggleActive(id);
				setDisappearing(false);
			}, 500);
		} else {
			toggleActive(id);
		}
	};

	return (
		<>
			<tr
				className={`${styles.bookRow} ${
					isDisappearing ? styles.disappearing : ''
				}`}
			>
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
					<button disabled={isActive} onClick={handleDeleteClick}>
						<DeleteIcon />
					</button>
					<Toggler isActive={isActive} id={id} onToggle={handleToggle} />
				</td>
			</tr>
			<ConfirmationModal
				title={title}
				isOpen={isModalOpen}
				onConfirm={handleConfirmDelete}
				onCancel={handleCancelDelete}
			/>
		</>
	);
}

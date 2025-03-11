import { useParams, useNavigate } from 'react-router-dom';
import { useBooks } from '@context/BooksContext';
import { BookForm } from './BookForm';
import { Book } from 'src/types/Book';

export function EditBookForm() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { books, updateBook } = useBooks();
	const bookToEdit = books.find(book => book.id == Number(id));

	if (!bookToEdit) {
		return <div>Book not found!</div>;
	}

	// TODO: user friendly message

	const handleSubmit = async (updatedBook: Book) => {
		await updateBook({
			...updatedBook,
			id: Number(id),
			modifiedAt: new Date().toISOString(),
		});
		navigate('/');
	};

	return <BookForm mode={'edit'} book={bookToEdit} onSubmit={handleSubmit} />;
}

import { useNavigate } from 'react-router-dom';
import { useBooks } from '@context/BooksContext';
import { BookForm } from './BookForm';
import { Book } from 'src/types/Book';

export function AddBookForm() {
	const navigate = useNavigate();
	const { addBook } = useBooks();

	const handleSubmit = async (newBook: Book) => {
		await addBook({
			...newBook,
			id: Date.now(),
			isActive: true,
			modifiedAt: null,
			createdAt: new Date().toISOString(),
		});
		navigate('/');
	};

	return <BookForm mode='add' onSubmit={handleSubmit} />;
}

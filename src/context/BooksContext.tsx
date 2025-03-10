import { deleteBook, fetchBooks, patchBook } from '@services/bookService';
import { createContext, useContext, useEffect, useState } from 'react';
import { Book } from 'src/types/Book';
import { useNotification } from './NotificationContext';

interface BookContextType {
	books: Book[];
	setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
	toggleActive: (id: number) => void;
	deleteBookById: (id: number) => void;
}

interface BooksProviderType {
	children: React.ReactNode;
}

const BooksContext = createContext<BookContextType | null>(null);

export function BooksProvider({ children }: BooksProviderType) {
	const [books, setBooks] = useState<Book[]>([]);
	const { showMessage } = useNotification();

	useEffect(() => {
		const loadBooks = async () => {
			try {
				const data = await fetchBooks();
				setBooks(data);
			} catch (err) {
				console.error('Failed to load books:', err);
				// TODO: show a user-friendly error
			}
		};

		loadBooks();
	}, []);

	const toggleActive = async (id: number) => {
		setBooks(prev =>
			prev.map(book =>
				book.id === id ? { ...book, isActive: !book.isActive } : book
			)
		);

		try {
			const book = books.find(b => b.id === id);
			if (book) {
				await patchBook(id, { isActive: !book.isActive });
			}
		} catch (error) {
			console.error('Failed to sync with backend:', error);
			// TODO: show a user-friendly error
		}
	};

	// TODO: add functionality to restore the deleted book
	const deleteBookById = async (id: number) => {
		const bookToDelete = books.find(book => book.id === id);
		if (!bookToDelete) return;

		setBooks(prev => prev.filter(book => book.id !== id));

		try {
			await deleteBook(id);
			showMessage(`Book "${bookToDelete.title}" deleted successfully`);
		} catch (err) {
			console.error('Failed to delete book from backend:', err);
		}
	};

	return (
		<BooksContext.Provider
			value={{ books, setBooks, toggleActive, deleteBookById }}
		>
			{children}
		</BooksContext.Provider>
	);
}

export const useBooks = () => {
	const context = useContext(BooksContext);
	if (!context) {
		throw new Error('useBooks must be used within a BooksProvider');
	}
	return context;
};

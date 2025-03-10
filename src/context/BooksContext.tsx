import { createContext, useContext, useEffect, useState } from 'react';
import { Book } from 'src/types/Book';

interface BookContextType {
	books: Book[];
	setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
	toggleActive: (id: number) => void;
}

const BooksContext = createContext<BookContextType | null>(null);

export function BooksProvider({ children }: { children: React.ReactNode }) {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/books')
			.then(res => res.json())
			.then(data => setBooks(data))
			.catch(err => console.error(err));
	}, []);

	const toggleActive = (id: number) => {
		setBooks(prev =>
			prev.map(book =>
				book.id === id ? { ...book, isActive: !book.isActive } : book
			)
		);
	};

	return (
		<BooksContext.Provider value={{ books, setBooks, toggleActive }}>
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

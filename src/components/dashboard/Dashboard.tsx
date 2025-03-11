import { useBooks } from '@context/BooksContext';
import { DashboardActions } from './DashboardActions';
import { DashboardTable } from './DashboardTable';
import { useState } from 'react';

export function Dashboard() {
	const { books } = useBooks();
	const [filter, setFilter] = useState('active');

	const [searchQuery, setSearchQuery] = useState('');

	const filteredBooks = books.filter(book => {
		switch (filter) {
			case 'all':
				return true;
			case 'active':
				return book.isActive === true;
			case 'deactivated':
				return book.isActive === false;
		}
	});

	const searchedBooks = books.filter(book =>
		book.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const booksToShow = searchQuery ? searchedBooks : filteredBooks;

	return (
		<>
			<DashboardActions
				filter={filter}
				setFilter={setFilter}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<DashboardTable books={booksToShow} filter={filter} />
		</>
	);
}

import { useBooks } from '@context/BooksContext';
import { DashboardActions } from './DashboardActions';
import { DashboardTable } from './DashboardTable';
import { useState } from 'react';

export function Dashboard() {
	const { books } = useBooks();
	const [filter, setFilter] = useState('active');

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

	return (
		<>
			<DashboardActions filter={filter} setFilter={setFilter} />
			<DashboardTable books={filteredBooks} filter={filter} />
		</>
	);
}

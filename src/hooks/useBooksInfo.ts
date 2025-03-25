import { useBooks } from '@context/BooksContext';

export function useBooksInfo() {
	const { books } = useBooks();

	const allCount = books.length;
	const activeCount = books.filter(book => book.isActive).length;
	const deactivatedCount = allCount - activeCount;

	return { allCount, activeCount, deactivatedCount };
}

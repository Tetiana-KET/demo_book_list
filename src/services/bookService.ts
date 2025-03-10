import { Book } from 'src/types/Book';

export async function fetchBooks(): Promise<Book[]> {
	const res = await fetch('http://localhost:3000/books');
	if (!res.ok) throw new Error('Failed to fetch books');
	return await res.json();
}

export async function patchBook(
	id: number,
	updates: Partial<Book>
): Promise<Book> {
	const res = await fetch(`http://localhost:3000/books/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updates),
	});
	if (!res.ok) throw new Error('Failed to update book');
	return await res.json();
}

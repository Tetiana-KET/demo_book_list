import { BASE_URL } from '@consts/BASE_URL';
import { Book } from 'src/types/Book';

export async function fetchBooks(): Promise<Book[]> {
	const res = await fetch(BASE_URL);
	if (!res.ok) throw new Error('Failed to fetch books');
	return await res.json();
}

export async function patchBook(
	id: number,
	updates: Partial<Book>
): Promise<Book> {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updates),
	});
	if (!res.ok) throw new Error('Failed to update book');
	return await res.json();
}

export async function deleteBook(id: number): Promise<void> {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	});
	if (!res.ok) throw new Error('Failed to delete book');
}

export async function postBook(newBook: Book): Promise<Book> {
	const res = await fetch(BASE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newBook),
	});

	if (!res.ok) throw new Error('Failed to add book');

	return await res.json();
}

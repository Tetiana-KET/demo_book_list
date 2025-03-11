import { useEffect, useState } from 'react';
import styles from './BookForm.module.scss';
import { Book } from 'src/types/Book';

interface BookFormProps {
	mode: 'add' | 'edit';
	book?: Book;
	onSubmit: (book: Book) => void;
}

export function BookForm({ mode, book, onSubmit }: BookFormProps) {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [category, setCategory] = useState('');
	const [isbn, setIsbn] = useState('');
	const [modifiedAt, setModifiedAt] = useState('');

	useEffect(() => {
		if (mode === 'edit' && book) {
			setTitle(book.title);
			setAuthor(book.author);
			setCategory(book.category);
			setIsbn(book.isbn);
			setModifiedAt(new Date().toISOString());
		}
	}, [mode, book]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (book) {
			const updatedBook = {
				...book,
				title,
				author,
				category,
				isbn,
				modifiedAt,
			};
			onSubmit(updatedBook);
		}
	};

	return (
		<div className={styles.formWrap}>
			<h1>{mode === 'add' ? 'Add a Book' : 'Edit a Book'}</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.formFieldWrap}>
					<label htmlFor='title'>Title</label>
					<input
						id='title'
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className={styles.formFieldWrap}>
					<label htmlFor='author'>Author</label>
					<input
						id='author'
						type='text'
						value={author}
						onChange={e => setAuthor(e.target.value)}
						required
					/>
				</div>

				<div className={styles.formFieldWrap}>
					<label htmlFor='category'>Category</label>
					<select
						id='category'
						value={category.toLocaleLowerCase()}
						onChange={e => setCategory(e.target.value)}
						required
					>
						<option value=''>Select Category</option>
						<option value='fantasy'>Fantasy</option>
						<option value='non-fiction'>Non-fiction</option>
						<option value='science'>Science</option>
						<option value='historical'>Historical</option>
						<option value='biography'>Biography</option>
						<option value='classic'>Classic</option>
						<option value='adventure'>Adventure</option>
					</select>
				</div>

				<div className={styles.formFieldWrap}>
					<label htmlFor='isbn'>ISBN</label>
					<input
						id='isbn'
						type='text'
						inputMode='numeric'
						pattern='\d{10,}'
						minLength={10}
						value={Number(isbn)}
						onChange={e => {
							const value = e.target.value;
							if (/^\d*$/.test(value)) setIsbn(value);
						}}
						onInvalid={e =>
							(e.target as HTMLInputElement).setCustomValidity(
								'Please enter at least 10 digits (only numbers).'
							)
						}
						onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
						required
					/>
				</div>
				<div className={styles.formFieldWrap}>
					<button type='submit'>
						{mode === 'add' ? 'Add a Book' : 'Edit Book'}
					</button>
				</div>
			</form>
		</div>
	);
}

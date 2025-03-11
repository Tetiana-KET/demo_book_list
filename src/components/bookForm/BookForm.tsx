import { useState } from 'react';
import styles from './BookForm.module.scss';

export function BookForm() {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [category, setCategory] = useState('');
	const [isbn, setIsbn] = useState('');

	return (
		<div className={styles.formWrap}>
			<h1>Add a book</h1>
			<form>
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
						value={category}
						onChange={e => setCategory(e.target.value)}
						required
					>
						<option value=''>Select category</option>
						<option value='fiction'>Fiction</option>
						<option value='non-fiction'>Non-fiction</option>
						<option value='science'>Science</option>
					</select>
				</div>

				<div className={styles.formFieldWrap}>
					<label htmlFor='isbn'>ISBN</label>
					<input
						id='isbn'
						type='number'
						value={isbn}
						onChange={e => setIsbn(e.target.value)}
						required
					/>
				</div>
				<div className={styles.formFieldWrap}>
					<button type='submit'>Add a Book</button>
				</div>
			</form>
		</div>
	);
}

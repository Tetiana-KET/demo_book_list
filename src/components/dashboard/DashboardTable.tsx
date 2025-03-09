import { BookRow } from './BookRow';

const books = [
	{
		id: 1,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		category: 'Fiction',
		isbn: '9780743273565',
		createdAt: new Date('2022-03-12T08:35:00'),
		modifiedAt: new Date('2022-03-13T13:48:00'),
		isActive: true,
	},
	{
		id: 2,
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		category: 'Classic',
		isbn: '9780061120084',
		createdAt: new Date('2022-01-15T10:20:00'),
		modifiedAt: new Date('2022-02-10T15:30:00'),
		isActive: false,
	},
];

export function DashboardTable() {
	return (
		<table className='dashboard__table'>
			<thead>
				<tr>
					<th>Book Title</th>
					<th>Author Name</th>
					<th>Category</th>
					<th>ISBN</th>
					<th>Created At</th>
					<th>Modified At</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{books.map(book => (
					<BookRow key={book.id} {...book} />
				))}
			</tbody>
		</table>
	);
}

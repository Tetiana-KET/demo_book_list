import { Layout } from '@components/layout/Layout';
import { AddBook } from '@pages/AddBook';
import { EditBook } from '@pages/EditBook';
import { MainPage } from '@pages/MainPage';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// errorElement: <NotFoundPage />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: '/addBook',
				element: <AddBook />,
			},
			{
				path: '/editBook/:id',
				element: <EditBook />,
			},
		],
	},
]);
export default router;

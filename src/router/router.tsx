import { Layout } from '@components/Layout';
import { AddBook } from '@pages/AddBook';
import { Dashboard } from '@pages/Dashboard';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/addBook',
        element: <AddBook />,
      },
      {
        path: '/editBook',
        element: <AddBook />,
      },
      
    ],
  },
]);
export default router;
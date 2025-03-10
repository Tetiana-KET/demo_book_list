import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { BooksProvider } from './context/BooksContext';

function App() {
	return (
		<BooksProvider>
			<RouterProvider router={router} />
		</BooksProvider>
	);
}

export default App;

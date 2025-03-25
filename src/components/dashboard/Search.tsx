import { SearchIcon } from '@components/ui/icons/SearchIcon';
import { Input } from '@components/ui/Input';

interface SearchProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

export function Search({ searchQuery, setSearchQuery }: SearchProps) {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<Input
				type='text'
				placeholder='Search a book...'
				value={searchQuery}
				onChange={setSearchQuery}
			/>
			<button type='submit'>
				<SearchIcon />
			</button>
		</form>
	);
}

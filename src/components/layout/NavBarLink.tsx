import { NavLink } from 'react-router-dom';

interface LinkProps {
	id: string;
	path: string;
	title: string;
}

export function NavBarLink({ path, title }: LinkProps) {
	return (
		<NavLink
			to={path}
			className={({ isActive, isPending }) =>
				`nav__link ${isPending ? 'pending' : isActive ? 'active' : ''}`
			}
		>
			{title}
		</NavLink>
	);
}

import { NavLink } from 'react-router-dom';
import styles from './NavBarLink.module.scss';

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
				`${styles.navLink} ${isPending ? styles.pending : ''} ${
					isActive ? styles.active : ''
				}`
			}
		>
			{title}
		</NavLink>
	);
}

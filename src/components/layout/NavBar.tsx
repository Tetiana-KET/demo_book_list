import { NAV_LINKS } from '@consts/NAV_LINKS';
import { NavBarLink } from './NavBarLink';

export function NavBar() {
	return (
		<nav className='nav__links'>
			{NAV_LINKS.map(link => {
				return <NavBarLink key={link.id} {...link} />;
			})}
		</nav>
	);
}

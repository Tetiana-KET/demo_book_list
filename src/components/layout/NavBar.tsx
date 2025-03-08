import { NAV_LINKS } from '@consts/NAV_LINKS';
import { NavBarLink } from './NavBarLink';

const NavBarStyle = {
	height: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

export function NavBar() {
	return (
		<nav style={NavBarStyle}>
			{NAV_LINKS.map(link => {
				return <NavBarLink key={link.id} {...link} />;
			})}
		</nav>
	);
}

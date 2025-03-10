import { NAV_LINKS } from '@consts/NAV_LINKS';
import { NavBarLink } from './NavBarLink';
import styles from './NavBar.module.scss';
import { Burger } from '@components/ui/Burger';
import { useState } from 'react';

export function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(true);
	const toggleMenu = () => setMenuOpen(prev => !prev);
	return (
		<>
			<Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
			<nav
				className={`${styles.navBar} ${
					isMenuOpen ? styles.navBarOpen : styles.navBarClosed
				}`}
			>
				{NAV_LINKS.map(link => {
					return <NavBarLink key={link.id} {...link} isMenuOpen={isMenuOpen} />;
				})}
			</nav>
		</>
	);
}

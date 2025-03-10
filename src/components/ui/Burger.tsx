import styles from './Burger.module.scss';

interface BurgerProps {
	toggleMenu: () => void;
	isMenuOpen: boolean;
}

export function Burger({ toggleMenu, isMenuOpen }: BurgerProps) {
	return (
		<button
			className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
			onClick={toggleMenu}
			aria-label='Toggle menu'
		>
			<span className={styles.burgerIcon}></span>
		</button>
	);
}

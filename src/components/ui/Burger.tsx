import styles from './Burger.module.scss';

interface BurgerProps {
	toggleMenu: () => void;
}

export function Burger({ toggleMenu }: BurgerProps) {
	return (
		<button
			className={styles.burgerMenu}
			onClick={toggleMenu}
			aria-label='Toggle menu'
		>
			<span className={styles.burgerIcon}></span>
		</button>
	);
}

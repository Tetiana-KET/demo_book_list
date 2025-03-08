import { NavBar } from './NavBar';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.headerLogoWrap}>
					<a href='/'>
						<img src='src/assets/book-logo.webp' alt='the logo for books app' />
					</a>
				</div>
				<NavBar />
			</div>
		</header>
	);
}
export default Header;

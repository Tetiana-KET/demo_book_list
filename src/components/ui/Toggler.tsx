import styles from './Toggler.module.scss';

interface TogglerProps {
	isActive: boolean;
}

export function Toggler({ isActive }: TogglerProps) {
	return (
		<div className={styles.toggler}>
			<label htmlFor='toggler-button'>
				<input type='checkbox' id='toggler-button' />
				<span
					className={`${styles.togglerSlider} ${
						isActive ? styles.activated : styles.deactivated
					}`}
				/>
			</label>
		</div>
	);
}

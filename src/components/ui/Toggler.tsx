import styles from './Toggler.module.scss';

interface TogglerProps {
	isActive: boolean;
	onToggle: () => void;
	id: number;
}

export function Toggler({ isActive, onToggle, id }: TogglerProps) {
	const togglerId = `toggler-${id}`;

	return (
		<div className={styles.toggler}>
			<label htmlFor={togglerId}>
				<input
					type='checkbox'
					id={togglerId}
					checked={isActive}
					onChange={onToggle}
				/>
				<span
					className={`${styles.togglerSlider} ${
						isActive ? styles.activated : styles.deactivated
					}`}
				/>
			</label>
		</div>
	);
}

import { useEffect, useState } from 'react';
import styles from './Toggler.module.scss';

interface TogglerProps {
	isActive: boolean;
	onToggle: () => void;
	id: number;
}

export function Toggler({ isActive, onToggle, id }: TogglerProps) {
	const [localActive, setLocalActive] = useState(isActive);
	const [isDisabled, setIsDisabled] = useState(false);
	const togglerId = `toggler-${id}`;

	useEffect(() => {
		setLocalActive(isActive);
	}, [isActive]);

	const handleChange = () => {
		if (isDisabled) return;
		setIsDisabled(true);
		setLocalActive(prev => !prev);
		setTimeout(() => {
			onToggle();
			setIsDisabled(false);
		}, 500);
	};

	return (
		<div className={styles.toggler}>
			<label htmlFor={togglerId}>
				<input
					type='checkbox'
					id={togglerId}
					checked={isActive}
					disabled={isDisabled}
					onChange={handleChange}
				/>
				<span
					className={`${styles.togglerSlider} ${
						localActive ? styles.activated : styles.deactivated
					}`}
				/>
			</label>
		</div>
	);
}

import styles from './ConfirmationModal.module.scss';

interface ConfirmationModalProps {
	isOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	title: string;
}

export function ConfirmationModal({
	isOpen,
	onConfirm,
	onCancel,
	title,
}: ConfirmationModalProps) {
	if (!isOpen) return;
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h3>Are you sure you want to delete the book "{title}"?</h3>
				<div className={styles.modalActions}>
					<button onClick={onCancel} className={styles.cancelButton}>
						Cancel
					</button>
					<button onClick={onConfirm} className={styles.confirmButton}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}

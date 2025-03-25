import { DeleteIcon } from '@components/ui/icons/DeleteIcon';
import { EditIcon } from '@components/ui/icons/EditIcon';
import { Toggler } from '@components/ui/Toggler';
import { Link } from 'react-router-dom';
import styles from './BookActions.module.scss';

interface BookActionsProps {
	id: number;
	isActive: boolean;
	onDelete: () => void;
	onToggle: () => void;
}

export function BookActions(props: BookActionsProps) {
	const { id, isActive, onDelete, onToggle } = props;

	return (
		<td data-label='Actions' className={styles.actionButtons}>
			<Link to={`/editBook/${id}`}>
				<button>
					<EditIcon />
				</button>
			</Link>
			<button disabled={isActive} onClick={onDelete}>
				<DeleteIcon />
			</button>
			<Toggler isActive={isActive} id={id} onToggle={onToggle} />
		</td>
	);
}

interface Option {
	value: string;
	label: string;
}

interface SelectProps {
	name: string;
	value: string;
	options: Option[];
	onChange: (value: string) => void;
}

export function Select(props: SelectProps) {
	const { name, value, onChange, options } = props;

	return (
		<select name={name} value={value} onChange={e => onChange(e.target.value)}>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

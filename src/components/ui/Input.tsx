interface InputProps {
	type: 'text' | 'number' | 'password' | 'email';
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
}

export function Input(props: InputProps) {
	const { type = 'text', placeholder, value, onChange } = props;
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={e => onChange(e.target.value)}
		/>
	);
}

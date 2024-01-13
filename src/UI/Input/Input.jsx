import "./Input.module.scss";

const Input = props => {
	const { style = {}, options = {}, value, label } = props;
	return (
		<>
			<label htmlFor={options.id}>{label}</label>
			<input
				style={style}
				value={value}
				{...options}
			/>
		</>
	);
};

export default Input;

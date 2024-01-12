import "./Input.module.scss";

const Input = props => {
	const { style = {}, options = {}, value, onChange, onInput } = props;
	return (
		<input
			onChange={onInput}
			onBlur={onChange}
			style={style}
			value={value}
			{...options}
		/>
	);
};

export default Input;

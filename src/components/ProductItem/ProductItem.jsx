import { useContext, useState } from "react";
import styles from "./ProductItem.module.scss";
import Input from "../../UI/Input/Input";
import { CartContext } from "../../context/CartContext";

const ProductItem = ({ id, name, description, price }) => {
	const [amountInput, setAmountInput] = useState("1");
	const context = useContext(CartContext);

	const amountChangeHandler = evt => {
		if (evt.target.value > 0) {
			setAmountInput(evt.target.value);
		}
	};

	const addToCartHandler = evt => {
		evt.preventDefault();
		context.addToCart(id, amountInput);
	};

	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<h3 className={styles.title}>{name}</h3>
				<div className={styles.descr}>{description}</div>
				<div className={styles.price}>${price}</div>
			</div>
			<form
				className={styles.controls}
				onSubmit={addToCartHandler}
			>
				<div className={styles.input}>
					<Input
						label='Количество'
						style={{ width: "50px" }}
						options={{
							min: 1,
							type: "number",
							name: "amount",
							id: `amount-${id}`,
							onInput: amountChangeHandler,
						}}
						value={amountInput}
					></Input>
				</div>
				<button>Добавить</button>
			</form>
		</div>
	);
};

export default ProductItem;

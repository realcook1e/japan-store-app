import { useState } from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = ({ id, name, description, price, onAddToCart }) => {
	const [amountInput, setAmountInput] = useState("1");

	const amountChangeHandler = evt => {
		if (evt.target.value > 0) {
			setAmountInput(evt.target.value);
		}
	};

	const addToCartHandler = evt => {
		evt.preventDefault();
		onAddToCart(id, amountInput);
	};

	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<h3 className={styles.title}>{name}</h3>
				<div className={styles.descr}>{description}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<form
				className={styles.controls}
				onSubmit={addToCartHandler}
			>
				<div className={styles.input}>
					<label>Количество</label>
					<input
						name='amount'
						type='number'
						min={1}
						value={amountInput}
						onChange={amountChangeHandler}
					></input>
				</div>
				<button>Добавить</button>
			</form>
		</div>
	);
};

export default ProductItem;

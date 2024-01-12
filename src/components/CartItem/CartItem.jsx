import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import styles from "./CartItem.module.scss";

const CartItem = ({ id, name, price, amount }) => {
	const context = useContext(CartContext);

	const minusClickHandler = () => {
		context.decreaseAmount(id);
	};

	const plusClickHandler = () => {
		context.increaseAmount(id);
	};

	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<h3 className={styles.title}>{name}</h3>
				<span className={styles.price}>${price}</span>
				<span className={styles.amount}>x {amount}</span>
			</div>
			<div className={styles.controls}>
				<span
					className={styles.minus}
					onClick={minusClickHandler}
				>
					–
				</span>
				<span
					className={styles.plus}
					onClick={plusClickHandler}
				>
					+
				</span>
			</div>
		</div>
	);
};

export default CartItem;

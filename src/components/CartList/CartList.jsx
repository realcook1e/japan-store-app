import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";

import styles from "./CartList.module.scss";

const CartList = ({ orderResponse, orderStatus }) => {
	const context = useContext(CartContext);

	const totalPrice = context.cart.totalPrice < 0 ? "0.00" : context.cart.totalPrice.toFixed(2);
	const cartItems = context.cart.products.map(product => (
		<CartItem
			key={product._id}
			name={product.name}
			price={product.price}
			amount={product.amount}
			id={product._id}
		/>
	));

	const responseClass = orderStatus === "ordered" ? styles.success : styles.error;

	return (
		<div className={styles.content}>
			<div className={styles.items}>
				{orderStatus === "unordered" && cartItems.length > 0 && cartItems}
				{orderStatus === "unordered" && cartItems.length === 0 && <p>Корзина пуста</p>}
				{orderStatus !== "unordered" && (
					<div className={responseClass}>
						<p>{orderResponse}</p>
					</div>
				)}
			</div>
			<div className={styles.total}>
				<span>Итого</span>
				<span>${totalPrice}</span>
			</div>
		</div>
	);
};

export default CartList;

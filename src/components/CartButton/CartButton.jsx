import { useContext } from "react";
import styles from "./CartButton.module.scss";
import { IconContext } from "react-icons";
import { IoMdCart } from "react-icons/io";
import { CartContext } from "../../context/CartContext";

const CartButton = ({ onOpenModal }) => {
	const context = useContext(CartContext);

	return (
		<IconContext.Provider
			value={{ color: "white", size: "22px", className: "global-class-name" }}
		>
			<div
				className={styles.button}
				onClick={onOpenModal}
			>
				<IoMdCart />
				<span className={styles.title}>Корзина</span>
				<span className={styles.amount}>{context.cart.totalAmount}</span>
			</div>
		</IconContext.Provider>
	);
};

export default CartButton;

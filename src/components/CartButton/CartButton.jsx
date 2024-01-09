import styles from "./CartButton.module.scss";
import { IconContext } from "react-icons";
import { IoMdCart } from "react-icons/io";

const CartButton = ({ amount }) => {
	return (
		<IconContext.Provider
			value={{ color: "white", size: "22px", className: "global-class-name" }}
		>
			<div className={styles.button}>
				<IoMdCart />
				<span className={styles.title}>Корзина</span>
				<span className={styles.amount}>{amount}</span>
			</div>
		</IconContext.Provider>
	);
};

export default CartButton;

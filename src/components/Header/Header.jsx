import CartButton from "../CartButton/CartButton";
import sushi from "../../assets/img/sushi.jpg";
import styles from "./Header.module.scss";

const Header = ({ amountInCart }) => {
	return (
		<header>
			<div className={styles.header}>
				<div className={styles.container}>
					<h2>Япона Кухня</h2>
					<CartButton amount={amountInCart} />
				</div>
			</div>
			<div className={styles["main-image"]}>
				<img
					src={sushi}
					alt='Sushi'
				/>
			</div>
		</header>
	);
};

export default Header;

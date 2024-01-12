import { useState } from "react";
import useCart from "./hooks/useCart";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import ProductList from "./components/ProductList/ProductList";
import { PRODUCTS } from "./products";
import Modal from "./components/Modal/Modal";
import CartList from "./components/CartList/CartList";
import { CartContext } from "./context/CartContext";

function App() {
	const [modalActivity, setModalActivity] = useState(false);
	const [addToCartHandler, decreaseAmountHandler, increaseAmountHandler, cart] = useCart();

	const closeModalHandler = () => {
		setModalActivity(false);
	};

	const openModalHandler = () => {
		setModalActivity(true);
	};

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				addToCart: addToCartHandler,
				decreaseAmount: decreaseAmountHandler,
				increaseAmount: increaseAmountHandler,
			}}
		>
			<Header onOpenModal={openModalHandler} />
			<Promo />
			<ProductList products={PRODUCTS} />
			{modalActivity && (
				<Modal
					onCloseModal={closeModalHandler}
					actionLabel='Заказать'
				>
					<CartList />
				</Modal>
			)}
		</CartContext.Provider>
	);
}

export default App;

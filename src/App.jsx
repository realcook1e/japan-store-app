import { useState } from "react";
import useCart from "./hooks/useCart";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import ProductList from "./components/ProductList/ProductList";
import { PRODUCTS } from "./products";

function App() {
	const [modalActivity, setModalActivity] = useState(false);
	const [addToCartHandler, cart] = useCart();

	return (
		<>
			<Header amountInCart={cart.totalAmount} />
			<Promo />
			<ProductList
				products={PRODUCTS}
				onAddToCart={addToCartHandler}
			/>
		</>
	);
}

export default App;

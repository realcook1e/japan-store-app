import { useState } from "react";
import { PRODUCTS } from "../products";

const useCart = () => {
	const [cart, setCart] = useState({ products: [], totalAmount: 0 });

	const addToCartHandler = (id, amount) => {
		setCart(prev => {
			const productsInCart = prev.products;
			const findProduct = productsInCart.find(product => product._id === id);
			if (findProduct) {
				return {
					products: productsInCart.map(product => {
						if (product._id === findProduct._id) {
							return { ...product, amount: product.amount + +amount };
						}
						return product;
					}),
					totalAmount: prev.totalAmount + +amount,
				};
			} else {
				const productToAdd = PRODUCTS.filter(product => product._id === id)[0];
				return {
					products: [...productsInCart, { ...productToAdd, amount: +amount }],
					totalAmount: prev.totalAmount + +amount,
				};
			}
		});
	};

	return [addToCartHandler, cart];
};

export default useCart;

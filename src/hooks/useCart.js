import { useState } from "react";
import { PRODUCTS } from "../products";

const useCart = () => {
	const [cart, setCart] = useState({ products: [], totalAmount: 0, totalPrice: 0 });

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
					totalPrice: prev.totalPrice + +amount * findProduct.price,
				};
			} else {
				const productToAdd = PRODUCTS.find(product => product._id === id);
				return {
					products: [...productsInCart, { ...productToAdd, amount: +amount }],
					totalAmount: prev.totalAmount + +amount,
					totalPrice: prev.totalPrice + +amount * productToAdd.price,
				};
			}
		});
	};

	const decreaseAmountHandler = id => {
		setCart(prev => {
			let updatedProducts = [];
			const productsInCart = prev.products;
			const findProduct = productsInCart.find(product => product._id === id);

			if (findProduct.amount === 1) {
				updatedProducts = productsInCart.filter(product => product._id !== id);
			} else {
				updatedProducts = productsInCart.map(product => {
					if (product._id === id) {
						return { ...product, amount: product.amount - 1 };
					} else {
						return product;
					}
				});
			}

			return {
				products: updatedProducts,
				totalAmount: prev.totalAmount - 1,
				totalPrice: prev.totalPrice - findProduct.price,
			};
		});
	};

	const increaseAmountHandler = id => {
		setCart(prev => {
			const productsInCart = prev.products;
			const findProduct = productsInCart.find(product => product._id === id);
			return {
				products: productsInCart.map(product => {
					if (product._id === id) {
						return { ...product, amount: product.amount + 1 };
					} else {
						return product;
					}
				}),
				totalAmount: prev.totalAmount + 1,
				totalPrice: prev.totalPrice + findProduct.price,
			};
		});
	};

	return [addToCartHandler, decreaseAmountHandler, increaseAmountHandler, cart];
};

export default useCart;

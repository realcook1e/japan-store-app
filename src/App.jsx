import { useEffect, useState } from "react";
import useCart from "./hooks/useCart";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import ProductList from "./components/ProductList/ProductList";
import Modal from "./components/Modal/Modal";
import CartList from "./components/CartList/CartList";
import { CartContext } from "./context/CartContext";
import { getDishes } from "./api/dishes-api";
import { useFetching } from "./hooks/useFetching";
import { addNewOrder } from "./api/orders-api";

function App() {
	const [modalActivity, setModalActivity] = useState(false);
	const [dishes, setDishes] = useState([]);
	const [fetchDishes, isDishesLoading, fetchDishesError] = useFetching(getAndStructureDishes);
	const [fetchOrder, isCreateOrderLoading, createOrderError] = useFetching(
		createOrder,
		createOrderErrorHandler
	);
	const [orderResponseText, setOrderResponseText] = useState("");
	const [orderStatus, setOrderStatus] = useState("unordered");
	const [addToCartHandler, decreaseAmountHandler, increaseAmountHandler, clearCart, cart] =
		useCart(dishes);

	async function createOrder() {
		if (cart.products.length > 0) {
			const order = {
				[Date.now()]: {
					dishes: cart.products.map(product => ({
						name: product.name,
						price: product.price,
						amount: product.amount,
					})),
					totalAmount: cart.totalAmount,
					totalPrice: cart.totalPrice,
				},
			};

			await addNewOrder(order);

			clearCart();
			setOrderResponseText("Заказ создан! Мы свяжемся с вами");
			setOrderStatus("ordered");
		}
	}

	function createOrderErrorHandler() {
		setOrderResponseText("Ошибка при создании заказа. Повторите позже");
		setOrderStatus("error");
	}

	async function getAndStructureDishes() {
		const fetchedData = await getDishes();
		console.log(fetchedData);
		const dishesArray = [];

		for (const key in fetchedData) {
			const dish = { _id: key, ...fetchedData[key] };
			dishesArray.push(dish);
		}

		setDishes(dishesArray);
	}

	useEffect(() => {
		fetchDishes();
	}, []);

	const closeModalHandler = () => {
		setModalActivity(false);
		setOrderResponseText("");
		setOrderStatus("unordered");
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
				clearCart: clearCart,
			}}
		>
			<Header onOpenModal={openModalHandler} />
			<Promo />
			<ProductList
				products={dishes}
				error={fetchDishesError}
			/>
			{modalActivity && (
				<Modal
					onCreateOrder={fetchOrder}
					onCloseModal={closeModalHandler}
					actionLabel={cart.products.length > 0 ? "Заказать" : ""}
				>
					<CartList
						orderResponse={orderResponseText}
						orderStatus={orderStatus}
					/>
				</Modal>
			)}
		</CartContext.Provider>
	);
}

export default App;

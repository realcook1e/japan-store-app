import axios from "axios";

export const addNewOrder = async data => {
	const response = await axios.post(
		"https://http-start-a56d8-default-rtdb.firebaseio.com/orders.json",
		JSON.stringify(data)
	);
	return response;
};

import axios from "axios";

export const getDishes = async () => {
	const response = await axios.get(
		"https://http-start-a56d8-default-rtdb.firebaseio.com/dishes.json"
	);
	const data = response.data;
	return data;
};

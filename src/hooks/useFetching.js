import { useState } from "react";

export const useFetching = (callback, errorHandler) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetching = async data => {
		setIsLoading(true);

		try {
			await callback(data);
		} catch (e) {
			setError(e.message);
			errorHandler();
		} finally {
			setIsLoading(false);
		}
	};

	return [fetching, isLoading, error];
};

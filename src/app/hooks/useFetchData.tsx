import { useState, useEffect } from "react";

type RequestStatus = "idle" | "loading" | "success" | "error";

interface Response<T> {
	data: T | null;
	status: RequestStatus;
	errorMessage?: string | null;
}

export const useFetchData = <T,>(url: string): Response<T> => {
	const [data, setData] = useState<T | null>(null);
	const [status, setStatus] = useState<RequestStatus>("idle");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setStatus("loading");

			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Something went wrong!");
				}

				const jsonData = await response.json();
				setData(jsonData);
				setStatus("success");
			} catch (error) {
				setStatus("error");
				setErrorMessage((error as Error).message);
			}
		};

		fetchData();
	}, [url]);

	return { data, status, errorMessage };
};

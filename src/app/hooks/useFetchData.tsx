import { useState, useEffect } from "react";

type TRequestStatus = "idle" | "loading" | "success" | "error";
type TResponse<T> = {
	data: T | null;
	status: TRequestStatus;
	errorMessage?: string | null;
};

export const useFetchData = <T,>(url: string): TResponse<T> => {
	const [data, setData] = useState<T | null>(null);
	const [status, setStatus] = useState<TRequestStatus>("idle");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setStatus("loading");
				fetch(url)
					.then((res) => res.json())
					.then((data) => {
						setData(data);
						setStatus("success");
					});
			} catch (error) {
				setStatus("error");
				setErrorMessage((error as Error).message);
			}
		};

		fetchData();
	}, []);

	return { data, status, errorMessage };
};

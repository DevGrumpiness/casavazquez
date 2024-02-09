import { useState, useEffect } from "react";
import { supabase } from "../../services/api-service";

type RequestStatus = "idle" | "loading" | "success" | "error";

interface Response<T> {
	data: T[] | null;
	status: RequestStatus;
	errorMessage?: string | null;
}

export const useFetchFromSupabase = <T>(tableName: string, sortBy?: string): Response<T> => {
	const [data, setData] = useState<Response<T>["data"]>(null);
	const [status, setStatus] = useState<RequestStatus>("idle");
	const [errorMessage, setErrorMessage] = useState<Response<T>["errorMessage"]>(null);

	useEffect(() => {
		const getTheData = async () => {
			setStatus("loading");
			try {
				const response = await supabase
					.from(tableName)
					.select("*")
					.order(sortBy ?? "subType", { ascending: true });

				if (response.error) {
					throw response.error;
				}
				setData(response.data);
				setStatus("success");
			} catch (error) {
				setErrorMessage((error as Error).message);
				setStatus("error");
			}
		};

		getTheData();
	}, [tableName, sortBy]);

	return { data, status, errorMessage };
};
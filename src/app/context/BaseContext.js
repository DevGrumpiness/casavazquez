import React, { createContext, useState } from "react";

export const BaseContext = createContext();

export const BaseProvider = ({ children }) => {
	const [baseState, setBaseState] = useState({});

	const updateBaseState = (newState) => {
		setBaseState((prev) => ({ ...prev, ...newState }));
	};

	return (
		<BaseContext.Provider value={{ baseState, updateBaseState }}>
			{children}
		</BaseContext.Provider>
	);
};

import React, { useState, useEffect } from "react";
import { TMenuItem } from "../../interfaces/menuItem";
import mockData from "../lib/mockdata.js";

export const DigitalMenu: React.FC = () => {
	const [menuItems, setMenuItems] = useState<TMenuItem[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMenuItems = async (): Promise<TMenuItem[]> => {
			// we will move this function to a custom hook later
			return new Promise((resolve) => {
				setTimeout(() => {
					return resolve(mockData as unknown as TMenuItem[]);
				}, 2000);
			});
		};

		// todo: Fetch menu items from hour mock data file for now
		fetchMenuItems()
			.then((items) => {
				console.log(items);
				setMenuItems(items);
			})
			.catch((err) => setError("Failed to load menu items"));
	}, []);

	return (
		<div className="digital-menu">
			<h1>Menu</h1>

			{error && <p className="error">{error}</p>}

			<div className="menu-items">
				{menuItems.length > 0 &&
					menuItems.map((item) => (
						<></>
						// map menu items to MenuItem components
					))}
			</div>
		</div>
	);
};

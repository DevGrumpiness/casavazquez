import React, { useState, useEffect } from "react";
import { MenuItem } from "../../interfaces/menuItem";

export const DigitalMenu: React.FC = () => {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMenuItems = async (): Promise<MenuItem[]> => {
			// we will move this function to a custom hook later
			// Replace with actual data fetching logic
			return Promise.resolve([
				/* Pseudo code placeholder for menu items */
			]);
		};

		// todo: Fetch menu items from hour mock data file for now
		fetchMenuItems()
			.then((items) => setMenuItems(items))
			.catch((err) => setError("Failed to load menu items"));
	}, []);

	return (
		<div className="digital-menu">
			<h1>Menu</h1>

			{error && <p className="error">{error}</p>}
			
			<div className="menu-items">
				{menuItems.map((item) => (
					// map menu items to MenuItem components
				))}
			</div>
		</div>
	);
};

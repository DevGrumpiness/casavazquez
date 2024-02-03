import React, { useState } from 'react';
import { TMenuItemDrink } from '../../../interfaces/menuItem';
import { setDrink, updateDrink } from '../../../services/api-service';

const AdminPage: React.FC = () => {
	const [drink, setDrinkState] = useState<TMenuItemDrink | null>(null);

	const handleCreateDrink = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (drink) {
			const result = await setDrink(drink);
			if (result) {
				// handle success
			} else {
				// handle error
			}
		}
	};

	const handleUpdateDrink = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (drink && drink.id) {
			const result = await updateDrink(drink.id.toString(), drink);
			if (result) {
				// handle success
			} else {
				// handle error
			}
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDrinkState((prevDrink) => ({
			...prevDrink,
			[name]: name === "price" ? parseFloat(value) : value,
		}));
	};

	return <div>{/* Forms */}</div>;
};

export default AdminPage;
import React, { useEffect, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { TMenuItemDrink } from "../../../interfaces/menuItem";
import { ListItem } from "../../components/ListItem";

const DrinkList: React.FC = () => {
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);
	const menuContext = React.useContext(MenuContext);

	if (!menuContext) {
		return <p>menuContext not found</p>;
	}

	const drinksData = menuContext.menuState.drinks;

	useEffect(() => {
		if (drinksData) {
			setDrinks([...drinksData]);
		}
	}, [drinksData]);

	return (
		<div className="DrinkList">
			<h1>Our Drinks</h1>
			<hr />
			<div className="menuItems">
				{drinks &&
					drinks.length > 0 &&
					drinks.map((drink: TMenuItemDrink) => {
						return <ListItem key={drink.id} listItem={drink} />;
					})}
			</div>
		</div>
	);
};

export default DrinkList;

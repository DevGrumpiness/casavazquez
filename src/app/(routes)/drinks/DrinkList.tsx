import "./DrinkList.scss";
import React, { useEffect, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { TMenuItemDrink } from "../../../interfaces/menuItem";
import { ListItem } from "../../components/ListItem";
import { getFallbackImageUrl } from "../../../services/list-item-service";
import { useFetchFromSupabase } from "../../hooks/useFetchFromSupabase";

const DrinkList: React.FC = () => {
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);
	const menuContext = React.useContext(MenuContext);
	const drinksResponse = useFetchFromSupabase<TMenuItemDrink>("drinks");

	console.log("drinksResponse", drinksResponse.data);

	if (!menuContext) {
		return <p>menuContext not found</p>;
	}

	const drinksData = menuContext.menuState.drinks;

	useEffect(() => {
		if (drinksResponse.data) {
			setDrinks(drinksResponse.data);
			console.log("drinks after", drinks);
		}
	}, [drinksResponse]);

	return (
		<div className="drinkList">
			<hr />
			<div className="menuItems">
				{drinks &&
					drinks.length > 0 &&
					drinks.map((drink: TMenuItemDrink) => {
						return (
							<ListItem
								key={drink.id}
								listItem={drink}
								imageName={
									drink.imageName ??
									getFallbackImageUrl("drink", drink.subtype)
								}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default DrinkList;

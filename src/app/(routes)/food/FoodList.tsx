import React, { useEffect, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { TMenuItemFood } from "../../../interfaces/menuItem";
import { ListItem } from "../../components/ListItem";

const FoodList: React.FC = () => {
	const [dishes, setDishes] = useState<TMenuItemFood[]>([]);
	const menuContext = React.useContext(MenuContext);

	if (!menuContext) {
		return <p>menuContext not found</p>;
	}

	const foddData = menuContext.menuState.food;

	useEffect(() => {
		if (foddData) {
			setDishes([...foddData]);
		}
	}, [foddData]);

	const fallbackImage = "/media/food_icon.png";

	return (
		<div className="foodList">
			<hr />
			<div className="menuItems">
				{dishes &&
					dishes.length > 0 &&
					dishes.map((dish: TMenuItemFood) => {
						return (
							<ListItem
								key={dish.id}
								listItem={dish}
								imageUrl={dish.imageUrl ?? fallbackImage}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default FoodList;

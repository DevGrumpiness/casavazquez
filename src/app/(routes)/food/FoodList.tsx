import React, { useEffect, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { TMenuItemFood } from "../../../interfaces/menuItem";
import { MenuItemFood } from "../../components/MenuItemFood";

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

	return (
		<div className="foodList">
			<h1>Our Dishes</h1>
			<hr />
			{dishes.length}hallo
			{dishes.length > 0 ? dishes.length : "No dishes"}
			<div className="menuItems">
				{dishes &&
					dishes.length > 0 &&
					dishes.map((dish: TMenuItemFood) => {
						return <MenuItemFood key={dish.id} dish={dish} />;
					})}
			</div>
		</div>
	);
};

export default FoodList;

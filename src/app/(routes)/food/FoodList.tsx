import React from "react";
import { MenuContext } from "../../context/MenuContext";
import { TMenuItemFood } from "../../../interfaces/menuItem";
import { MenuItemFood } from "../../components/MenuItemFood";

const FoodList: React.FC = () => {
	const menuContext = React.useContext(MenuContext);

	if (!menuContext) {
		return <p>menuContext not found</p>;
	}
	const { menuState } = menuContext;

	return (
		<div className="foodList">
			<h1>Our Dishes</h1>
			<hr />
			<div className="menuItems">
				{menuState.food && menuState.food.length > 0 ? (
					menuState.food.map((dish: TMenuItemFood) => {
						return <MenuItemFood key={dish.id} dish={dish} />;
					})
				) : (
					<span>loading...</span>
				)}
			</div>
		</div>
	);
};

export default FoodList;

import React from "react";
import { BaseContext } from "../../context/BaseContext";
import { TMenuItemFood } from "../../../interfaces/menuItem";
import { MenuItemFood } from "../../components/MenuItemFood";

const FoodList: React.FC = () => {
	const BaseState = React.useContext(BaseContext);

	if (!BaseState) {
		return;
	}
	const { food } = BaseState.baseState;

	return (
		<div className="foodList">
			<h1>Our Dishes</h1>
			<hr />
			<div className="menuItems">
				{food && food.length > 0 ? (
					food.map((dish: TMenuItemFood) => {
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

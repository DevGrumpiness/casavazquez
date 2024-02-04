import React, { useEffect, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { TMenuItemDrink, TMenuItemFood } from "../../../interfaces/menuItem";
import { ListItem } from "../../components/ListItem";
import { getImageByNameFromBucket } from "../../../services/api-service";
import FilterChips from "../../components/FilterChips";
import _ from "lodash";


const FoodList: React.FC = () => {
	const [dishes, setDishes] = useState<TMenuItemFood[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const menuContext = React.useContext(MenuContext);

	const filters = ["Fleisch", "Salat", "Vegetarisch", "Vegan", "Dessert", "Snack"];


	if (!menuContext) {
		return <p>menuContext not found</p>;
	}

	const foddData = menuContext.menuState.food;

	useEffect(() => {
		if (foddData) {
			setDishes([...foddData]);
		}
	}, [foddData]);

	const filteredDishes = _.filter(dishes, (dish: TMenuItemFood) =>
		selectedFilters.every((filter) =>
			dish.label
				?.toLowerCase()
				.split(",")
				.map((label) => label.trim())
				.includes(filter.toLowerCase())
		)
	)

	return (
		<div className="foodList">
			<FilterChips filters={filters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
			<div className="menuItems">
				{dishes &&
					dishes.length > 0 &&
					dishes.map((dish: TMenuItemFood) => {
						const imageUrl = getImageByNameFromBucket("images", dish.imageName);
						return <ListItem key={dish.id} listItem={dish} imageUrl={imageUrl} />;
					})}
			</div>
		</div>
	);
};

export default FoodList;

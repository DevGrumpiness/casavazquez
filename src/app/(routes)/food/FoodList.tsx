import React, { useEffect, useState } from "react";
import { TMenuItemFood } from "../../../interfaces/menuItem";
import { ListItem } from "../../components/ListItem";
import { getImageByNameFromBucket } from "../../../services/api-service";
import FilterChips from "../../components/FilterChips";
import _ from "lodash";
import { useFetchFromSupabase } from "../../hooks/useFetchFromSupabase";

const FoodList: React.FC = () => {
	const [dishes, setDishes] = useState<TMenuItemFood[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const foodResponse = useFetchFromSupabase<TMenuItemFood>("food");

	const filters = ["Fleisch", "Salat", "Vegetarisch", "Vegan", "Dessert", "Snack", "Kuchen", "Vorspeise", "Pasta"];

	useEffect(() => {
		if (foodResponse.data) {
			setDishes(foodResponse.data);
		}
	}, [foodResponse]);

	const filteredDishes = _.filter(dishes, (dish: TMenuItemFood) =>
		selectedFilters.every((filter) =>
			dish.label
				?.toLowerCase()
				.split(",")
				.map((label) => label.trim())
				.includes(filter.toLowerCase())
		)
	);

	const groupedDishes = _.groupBy(filteredDishes, "subType");

	return (
		<div className="foodList">
			<FilterChips filters={filters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
			<div className="menuItems">
				{Object.entries(groupedDishes).map(([subType, drinks]) => (
					<div key={subType}>
						<h2 className="subType">{subType}</h2>
						{drinks.map((drink: TMenuItemFood) => {
							const imageUrl = getImageByNameFromBucket("images", drink.imageName);
							return <ListItem key={drink.id} listItem={drink} imageUrl={imageUrl} />;
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default FoodList;

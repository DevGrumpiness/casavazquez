import "./DrinkList.scss";
import React, { useEffect, useState } from "react";
import { TMenuItemDrink } from "../../../interfaces/menuItem";
import { ListItem } from "../../components/ListItem";
import { useFetchFromSupabase } from "../../hooks/useFetchFromSupabase";
import { getImageByNameFromBucket } from "../../../services/api-service";
import FilterChips from "../../components/FilterChips";
import _ from "lodash";

const DrinkList: React.FC = () => {
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const drinksResponse = useFetchFromSupabase<TMenuItemDrink>("drinks");
	
	const filters = ["Alkohol", "to go", "alkoholfrei", "heiß", "Sommer", "Angebot", "Schnaps", "fass", "flasche"];

	useEffect(() => {
		if (drinksResponse.data) {
			setDrinks(drinksResponse.data);
		}
	}, [drinksResponse]);

	const filteredDrinks = _.filter(drinks, (drink: TMenuItemDrink) =>
		selectedFilters.every((filter) =>
			drink.label
				?.toLowerCase()
				.split(",")
				.map((label) => label.trim())
				.includes(filter.toLowerCase())
		)
	);

	const groupedDrinks = _.groupBy(filteredDrinks, 'subType');

	return (
		<div className="drinkList">
			<FilterChips filters={filters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
			<div className="menuItems">
				{Object.entries(groupedDrinks).map(([subType, drinks]) => (
					<div key={subType}>
						<h2 className="subType">{subType}</h2>
						{drinks.map((drink: TMenuItemDrink) => {
							const imageUrl = getImageByNameFromBucket("images", drink.imageName);
							return <ListItem key={drink.id} listItem={drink} imageUrl={imageUrl} />;
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default DrinkList;
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

interface MenuItemDetailsProps {
	item: TMenuItemFood | TMenuItemDrink;
}

const MenuItemDetail: React.FC<MenuItemDetailsProps> = ({ item }) => {
	if (!item) {
		<p>Item not found</p>;
	}

	return (
		<div>
			<h1>Menu Item Details for: </h1>
			<p>{item.name}</p>
		</div>
	);
};

export default MenuItemDetail;

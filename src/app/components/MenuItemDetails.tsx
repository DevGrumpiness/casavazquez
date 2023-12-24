import Link from "next/link";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

interface MenuItemDetailsProps {
	item: TMenuItemFood | TMenuItemDrink;
}

const MenuItemDetail: React.FC<MenuItemDetailsProps> = ({ item }) => {
	if (!item) {
		<p>Item not found</p>;
	}

	const goBack = () => {
		window.history.back();
	};

	return (
		<div>
			<h1>Menu Item Details for: </h1>
			<p>{item.name}</p>

			<button onClick={goBack}>Back to Menu</button>
		</div>
	);
};

export default MenuItemDetail;

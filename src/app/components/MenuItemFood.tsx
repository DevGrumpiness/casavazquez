import { TMenuItemFood } from "../../interfaces/menuItem";

interface MenuItemFoodProps {
	item: TMenuItemFood;
}

export const MenuItemFood: React.FC<MenuItemFoodProps> = ({ item }) => {
	if (!item) return;

	const imageUrl =
		item.imageUrl ??
		"https://placehold.jp/3d4070/ffffff/70x70.png?css=%7B%22border-radius%22%3A%2215px%22%7D";

	return (
		<div className="menuItem food">
			<img src={imageUrl} />
			<div className={`content ${!item.available && "disabled"}`}>
				<h3>{item.name}</h3>
				<span> {item.description} </span>
				<span> {item.label} </span>
			</div>
		</div>
	);
};

import { TMenuItemFood } from "../../interfaces/menuItem";

interface MenuItemFoodProps {
	dish: TMenuItemFood;
}

export const MenuItemFood: React.FC<MenuItemFoodProps> = ({ dish }) => {
	if (!dish) {
		return;
	}

	const imageUrl =
		dish.imageUrl ??
		"https://placehold.jp/3d4070/ffffff/70x70.png?css=%7B%22border-radius%22%3A%2215px%22%7D";

	return (
		<div className="menuItem food">
			<img src={imageUrl} />
			<div className={`content ${!dish.available && "disabled"}`}>
				<h3>{dish.name}</h3>
				<span> {dish.description} </span>
				<span> {dish.label} </span>
			</div>
		</div>
	);
};

import { TMenuItemDrink } from "../../interfaces/menuItem";

interface MenuItemDrinkProps {
	drink: TMenuItemDrink;
}

export const MenuItemDrink: React.FC<MenuItemDrinkProps> = ({ drink }) => {
	if (!drink) {
		return;
	}

	const imageUrl =
		drink.imageUrl ??
		"https://placehold.jp/3d4070/ffffff/70x70.png?css=%7B%22border-radius%22%3A%2215px%22%7D";

	return (
		<button className="menuItem drink">
			<img src={imageUrl} />
			<div className={`content ${!drink.available && "disabled"}`}>
				<h3>{drink.name}</h3>
				<span> {drink.description} </span>
				<span> {drink.label} </span>
			</div>
		</button>
	);
};

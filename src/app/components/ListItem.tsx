"usec client";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";
import { useRouter } from "next/navigation";

interface ListItemProps {
	listItem: TMenuItemDrink | TMenuItemFood;
}

export const ListItem: React.FC<ListItemProps> = ({ listItem }) => {
	if (!listItem) {
		return;
	}

	const router = useRouter();

	const imageUrl =
		listItem.imageUrl ??
		"https://placehold.jp/3d4070/ffffff/70x70.png?css=%7B%22border-radius%22%3A%2215px%22%7D";

	const handleListItemClick = () => {
		if (listItem.type === "food") {
			router.push(`/food/${listItem.id}`);
		} else {
			router.push(`/drinks/${listItem.id}`);
		}
	};

	return (
		<button className="menuItem" onClick={handleListItemClick}>
			<img src={imageUrl} />
			<div className={`content ${!listItem.available && "disabled"}`}>
				<h3>{listItem.name}</h3>
				<span> {listItem.description} </span>
				<span> {listItem.label} </span>
			</div>
		</button>
	);
};

export default ListItem;

"usec client";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface ListItemProps {
	listItem: TMenuItemDrink | TMenuItemFood;
}

export const ListItem: React.FC<ListItemProps> = ({ listItem }) => {
	if (!listItem) {
		return;
	}

	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const router = useRouter();
	const fallbackImage =
		listItem.type === "food"
			? "/media/food_icon.png"
			: "/media/drinks_icon.png";
	const imageUrl = listItem.imageUrl ?? fallbackImage;

	const handleHeaderClick = () => {
		console.log(isDetailsOpen);
		if (isDetailsOpen) {
			return;
		}

		setIsDetailsOpen(true);
	};

	const handleCloseIconClick = () => {
		setIsDetailsOpen(false);
	};

	return (
		<div id={String(listItem.id)} className="listItem">
			<div className="listItem-header" onClick={handleHeaderClick}>
				<div>
					<Image
						src={imageUrl}
						alt={listItem.name}
						width={70}
						height={70}
					/>
					<span
						className="price"
						style={{
							paddingLeft: listItem.price < 10 ? "4px" : "",
						}}
					>
						{listItem.price.toLocaleString("de-DE", {
							style: "decimal",
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</span>
				</div>
				<div className={`content ${!listItem.available && "disabled"}`}>
					<h3>{listItem.name}</h3>
					<span> {listItem.shortDescription} </span>
				</div>
			</div>
			<span> {listItem.label} </span>
			<div className={`listItem-details ${!isDetailsOpen && "hidden"}`}>
				{listItem.longDescription}
			</div>
			<div
				className={`close ${!isDetailsOpen && "hidden"}`}
				onClick={handleCloseIconClick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="16"
					width="16"
					viewBox="0 0 512 512"
				>
					<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
				</svg>
			</div>
			<div
				className={`expand ${isDetailsOpen && "hidden"}`}
				onClick={handleHeaderClick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="16"
					width="16"
					viewBox="0 0 512 512"
				>
					<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
				</svg>
			</div>
		</div>
	);
};

export default ListItem;

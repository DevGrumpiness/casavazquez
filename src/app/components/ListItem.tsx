"usec client";
import "./ListItem.scss";
import React, { useState, useContext } from "react";

import { CartContext } from "../context/CartContext";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";
import Image from "next/image";
import ListItemLabels from "./ListItemLabels";

interface ListItemProps {
	listItem: TMenuItemDrink | TMenuItemFood;
	imageUrl: string | null;
}

export const ListItem: React.FC<ListItemProps> = ({ listItem, imageUrl }) => {
	if (!listItem) {
		return;
	}

	const { addToCart, removeFromCart } = useContext(CartContext);

	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const handleHeaderClick = () => {
		if (isDetailsOpen) {
			return;
		}
		setIsDetailsOpen(true);
	};

	const handleCloseIconClick = () => {
		setIsDetailsOpen(false);
	};

	const renderLabels = (labelString: string) => {
		return <ListItemLabels labelString={labelString} />;
	};

	const renderPrices = () => {
		return (
			<div className="listItem-header-prices">
				{listItem.prices.map((price, index) => {
					const divider = listItem.variants ? (listItem.variants[index].length > 4 ? ".." : "...") : "";
					return (
						<React.Fragment key={price}>
							<div className="price" style={{ paddingLeft: price < 10 ? "4px" : "" }}>
								<span>
									{listItem.variants && listItem.variants.length > 0
										? `${listItem.variants[index]}${divider}`
										: ""}
								</span>
								<span>
									{price.toLocaleString("de-DE", {
										style: "decimal",
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</span>
							</div>
						</React.Fragment>
					);
				})}
			</div>
		);
	};

	return (
		<div id={String(listItem.id)} className={`listItem ${isDetailsOpen ? "expanded" : ""}`}>
			<div className="listItem-header-container" onClick={handleHeaderClick}>
				<Image src={imageUrl ?? ""} alt={listItem.name} width={70} height={70} />
				<div className={`listItem-header-content ${!listItem.available ? "disabled" : ""}`}>
					<div className="listItem-header-name">
						<h3>
							{listItem.name} <span className="allergens">{listItem.allergenIndexes?.join(", ")}</span>
						</h3>
					</div>
					<span className="shortDescription">
						{listItem.shortDescription}
						<div className={`${!isDetailsOpen && "hidden"}`}>{renderPrices()}</div>
						<div className={`expand ${isDetailsOpen ? "hidden" : ""}`} onClick={handleHeaderClick}>
							<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512">
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>
						</div>{" "}
					</span>
					<div className={`listItem-details ${!isDetailsOpen ? "hidden" : ""}`}>
						<hr />
						<div className={`labels-container ${!isDetailsOpen ? "hidden" : ""}`}>
							{listItem.label && renderLabels(listItem.label)}
						</div>
					</div>
				</div>
				<div className={`${isDetailsOpen && "hidden"}`}>{renderPrices()}</div>
			</div>
			<div className={`${!isDetailsOpen && "hidden"}`}>{listItem.longDescription}</div>
			<div className={`close listItem-footer ${!isDetailsOpen ? "hidden" : ""}`} >
				<div className="cart_button remove">
					<span onClick={() => removeFromCart(listItem)} className="addToCart" aria-label="Aus dem Warenkorb entfernen">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
							<path d="M0 0h24v24H0z" fill="none"/>
							<path d="M5 11h14v2H5z"/>
						</svg>
					</span></div>
				{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
				<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 384 512" onClick={handleCloseIconClick}>
					<path fill-opacity="0.5" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
				</svg>
				<div className="cart_button add">
					<span onClick={() => addToCart(listItem)} className="addToCart" aria-label="Zum Warenkorb hinzufügen">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24">
							<path d="M0 0h24v24H0z" fill="none"/>
							<path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
						</svg>
					</span>
					
				</div>
			</div>
		</div>
	);
};

export default ListItem;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

interface RemoveButtonProps {
	item: TMenuItemDrink | TMenuItemFood;
	variant: string | null;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ item, variant }) => {
	const { removeFromCart } = useContext(CartContext);

	return (
		<div className="cart_button remove" style={{ textAlign: "center" }}>
			<span
				onClick={() => removeFromCart(item, variant)}
				className="addToCart"
				aria-label="Aus dem Warenkorb entfernen"
			>
				{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M5 11h14v2H5z" />
				</svg>
			</span>
		</div>
	);
};

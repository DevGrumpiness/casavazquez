import "./Cart.scss";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AddButton } from "./AddButton";
import { RemoveButton } from "./RemoveButton";

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContext);

	const variantTotals = cart.map((item) => item.price * item.quantity);

	const cartTotal = variantTotals.reduce((total, variantTotal) => total + variantTotal, 0);

	const renderQuantity = (quantity: number, variant: string | null) => {
		if (variant === "0,5l" || variant === "0.5l") {
			return "X".repeat(quantity);
		} else {
			return "|".repeat(quantity);
		}
	};

	return (
		<>
			<div className="cart_header" id="cart">
				<h3>Dein Bierdeckel</h3>
				<div className="legal_hint">(!! Gilt nicht als Rechnung oder Verzehr-Nachweis. Ohne Gewähr!)</div>
			</div>
			<div className="cart">
				<div></div>
				{cart.map((item, index) => (
					<div key={index}>
						<p>{`${item.name} (${item.variant} - ${item.price} €)`}</p>
						<div className="count">
							{renderQuantity(item.quantity, item.variant)}
							<span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price * item.quantity)}</span>
						</div>
						<div className="modify_container">
						<RemoveButton item={item} variant={item.variant} />
						<AddButton item={item} variant={item.variant} price={item.price} />
						</div>
					</div>
				))}
				<h3>
					________________
					<br />
					Zeche: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cartTotal)}
				</h3>
			</div>
		</>
	);
};

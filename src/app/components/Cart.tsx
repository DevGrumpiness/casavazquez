import "./Cart.scss";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AddButton } from "./AddButton";
import { RemoveButton } from "./RemoveButton";

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContext);
	const [tipSum, setTipSum] = useState(0);

	const variantTotals = cart.map((item) => item.price * item.quantity);

	const cartTotal = variantTotals.reduce((total, variantTotal) => total + variantTotal, 0);

	const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const tip = (cartTotal / 100) * parseFloat(value);
		setTipSum(tip);
	};

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
							<span>
								{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
									item.price * item.quantity
								)}
							</span>
						</div>
						<div className="modification_container">
							<RemoveButton item={item} variant={item.variant} />
							<AddButton item={item} variant={item.variant} price={item.price} />
						</div>
					</div>
				))}
				<div className="tipSuggestions">
					<span>
						Tip:&nbsp;
						<input className="tipp_input" onChange={handleTipChange} type="number" placeholder="10" />%
					</span>
					<div className="tipCalculation">{tipSum.toFixed(2)}</div>
				</div>
				<h3>
					________________
					<br />
					Zeche: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cartTotal)}
				</h3>
			</div>
		</>
	);
};
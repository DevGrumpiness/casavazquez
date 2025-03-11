import "./Cart.scss";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AddButton } from "./AddButton";
import { RemoveButton } from "./RemoveButton";

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContext);
	const [tipSum, setTipSum] = useState(0);
	const [tipInput, setTipInput] = useState("");

	const variantTotals = cart.map((item) => item.price * item.quantity);
	const cartTotal = variantTotals.reduce((total, variantTotal) => total + variantTotal, 0);
	const tipSuggestions = [5, 7, 10, 15];

	const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setTipInput(value);
		if (!isNaN(parseFloat(value)) && isFinite(parseFloat(value))) {
			const tip = (cartTotal / 100) * parseFloat(value);
			setTipSum(tip);
		} else {
			setTipSum(0);
		}
	};

	const handleTipSuggestionClick = (tip: number) => {
		setTipInput(tip.toString());
		const calculatedTip = (cartTotal / 100) * tip;
		setTipSum(calculatedTip);
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
				<div className="tippContainer">
					<div className="tipSuggestions">
						<span>
							Tip:<br />
							<input
								className="tip_input"
								onChange={handleTipChange}
								value={tipInput}
								type="number"
								placeholder="0"
							/>
							%
						</span>
						<div className="tipCalculation">{tipSum.toFixed(2)}</div>
					</div>
					<div className="tipSuggestionsContainer">
						{tipSuggestions.map((tip, index) => (
							<button key={index} onClick={() => handleTipSuggestionClick(tip)}>
								{tip}%
							</button>
						))}
					</div>
				</div>
				<h3>
					________________
					<br />
					Zeche: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cartTotal + tipSum)}
				</h3>
			</div>
		</>
	);
};

"use client";

import "./Footer.scss";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../context/CartContext";

export default function Footer() {
	const imageSize = 28;
	const { cart } = React.useContext(CartContext);

	const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
	const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

	useEffect(() => {
		console.log("Cart changed:", totalQuantity);
	}, [cart]);

	const handleCartClick = () => {
		const element = document.getElementById("cart");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer>
			<div className="footer-element"></div>
			<div className="menu-navigation footer-element">
				<div className="nav-link-contaienr">
					<Link className="nav-link" href="/food">
						<Image src="/media/food_icon.png" alt="food" width={imageSize} height={imageSize} />
						Hungrig
					</Link>
					<Link className="nav-link" href="/drinks">
						<Image src="/media/drinks_icon.png" alt="food" width={imageSize} height={imageSize} />
						Durstig
					</Link>
				</div>
			</div>
			<div className="footer-element beer-mat-container" onClick={handleCartClick}>
				{cartTotal > 0 && (
					<div className="beer-mat">
						<span>
							{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cartTotal)}
						</span>
					</div>
				)}
			</div>
		</footer>
	);
}

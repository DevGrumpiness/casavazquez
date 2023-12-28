import "./Footer.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer>
			<div className="nav-link-contaienr">
				<Link className="nav-link" href="/food">
					<Image
						src="/media/food_icon.png"
						alt="food"
						width={50}
						height={50}
					/>
				</Link>
				<Link className="nav-link" href="/drinks">
					<Image
						src="/media/drinks_icon.png"
						alt="food"
						width={50}
						height={50}
					/>
				</Link>
			</div>
		</footer>
	);
}

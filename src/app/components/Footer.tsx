import "./Footer.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

	const imageSize = 35;

	return (
		<footer>
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
		</footer>
	);
}

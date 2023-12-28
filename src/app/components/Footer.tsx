import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div className="nav-link-contaienr">
				<Link className="nav-link" href="/food">
					Hungry
				</Link>
				<Link className="nav-link" href="/drinks">
					Thirsty
				</Link>
			</div>
		</footer>
	);
}

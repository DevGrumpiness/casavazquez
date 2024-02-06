"use client";

import "./Header.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
	const pathname = usePathname();

	let headerText;
	if (pathname.includes("food")) {
		headerText = "Food";
	} else if (pathname.includes("drinks")) {
		headerText = "Drinks";
	} else {
		headerText = "Tom&Polly";
	}

	return (
		<header>
			<Link href="/">
				<Image
					src="/media/logo.png"
					alt="logo"
					width={40}
					height={40}
					className="mainLogo"
				/>
			</Link>
			<h1>{headerText}</h1>
		</header>
	);
};

export default Header;

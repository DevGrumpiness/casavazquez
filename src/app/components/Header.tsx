import "./Header.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
	return (
		<header>
			<Link href="/">
				<Image
					src="/media/logo.png"
					alt="logo"
					width={40}
					height={40}
				/>
			</Link>
		</header>
	);
};

export default Header;

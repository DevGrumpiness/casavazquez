import "./NewsMessage.scss";
import Image from "next/image";
import { INewsMessage } from "../../interfaces/news";
import { getImageByNameFromBucket } from "../../services/api-service";
import { useEffect, useState } from "react";

export default function NewsMessage(props: INewsMessage) {
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [read, setRead] = useState<boolean>(false);

	useEffect(() => {
		const readIds = JSON.parse(sessionStorage.getItem("readIds") || "[]");
		if (readIds.includes(props.id)) {
			setRead(true);
		}
	}, []);

	useEffect(() => {
		if (props.pictureName) {
			const pictureUrl = getImageByNameFromBucket("images", props.pictureName);
			setImageUrl(pictureUrl);
		}
	}, [props.pictureName]);

	const setReadTrue = () => {
		setRead(true);
		const readIds = JSON.parse(sessionStorage.getItem("readIds") || "[]");
		sessionStorage.setItem("readIds", JSON.stringify([...readIds, props.id]));
	};

	return read ? null : (
		<div className="newsMessage">
			<h3>{props.name}</h3>
			<span className="closeX" onClick={setReadTrue}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					{/*<!- -Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
					<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
			
			</span>
			<div className="container">
				{imageUrl && <Image src={imageUrl} alt={props.name} width={150} height={150} />}
				<p>{props.content}</p>
			</div>
		</div>
	);
}


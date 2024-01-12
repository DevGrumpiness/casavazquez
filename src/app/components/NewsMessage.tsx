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
				X
			</span>
			<div className="container">
				{imageUrl && <Image src={imageUrl} alt={props.name} width={150} height={150} />}
				<p>{props.content}</p>
			</div>
		</div>
	);
}

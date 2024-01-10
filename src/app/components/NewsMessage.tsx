import "./newsMessage.scss";
import Image from "next/image";
import { INewsMessage } from "../../interfaces/news";
import { useFetchFromSupabase } from "../hooks/useFetchFromSupabase";
import { getImageByNameFromBucket } from "../../services/api-service";
import { useEffect, useState } from "react";

export default function NewsMessage(props: INewsMessage) {
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [read, setRead] = useState<boolean>(false);

	useEffect(() => {
		const readIds = JSON.parse(localStorage.getItem("readIds") || "[]");
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
		const readIds = JSON.parse(localStorage.getItem("readIds") || "[]");
		localStorage.setItem("readIds", JSON.stringify([...readIds, props.id]));
	};

	return read ? null : (
		<div className="newsMessage">
			{imageUrl && <Image src={imageUrl} alt={props.name} width={200} height={200} />}
			<div>
				<h3>{props.name}</h3>
				<p>{props.content}</p>
			</div>
			<span className="closeX" onClick={setReadTrue}>
				X
			</span>
		</div>
	);
}

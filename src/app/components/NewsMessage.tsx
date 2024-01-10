import "./newsMessage.scss";
import Image from "next/image";
import { INewsMessage } from "../../interfaces/news";
import { useFetchFromSupabase } from "../hooks/useFetchFromSupabase";
import { getImageByNameFromBucket } from "../../services/api-service";
import { useEffect, useState } from "react";

export default function NewsMessage(props: INewsMessage) {
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	useEffect(() => {
		if (props.pictureName) {
			const pictureUrl = getImageByNameFromBucket("images", props.pictureName);
			setImageUrl(pictureUrl);
		}
	}, [props.pictureName]);

	return (
		<div className="newsMessage">
			{imageUrl && <Image src={imageUrl} alt={props.name} width={200} height={200} />}
			<div>
				<h3>{props.name}</h3>
				<p>{props.content}</p>
			</div>
		</div>
	);
}

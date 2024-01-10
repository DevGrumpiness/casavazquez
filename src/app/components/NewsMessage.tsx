import { NewsMessage } from "../../interfaces/news";

export default function NewsMessage(props: NewsMessage) {
	return (
		<div>
			<h1>{props.headline}</h1>
			<p>{props.text}</p>
			{props.picture && <img src={props.picture} />}
		</div>
	);
}

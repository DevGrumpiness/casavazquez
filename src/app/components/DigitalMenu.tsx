import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useFetchFromSupabase } from "../hooks/useFetchFromSupabase";
import "./DigitalMenu.scss";
import { NewsMessage } from "../../interfaces/news";

export const DigitalMenu: React.FC = () => {
	const [news, setNews] = useState<NewsMessage[]>([]);

	const newsResponse = useFetchFromSupabase<NewsMessage>("news");

	useEffect(() => {
		if (newsResponse.data) {
			setNews(newsResponse.data);
		}
	}, [newsResponse]);

	console.log("news", news);

	return (
		<div className="digitalMenu">
			<div className="menu-link-container">
				<Link className="menu-link" href="/food">
					Hungry
				</Link>
				<Link className="menu-link" href="/drinks">
					Thirsty
				</Link>
			</div>
		</div>
	);
};

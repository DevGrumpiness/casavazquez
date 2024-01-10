import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useFetchFromSupabase } from "../hooks/useFetchFromSupabase";
import "./DigitalMenu.scss";
import { INewsMessage } from "../../interfaces/news";
import NewsMessage from "./NewsMessage";

export const DigitalMenu: React.FC = () => {
	const [news, setNews] = useState<INewsMessage[]>([]);

	const newsResponse = useFetchFromSupabase<INewsMessage>("news");

	const renderNews = () => {
		return news.map((newsItem: INewsMessage) => {
			return <NewsMessage key={newsItem.id} {...newsItem} />;
		});
	};

	useEffect(() => {
		if (newsResponse.data) {
			setNews(newsResponse.data);
		}
	}, [newsResponse]);

	console.log("news", news);

	return (
		<div className="digitalMenu">
			{news.length > 0 ? renderNews() : null}
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

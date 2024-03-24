import React, { useEffect, useState } from "react";
import { useFetchFromSupabase } from "../hooks/useFetchFromSupabase";
import "./DigitalMenu.scss";
import { INewsMessage } from "../../interfaces/news";
import NewsMessage from "./NewsMessage";

export const DigitalMenu: React.FC = () => {
	const [news, setNews] = useState<INewsMessage[]>([]);

	const newsResponse = useFetchFromSupabase<INewsMessage>("news", "created_at");

	const renderNews = () => {
		const currentDate = new Date();
		return news
			.filter((newsItem) => !newsItem.expiration_day || newsItem.expiration_day >= currentDate)
			.map((newsItem: INewsMessage) => {
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
		<>
			<div className="digitalMenu">
				<div>
					<h3>Aktuelles:</h3>
					<div className="mobileOptimizedHint">⚠️ Fürs Handy optimiert ⚠️</div>
					{news.length > 0 ? renderNews() : null}
				</div>
				<br />
				<div className="hours-container">
					<hr></hr>
					<h3>Aktuelle Öffnungszeiten</h3>
					<div className="hours">
						<p>
							<span>Mo-Do</span>
							<span>15:00-01:00</span>
						</p>
						<p>
							<span>Fr</span>
							<span>15:00-02:00</span>
						</p>
						<p>
							<span>Sa</span>
							<span>12:00-02:00</span>
						</p>
						<p>
							<span>So</span>
							<span>15:00-00:00</span>
						</p>
						<h3>Küche</h3>
						<p>
							<span>Mo-Fr</span>
							<span>18:00-22:00</span>
						</p>
						<p>
							<span>Sa</span>
							<span>12:00-14:00</span>
							<span>15:00-22:00</span>
						</p>
						<p>
							<span>So</span>
							<span>16:00-21:00</span>
						</p>
					</div>
				</div>
			</div>
			<footer>
				ℹ️ Hinweise:
				<p>	
					Dies ist eine private Website.
					Bei Abweichungen gelten immer die Angaben auf der offiziellen Karte/Website. <br />
					Die offizielle Karte findet sich unter http://www.tomundpolly.de/speisekarte.pdf 
				</p>
			</footer>
		</>
	);
};

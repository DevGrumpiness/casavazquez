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
				<div className="legals-container">
					<div className="legals-generall">
						<p><b>⚠️Hinweis⚠️</b></p>
						<p>
							Alle Angaben sind freiwillig und ohne Gewähr. <br />
							Dies ist eine private Website. Sie wird hobbymäßig entwickelt. <br />
							Bei Abweichungen gelten immer die Angaben auf der offiziellen Karte/Website. <br />
							Die offizielle Karte findet sich unter{" "}
							<a href="http://www.tomundpolly.de/speisekarte.pdf" target="_blank">
								www.tomundpolly.de/speisekarte.pdf
							</a>
							.
							<br />
							<br />
						</p>
					</div>
					<div className="legals-haftungsausschluss">
							<p><b>Haftungsausschluss</b>:</p>
						<p>
							Die Informationen auf dieser Website dienen nur zu Informationszwecken und stellen keine
							rechtliche, finanzielle oder professionelle Beratung dar. Obwohl wir uns bemühen, genaue und
							aktuelle Informationen bereitzustellen, können wir nicht garantieren, dass alle
							Informationen korrekt und vollständig sind. Die Nutzung der Informationen auf dieser Website
							erfolgt auf eigenes Risiko.
						</p>
						<p>
							{" "}
							Wir übernehmen keine Haftung für Schäden oder Verluste, die durch die Nutzung der auf dieser
							Website bereitgestellten Informationen oder durch Handlungen, die aufgrund dieser
							Informationen unternommen werden, entstehen.{" "}
						</p>
						<p>
							Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir
							keinen Einfluss haben. Für die Inhalte externer Websites übernehmen wir keine Verantwortung
							oder Haftung. Die Nutzung externer Links erfolgt auf eigenes Risiko. Bitte konsultieren Sie
							einen qualifizierten Fachmann oder Anwalt für spezifische rechtliche, finanzielle oder
							berufliche Beratung.
						</p>
					</div>
					<div className="legals-assets">
							<p><b>Bilder</b>:</p>
						<p>Auf dieser Website werden freie Bilder von der Plattfor pixabay verwendet.</p>
						Credits für verwendete Bilder (Links zu den pixaby Seiten der Bildrechtehaber):
						<br />
						<br />
						<a href="https://pixabay.com/de/users/quadronet_webdesign-1555018/">quadronet_webdesign</a>
						<br />
						<a href="https://pixabay.com/de/users/mim326-1771256/">mim326</a>
						<br />
						<a href="https://pixabay.com/de/users/openclipart-vectors-30363/">openclipart-vectors</a>
						<br />
						<a href="https://pixabay.com/de/users/alles-2597842/">alles</a>
						<br />
						<a href="https://pixabay.com/de/users/clker-free-vector-images-3736/">
							clker-free-vector-images
						</a>
						<br />
						<a href="https://pixabay.com/de/users/roly96-17414152/">roly96</a>
						<br />
						<a href="https://pixabay.com/de/users/billithecat-7996303/">billithecat</a>
						<br />
						<a href="https://pixabay.com/de/users/deeznutz1-3086161/">deeznutz1</a>
						<br />
						<a href="https://pixabay.com/de/users/distelapparath-2726923/">distelapparath</a>
						<br />
						<a href="https://pixabay.com/de/users/furbymama-5146222/">furbymama</a>
						<br />
						<a href="https://pixabay.com/de/users/satheeshsankaran-11196627/">satheeshsankaran</a>
						<br />
						<a href="https://pixabay.com/de/users/gerippefu-3153001/">gerippefu</a>
						<br />
						<a href="https://pixabay.com/de/users/midicomp-2657342/">midicomp</a>
						<br />
						<a href="https://pixabay.com/de/users/openclipart-vectors-30363/">openclipart-vectors</a>
						<br />
						<a href="https://pixabay.com/de/users/ri_ya-12911237/">ri_ya</a>
						<br />
						<a href="https://pixabay.com/de/users/wbe1951-472794/">wbe1951</a>
						<br />
						<a href="https://pixabay.com/de/users/vika_glitter-6314823/">vika_glitter</a>
						<br />
						<a href="https://pixabay.com/de/users/intelligentvisualdesing-33770741/">
							intelligentvisualdesing
						</a>
						<br />
						<a href="https://pixabay.com/de/users/thedigitalartist-202249/">thedigitalartist</a>
						<br />
						<a href="https://pixabay.com/de/users/openclipart-vectors-30363/">openclipart-vectors</a>
						<br />
						<a href="https://pixabay.com/de/users/designdrawartes-8580564/">designdrawartes</a>
						<br />
						<a href="https://pixabay.com/de/users/elisariva-1348268/">elisariva</a>
						<br />
						<br />
					</div>
					<div className="legals-impressum">
						<b>Impressum:</b>
						<p>José Guerrero Vazquez</p>
						<p>jbmj@outlook.de</p>
					</div>

				</div>
			</div>
		</>
	);
};

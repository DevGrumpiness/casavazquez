<template>
  <section class="tasting-page">
    <header class="tasting-page-header">
      <h1 class="tasting-title">Weintasting im Casa Vazquez</h1>
      <p class="tasting-sub">
        Hier findest du unsere aktuelle Auswahl und darunter das vergangene Tasting. Folge uns auf
        <a href="https://www.instagram.com/casa_vazquez_muenster/" target="_blank" rel="noopener noreferrer"><u>Instagram</u></a>,
        um neue Termine und finale Line-ups zuerst zu sehen.
      </p>
      <p class="tasting-sub">Preise auf Anfrage.</p>
    </header>

    <section v-for="event in tastingEvents" :key="event.id" class="tasting-block">
      <header class="tasting-header">
        <h2 class="tasting-section-title">{{ event.title }}</h2>
        <p class="tasting-sub">{{ event.subtitle }}</p>
        <p v-if="event.note" class="tasting-sub">{{ event.note }}</p>
      </header>

      <div
        class="tasting-map"
        :ref="(el) => setMapEl(event.id, el)"
        role="img"
        :aria-label="event.mapAriaLabel"
        style="height: clamp(260px, 38vh, 420px); min-height: 260px;"
      ></div>
      <div class="tasting-map-legend">
        <div class="legend-title">Kartenlegende</div>
        <ul>
          <li v-for="(point, index) in event.mapPoints" :key="point.name">
            <button class="legend-item" @click="flyToPoint(event.id, index)">
              <span class="legend-pin">{{ index + 1 }}</span>
              <span class="legend-text">
                <strong>{{ point.name }}</strong>
                <small>{{ point.loc }}</small>
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div class="tasting-sections">
        <section v-for="wine in event.wines" :key="wine.name" class="tasting-section">
          <div class="tasting-content" :class="{ 'tasting-content--text-only': !wine.image }">
            <div class="tasting-text">
              <h3 class="wine-name">{{ wine.name }}</h3>
              <p class="wine-story">{{ wine.story }}</p>
              <p v-if="wine.note" class="wine-note">{{ wine.note }}</p>
            </div>
            <div v-if="wine.image" class="tasting-image">
              <img :src="wine.image" :alt="wine.name" loading="lazy" referrerpolicy="no-referrer" @error="hideOnError($event)" />
            </div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, type ComponentPublicInstance } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2xUrl from 'leaflet/dist/images/marker-icon-2x.png?url';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png?url';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png?url';

type TastingWine = { name: string; story: string; image?: string; note?: string };
type MapPoint = { name: string; loc: string; lat: number; lng: number };
type TastingEvent = {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  mapAriaLabel: string;
  wines: TastingWine[];
  mapPoints: MapPoint[];
};

function hideOnError(e: Event) {
  const el = e.target as HTMLImageElement;
  if (!el) return;

  el.style.display = 'none';
  const imageWrap = el.closest('.tasting-image') as HTMLElement | null;
  const contentWrap = el.closest('.tasting-content') as HTMLElement | null;

  if (imageWrap) imageWrap.style.display = 'none';
  if (contentWrap) contentWrap.classList.add('tasting-content--text-only');
}

const imgVette = new URL('../assets/images/tinified (6)/vette.jpg', import.meta.url).href;
const imgJosePariente = new URL('../assets/images/tinified (6)/josepariente.jpg', import.meta.url).href;
const imgElenaWalch = new URL('../assets/images/tinified (6)/elenawalch.jpg', import.meta.url).href;
const imgTerlan = new URL('../assets/images/tinified (6)/terlan.jpg', import.meta.url).href;
const imgPompaelo = new URL('../assets/images/tinified (6)/pompaelo.jpg', import.meta.url).href;
const imgNounat = new URL('../assets/images/tinified (6)/nounat.jpg', import.meta.url).href;

const imgPapaLuna = 'https://cdn-ileclej.nitrocdn.com/oyfuJgRDxaZyNxSwUlfLtmyRyGDFcclm/assets/images/optimized/rev-ebed619/kd-winestories.de/wp-content/uploads/2025/08/Papa-Luna-Cava-Bio-EL-ESCOCES-VOLANTE.png';
const imgMaruxa = 'https://www.silkes-weinkeller.de/out/pictures/generated/product/1/280_340_90/virgen-del-galir-maruxa-godello(3).jpg.webp';
const imgLaTraca = 'https://riskygrapes.com/wp-content/uploads/2020/01/la-traca-blanco_1000.png';
const imgNinoDeLasUvas = 'https://tiendabodegasdelrosario.es/wp-content/uploads/2023/10/NINO-BLANCO-2022.jpg';
const imgCuveeDesFleurs = 'https://pfaelzer-wein.de/thumbnail/14/a1/96/1706699916/018d5f32438c73e8a38d8c027f716589_1280x1280.png';
const imgPetitVerdot = 'https://media.vinos.de/pdmainvinos_retina_webp/vinos_41249_mainimagevads_1.webp';

const currentWines: TastingWine[] = [
  {
    name: 'Papa Luna Cava Brut Bio / El Escocés Volante',
    story:
      'Bio-Cava aus Requena in Valencia: Macabeo und Chardonnay werden klassisch in der Flasche vergoren und reifen 13 Monate auf der Hefe. Feine Perlage, weiße Frucht, Zitrus, florale Anklänge und etwas Brioche machen ihn zum frischen Auftakt des Tastings.',
    image: imgPapaLuna,
    note: 'D.O. Cava aus Requena, Valencia.',
  },
  {
    name: 'Riesling Brut Sekt / Tobias Schmidt',
    story:
      'Riesling-Sekt aus dem Obermoscheler Paradiesgarten an der Nahe, klassisch in Flaschengärung ausgebaut. Die brut-herbe Art bringt kühle Zitrusfrische, grünen Apfel und einen geradlinigen, feinen Zug ins Glas; die präzise Perlage macht ihn zum idealen Auftakt für das neue Tasting.',
    note: 'Sekt b.A. aus Obermoschel an der Nahe.',
  },
  {
    name: 'Virgen del Galir Maruxa Godello 2024',
    story:
      'Godello aus der D.O. Valdeorras in Galicien. Die Trauben stammen aus mehreren Lagen bei Entoma, der Wein reift drei Monate auf der Hefe im Edelstahltank und zeigt weißen Pfirsich, reife Birne, Kräuter und eine klare mineralische Note mit griffigem, frischem Finish.',
    image: imgMaruxa,
  },
  {
    name: 'La Traca Blanco / Risky Grapes',
    story:
      'Bio-Wein aus den Höhenlagen bei Requena in der D.O. Valencia: Merseguera und Viognier werden hier von aromatischen Anteilen wie Malvasía begleitet. Aprikose, Ananas und florale Noten treffen auf kalkige Klarheit, feine Hefe und einen saftigen, mediterranen Zug.',
    image: imgLaTraca,
  },
  {
    name: 'Niño de las Uvas / Bodegas del Rosario',
    story:
      'Macabeo und Malvasía aus Bullas in Murcia: blassgelb mit goldenen Reflexen, cremigen Nuancen und feinen rauchigen Anklängen. Weiße Frucht, florale Töne und eine dichte, saftige Textur machen den Wein zugänglich, ohne ihn beliebig wirken zu lassen.',
    image: imgNinoDeLasUvas,
  },
  {
    name: 'Cuvée des Fleurs / Löwenthal',
    story:
      'Eine feinherbe Pfälzer Cuvée aus Morio-Muskat, Scheurebe und Gelbem Muskateller. In der Nase gelbe, reife Früchte und etwas Muskat, am Gaumen ein schöner Spannungsbogen aus Frucht, Frische und sanfter Restsüße mit langem Abgang.',
    image: imgCuveeDesFleurs,
  },
  {
    name: 'Rosé',
    story:
      'Der Rosé für diese Runde ist noch nicht final bestätigt. Sobald die Auswahl steht, ergänzen wir hier Stilistik, Herkunft und die Position auf der Karte.',
    note: 'Folgt in Kürze.',
  },
  {
    name: 'Petit Verdot / Juan Gil',
    story:
      '100 % Petit Verdot aus Jumilla, fünf Monate in französischer und amerikanischer Eiche gereift. Dunkle Kirsche, Blaubeere, Holunder und mediterrane Kräuter treffen auf süße Gewürze, gute Säure und ein langes, kraftvolles Finale.',
    image: imgPetitVerdot,
  },
];

const currentMapPoints: MapPoint[] = [
  { name: 'Papa Luna Cava Brut Bio / El Escocés Volante', loc: 'Requena, Valencia, Spanien', lat: 39.492, lng: -1.096 },
  { name: 'Riesling Brut Sekt / Tobias Schmidt', loc: 'Obermoschel, Nahe, Deutschland', lat: 49.728, lng: 7.772 },
  { name: 'Virgen del Galir Maruxa Godello 2024', loc: 'Entoma, Valdeorras, Galicien, Spanien', lat: 42.415, lng: -6.981 },
  { name: 'La Traca Blanco / Risky Grapes', loc: 'Requena, Valencia, Spanien', lat: 39.488, lng: -1.101 },
  { name: 'Niño de las Uvas / Bodegas del Rosario', loc: 'Bullas, Murcia, Spanien', lat: 38.048, lng: -1.672 },
  { name: 'Cuvée des Fleurs / Löwenthal', loc: 'Pfalz, Deutschland', lat: 49.245, lng: 8.118 },
  { name: 'Petit Verdot / Juan Gil', loc: 'Jumilla, Murcia, Spanien', lat: 38.479, lng: -1.325 },
];

const pastWines: TastingWine[] = [
  {
    name: 'Pompaelo Blanc de Noir',
    story:
      'Weiß gekeltert aus roten Garnacha-Trauben: hell, saftig und fruchtbetont, mit Anklängen an rote Beeren, Pfirsich und feine Würze. Ein ungewöhnlicher, animierender Wein mit viel Charme – perfekt als Aperitif oder zu leichten Tapas.',
    image: imgPompaelo,
    note: 'Erhältlich bei K&D WineStories Münster.',
  },
  {
    name: 'Vette San Leonardo 2024',
    story:
      'Ein Sauvignon Blanc aus den kühlen Höhenlagen des Trentino. Klare Alpenfrische, Noten von Zitrus, Stachelbeere und Bergkräutern, unterlegt von einer lebendigen, geradlinigen Säure. Der Ausbau im Edelstahltank bewahrt die kristallklare Frucht und eine salzige Mineralität – präzise, kühl und sehr trinkanimierend.',
    image: imgVette,
  },
  {
    name: 'José Pariente 2024 Sauvignon Blanc',
    story:
      'Aus Rueda: duftige Aromen von Limette, Grapefruit und Stachelbeere, dazu feine Kräuter- und Heunoten. Am Gaumen saftig und frisch, mit ziselierter Säure und klarer Frucht. Ein moderner, spannkräftiger Sauvignon, der trotzdem niemals laut wirkt.',
    image: imgJosePariente,
  },
  {
    name: 'Elena Walch Pinot Bianco 2024',
    story:
      'Südtirol in Reinkultur: kühle Eleganz, weiße Blüten, grüner Apfel und ein Hauch Zitruszeste. Straff und schnörkellos mit feiner Mineralität und klarer Linie – ein Pinot Bianco, der Leichtigkeit und Tiefe verbindet.',
    image: imgElenaWalch,
  },
  {
    name: 'Terlan Chardonnay 2024 Alto Adige DOC',
    story:
      'Der Klassiker der Kellerei Terlan: zarte Aromen von Apfel, Birne und etwas Zitrus, cremig untermalt von feiner Textur und einer präzisen Säureader. Die typische Terlaner Mineralität sorgt für Länge und glasklare Kontur.',
    image: imgTerlan,
  },
  {
    name: 'Nounat 2024 – Binigrau Mallorca - 57,50€',
    story:
      'Mallorca-Highlight: eine elegante Cuvée, häufig aus Prensal Blanc und Chardonnay. Reife gelbe Frucht, zarte Kräuter der Insel und eine cremige Textur treffen auf salzige Frische. Sonnig, vielschichtig und dennoch erstaunlich balanciert – mediterraner Charakter mit Tiefgang.',
    image: imgNounat,
  },
];

const pastMapPoints: MapPoint[] = [
  { name: 'Pompaelo Blanc de Noir', loc: 'Navarra, Spanien', lat: 42.812, lng: -1.646 },
  { name: 'José Pariente 2024 Sauvignon Blanc', loc: 'Rueda, Spanien', lat: 41.412, lng: -4.959 },
  { name: 'Nounat 2024 – Binigrau', loc: 'Mallorca, Spanien', lat: 39.569, lng: 2.650 },
  { name: 'Vette San Leonardo 2024', loc: 'Trentino, Italien', lat: 45.757, lng: 10.962 },
  { name: 'Elena Walch Pinot Bianco 2024', loc: 'Südtirol, Italien', lat: 46.342, lng: 11.238 },
  { name: 'Terlan Chardonnay 2024 Alto Adige DOC', loc: 'Südtirol (Alto Adige), Italien', lat: 46.517, lng: 11.248 },
];

const tastingEvents: TastingEvent[] = [
  {
    id: 'current',
    title: 'Aktuelles Weintasting',
    subtitle: 'Der Auftakt startet mit Papa Luna Cava aus Requena, danach führt die Runde von der Nahe über Valdeorras in Galicien, Valencia und Bullas bis in die Pfalz und nach Jumilla.',
    note: 'Der Rosé wird noch final bestätigt und danach ergänzt.',
    mapAriaLabel: 'Karte der Weinregionen des aktuellen Tastings',
    wines: currentWines,
    mapPoints: currentMapPoints,
  },
  {
    id: 'past',
    title: 'Vergangenes Weintasting',
    subtitle: '"Sechs Weine, sechs Geschichten – scroll dich durch unsere Auswahl." Das war das Motto unseres letzten Wein-Tastings.',
    mapAriaLabel: 'Karte der Weinregionen des vergangenen Tastings',
    wines: pastWines,
    mapPoints: pastMapPoints,
  },
];

const mapEls = ref<Record<string, HTMLDivElement | null>>({});
const maps = new Map<string, L.Map>();
const markersByEvent = new Map<string, L.Marker[]>();
const mapPinStyle = [
  'width:24px',
  'height:24px',
  'border-radius:50%',
  'background:#8B6F47',
  'color:#111',
  'font-weight:700',
  'font-size:12px',
  'display:flex',
  'align-items:center',
  'justify-content:center',
  'box-shadow:0 1px 3px rgba(0, 0, 0, 0.35)',
  'border:2px solid #fff',
].join(';');

const defaultIcon = L.icon({
  iconRetinaUrl: markerIcon2xUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

(L.Marker.prototype as any).options.icon = defaultIcon;

function setMapEl(eventId: string, el: Element | ComponentPublicInstance | null) {
  mapEls.value[eventId] = el as HTMLDivElement | null;
}

onMounted(async () => {
  await nextTick();
  tastingEvents.forEach((event) => initMap(event));
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  maps.forEach((map) => map.remove());
  maps.clear();
  markersByEvent.clear();
});

function initMap(event: TastingEvent) {
  const mapEl = mapEls.value[event.id];
  if (!mapEl || !event.mapPoints.length) return;

  if (mapEl.clientHeight === 0) {
    mapEl.style.height = '320px';
  }
  if (mapEl.clientWidth === 0) {
    mapEl.style.width = '100%';
  }

  const map = L.map(mapEl, { zoomControl: true });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap-Mitwirkende',
    maxZoom: 18,
  }).addTo(map);

  const markers = event.mapPoints.map((point, index) => {
    const icon = L.divIcon({
      html: `<div style="${mapPinStyle}">${index + 1}</div>`,
      className: 'map-pin-wrap',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    });

    return L.marker([point.lat, point.lng], { icon }).bindPopup(`<b>${point.name}</b><br>${point.loc}`);
  });

  const group = L.featureGroup(markers).addTo(map);
  map.fitBounds(group.getBounds().pad(0.3));

  maps.set(event.id, map);
  markersByEvent.set(event.id, markers);

  setTimeout(() => {
    const mountedMap = maps.get(event.id);
    if (mountedMap) mountedMap.invalidateSize();
  }, 100);
}

function onResize() {
  maps.forEach((map) => map.invalidateSize());
}

function flyToPoint(eventId: string, index: number) {
  const map = maps.get(eventId);
  const markers = markersByEvent.get(eventId);
  if (!map || !markers?.[index]) return;

  map.setView(markers[index].getLatLng(), 8, { animate: true });
  markers[index].openPopup();
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.tasting-page {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 4rem;
}

.tasting-page-header {
  text-align: center;
  padding: 2rem 1rem 1rem;
}

.tasting-block + .tasting-block {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
}

.tasting-header {
  text-align: center;
  padding: 1rem 1rem 2rem;
}

.tasting-map {
  height: 33vh;
  min-height: 260px;
  margin: 0 1rem 2rem;
  border: 2px solid $accent-color;
  border-radius: 10px;
  overflow: hidden;
}

:deep(.leaflet-container) {
  width: 100%;
  height: 100%;
}

.tasting-map-legend {
  margin: 0 1rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: .5rem .75rem;
}

.tasting-map-legend .legend-title {
  color: $accent-color;
  font-weight: bold;
  margin-bottom: .25rem;
}

.tasting-map-legend ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: .25rem .5rem;
}

@media (min-width: 720px) {
  .tasting-map-legend ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.legend-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: .5rem;
  background: transparent;
  color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: .35rem .5rem;
  text-align: left;
  cursor: pointer;
}

.legend-item:hover {
  border-color: $accent-color;
}

.legend-pin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: $accent-color;
  color: #111;
  font-weight: 700;
  font-size: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

.legend-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.legend-text small {
  opacity: .75;
}

:deep(.map-pin-wrap) {
  background: transparent;
  border: none;
}

:deep(.map-pin) {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: $accent-color;
  color: #111;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  border: 2px solid #fff;
}

.tasting-title,
.tasting-section-title {
  color: $accent-color;
  font-family: 'King Red';
  font-weight: normal;
  margin: 0;
}

.tasting-title {
  font-size: 2rem;
}

.tasting-section-title {
  font-size: 1.8rem;
  margin-bottom: .5rem;
}

.tasting-sub {
  opacity: .9;
  max-width: 54rem;
  margin: 0 auto .75rem;
}

.tasting-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem 2rem;
}

.tasting-block:last-child .tasting-sections {
  padding-bottom: 0;
}

.tasting-section {
  border: 2px solid $accent-color;
  border-radius: 10px;
  overflow: hidden;
}

.tasting-content {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 80vh;
}

.tasting-content--text-only {
  min-height: 0;
}

@media (min-width: 720px) {
  .tasting-content {
    grid-template-columns: 1fr 1fr;
    min-height: 0;
    max-height: 50vh;
  }

  .tasting-content--text-only {
    grid-template-columns: 1fr;
    max-height: none;
  }
}

.tasting-text {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .75rem;
}

.wine-name {
  color: $accent-color;
  font-family: 'King Red';
  font-size: 1.5rem;
  margin: 0;
}

.wine-story {
  line-height: 1.6;
  margin: 0;
}

.wine-note {
  font-style: italic;
  color: $accent-color;
  margin: 0;
}

.tasting-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  min-height: 260px;
}

.tasting-image img {
  max-height: 70vh;
  max-width: 90%;
  object-fit: contain;
}

@media (min-width: 720px) {
  .tasting-image img {
    max-height: 44vh;
    max-width: 82%;
  }
}
</style>

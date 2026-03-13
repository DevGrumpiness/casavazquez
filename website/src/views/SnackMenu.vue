<template>
  <FeaturedSlider :items="sliderItems" />

  <!-- <section class="flamm-feature" aria-label="Flammkuchen Highlight">
    <div class="flamm-content">
      <span class="flamm-kicker">GANZ NEU AUF DER KARTE</span>
      <h2>Elsässer Flammkuchen</h2>
      <p>
        Dünner, ofenfrischer Teig mit Crème fraîche, roten Zwiebeln und herzhaftem Speck. Perfekt zum Teilen mit einem Glas Wein.
      </p>
      <div class="flamm-meta">
        <span class="flamm-price">10,00€</span>
        <span class="flamm-tag">Auf Wunsch auf vegetarisch</span>
      </div>
    </div>
    <figure class="flamm-figure">
      <img class="flamm-photo" :src="flammImage" alt="Knuspriger Flammkuchen" loading="lazy" />
    </figure>
  </section> -->

  <!-- <div class="supply-hint" role="status" aria-live="polite">
    Aufgrund einer Lieferverzögerung unseres Zulieferers sind einige Tapas erst ab nächster Woche wieder erhältlich. Danke für euer Verständnis!
  </div> -->

  <div v-show="false" class="hint" style="display: block">
    Heute <b> Buffet</b> mit Selbstbedienung <br />
    <p>Beim Buffet findest du Bambus-Schälchen, die du mit deinen Lieblings Snacks <b>voll</b>machen kannst.</p>
    <p>Am Ende zählen wir einfach die Schälchen und berechnen jeweils 2,50€ (mit Brot-Flatrate - solange der Vorrat
      reicht)</p>
    <br />
    <p>🍽️ Guten Appetit! 😊</p>
    <p>(Was du am Buffet nicht findest, kannst du à la carte bestellen. Bitte auf längere Wartezeiten einstellen)</p>

    <details style="margin-top: 1rem">
      <summary style="cursor: pointer">Portionenzähler (optional)</summary>
      <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 1rem; justify-content: center">
        <button @click="decrementCounter" style="font-size: 1.5rem">−</button>
        <span style="font-size: 1.5rem">{{ portionCount }}</span>
        <button @click="incrementCounter" style="font-size: 1.5rem">+</button>
      </div>
    </details>
  </div>

  <div class="filter-buttons">
    <span>Filter:</span>
    <button class="filter-button" :class="{ active: veggie }" @click="toggleVeggie">
      <i class="pi pi-times" v-if="veggie" style="font-size: 8px"></i>
      Nur Veggie
    </button>
    <button class="filter-button" :class="{ active: keto }" @click="toggleKeto">
      <i class="pi pi-times" v-if="keto" style="font-size: 8px"></i>
      Keto-freundlich
    </button>
  </div>

  <section class="snacks-menu">
    <header class="snacks-header">
      <h1 class="snacks-title">SNACKS</h1>
    </header>
    <div v-if="showTopToast" class="top-toast" role="status" aria-live="polite">
      <span>Saludos desde Madrid – Diesen Samstag bekommt ihr zu jedem Getränk eine kleine Tapita, ganz wie ihr es aus
        der Hauptstadt Spaniens kennt.</span>
      <button class="toast-close" @click="showTopToast = false" aria-label="Schließen">×</button>
    </div>

    <p class="snacks-note" style="margin-top: 1rem; font-style: italic;">
      Wir stellen euch auch gerne einen Mix zusammen. Nennt uns einfach euer Budget und wir stellen euch Leckereien auf den Tisch. (Empfehlung: 15€ pP)
    </p>

    <section v-if="showQuickWaitSection" class="quick-wait-section" aria-label="Snacks mit geringsten Wartezeiten">
      <h3 class="quick-wait-title">Snacks mit geringsten Wartezeiten</h3>
      <p class="quick-wait-hint">Tippe auf ein Gericht, um direkt dorthin zu springen</p>
      <ul class="quick-wait-list">
        <li class="quick-wait-item">
          <a href="#plato-quesos" class="quick-wait-link" @click.prevent="scrollToSnackSection('plato-quesos')">Plato de Quesos</a>
        </li>
        <li class="quick-wait-item">
          <a href="#plato-jamon" class="quick-wait-link" @click.prevent="scrollToSnackSection('plato-jamon')">Plato de Jamón</a>
        </li>
        <li class="quick-wait-item">
          <a href="#plato-mixto" class="quick-wait-link" @click.prevent="scrollToSnackSection('plato-mixto')">Plato Mixto</a>
        </li>
      </ul>
    </section>

    <section v-if="isMobileDevice" class="snack-bookmarks" aria-label="Snack Merkliste">
      <div class="snack-bookmarks-header">
        <h3>Merkliste <span class="count">{{ bookmarkedSnacks.length }}</span></h3>
        <button
          v-if="bookmarkedSnacks.length"
          type="button"
          class="clear-bookmarks"
          @click="clearSnackBookmarks"
        >
          Leeren
        </button>
      </div>

      <p v-if="!bookmarkedSnacks.length" class="snack-bookmarks-empty">
        Tippe bei einem Snack auf ☆, um ihn hier zu merken.
      </p>

      <ul v-else class="snack-bookmark-list">
        <li v-for="snack in bookmarkedSnacks" :key="getSnackBookmarkId(snack)" class="snack-bookmark-item">
          <button type="button" class="snack-bookmark-link" @click="scrollToBookmarkedSnack(snack)">
            {{ snack.name }} · {{ snack.price }}
          </button>
          <button
            type="button"
            class="snack-bookmark-remove"
            :aria-label="`${snack.name} aus Merkliste entfernen`"
            @click="removeSnackBookmark(getSnackBookmarkId(snack))"
          >
            ×
          </button>
        </li>
      </ul>
    </section>

    <div class="scrollContainer">
      <div class="snack-section">
        <TransitionGroup name="snack" tag="ul" class="basic-snacks-list">
          <li
            v-for="snack in filteredSnacks"
            :id="`snack-${toSnackId(getSnackBookmarkId(snack))}`"
            :key="getSnackBookmarkId(snack)"
            :class="['basic-snacks-item', { 'is-out': snack.available === false }]"
          >
            <div class="snack-primary">
              <div class="snack-text">
                <span class="snacks-name-row">
                  <button
                    v-if="isMobileDevice && snack.available !== false"
                    type="button"
                    class="bookmark-toggle"
                    :class="{ active: isSnackBookmarked(snack) }"
                    :aria-pressed="isSnackBookmarked(snack)"
                    :aria-label="isSnackBookmarked(snack) ? `${snack.name} aus Merkliste entfernen` : `${snack.name} merken`"
                    @click.stop="toggleSnackBookmark(snack)"
                  >
                    {{ isSnackBookmarked(snack) ? '★' : '☆' }}
                  </button>
                  <span class="snacks-name">
                    {{ snack.name }}
                    <sup
                      v-if="snack.allergens && snack.allergens.length"
                      class="allergen-indices"
                      :title="formatAllergenDescription(snack.allergens)"
                    >
                      {{ snack.allergens.join(',') }}
                    </sup>
                    <span v-if="snack.veggie" class="veggie-icon" title="Vegetarisch">&#127811;</span>
                  </span>
                </span>
                <!-- <img v-if="snack.onm" class="onmLogo" :src="onmLogo" alt="Olive und Meer" @click="showOnmInfo = true" /> -->
                <BaseModal v-model="showOnmInfo">
                <div style="display: flex;margin-bottom: 1rem; gap: 1rem">
                  <h2>Von <i>Olive & Meer</i></h2>
                  <img class="onmLogo" :src="onmLogo" />
                </div>
                <p>Unser Lieblings-Laden für Spanische Weine und Feinkost. Dir schmecken die Oliven? Dann statte doch
                  <i>Raquel</i>
                  mal
                  einen Besuch ab.
                </p>
                <p style="text-align: right">Warendorfer Str. 61, 48145 Münster</p>
              </BaseModal>
                <span class="snacks-description">{{ snack.description }}</span>
                <span v-if="snack.available === false" class="snack-status sold-out-pill">heute Ausverkauft</span>
                <span
                  v-if="snack.traceAllergens && snack.traceAllergens.length"
                  class="snack-allergen-notes"
                  :title="formatAllergenDescription(snack.traceAllergens)"
                >
                  Spuren: {{ snack.traceAllergens.join(',') }}
                </span>
              </div>
              <img v-if="snack.image" class="snack-photo" :src="snack.image" :alt="snack.name" loading="lazy" />
            </div>
            <span
              class="snacks-price"
              :class="{ 'sold-out': snack.available === false }"
              :title="snack.available === false ? 'Der Snack ist derzeit ausverkauft' : undefined"
            >
              {{ snack.price }}
            </span>
          </li>
        </TransitionGroup>
        <br />
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name">Extra Aioli Dip</span>
            <span class="snacks-price">1,5</span>
          </li>
          <li class="snacks-item extra veggie">
            <span class="snacks-name">Extra Baguette</span>
            <span class="snacks-price">2,50</span>
          </li>

          <p class="snacks-note">
            Unsere Snacks & Platten sind ideal zum Teilen und bieten eine köstliche Begleitung zu unseren Drinks.
          </p>
        </ul>
      </div>

      <div id="plato-jamon" class="snack-section anchor-target" v-if="!veggie">
        <hr />
        <br />
        <h3 class="snacks-subtitle with-price">
          <span class="section-title-text">Plato de Jamón</span>
          <span class="section-price">10,50</span>
        </h3>
        <p class="snacks-note">
          Serrano Schinken – luftgetrocknet und von höchster Qualität. Dazu servieren wir Brot.
        </p>
      </div>

      <Transition name="section">
        <div id="plato-quesos" class="snack-section anchor-target" >
          <hr />
          <br />
          <h3 class="snacks-subtitle with-price">
            <span class="section-title-text">Plato de Quesos</span>
            <span class="section-price">10,50</span>
          </h3>
          <p class="snacks-note">
            Manchego Käse – der klassische spanische Schafskäse. Dazu servieren wir Brot und auf Wunsch Feigen-Sauce.
          </p>
        </div>
      </Transition>

      <div id="plato-mixto" class="snack-section anchor-target">
        <hr />
        <br />
        <h3 class="snacks-subtitle with-price">
          <span class="section-title-text">
            Plato Mixto
            <span class="coca-clickable" @click="showMixtoInfo = true">
              <img class="coca-image" :src="mixtoImage" alt="Plato Mixto" />
              <span class="enlarge-hint">🔍</span>
            </span>
          </span>
          <span class="section-price">16,50</span>
        </h3>
        <p class="snacks-note">
          Gemischte Platte mit Jamón Serrano und Manchego Käse. Dazu servieren wir Brot und auf Wunsch Feigen-Sauce für den Käse.
        </p>
        <BaseModal v-model="showMixtoInfo">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <h2>Plato Mixto</h2>
            <img :src="mixtoImage" alt="Plato Mixto" style="max-width: 300px; border-radius: 8px;" />
          </div>
          <p>Jamón Serrano und Manchego auf einer Platte – servierbereit mit Brot.</p>
        </BaseModal>
      </div>

      <Transition name="section">
        <div class="snack-section" v-if="!keto">
          <hr />
          <br />
          <h3 class="snacks-subtitle">
            Coca
            <span class="coca-clickable" @click="showCocaInfo = true">
              <img class="coca-image" :src="cocaImage" alt="Coca" />
              <span class="enlarge-hint">🔍</span>
            </span>
          </h3>
          <p class="snacks-note">
            Coca ist ein traditionelles spanisches Flachbrot. Mit Mozarella überbacken ist die Portion
            vergleichbar mit einer Pizza oder Pinsa.
          </p>

          <BaseModal v-model="showCocaInfo">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <h2>Coca – "Spanische Pizza"</h2>
              <img :src="cocaImage" alt="Coca" style="max-width: 300px; border-radius: 8px;" />
            </div>
            <p>Die Coca ist ein traditionelles spanisches Flachbrot, das mit verschiedenen Zutaten belegt werden kann. Sie ist
              besonders beliebt in Katalonien und auf den Balearen. Die Portion ist vergleichbar mit einer Pizza oder Pinsa und
              eignet sich perfekt zum Teilen oder allein genießen.</p>
          </BaseModal>
          <ul class="snacks-extras">
            <li class="snacks-item extra veggie">
              <span class="snacks-name"><b>Vegetarisch</b><br />mit Tomate und Mozarella </span>
              <span class="snacks-price">12,90</span>
            </li>
            <li class="snacks-item extra veggie">
              <span class="snacks-name"><b>Wahlweise zusätzlich:</b></span>
            </li>
            <li class="snacks-item extra" v-if="!veggie">
              <span class="snacks-name">+ Chorizo</span>
              <span class="snacks-price">+ 3,50</span>
            </li>
            <li class="snacks-item extra" v-if="!veggie">
              <span class="snacks-name">+ Serrano</span>
              <span class="snacks-price">+ 3,90</span>
            </li>
            <li class="snacks-item extra" v-if="!veggie">
              <span class="snacks-name">+ Albondigas</span>
              <span class="snacks-price">+ 3,90</span>
            </li>

            <li class="snacks-item extra veggie">
              <span class="snacks-name">+ Doppelt Mozarella</span>
              <span class="snacks-price">+ 2,50</span>
            </li>
            <li class="snacks-item extra veggie">
              <span class="snacks-name">+ Artischockenherzen</span>
              <span class="snacks-price">+ 3,50</span>
            </li>
            <li class="snacks-item extra veggie">
              <span class="snacks-name">+ Oliven</span>
              <span class="snacks-price">+ 2,50</span>
            </li>
          </ul>
        </div>
      </Transition>

      <div class="snack-section bundle">
        <hr />
        <br />
        <h3 class="snacks-subtitle">Bundle</h3>
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>1 Flasche Hauswein + Plato Queso ODER Serrano</b><br /></span>
            <span class="snacks-price">26,50</span>
          </li>
        </ul>
      </div>
      <div v-show=false class="snack-section bundle">
        <hr />
        <br />
        <h3 class="snacks-subtitle">Dessert</h3>
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Tartufo mit Schoko-Kern und Haselnussmantel</b><br /></span>
            <span class="snacks-price">8,50</span>
          </li>
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Antojos de Dulcinea - Biskuitkuchen mit fruchtiger Sauce</b><br /></span>
            <span class="snacks-price">6,50</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="allergen-section">
      <h3>Allergene und Zusatzstoffe</h3>
      <p class="legal-disclaimer">
        Die Inhalte dieser Karte werden mit größter Sorgfalt erstellt. Trotzdem können Rezeptur- oder Lieferantenwechsel
        sowie unbeabsichtigte Kreuzkontaminationen nicht vollständig ausgeschlossen werden. Bitte informiert unser Team bei
        Allergien oder Unverträglichkeiten – verbindliche Auskunft erhaltet ihr stets von der Küche.
      </p>
      <p>
        In unseren Snacks sind teilweise Zusatzstoffe und allergene Stoffe enthalten. Bei Fragen zu einzelnen Produkten
        hilft euch unser Team gerne weiter.
      </p>
      <table class="allergen-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Hinweis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>mit Farbstoff</td>
          </tr>
          <tr>
            <td>2</td>
            <td>mit Konservierungsstoff</td>
          </tr>
          <tr>
            <td>3</td>
            <td>mit Geschmacksverstärker</td>
          </tr>
          <tr>
            <td>4</td>
            <td>geschwefelt / enthält Sulfit</td>
          </tr>
          <tr>
            <td>5</td>
            <td>geschwärzt</td>
          </tr>
          <tr>
            <td>6</td>
            <td>mit Phosphat</td>
          </tr>
          <tr>
            <td>7</td>
            <td>mit Süßungsmitteln</td>
          </tr>
          <tr>
            <td>8</td>
            <td>koffeinhaltig</td>
          </tr>
          <tr>
            <td>9</td>
            <td>enthält Gluten (Weizen)</td>
          </tr>
          <tr>
            <td>10</td>
            <td>enthält Gluten (Gerste)</td>
          </tr>
          <tr>
            <td>11</td>
            <td>enthält Ei</td>
          </tr>
          <tr>
            <td>12</td>
            <td>enthält Schalenfrüchte (z. B. Mandeln, Walnüsse)</td>
          </tr>
          <tr>
            <td>13</td>
            <td>enthält Laktose / Milch</td>
          </tr>
          <tr>
            <td>14</td>
            <td>enthält Sellerie</td>
          </tr>
          <tr>
            <td>15</td>
            <td>enthält Senf</td>
          </tr>
          <tr>
            <td>16</td>
            <td>enthält Soja</td>
          </tr>
          <tr>
            <td>17</td>
            <td>enthält Sesam</td>
          </tr>
          <tr>
            <td>18</td>
            <td>enthält Fisch</td>
          </tr>
          <tr>
            <td>19</td>
            <td>enthält Krebstiere</td>
          </tr>
          <tr>
            <td>20</td>
            <td>enthält Weichtiere (Mollusken)</td>
          </tr>
          <tr>
            <td>21</td>
            <td>enthält Lupinen</td>
          </tr>
          <tr>
            <td>22</td>
            <td>enthält Erdnüsse</td>
          </tr>
          <tr>
            <td>24</td>
            <td>chininhaltig</td>
          </tr>
          <tr>
            <td>25</td>
            <td>enthält Gluten (Roggen)</td>
          </tr>
          <tr>
            <td>26</td>
            <td>enthält Schweinefleisch</td>
          </tr>
          <tr>
            <td>27</td>
            <td>enthält Mais</td>
          </tr>
          <tr>
            <td>28</td>
            <td>enthält Hülsenfrüchte (z. B. Kichererbsen)</td>
          </tr>
          <tr>
            <td>29</td>
            <td>enthält Koriander</td>
          </tr>
          <tr>
            <td>30</td>
            <td>enthält Karotte</td>
          </tr>
        </tbody>
      </table>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import onmLogo from "../assets/images/Logo-Olive-Meer_klein.png";
import BaseModal from "../components/BaseModal.vue";
import FeaturedSlider from "../components/FeaturedSlider.vue";
import { featuredPromos } from "../data/featuredPromos";
import cocaImage from "../assets/images/coca.webp";
// import croquetasBoletus from "../assets/images/tapasclub/croquetas_boletus.png";
import croquetasChorizo from "../assets/images/tapasclub/croquetas_chorizo.png";
import datillesImage from "../assets/images/tapasclub/datilles.png";
import olivenMixImage from "../assets/images/tapasclub/olivenmix.png";
import polloPiripiri from "../assets/images/tapasclub/pollo_piripiri.png";
// import tortillaImage from "../assets/images/tapasclub/tortilla.png";
import albondigasImage from "../assets/images/tapasclub/albondigas.png";
// import champignonsImage from "../assets/images/tapasclub/champignons.png";
import nuggetsImage from "../assets/images/tapasclub/nuggets.png";
// import zwiebelringeImage from "../assets/images/tapasclub/zwiebelringe.png";
import rotebete from "../assets/images/tapasclub/rotebete_baellchen.png";
import pancehta from "../assets/images/tapasclub/pancheta.png";
import veggieSticksImage from "../assets/images/tapasclub/sticks.png";
import calamares from "../assets/images/tapasclub/calamares.png";
import mixtoImage from "../assets/images/tapasclub/mixto.webp";
// import flammImage from "../assets/images/tapasclub/flamm.png";
import pommesImage from "../assets/images/pommes.webp";

interface SnackItem {
  name: string;
  description: string;
  price: string;
  veggie: boolean;
  keto: boolean;
  image?: string;
  onm?: boolean;
  available?: boolean;
  allergens?: number[];
  traceAllergens?: number[];
}

const allergenIndexMap: Record<number, string> = {
  1: "mit Farbstoff",
  2: "mit Konservierungsstoff",
  3: "mit Geschmacksverstärker",
  4: "geschwefelt / enthält Sulfit",
  5: "geschwärzt",
  6: "mit Phosphat",
  7: "mit Süßungsmitteln",
  8: "koffeinhaltig",
  9: "enthält Gluten (Weizen)",
  10: "enthält Gluten (Gerste)",
  11: "enthält Ei",
  12: "enthält Schalenfrüchte (z. B. Mandeln, Walnüsse)",
  13: "enthält Laktose / Milch",
  14: "enthält Sellerie",
  15: "enthält Senf",
  16: "enthält Soja",
  17: "enthält Sesam",
  18: "enthält Fisch",
  19: "enthält Krebstiere",
  20: "enthält Weichtiere (Mollusken)",
  21: "enthält Lupinen",
  22: "enthält Erdnüsse",
  24: "chininhaltig",
  25: "enthält Gluten (Roggen)",
  26: "enthält Schweinefleisch",
  27: "enthält Mais",
  28: "enthält Hülsenfrüchte (z. B. Kichererbsen)",
  29: "enthält Koriander",
  30: "enthält Karotte"
}

const veggie = ref(false)
const keto = ref(false)
const showOnmInfo = ref(false)
const showCocaInfo = ref(false)
const showTopToast = ref(false)
const showAlbondigasInfo = ref(false)
const showMixtoInfo = ref(false)

const modalStates = [
  { ref: showOnmInfo },
  { ref: showCocaInfo },
  { ref: showAlbondigasInfo },
  { ref: showMixtoInfo }
]

let modalHistoryDepth = 0
let skipNextPopstate = false
const closingFromPopstate = ref(false)
const unwatchModalFns: Array<() => void> = []

function pushModalHistory() {
  if (typeof window === "undefined") return
  window.history.pushState({ overlay: true }, "", window.location.href)
  modalHistoryDepth++
}

function popModalHistory() {
  if (typeof window === "undefined" || modalHistoryDepth === 0) return
  skipNextPopstate = true
  window.history.back()
  modalHistoryDepth = Math.max(0, modalHistoryDepth - 1)
}

function closeAllModals() {
  modalStates.forEach(({ ref }) => {
    ref.value = false
  })
}

function setupModalWatchers() {
  modalStates.forEach(({ ref }) => {
    const stop = watch(ref, (value, oldValue) => {
      if (value && !oldValue) {
        pushModalHistory()
      } else if (!value && oldValue && !closingFromPopstate.value) {
        popModalHistory()
      }
    })
    unwatchModalFns.push(stop)
  })
}

function teardownModalWatchers() {
  unwatchModalFns.splice(0).forEach(stop => stop())
}

function handlePopstate() {
  if (skipNextPopstate) {
    skipNextPopstate = false
    return
  }

  if (modalHistoryDepth > 0) {
    closingFromPopstate.value = true
    closeAllModals()
    modalHistoryDepth = 0
    closingFromPopstate.value = false
  }
}

function formatAllergenDescription(codes?: number[]) {
  if (!codes || codes.length === 0) return ""
  return codes.map(code => allergenIndexMap[code] ?? `Index ${code}`).join(", ")
}

const sliderItems = featuredPromos;
const snackBookmarksStorageKey = "snackBookmarks"

const QUICK_WAIT_SECTION_DATE = "2026-02-28"

function getLocalDateIso(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const showQuickWaitSection = computed(() => getLocalDateIso(new Date()) === QUICK_WAIT_SECTION_DATE)

const isMobileDevice = ref(false)
const bookmarkedSnackIds = ref<string[]>([])

const bookmarkedSnacks = computed(() =>
  bookmarkedSnackIds.value
    .map(id => getSnackByBookmarkId(id))
    .filter((snack): snack is SnackItem => !!snack && snack.available !== false)
)

function updateIsMobileDevice() {
  if (typeof window === "undefined") return
  isMobileDevice.value = window.matchMedia("(max-width: 768px)").matches
}

function toSnackId(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function getSnackBookmarkId(snack: SnackItem) {
  return `${snack.name}::${snack.price}::${snack.description}`
}

function getSnackByBookmarkId(bookmarkId: string) {
  return snacks.find(item => getSnackBookmarkId(item) === bookmarkId)
}

function isSnackBookmarked(snack: SnackItem) {
  return bookmarkedSnackIds.value.includes(getSnackBookmarkId(snack))
}

function persistSnackBookmarks() {
  if (typeof window === "undefined") return
  localStorage.setItem(snackBookmarksStorageKey, JSON.stringify(bookmarkedSnackIds.value))
}

function loadSnackBookmarks() {
  if (typeof window === "undefined") return

  const raw = localStorage.getItem(snackBookmarksStorageKey)
  if (!raw) return

  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      const validIds = parsed
        .filter((value): value is string => typeof value === "string")
        .map(value => {
          if (value.includes("::")) {
            return value
          }
          const fallbackSnack = snacks.find(item => item.name === value && item.available !== false)
          return fallbackSnack ? getSnackBookmarkId(fallbackSnack) : null
        })
        .filter((value): value is string => !!value)

      bookmarkedSnackIds.value = Array.from(new Set(validIds))
      persistSnackBookmarks()
    }
  } catch {
    bookmarkedSnackIds.value = []
  }
}

function toggleSnackBookmark(snack: SnackItem) {
  if (snack.available === false) {
    return
  }

  const bookmarkId = getSnackBookmarkId(snack)

  if (bookmarkedSnackIds.value.includes(bookmarkId)) {
    bookmarkedSnackIds.value = bookmarkedSnackIds.value.filter(item => item !== bookmarkId)
  } else {
    bookmarkedSnackIds.value = [...bookmarkedSnackIds.value, bookmarkId]
  }

  persistSnackBookmarks()
}

function removeSnackBookmark(bookmarkId: string) {
  bookmarkedSnackIds.value = bookmarkedSnackIds.value.filter(item => item !== bookmarkId)
  persistSnackBookmarks()
}

function clearSnackBookmarks() {
  bookmarkedSnackIds.value = []
  persistSnackBookmarks()
}

function scrollToBookmarkedSnack(snack: SnackItem) {
  veggie.value = false
  keto.value = false
  requestAnimationFrame(() => {
    document.getElementById(`snack-${toSnackId(getSnackBookmarkId(snack))}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}

function scrollToSnackSection(sectionId: string) {
  if (sectionId === "plato-jamon" && veggie.value) {
    veggie.value = false
  }

  requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}

const snacks: SnackItem[] = [
  { name: 'Nachos mit Dip (Salsa/Aioli/Guacamole)', description: '', price: '6,5', veggie: true, keto: false, allergens: [11, 15] },
  { name: 'Pimientos de Padrón - der Klassiker', description: '', price: '6,5', veggie: true, keto: true},
  { name: 'Brot Aioli/Guacamole Dip', description: '', price: '6,5', veggie: true, keto: false, allergens: [9, 11, 15] },
  { name: 'Süßkartoffel-Pommes', description: '', price: '5', veggie: true, keto: false, image: pommesImage, allergens: [11, 15], available: true },
  { name: 'Süßkartoffel-Pommes groß', description: '', price: '7', veggie: true, keto: false, image: pommesImage, allergens: [11, 15], available: true },
  { name: 'Oliven Mix', description: '', price: '6', veggie: true, onm: true, keto: true, image: olivenMixImage },
  // { name: 'Kroketten + Dip', description: 'gefüllt mit Käse & Jalapeños', price: '7,5', veggie: false, keto: false, image: croquetasBoletus, allergens: [9, 11, 13], available: true },
  { name: 'Croquetas con Jamón Iberico', description: 'kleine Kroketten mit Jamón-Füllung', price: '7,5', veggie: false, keto: false, image: croquetasChorizo, allergens: [9, 11, 13, 26] },
  { name: 'Croquetas de Boletus', description: 'kleine Kroketten mit Steinpilz-Füllung', price: '7,5', veggie: false, keto: false, available: true, image: croquetasChorizo, allergens: [9, 11, 13, 26] },
  
  {
    name: 'Pollo Al Ajillo',
    description: 'Gegarte, marinierte Hähnchen Flügel mit Knoblauch',
    price: '8,5',
    veggie: false,
    keto: true,
    image: polloPiripiri,
    allergens: [14, 16],
    traceAllergens: [4, 9, 12, 13, 15, 17, 22],
    available: true
  },
  // { name: 'Tortilla Española', description: 'Mini Kartoffel-Omelet', price: '7', veggie: true, keto: true, available: true, image: tortillaImage, allergens: [11, 13] },
  // { name: 'Tortilla Española', description: 'Mini Kartoffel-Omelet + Serrano', price: '8,5', veggie: true, available: true, keto: true, image: tortillaImage, allergens: [11, 13] },
  { name: 'Albondigas in Salsa', description: 'Fleischbällchen (5Stk) mit Chili-Käse Füllung (nicht scharf) in Tomatensalsa', price: '7,5', veggie: false, keto: true, available: true, image: albondigasImage, allergens: [11, 13] },
  { name: 'Chorizo in Salsa', description: 'Pikante Chorizo (spanische Wurst) in Tomatensalsa', price: '6,5', veggie: false, keto: true, available: true, image: albondigasImage, allergens: [11, 13] },
  { name: 'Vegane Nuggets', description: 'mit Tomaten-Salsa oder Aioli', price: '7,5', veggie: true, keto: false, image: nuggetsImage, allergens: [9, 16], available: true },

  { name: 'Dátiles con Bacon', description: 'Datteln im Speckmantel', price: '7,5', veggie: false, keto: false, image: datillesImage, allergens: [26] },
  {
    name: 'Dados de Panceta',
    description: 'Schweinbauch-Würfel, herzhaft mariniert. ca 150g',
    price: '9,5',
    veggie: false,
    keto: true,
    available: true,
    image: pancehta,
    allergens: [9, 16, 26]
  },
  { name: 'Calamares Ringe', description: 'Tintenfischringe im Backteig', price: '7,5', veggie: false, keto: false, image: calamares, allergens: [9, 11, 13, 20] },

 {
    name: 'Edamame Kräuter Bällchen',
    description: 'Veganer Snack aus Edamame in Kräuter-Panade',
    price: '7,5',
    veggie: true,
    keto: false,
    image: rotebete,
    allergens: [9, 27, 28, 29, 30]
  },
 {
    name: 'Rote Beete Ingwer Bällchen',
    description: 'Veganer Snack aus proteinreichen Kichererbsen, mit rote Beete und Ingwer.',
    price: '7,5',
    veggie: true,
    keto: false,
    image: rotebete,
    allergens: [9, 27, 28, 29, 30],
    available: false
  },
 {
    name: 'Vegane Erbsen Minz Sticks',
    description: 'Veganund lecker.',
    price: '7,5',
    veggie: true,
    keto: false,
    image: veggieSticksImage,
    allergens: [9, 27, 28, 29, 30],
    available: false
  },
 {
    name: 'Verduras a la Parrilla',
    description: 'Gemischtes Grillgemüse Antipasti-Art (lauwarm).',
    price: '7,5',
    veggie: true,
    keto: false,
    image: undefined,
    allergens: [9, 27, 28, 29, 30]
  },
 {
    name: 'Gambas Empanadas',
    description: 'Gambas mit einer köstlich subtil gewürzten knusprigen Kruste mit Knoblauch und Petersilie. ',
    price: '8,5',
    veggie: false,
    keto: false,
    image: undefined,
    allergens: [9, 27, 28, 29, 30]
  },
 {
    name: 'DESSERT - Tartufo mit Schoko-Kern und Haselnussmantel',
    description: 'Tartufo mit Schoko-Kern und Haselnussmantel',
    price: '6,5',
    veggie: true,
    keto: false,
    image: undefined,
   allergens: [12, 13]
  },
 {
    name: 'Empanadillas de Atun / Pollo 4Stk',
    description: 'Klassiker unter den spanischen Empanadas mit einer Füllung aus Thunfisch und Tomaten oder Hähnchen - Du entscheidest ',
    price: '7,5',
    veggie: false,
    keto: false,
    image: undefined,
    allergens: [9, 27, 28, 29, 30]
  },
//  {
//     name: 'Costillas Picantes',
//     description: 'Gegrillte, würzige Rippchen, losgeschnitten.',
//     price: '8,5',
//     veggie: false,
//     keto: true,
//     image: undefined,
//     allergens: [9, 27, 28, 29, 30]
//   },
];
// { name: 'Palta Rebozada', description: 'Avocadospalten paniert', price: '8,5', veggie: true, keto: false },
// { name: 'Tapas Mix (2p)', description: 'Mix aus verschiedenen Tapas', price: '24,5', veggie: false, keto: false },
// { name: 'Veggi Mix (2p)', description: 'Mix aus verschiedenen Veggie Tapas.', price: '24,5', veggie: true, keto: false },
// { name: 'Aros de Cebolla', description: 'Zwiebelringe', price: '6', veggie: true, keto: false, image: zwiebelringeImage, allergens: [9, 11, 13] },

const filteredSnacks = computed(() => {
  let filtered = [...snacks];
  if (veggie.value) {
    filtered = filtered.filter(s => s.veggie);
  }
  if (keto.value) {
    filtered = filtered.filter(s => s.keto);
  }
  return filtered;
});

function toggleVeggie() {
  veggie.value = !veggie.value;
}

function toggleKeto() {
  keto.value = !keto.value;
}

const portionCount = ref(0)
const storageKey = 'buffetCounter'
const ttlKey = 'buffetCounterTTL'

function loadCounter() {
  const stored = localStorage.getItem(storageKey)
  const ttl = localStorage.getItem(ttlKey)
  const now = Date.now()
  if (stored && ttl && parseInt(ttl) > now) {
    portionCount.value = parseInt(stored)
  } else {
    localStorage.removeItem(storageKey)
    localStorage.removeItem(ttlKey)
  }
}

function saveCounter() {
  const now = Date.now()
  localStorage.setItem(storageKey, portionCount.value.toString())
  localStorage.setItem(ttlKey, (now + 12 * 60 * 60 * 1000).toString())
}

function incrementCounter() {
  portionCount.value++
  saveCounter()
}

function decrementCounter() {
  if (portionCount.value > 0) {
    portionCount.value--
    saveCounter()
  }
}

onMounted(() => {
  loadCounter()
  loadSnackBookmarks()
  updateIsMobileDevice()
  setupModalWatchers()
  if (typeof window !== "undefined") {
    window.addEventListener("popstate", handlePopstate)
    window.addEventListener("resize", updateIsMobileDevice)
  }
})

onUnmounted(() => {
  teardownModalWatchers()
  if (typeof window !== "undefined") {
    window.removeEventListener("popstate", handlePopstate)
    window.removeEventListener("resize", updateIsMobileDevice)
  }
})
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.coca-image {
  height: 28px;
  vertical-align: middle;
  margin-left: 8px;
  cursor: pointer;
}

.coca-clickable {
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .enlarge-hint {
    opacity: 1;
  }
}

.enlarge-hint {
  display: inline-block;
  margin-left: 0.25rem;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  vertical-align: middle;
}

ul {
  list-style: none;
}

.filter-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: bold;
    color: $text-color;
  }

  .filter-button {
    background-color: transparent;
    border: 2px solid $accent-color;
    color: $accent-color;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &.active {
      background-color: $accent-color;
      color: $background-color;
    }
  }
}

.flamm-feature {
  margin: 1.5rem auto 0;
  max-width: 920px;
  padding: 1.8rem 1.5rem 1rem;
  border: 1px solid rgba(206, 170, 114, 0.6);
  border-radius: 22px;
  background: rgba(22, 14, 46, 0.9);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  margin: 0 1rem;
}

.flamm-content {
  color: $text-color;
}

.flamm-kicker {
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.14rem;
  font-size: 0.65rem;
  color: rgba(206, 170, 114, 0.9);
  margin-bottom: 0.4rem;
}

.flamm-content h2 {
  margin: 0 0 0.4rem;
  font-size: 1.5rem;
  color: $accent-color;
}

.flamm-content p {
  margin: 0 0 0.9rem;
  line-height: 1.55;
}

.flamm-meta {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.flamm-price {
  font-size: 1.25rem;
  font-weight: 600;
  color: $accent-color;
}

.flamm-tag {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
}

.flamm-figure {
  margin: 1rem 0 0;
  text-align: center;
}

.flamm-photo {
  width: min(320px, 80%);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 18px 25px rgba(0, 0, 0, 0.4));
}

.hint {
  text-shadow: 1px 1px 2px #ceaa72;
  border: 2px solid #ceaa72;
  background-color: transparent;
}

hr {
  width: 33%;
  margin: 0 auto;
  border-color: #ceaa72;
}

.snacks-menu {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  max-width: 90%;
  border: 2px solid $accent-color;
  border-radius: 8px;
  padding: 0 0.5rem;
  margin: 10% auto;
  position: relative;
  padding-top: 3rem;

  .scrollContainer {
    overflow: scroll;
    padding: 1rem;
    border-radius: 5px;

    &.veggie {
      .snacks-item {
        &:not(.veggie) {
          display: none;
        }
      }

      .snack-section {
        &:not(.veggie) {
          display: none;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .snacks-menu {
    max-width: 960px;
    margin: 3.5rem auto 7rem;
  }
}

.top-toast {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: .5rem;
  justify-content: space-between;
  background: $background-color;
  color: $accent-color;
  border: 1px solid $accent-color;
  border-radius: 6px;
  padding: .5rem .75rem;
  margin: .5rem 0 0;
}

.toast-close {
  background: transparent;
  border: none;
  color: $accent-color;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
}

.inactive {
  opacity: .5;
}

.snacks-header {
  text-align: center;
  position: absolute;
  width: 100%;
  top: -34px;
}

.snacks-title {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: $background-color;
  width: min-content;
  margin: 0 auto;
  padding: 0 1rem;
  color: $accent-color;
  font-size: 2rem;
  font-family: 'King Red';
  font-weight: normal;
}

.snack-text {
  position: relative;

  img {
    position: absolute;
    right: -50px;
    height: 30px;
    transform: rotate(-15deg);
  }
}

.onmLogo {
  height: 35px;
  transform: rotate(-15deg);
}

.snacks-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
}

.snacks-subtitle.with-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.section-title-text {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.section-price {
  font-size: 0.75rem;
  letter-spacing: 0.08rem;
  color: $accent-color;
  border: 1px solid rgba(206, 170, 114, 0.6);
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
}

.veggie-icon {
  display: inline-block;
  font-size: 0.9rem;
  vertical-align: middle;
  transform: translate(-2px, -5px) rotate(282deg);
  opacity: .75;
}

.bundle {
  li {
    margin-bottom: 1rem !important;
  }
}

.snack-enter-active,
.snack-leave-active {
  transition: all 0.4s ease;
}

.snack-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.snack-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.snack-move {
  transition: transform 0.4s ease;
}

.section-enter-active,
.section-leave-active {
  transition: all 0.4s ease;
}

.section-enter-from,
.section-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}



.baineks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
}

.basic-snacks-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;

  .snack-primary {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    min-width: 0;

    justify-content: space-between;
  }

  .snack-text {
    display: flex;
    flex-direction: column;

    .snacks-description {
      font-size: 0.7rem;
      font-style: italic;
      padding-right: 4px;
    }

    .snack-allergen-notes {
      font-size: 0.65rem;
      margin-top: 0.25rem;
      color: rgba(0, 0, 0, 0.72);
      line-height: 1.3;
    }
  }

  .snacks-name {
    font-size: 1rem;
    padding-right: 1rem;

    .allergen-indices {
      font-size: 0.65rem;
      margin-left: 0.2rem;
      color: $accent-color;
      vertical-align: super;
      line-height: 1;
    }
  }

  .snacks-price {
    font-size: 1rem;
    color: $accent-color;
    flex-shrink: 0;
    min-width: 60px;
    text-align: right;
  }

  &.extra {
    span {
      font-size: 0.7rem;
    }
  }
}

.basic-snacks-item.is-out {
  opacity: 0.75;
}

.snack-photo {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: contain;
  background-color: transparent;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.snack-status {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  margin-top: 0.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.sold-out-pill {
  background: rgba(206, 170, 114, 0.15);
  border: 1px solid rgba(206, 170, 114, 0.5);
  color: $accent-color;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
}

.snacks-price.sold-out {
  color: $text-color;
  font-style: italic;
  text-decoration: line-through;
}



.snacks-extras {
  margin-bottom: 2rem;

  li {
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0;
    font-size: 0.9rem;
    font-style: italic;
    color: $text-color;
  }
}

.snacks-note {
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 2rem auto;
  text-align: center;
  color: $accent-color;
  max-width: 90%;
}

.snack-bookmarks {
  margin: 0.7rem auto 1rem;
  max-width: 90%;
  border: 1px solid $accent-color;
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
}

.snack-bookmarks-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.4rem;

  h3 {
    margin: 0;
    font-size: 0.85rem;
    color: $accent-color;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
  }

  .count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.35rem;
    height: 1.35rem;
    border-radius: 999px;
    border: 1px solid $accent-color;
    font-size: 0.72rem;
    margin-left: 0.35rem;
  }
}

.clear-bookmarks {
  border: 1px solid $accent-color;
  background: transparent;
  color: $accent-color;
  border-radius: 999px;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
}

.snack-bookmarks-empty {
  margin: 0.3rem 0 0;
  font-size: 0.72rem;
  color: $text-color;
  opacity: 0.9;
}

.snack-bookmark-list {
  list-style: none;
  margin: 0.45rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.4rem;
}

.snack-bookmark-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.45rem;
}

.snack-bookmark-link {
  border: 1px solid $accent-color;
  background: transparent;
  color: $text-color;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-size: 0.72rem;
  text-align: left;
  flex: 1;
  cursor: pointer;
}

.snack-bookmark-remove {
  border: 1px solid $accent-color;
  background: transparent;
  color: $accent-color;
  border-radius: 999px;
  width: 1.45rem;
  height: 1.45rem;
  line-height: 1;
  font-size: 0.95rem;
  cursor: pointer;
}

.snacks-name-row {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.45rem;
}

.bookmark-toggle {
  border: 1px solid $accent-color;
  background: transparent;
  color: $accent-color;
  border-radius: 999px;
  width: 1.45rem;
  height: 1.45rem;
  line-height: 1;
  font-size: 0.9rem;
  cursor: pointer;
  flex-shrink: 0;

  &.active {
    background: $accent-color;
    color: $background-color;
  }
}

.quick-wait-section {
  margin: 1.25rem auto 1.4rem;
  max-width: 90%;
  padding: 0.8rem 0.9rem;
  border: 1px solid $accent-color;
  border-radius: 10px;
}

.quick-wait-title {
  margin: 0;
  color: $accent-color;
  text-align: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
}

.quick-wait-hint {
  margin: 0.35rem 0 0.65rem;
  color: $accent-color;
  text-align: center;
  font-size: 0.72rem;
  font-style: italic;
}

.quick-wait-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

.quick-wait-item {
  position: relative;
  padding-left: 1.35rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.15rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.62rem;
    height: 0.62rem;
    border: 1.5px solid $accent-color;
    border-radius: 999px;
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0.35rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.22rem;
    height: 0.22rem;
    background: $accent-color;
    border-radius: 999px;
  }
}

.quick-wait-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: $text-color;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    color: $accent-color;
    opacity: 1;
  }
}

.anchor-target {
  scroll-margin-top: 90px;
}

.today-hint {
  color: white;
  margin: 1rem auto;
}

.allergen-section {
  padding: 1rem;
}

.legal-disclaimer {
  font-size: 0.85rem;
  line-height: 1.4;
  color: $text-color;
  background: rgba(206, 170, 114, 0.12);
  border-left: 3px solid $accent-color;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
}

.allergen-table {
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  border-collapse: collapse;
  font-family: sans-serif;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  color: black;
}

.allergen-table thead {
  background-color: rgba(244, 244, 244, 0.79);
}

.allergen-table th,
.allergen-table td {
  padding: 10px 14px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.allergen-table th {
  color: #333;
  font-weight: 600;
}

.allergen-table tbody tr:nth-child(even) {
  background-color: rgba(250, 250, 250, 0.54);
}

.allergen-table tbody tr:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .snacks-menu {
    padding: 1.5rem 1rem 3rem;
  }
}

@media (max-width: 600px) {
  .allergen-table {
    font-size: 0.85rem;
  }
}
</style>

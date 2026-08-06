<template>

  <FeaturedSlider :items="sliderItems" />

  <div class="bundle-offer">
    <strong>Promotion</strong><br />
    1 Flasche Maybach Grauer Burgunder + kleine Queso Manchego Platte für 20€
  </div>

  <!-- Filter-Button -->
  <div class="filter-buttons">
    <button class="filter-button" :class="{ active: nonAlcoholic }" @click="toggleNonAlcoholic">
      <i class="pi pi-times" v-if="nonAlcoholic" style="font-size: 8px"></i>
      Nur alkoholfrei
    </button>
  </div>



  <!--    Bubbles-->
  <section class="drinks-menu-section" v-if="!nonAlcoholic">
    <header class="drinks-header">
      <h1 class="drinks-title">Bubbles</h1>
      <p class="drinks-subtitle">Sparkling Moments</p>
    </header>

    <div class="drinks-content">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in bubbles" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>
  <!--    Softdrinks-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">Bebidas</h1>
    </header>

    <div class="drinks-content" :class="nonAlcoholic && 'non-alcoholic'">
      <div class="drink-featured-card">
        <span class="drink-featured-badge">Neu</span>
        <div class="drink-featured-copy">
          <h2>Limonade</h2>
          <p>Erfrischende Limonade mit Gurke, Minze und TH Cherry Blossom Tonic</p>
        </div>
      </div>
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in nonAlcoholic ? softdrinks.filter(d => !d.alcoholic) : softdrinks" :key="drink.name"
          class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}<template v-if="drink.volume">&nbsp;{{ drink.volume }}</template>
              <sup v-if="drink.allergens" class="allergen-indices">{{ drink.allergens.join(',') }}</sup>
            </span>
            <div class="new-label" v-if="drink.neu">
              NEU
            </div>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>

  <!--    Bier-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">Cerveza</h1>
    </header>

    <div class="drinks-content" :class="nonAlcoholic && 'non-alcoholic'">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in nonAlcoholic ? beers.filter(d => !d.alcoholic) : beers" :key="drink.name"
          class="drinks-item">
          <div v-if="drink.available !== false" class="drink-text">
            <span class="drinks-name">{{ drink.name }}
              <sup v-if="drink.allergens" class="allergen-indices">{{ drink.allergens.join(',') }}</sup>
            </span>
          </div>
          <span v-if="drink.available !== false" class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>

  <!--    Spritz-->
  <section class="drinks-menu-section" v-if="!nonAlcoholic">
    <header class="drinks-header">
      <h1 class="drinks-title">Spritz</h1>
      <p class="drinks-subtitle">lecker</p>
    </header>

    <div class="drinks-content" :class="nonAlcoholic && 'non-alcoholic'">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in nonAlcoholic ? spritz.filter(d => !d.alcoholic) : spritz" :key="drink.name"
          class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}
              <sup v-if="drink.allergens" class="allergen-indices">{{ drink.allergens.join(',') }}</sup>
            </span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
    <p class="note">
      (*alkoholfrei für 7,50)<br><br>
      Achtet auch auf unsere Aktionen!
    </p>
  </section>

  <!--    Gin Cocktails-->
  <section class="drinks-menu-section" v-if="!nonAlcoholic">
    <header class="drinks-header">
      <h1 class="drinks-title">Gin</h1>
      <p class="drinks-subtitle">N°3 Drinks</p>
    </header>
    <br>
    <p class="note">
      Unsere Gin-Cocktails und Longdrinks bereiten wir mit dem hochwertigen N°3 Gin zu.
    </p>
    <br>
    <img src="../assets/images/no32.png" class="no3bottle" alt="no3 Gin" />
    <div class="drinks-content" :class="nonAlcoholic && 'non-alcoholic'">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in nonAlcoholic ? no3.filter(d => !d.alcoholic) : no3" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}
              <sup v-if="drink.allergens" class="allergen-indices">{{ drink.allergens.join(',') }}</sup>
            </span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>

    <div class="no3-desc">
      <img src="../assets/images/no3.png" alt="no3 Gin" />
      <p class="note">
        “No. 3 ist ein unvergleichlicher Ultra-Premium London Dry Gin, entstanden aus dem Streben nach Perfektion, um
        den besten Gin der Welt zu kreieren. Er bietet die perfekte Balance aus drei entscheidenden Aromen: Wacholder,
        Zitrus und Gewürzen. Dadurch ist er erfrischend im Geschmack und klassisch im Stil.”
      </p>
    </div>
  </section>

  <!--   Cocktails-->
  <section class="drinks-menu-section" v-if="!nonAlcoholic">
    <header class="drinks-header">
      <h1 class="drinks-title">Schnapps</h1>
      <p class="drinks-subtitle">Scheibel, Sasse & Co.</p>
    </header>
    <div class="drinks-content">
      <div class="scheibel-highlight">
        <img :src="scheibelImage" alt="Scheibel Marille" class="scheibel-photo" loading="lazy" />
        <div class="scheibel-copy">
          <h2>SCHEIBEL Premium Schnaps aus dem Schwarzwald</h2>
          <p>Seit 1921 destilliert die Familie Scheibel Obstbrände, die Genuss zu einem Erlebnis machen. Die Manufaktur verbindet bewahrte Brennkunst mit ambitionierter Technik und schafft Boutique-Destillate mit luxuriöser Tiefe.</p>
          <small class="scheibel-credit">Bild: Scheibel Schwarzwald-Brennerei</small>
        </div>
      </div>
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in schnapps" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }} <span v-if="drink.volume">{{ drink.volume }}</span></span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>

  <!-- Cocktail Tinder -->
  <CocktailTinder v-if="showCocktailTinder" id="cocktail-tinder" v-show="!nonAlcoholic" />

  <!--   0 Alk-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">0%</h1>
      <p class="drinks-subtitle">Alkoholfreie Optionen</p>
    </header>
    <div class="drinks-content" :class="nonAlcoholic && 'non-alcoholic'">
      <p class="zero-alc-disclaimer">Produkte in dieser Kategorie enthalten lt. Hersteller max. 0,5% Alkohol oder sind vollständig alkoholfrei. Bei Unsicherheiten sprecht uns gerne an.</p>
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in nonAlcoholic ? zeroAlc.filter(d => !d.alcoholic) : zeroAlc" :key="drink.name"
          class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}
              <sup v-if="drink.allergens" class="allergen-indices">{{ drink.allergens.join(',') }}</sup>
            </span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>

  <!--   Cocktails Link -->
  <section class="drinks-menu-section" v-if="!nonAlcoholic">
    <header class="drinks-header">
      <h1 class="drinks-title">Cócteles</h1>
      <p class="drinks-subtitle">Cocktails</p>
    </header>
    <div class="drinks-content cocktails-link-section">
      <router-link to="/cocktails" class="cocktails-cta">
        <div class="cocktails-cta-content">
          <span class="cocktails-emoji">🍸</span>
          <h3>Entdecke unsere Cocktails</h3>
          <p>Klassiker & Signature Drinks</p>
          <span class="cta-arrow">→</span>
        </div>
      </router-link>
    </div>
  </section>

  <br>
  <br>
  <div class="allergen-section">
    <h3>Allergene und Zusatzstoffe</h3>
    <p>
      In unseren Gerichten sind teilweise Zusatzstoffe und allergene Stoffe (wie z.b. Milch,
      Senf, Gluten etc.) enthalten. Bei weiteren Fragen zu den Produkten wenden Sie sich
      bitte an unser Personal.
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
          <tr>
            <td>12</td>
            <td>enthält Schalenfrüchte (z. B. Mandeln, Walnüsse)</td>
          </tr>
          <td>11</td>
          <td>enthält Ei</td>
        </tr>
        <tr>
          <td>12</td>
          <td>enthält Nüsse / Erdnüsse</td>
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
          <td>15</td>
          <td>enthält Senf</td>
        </tr>
        <tr>
          <td>24</td>
          <td>chininhaltig</td>
        </tr>
        <tr>
          <td>25</td>
          <td>enthält Gluten (Roggen)</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FeaturedSlider from "../components/FeaturedSlider.vue";
import { CocktailTinder } from "../components/CocktailTinder";
import { featuredPromos } from "../data/featuredPromos";
import scheibelImage from "../assets/images/scheibel_marille.png";

interface Drink {
  name: string;
  volume?: string;
  price: string;
  category: string;
  alcoholic: boolean;
  allergens?: number[];
  available?: boolean;
  neu?: boolean;
}

const nonAlcoholic = ref(false);
const sliderItems = featuredPromos;

function toggleNonAlcoholic() {
  nonAlcoholic.value = !nonAlcoholic.value;
}

// Feature flag for testing
const showCocktailTinder = computed(() => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('test') === 'cocktails';
});


const beers: Drink[] = [
  {
    name: "Radler",
    volume: "0,4l",
    price: "3,9€",
    category: "Bier",
    alcoholic: true,
    allergens: [4, 10],
    available: true,
  },
 {
   name: "Estrella Galicia Fl. 0,2",
    volume: "0,2l",
    price: "2,5€",
   category: "Bier",
   alcoholic: true,
   allergens: [4, 10],
   available: true
 },
 {
   name: "Estrella vom Fass 0,2",
    volume: "0,2l",
    price: "2,9€",
   category: "Bier",
   alcoholic: true,
   allergens: [4, 10],
   available: true
 },
 {
   name: "Estrella vom Fass 0,4",
   volume: "0,4l",
   price: "5,5€",
   category: "Bier",
   alcoholic: true,
   allergens: [4, 10],
   available: true
 },
  {
    name: "Krombacher Weizen",
    volume: "0,50l",
    price: "5,9€",
    category: "Bier",
    alcoholic: true,
    allergens: [4, 9, 10],
     available: false
  },
  {
    name: "Krombacher Weizen 0,0%",
    volume: "0,50l",
    price: "5,5€",
    category: "Bier",
    alcoholic: false,
    allergens: [4, 9, 10],
     available: false
  },
  {
    name: "Paulaner Weißbier-Zitrone 0,0%",
    volume: "0,50l",
    price: "5,5€",
    category: "Bier",
    alcoholic: false,
    allergens: [4, 9, 10],
     available: false
  },
  {
    name: "Krombacher Pils (0,0%)",
    volume: "0,33l",
    price: "3,5€",
    category: "Bier",
    alcoholic: false,
    allergens: [4, 10],
  },

];

const softdrinks: Drink[] = [
  {
    name: "Bio Saftschorle von Rauch (Maracuja, Rhabarber)",
    volume: "0,33l",
    price: "3,9€",
    category: "Softdrink",
    alcoholic: false,
    allergens: []
  },
  {
    name: "Coca Cola Zero",
    volume: "0,33l",
    price: "3,9€",
    category: "Softdrink",
    alcoholic: false,
    allergens: [1, 7, 8]
  },

  {
    name: "Wasser Classic Fl. 0,75l",
    volume: "0,75l",
    price: "6,9€",
    category: "Softdrink",
    alcoholic: false,
    allergens: []
  },
  {
    name: "Wasser Classic Fl. 0,25l",
    volume: "0,75l",
    price: "2,9€",
    category: "Softdrink",
    alcoholic: false,
    allergens: []
  },
  {
    name: "Wasser Naturell Fl. 0,75l",
    volume: "0,75l",
    price: "6,9€",
    category: "Softdrink",
    alcoholic: false,
    allergens: []
  },
];


const spritz: Drink[] = [
  { name: "*Limoncello", price: "8,5€", category: "Cocktail", alcoholic: true, allergens: [1, 4] },
  { name: "*Aperol", price: "8,5€", category: "Cocktail", alcoholic: true, allergens: [1, 4] },
  { name: "Sarti", price: "8,5€", category: "Cocktail", alcoholic: true, allergens: [1, 4] },
  { name: "Yuzu", price: "8,5€", category: "Cocktail", alcoholic: true, allergens: [1, 4] },
  { name: "Amerie - Münsterländer Aperitif", price: "8,5€", category: "Cocktail", alcoholic: true, allergens: [1, 4] },
];

const bubbles: Drink[] = [
  { name: "Prosecco 0,1l", price: "6€", category: "Bubbles", alcoholic: true, allergens: [4] },
  { name: "Prosecco 0,75l", price: "29,5€", category: "Bubbles", alcoholic: true, allergens: [4] },
  { name: "Crémant Rosé 0,75l", price: "34,5€", category: "Bubbles", alcoholic: true, allergens: [4] },
  { name: "Cava Brut 0,75l", price: "44,5€", category: "Bubbles", alcoholic: true, allergens: [4] }
];

const no3: Drink[] = [
  { name: "Negroni", price: "12€", category: "Cocktail", alcoholic: true, allergens: [4] },
  { name: "Gin Fizz", price: "12€", category: "Cocktail", alcoholic: true, allergens: [11] },
  { name: "Gin Tonic", price: "9€", category: "Cocktail", alcoholic: true, allergens: [24] },
  { name: "Tom Collins", price: "9€", category: "Cocktail", alcoholic: true, allergens: [] }
];

const schnapps: Drink[] = [
  { name: "Scheibel Feine Marille", volume: "2cl", price: "5,5€", category: "Schnapps", alcoholic: true },
  { name: "Scheibel Edles Fass 350 Nussler", volume: "2cl", price: "6,5€", category: "Schnapps", alcoholic: true },
  { name: "Sasse Kakao Nuss", volume: "2cl", price: "4,5€", category: "Schnapps", alcoholic: true },
  { name: "Sasse Salz Karamel", volume: "2cl", price: "4,5€", category: "Schnapps", alcoholic: true },
  { name: "Sasse Sechser", volume: "2cl", price: "4,5€", category: "Schnapps", alcoholic: true },
  { name: "Cardenal Mendoza", volume: "2cl", price: "5,5€", category: "Schnapps", alcoholic: true },
];

const zeroAlc: Drink[] = [
  { name: "Gin Fizz", price: "9€", category: "Cocktail", alcoholic: false, allergens: [11] },
  { name: "Gin Tonic", price: "7,5€", category: "Cocktail", alcoholic: false, allergens: [24] },
  { name: "Martini Vibrante Spritz", price: "7,5€", category: "Cocktail", alcoholic: false, allergens: [1, 4] },
  { name: "Limoncello Spritz", price: "7,5€", category: "Cocktail", alcoholic: false, allergens: [1, 4] },
  { name: "Glitter Spritz", price: "7,5€", category: "Cocktail", alcoholic: false, allergens: [1, 4] },
  { name: "Crodino Spritz", price: "7,5€", category: "Cocktail", alcoholic: false, allergens: [1, 4] },
];
</script>


<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.drinks-menu-section {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  padding: 2rem 1rem 0 1rem;
  max-width: 90%;
  margin: 10% auto;
  border: 2px solid $accent-color;
  border-radius: 8px;
  position: relative;
  margin-bottom: 20%;
}

@media (min-width: 1024px) {
  .drinks-menu-section {
    max-width: 960px;
    margin: 3.5rem auto;
    margin-bottom: 3.5rem;
  }
}

.drinks-header {
  text-align: center;
  position: absolute;
  width: 100%;
  top: -34px;
}

.drinks-title {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: $background-color;
  width: min-content;
  margin: 0;
  padding: 0 1rem;
  color: $accent-color;
  font-size: 2rem;
  font-family: 'King Red';
  font-weight: normal;
}

.drinks-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: $accent-color;
  text-align: center;
}

.zero-alc-disclaimer {
  font-size: 0.78rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.55);
  border-left: 2px solid rgba(206, 170, 114, 0.4);
  padding: 0.4rem 0.65rem;
  margin: 0 0 0.75rem;
}

.drinks-content {
  overflow-y: auto;
  padding: 1rem;
  border-radius: 5px;
}

.drink-featured-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 1rem 1.25rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(206, 170, 114, 0.55);
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(206, 170, 114, 0.14), rgba(255, 255, 255, 0.05));
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
}

.drink-featured-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #76b99290, #6b9f81b5);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  white-space: nowrap;
}

.drink-featured-copy {
  flex: 1 1 auto;
}

.drink-featured-copy h2 {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.45;
  color: #fff;
}

.drink-featured-price {
  color: $accent-color;
  font-size: 1.15rem;
  font-weight: 700;
  white-space: nowrap;
}

.scheibel-highlight {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(206, 170, 114, 0.45);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  flex-wrap: wrap;
}

.scheibel-photo {
  width: auto;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  flex: 0 0 auto;
}

.scheibel-copy {
  flex: 1 1 220px;
  color: $text-color;
}

.scheibel-copy h2 {
  margin: 0 0 0.35rem;
  font-size: 1.2rem;
  color: $accent-color;
}

.scheibel-copy p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.scheibel-credit {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
}

.drinks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
}

.drinks-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  position: relative;

  .drink-text {
    display: flex;
    flex-direction: column;
    position: relative;

    .drinks-name {
      font-size: 1rem;

      .allergen-indices {
        font-size: 10px;
      }
    }

    .new-label {
      position: absolute;
      top: 0.25rem;
      right: -50px;
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      color: #fff;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.2rem 0.6rem;
      border-radius: 0.25rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      transform: rotate(10deg);
      transform-origin: top right;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      opacity: .5;


      .drinks-item:hover & {
        transform: rotate(0deg) scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
    }

    .drinks-description {
      font-size: 0.7rem;
      font-style: italic;
    }

  }

  .drinks-price {
    font-size: 1rem;
    color: $accent-color;
  }
}

.drink-enter-active,
.drink-leave-active {
  transition: max-height 0.41s ease-in-out, opacity 0.41s ease-in-out;
  overflow: hidden;
}

.drink-enter-from,
.drink-leave-to {
  max-height: 0;
  opacity: 0;
}

.drink-enter-to,
.drink-leave-from {
  opacity: 1;
}


.no3-desc {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-bottom: .5rem;
}

.no3bottle {
  position: absolute;
  top: 33%;
  left: 50%;
  height: 120px;
}

.allergen-section {
  padding: 1rem;
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

@media (max-width: 600px) {
  .allergen-table {
    font-size: 0.85rem;
  }

  .drink-featured-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .drink-featured-price {
    align-self: flex-end;
  }

  .scheibel-highlight {
    flex-direction: column;
    text-align: center;
  }

  .scheibel-copy {
    text-align: center;
  }
}

.cocktails-link-section {
  padding: 2rem 1rem;
}

.cocktails-cta {
  display: block;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
  border: 2px solid rgba(206, 170, 114, 0.4);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(206, 170, 114, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(206, 170, 114, 0.6);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);

    &::before {
      left: 100%;
    }

    .cta-arrow {
      transform: translateX(8px);
    }
  }
}

.cocktails-cta-content {
  text-align: center;
  position: relative;
  z-index: 1;

  .cocktails-emoji {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  h3 {
    font-size: 1.75rem;
    color: #fff;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #bbb;
    margin-bottom: 1rem;
  }

  .cta-arrow {
    display: inline-block;
    font-size: 1.5rem;
    color: $accent-color;
    transition: transform 0.3s ease;
  }
}

@media (max-width: 768px) {
  .cocktails-cta-content {
    .cocktails-emoji {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}
</style>


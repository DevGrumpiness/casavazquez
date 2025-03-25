<template>
  <!--    Softdrinks-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">Bebidas</h1>
      <p class="drinks-subtitle">Getränke</p>
    </header>

    <div class="scrollContainer">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in softdrinks" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
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
      <p class="drinks-subtitle">Bierchen</p>
    </header>

    <div class="scrollContainer">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in beers" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>

  <!--    Spritz-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">Spritz</h1>
      <p class="drinks-subtitle">lecker</p>
    </header>

    <div class="scrollContainer">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in spritz" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
    <p class="drinks-note">
      Achtet auch auf unsere Aktionen!
    </p>
  </section>

  <!--    Gin Cocktails-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">Gin</h1>
      <p class="drinks-subtitle">N°3 Drinks</p>
    </header>
    <br>
    <p class="drinks-note">
      Unsere Gin-Cocktails und Longdrinks bereiten wir mit dem hochwertigen N°3 Gin zu.
    </p>
    <br>
    <img src="../assets/images/no32.png" class="no3bottle" alt="no3 Gin" />
    <div class="scrollContainer">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in no3" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>

    <div class="no3-desc">
      <img src="../assets/images/no3.png" alt="no3 Gin"/>
      <p class="drinks-note">
        “No. 3 ist ein unvergleichlicher Ultra-Premium London Dry Gin, entstanden aus dem Streben nach Perfektion, um
        den besten Gin der Welt zu kreieren. Er bietet die perfekte Balance aus drei entscheidenden Aromen: Wacholder,
        Zitrus und Gewürzen. Dadurch ist er erfrischend im Geschmack und klassisch im Stil.”
      </p>
    </div>
  </section>

  <!--   Cocktails-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">Cócteles</h1>
      <p class="drinks-subtitle">Cocktails</p>
    </header>
    <div class="scrollContainer">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in cocktails" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>

    <p class="drinks-note">
      Dein Lieblings-Cocktail ist nicht dabei? <br>Frag uns gerne! :)
    </p>
  </section>

  <!--   0 Alk-->
  <section class="drinks-menu-section">
    <header class="drinks-header">
      <h1 class="drinks-title">0%</h1>
      <p class="drinks-subtitle">Alkoholfreie Optionen</p>
    </header>
    <div class="scrollContainer">
      <transition-group name="drink" tag="ul" class="drinks-list">
        <li v-for="drink in zeroAlc" :key="drink.name" class="drinks-item">
          <div class="drink-text">
            <span class="drinks-name">{{ drink.name }}</span>
          </div>
          <span class="drinks-price">{{ drink.price }}</span>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script setup lang="ts">

const beers = [
  {name: "Krombacher Radler", volume: "0,33l", price: "3,7€", category: "Bier"},
  {name: "Krombacher Weizen", volume: "0,50l", price: "5,9€", category: "Bier", description: "Alkoholisch"},
  {name: "Krombacher Weizen 0,0%", volume: "0,50l", price: "5,5€", category: "Bier", description: "Alkoholfrei"},
  {name: "Estrella de Galicia Especial", volume: "0,20l", price: "2,5€", category: "Bier"},
  {name: "Krombacher Pils (0,0%)", volume: "0,33l", price: "3,5€", category: "Bier"},
  {name: "Krombacher Pils", volume: "0,33l", price: "3,9€", category: "Bier"},
  {name: "San Miguel", volume: "0,33l", price: "3,9€", category: "Bier"},
  {name: "Estrella de Galicia", volume: "0,33l", price: "3,9€", category: "Bier"}
]

const softdrinks = [
  {name: "Eistee von Rauch", volume: "0,33l", price: "3,9€", category: "Softdrink"},
  {name: "Bio Saftschorle von Rauch", volume: "0,33l", price: "3,7€", category: "Softdrink"},
  {name: "Thomas Henry", volume: "0,20l", price: "2,5€", category: "Softdrink"},
  {name: "Coca Cola Zero", volume: "0,33l", price: "3,9€", category: "Softdrink"},
  {name: "Wasser Classic/Naturell", volume: "0,75l", price: "6,9€", category: "Softdrink"},
]

const cocktails = [
  {name: "Pisco Sour", price: "10,5€", category: "Cocktail"},
  {name: "Espresso Martini", price: "10,5€", category: "Cocktail"},
  {name: "Whisky Sour", price: "10,5€", category: "Cocktail"},
  {name: "Mojito / Frucht-Mojito", price: "10,5€", category: "Cocktail"},
  {name: "Caipirinha", price: "10,5€", category: "Cocktail"},
]

const spritz = [
  {name: "Limoncello", price: "8,5€", category: "Cocktail"},
  {name: "Aperol", price: "8,5€", category: "Cocktail"},
  {name: "Sarti", price: "8,5€", category: "Cocktail"},
];

const no3 = [
  {name: "Negroni", price: "10,5€", category: "Cocktail"},
  {name: "Gin Fizz", price: "10,5€", category: "Cocktail"},
  {name: "Gin Tonic", price: "9,5€", category: "Cocktail"},
  {name: "Tom Collins", price: "9,5€", category: "Cocktail"},
]

const zeroAlc = [
  {name: "Mojito / Frucht Mojito", price: "9€", category: "Cocktail"},
  {name: "Caipirinha", price: "9€", category: "Cocktail"},
  {name: "Gin Fizz", price: "9€", category: "Cocktail"},
  {name: "Gin Tonic", price: "7,5€", category: "Cocktail"},
  {name: "Aperol Spritz", price: "7,5€", category: "Cocktail"},
  {name: "Sarti Spritz", price: "7,5€", category: "Cocktail"},
  {name: "Limoncello Spritz", price: "7,5€", category: "Cocktail"},
]
</script>

<style lang="scss" scoped>
$background-color: #221d32;
$text-color: #c8c0b3;
$accent-color: #ceaa72;
$font-family: 'Helvetica Neue', Arial, sans-serif;

.drinks-menu-section {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  padding: 2rem 1rem;
  max-width: 90%;
  margin: 10% auto;
  border: 2px solid $accent-color;
  border-radius: 8px;
  position: relative;

  margin-bottom: 20%;
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

.scrollContainer {
  overflow-y: auto;
  max-height: 68vh;
  padding: 1rem;
  border-radius: 5px;
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

  .drink-text {
    display: flex;
    flex-direction: column;

    .drinks-name {
      font-size: 1rem;
      font-weight: bold;
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

.drink-enter-active, .drink-leave-active {
  transition: max-height 0.41s ease-in-out, opacity 0.41s ease-in-out;
  overflow: hidden;
}

.drink-enter-from, .drink-leave-to {
  max-height: 0;
  opacity: 0;
}

.drink-enter-to, .drink-leave-from {
  max-height: 100px;
  opacity: 1;
}

.drinks-note {
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 0 auto;
  text-align: center;
  color: $accent-color;
  max-width: 90%;
}

.no3-desc {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.no3bottle {
  position: absolute;
  top: 25%;
  left: 50%;
  height: 120px;
}
</style>

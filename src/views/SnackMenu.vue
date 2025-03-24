<template>
  <div class="filter-buttons">
    <button class="filter-button" :class="{ active: veggie }" @click="toggleVeggie">
      <i class="pi pi-times" v-if="veggie" style="font-size: 8px"></i>
      Nur Veggie
    </button>
  </div>
  <section class="snacks-menu">
    <header class="snacks-header">
      <h1 class="snacks-title">SNACKS</h1>
      <p class="snacks-subtitle">FÜR DEN KLEINEN HUNGER</p>
    </header>

    <div class="scrollContainer" :class="veggie && 'veggie'">
      <transition-group name="snack" tag="ul" class="snacks-list">
        <li v-for="(snack) in snacks" :key="snack.name" class="snacks-item" :class="snack.veggie && 'veggie'">
          <div class="snack-text">
            <span class="snacks-name">{{ snack.name }}</span>
            <span class="snacks-description">{{ snack.description }}</span>
          </div>
          <span class="snacks-price">{{ snack.price }}</span>
        </li>
      </transition-group>

      <ul class="snacks-extras">
        <li class="snacks-item extra veggie">
          <span class="snacks-name">Extra Trüffel-Käse (30g)</span>
          <span class="snacks-price">3</span>
        </li>
        <li class="snacks-item extra veggie">
          <span class="snacks-name">Extra Dip</span>
          <span class="snacks-price">0,7</span>
        </li>
        <li class="snacks-item extra veggie">
          <span class="snacks-name">Extra Baguette</span>
          <span class="snacks-price">2</span>
        </li>

        <p class="snacks-note">
          Unsere Snacks & Platten sind ideal zum Teilen und bieten eine köstliche Begleitung zu unseren Drinks.
        </p>
      </ul>

      <div class="snack-section">
        <hr>
        <br>
        <br>
        <br>
        <h3 class="snacks-subtitle">Bocadillo</h3>
        <p class="snacks-note">
          Bocadillos sind ein fester Bestandteil der spanischen Esskultur.
          <br>
          Knusprige aufgebackenes Baguette mit herzhaftem Belag wie Jamón Serrano, Queso und frischer Tomate.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Bocadillo (Sandwich)</b><br>mit Burrata & Tomate</span>
            <span class="snacks-price">10,50</span>
          </li>
          <li class="snacks-item extra" v-if="!veggie">
            <span class="snacks-name">+ hauchdünnem Schinken</span>
            <span class="snacks-price">+ 3</span>
          </li>
        </ul>
      </div>

      <div class="snack-section">
        <hr>
        <br>
        <h3 class="snacks-subtitle">Chorizo in Salsa</h3>
        <p class="snacks-note">
          Chorizo ist eine der bekanntesten spanischen Wurstsorten mit würzigem Aroma und tiefer roter Farbe, ideal als
          herzhafter Snack.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra">
            <span class="snacks-name"><b>Chorizo</b><br>würzige spanische Frischwurst in Tomatensalsa und mit Brot serviert</span>
            <span class="snacks-price">7,50</span>
          </li>
        </ul>
      </div>

      <div class="snack-section">
        <hr>
        <br>
        <h3 class="snacks-subtitle">Bocadillo</h3>
        <p class="snacks-note">
          Diese traditionellen spanischen Fleischbällchen werden in einer aromatischen Tomatensauce serviert und mit
          Gewürzen, Knoblauch und Petersilie verfeinert.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Albondigas</b><br>Fleischbällchen Rind/Schwein in hausgemachter Salsa und mit Brot serviert</span>
            <span class="snacks-price">8,90</span>
          </li>
          <li class="snacks-item extra">
          </li>
          <li class="snacks-item extra">
            <span class="snacks-name">4 Stück</span>
            <span class="snacks-price">10,90</span>
          </li>
        </ul>
      </div>

      <div class="snack-section">
        <hr>
        <br>
        <h3 class="snacks-subtitle">Coca</h3>
        <p class="snacks-note">
          Coca ist ein traditionelles spanisches Flachbrot, das mit mediterranen Zutaten belegt wird, vergleichbar mit
          einer Pizza.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Vegetarisch</b><br>Fleischbällchen Rind/Schwein in hausgemachter Salsa und mit Brot serviert</span>
            <span class="snacks-price">8,90</span>
          </li>
          <li class="snacks-item extra">
          </li>
          <li class="snacks-item extra">
            <span class="snacks-name">4 Stück</span>
            <span class="snacks-price">10,90</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {ref} from "vue";

const snacks = ([
  {name: 'Nachos mit Dip', description: 'z.B. mit Aioli / Guacamole / Salsa', price: '4,9', veggie: true},
  {name: 'Oliven Mix', description: '', price: '4,9', veggie: true},
  {name: 'Baguette mit Dips', description: '', price: '4,9', veggie: true},
  {name: 'Plato de Jamón', description: '(80g) + Brot', price: '7,5', veggie: false},
  {name: 'Plato de Quesos', description: '(50g) + Brot', price: '7,5', veggie: true},
  {name: 'Plato Mixto', description: 'Jamón & Quesos + Brot', price: '14', veggie: false}
]);

const veggie = ref(false);

function toggleVeggie() {
  veggie.value = !veggie.value;
}
</script>

<style lang="scss" scoped>
$background-color: #221d32;
$text-color: #c8c0b3;
$accent-color: #ceaa72;
$font-family: 'Helvetica Neue', Arial, sans-serif;

hr {
  width: 0%; // test
  display: none;
  margin: 0 auto;
  border-color: #ceaa72;
}

.filter-buttons {
  display: flex;
  justify-content: center;
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
    max-height: 68vh;

    //box-shadow: 0px -11px 22px rgb(206 170 114 / 5%);
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

.snacks-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: $accent-color;
  text-align: center;
}

.filter-button {
  background-color: $background-color;
  border: 1px solid $accent-color;
  color: $accent-color;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  text-align: center;
  margin: 1rem 0;

  &.active {
    background-color: $accent-color;
    color: $background-color;
  }
}

.filter-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.snack-enter-active, .snack-leave-active {
  transition: max-height 0.41s ease-in-out;
  overflow: hidden;
}

.snack-enter-from, .snack-leave-to {
  max-height: 0;
}

.snack-enter-to, .snack-leave-from {
  max-height: 100px;
}

.snack-section {
  min-height: 40vh;
}

.snacks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
}

.snacks-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  .snack-text {
    display: flex;
    flex-direction: column;

    .snacks-description {
      font-size: 0.7rem;
      font-style: italic;
    }
  }

  .snacks-name {
    font-size: 1rem;
    padding-right: 1rem;
  }

  .snacks-price {
    font-size: 1rem;
    color: $accent-color;
  }

  &.extra {
    span {
      font-size: 0.7rem;
    }
  }
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

</style>

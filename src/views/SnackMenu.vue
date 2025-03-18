<template>
  <section class="snacks-menu">
    <header class="snacks-header">
      <h1 class="snacks-title">SNACKS</h1>
      <p class="snacks-subtitle">FÜR DEN KLEINEN HUNGER</p>
      <!-- Veggie Filter Button mit Icon -->
      <div class="filter-buttons">
        <button class="filter-button" :class="{ active: veggie }" @click="toggleVeggie">
          <i class="pi pi-times" v-if="veggie" style="font-size: 8px"></i>
          <i class="pi pi-seedling "></i> Nur Veggie
        </button>
      </div>
    </header>

    <ul class="snacks-list">
      <li class="snacks-item veggie">
        <div class="snack-text">
          <span class="snacks-name">Nachos mit Dip</span>
          <span class="snacks-description">z.B. mit Aioli / Guacamole / Salsa</span>
        </div>
        <span class="snacks-price">4,9</span>
      </li>
      <li class="snacks-item veggie">
        <div class="snack-text">
          <span class="snacks-name">Oliven Mix</span>
          <span class="snacks-description"></span>
        </div>
        <span class="snacks-price">4,9</span>
      </li>
      <li class="snacks-item veggie">
        <div class="snack-text">
          <span class="snacks-name">Baguette mit Dips</span>
          <span class="snacks-description"></span>
        </div>
        <span class="snacks-price">4,9</span>
      </li>
      <!-- Nicht-vegane Snacks nur anzeigen, wenn veggie false -->
      <li class="snacks-item" v-if="!veggie">
        <div class="snack-text">
          <span class="snacks-name">Plato de Jamón</span>
          <span class="snacks-description">(80g) + Brot</span>
        </div>
        <span class="snacks-price">7,5</span>
      </li>
      <li class="snacks-item veggie">
        <div class="snack-text">
          <span class="snacks-name">Plato de Quesos</span>
          <span class="snacks-description">(50g) + Brot</span>
        </div>
        <span class="snacks-price">7,5</span>
      </li>
      <li class="snacks-item" v-if="!veggie">
        <div class="snack-text">
          <span class="snacks-name">Plato Mixto</span>
          <span class="snacks-description">(130g) + Brot</span>
        </div>
        <span class="snacks-price">14</span>
      </li>
    </ul>

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
    </ul>

    <p class="snacks-note">
      Unsere Snacks & Platten sind ideal zum Teilen und bieten eine köstliche Begleitung zu unseren Drinks.
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

.snacks-menu {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  padding: 2rem 1rem;
  max-width: 90%;
  margin: 20% auto;
  border: 2px solid $accent-color;
  border-radius: 8px;
}

.snacks-header {
  text-align: center;
  transform: translate(0, -3.5rem);
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
}

.filter-buttons {
  text-align: center;
  margin: 1rem 0;
}

.filter-button {
  background-color: $background-color;
  border: 2px solid $accent-color;
  color: $accent-color;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  display: flex;
  margin: 0 auto;
  gap: 4px;
  font-size: .5rem;

  &:hover {
    background-color: $accent-color;
    color: $background-color;
  }

  &.active {
    background-color: $accent-color;
    color: $background-color;
  }
}

.filter-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
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

    .snacks-name {
      font-size: 1rem;
      font-weight: bold;
    }
    .snacks-description {
      font-size: 0.7rem;
      font-style: italic;
    }
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
    color: lighten($text-color, 10%);
  }
}

.snacks-note {
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 2rem auto;
  text-align: center;
  color: $accent-color;
  text-transform: uppercase;
  max-width: 80%;
}
</style>

<template>
  <section class="snacks-menu">
    <header class="snacks-header">
      <h1 class="snacks-title">SNACKS</h1>
      <p class="snacks-subtitle">FÜR DEN KLEINEN HUNGER</p>
    </header>

    <ul class="snacks-list">
      <li class="snacks-item veggie">
        <div class="snack-text">
          <span class="snacks-name">Nachos mit Dip</span>
          <span class="snacks-description">z.B. mit Aioli / Guacamole / Salsa </span>
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
      <li class="snacks-item">
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
      <li class="snacks-item">
        <div class="snack-text">
          <span class="snacks-name">Plato Mixto</span>
          <span class="snacks-description">(130g) + Brot </span>
        </div>
        <span class="snacks-price">14</span>
      </li>
      <br/>
      <br/>
      <li class="snacks-item extra veggie">
        <span class="snacks-name">Extra Trüffel-Käse (30g)</span>
        <span class="snacks-price">3</span>
        <li class="snacks-item extra veggie">
          <span class="snacks-name">Extra Dip</span>
          <span class="snacks-price">0,7</span>
        </li>
        <li class="snacks-item extra veggie">
          <span class="snacks-name">Extra Baguette</span>
          <span class="snacks-price">2</span>
        </li>
      </li>
    </ul>
    <p class="snacks-note">
      Unsere Snacks & Platten sind ideal zum Teilen und bieten eine köstliche Begleitung zu unseren Drinks.
    </p>
  </section>
</template>

<script setup lang="ts">
const veggie = false;
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
  background: #221d32;

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

/* Liste der Snacks */
.snacks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
}

/* Einzelner Snack */
.snacks-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  .snacks-name {
    font-size: 1rem;
  }

  .snacks-price {
    font-size: 1rem;
    color: $accent-color;
  }

  .snack-text {
    display: flex;
    flex-direction: column;

    .snacks-name {
      font-weight: bold;
    }

    .snacks-description {
      font-size: .7rem;
      font-style: italic;
    }
  }

  &.extra {
    span {
      font-size: .7rem;
    }
  }
}

.snacks-extras {
  margin-bottom: 2rem;

  p {
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

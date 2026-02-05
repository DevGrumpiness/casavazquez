<template>
  <div class="cocktails-page">
    <!-- Cocktails Section -->
    <section class="drinks-menu-section">
      <header class="drinks-header">
        <h1 class="drinks-title">Cócteles</h1>
        <p class="drinks-subtitle">Cocktails</p>
      </header>
      <div class="drinks-content">
        <transition-group name="drink" tag="ul" class="drinks-list">
          <li v-for="drink in cocktails" :key="drink.name" class="drinks-item">
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
        Dein Lieblings-Cocktail ist nicht dabei? <br>Frag uns gerne! :)
      </p>
    </section>

    <!-- Cocktail Tinder Section -->
    <section class="tinder-announcement">
      <h2 class="tinder-title">🍸 Spiele Tinder mit unseren Cocktails und finde deinen passenden Drink!</h2>
      <p class="tinder-subtitle">Swipe dich durch unsere exklusiven Cocktails und finde deinen perfekten Match!</p>
    </section>

    <CocktailTinder id="cocktail-tinder" />

    <!-- Allergen Info -->
    <div class="allergen-section">
      <h3>Allergene und Zusatzstoffe</h3>
      <p>
        In unseren Cocktails sind teilweise Zusatzstoffe und allergene Stoffe enthalten. 
        Bei weiteren Fragen zu den Produkten wenden Sie sich bitte an unser Personal.
      </p>
      <div class="allergen-quick-ref">
        <span><strong>4</strong> Sulfit</span>
        <span><strong>8</strong> Koffein</span>
        <span><strong>11</strong> Ei</span>
        <span><strong>13</strong> Milch/Laktose</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CocktailTinder } from "../components/CocktailTinder";

interface Drink {
  name: string;
  price: string;
  category: string;
  alcoholic: boolean;
  allergens?: number[];
}

const cocktails: Drink[] = [
  { name: "Yuzu Sour", price: "12€", category: "Cocktail", alcoholic: true, allergens: [11] },
  { name: "Espresso Martini", price: "12€", category: "Cocktail", alcoholic: true, allergens: [8, 13] },
  { name: "Whisky Sour", price: "12€", category: "Cocktail", alcoholic: true, allergens: [11] },
  { name: "Cosmopolitan", price: "11€", category: "Cocktail", alcoholic: true, allergens: [4] },
  { name: "Skinny Bitch", price: "9€", category: "Cocktail", alcoholic: true, allergens: [4] },
  { name: "Negroni", price: "12€", category: "Cocktail", alcoholic: true, allergens: [4] },
  { name: "Gin Fizz", price: "12€", category: "Cocktail", alcoholic: true, allergens: [4] },
];
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.cocktails-page {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.drinks-menu-section {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  padding: 2rem 1rem 0 1rem;
  max-width: 90%;
  margin: 10% auto 5rem;
  border: 2px solid $accent-color;
  border-radius: 8px;
  position: relative;
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

.drinks-content {
  overflow-y: auto;
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

.note {
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  font-style: italic;
  padding: 1rem 0;
}

.tinder-announcement {
  max-width: 90%;
  margin: 0 auto 2rem;
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 2px solid rgba(206, 170, 114, 0.3);
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(206, 170, 114, 0.05), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
}

.tinder-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.tinder-subtitle {
  font-size: 1rem;
  color: #bbb;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

.allergen-section {
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  text-align: center;

  h3 {
    color: $accent-color;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: #aaa;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.allergen-quick-ref {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  span {
    padding: 0.5rem 1rem;
    background: rgba(206, 170, 114, 0.1);
    border: 1px solid rgba(206, 170, 114, 0.3);
    border-radius: 6px;
    font-size: 0.9rem;
    color: #ddd;

    strong {
      color: $accent-color;
      margin-right: 0.3rem;
    }
  }
}
</style>

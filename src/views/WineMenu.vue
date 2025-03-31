<template>
  <section class="wine-menu-section">
    <header class="wine-header">
      <h1 class="wine-title">Vinos</h1>
      <p class="wine-subtitle">Weine</p>
    </header>
    <div class="filter-buttons">
      <button :class="{ active: selectedColor === '' }" @click="selectedColor = ''">Alle</button>
      <button :class="{ active: selectedColor === 'red' }" @click="selectedColor = 'red'">Rot</button>
      <button :class="{ active: selectedColor === 'white' }" @click="selectedColor = 'white'">Weiß</button>
      <button :class="{ active: selectedColor === 'rosé' }" @click="selectedColor = 'rosé'">Rosé</button>
    </div>
    <div class="scrollContainer">
      <transition-group name="wine" tag="ul" class="wine-list">
        <WineItem v-for="wine in filteredWines" :key="wine.id" :wine="wine" />
      </transition-group>
      <img class="rose-image" v-if="selectedColor === 'rosé'" src="../assets/images/rose.png" alt="Rosé" />
      <span v-if="selectedColor === 'rosé'" class="coming-soon">..kommt noch</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { type Wine } from "../interfaces/vino.ts";
import { dummyWines } from "../data/vinos.ts";
import WineItem from '../components/WineItem.vue';

const wines = ref<Wine[]>([]);
const selectedColor = ref<string>('');

onMounted(() => {
  wines.value = dummyWines;
});

const filteredWines = computed(() => {
  if (!selectedColor.value) return wines.value;
  return wines.value.filter(wine => wine.color === selectedColor.value);
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.wine-menu-section {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  padding: 2rem 1rem;
  max-width: 90%;
  margin: 10% auto 20%;
  border: 2px solid $accent-color;
  border-radius: 8px;
  position: relative;
  height: 100%;
}

.wine-header {
  text-align: center;
  position: absolute;
  width: 100%;
  top: -34px;
}

.wine-title {
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

.wine-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: $accent-color;
  text-align: center;
}

.filter-buttons {
  text-align: center;
  margin: 3rem 0 1rem;

  button {
    padding: 0.5rem 1rem;
    border: 1px solid $primary-color;
    background-color: #fff;
    color: $dark-color;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    margin-right: 0.5rem;

    &:hover {
      background-color: $accent-color;
      color: #fff;
      border-color: $accent-color;
    }

    &.active {
      background-color: $accent-color;
      color: #fff;
      border-color: $accent-color;
    }
  }
}

.scrollContainer {
  overflow-y: auto;
  max-height: 68vh;
  padding: 1rem;
  border-radius: 5px;
}

.wine-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rose-image {
  opacity: 0.5;
  display: block;
  margin: 1rem auto;
}

.coming-soon {
  display: block;
  width: 100%;
  text-align: right;
  padding: 8px;
  color: grey;
}

.wine-enter-active, .wine-leave-active {
  transition: max-height 0.41s ease-in-out, opacity 0.41s ease-in-out;
  overflow: hidden;
}

.wine-enter-from, .wine-leave-to {
  max-height: 0;
  opacity: 0;
}

.wine-enter-to, .wine-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>

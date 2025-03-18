<template>
  <section class="wine-menu">
    <h1 class="title">Vinos</h1>
    <div class="filter-buttons">
      <button :class="{ active: selectedColor === '' }" @click="selectedColor = ''">Alle</button>
      <button :class="{ active: selectedColor === 'red' }" @click="selectedColor = 'red'">Rot</button>
      <button :class="{ active: selectedColor === 'white' }" @click="selectedColor = 'white'">Weiß</button>
      <button :class="{ active: selectedColor === 'rosé' }" @click="selectedColor = 'rosé'">Rosé</button>
    </div>
    <div class="wine-list">
      <WineItem v-for="wine in filteredWines" :key="wine.id" :wine="wine"/>
      <img class="rose-image" v-if="selectedColor === 'rosé'" src="../assets/images/rose.png"/>
      <span v-if="selectedColor === 'rosé'" style="width: 100%; text-align: right; padding:  8px; color: grey">..kommt noch</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import {type Wine} from "../interfaces/vino.ts";
import {dummyWines} from "../data/vinos.ts";
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

.wine-menu {
  padding: 1rem;

  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: $dark-color;
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    button {
      padding: 0.5rem 1rem;
      border: 1px solid $primary-color;
      background-color: #fff;
      color: $dark-color;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

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

  .wine-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .rose-image {
    opacity: .5;
  }
}
</style>

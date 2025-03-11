<template>
  <section class="wine-menu">
    <h1>Weinkarte</h1>
    <ul>
      <li v-for="wine in wines" :key="wine.id">
        <strong>{{ wine.name }}</strong> – {{ wine.price }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Wine {
  id: number;
  name: string;
  price: string;
}

const wines = ref<Wine[]>([]);

// Dummy-Daten als Platzhalter
const dummyWines: Wine[] = [
  { id: 1, name: 'Cabernet Sauvignon', price: '€10' },
  { id: 2, name: 'Merlot', price: '€9' },
  { id: 3, name: 'Chardonnay', price: '€11' },
];

onMounted(() => {
  wines.value = dummyWines;
});
</script>

<style lang="scss" scoped>
.wine-menu {
  padding: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #ccc;
      font-size: 1.2rem;
    }
  }
}
</style>

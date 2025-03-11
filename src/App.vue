<script setup lang="ts">
</script>

<template>
  <div id="app">
    <h1>Casa Vazquez</h1>
    <router-view v-slot="{ Component, route }">
      <component
          :is="Component"
          :class="route.name !== 'LandingPage' ? 'app-container' : ''"
      />
    </router-view>
  </div>
</template>

<style scoped>
h1 {
  margin: 1rem;
}

</style>

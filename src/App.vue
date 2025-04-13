<template>
  <div class="app-container">
    <router-view/>
    <NavigationBar/>
    <Teleport to="#modal">
      <div class="modal-bg">
        <div class="modal">
          hello world
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';

</script>
<style scoped>
button {
  color: white;
}
</style>
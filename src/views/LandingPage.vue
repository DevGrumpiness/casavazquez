<template>
  <div class="landing-page p-d-flex p-flex-wrap p-jc-center">
    <!-- Weine (als aktiver Link) -->
    <router-link to="/vino" class="tile">
      <Card class="tile-card">
        <template #title>
          <h2 class="tile-title">Vino</h2>
        </template>
      </Card>
    </router-link><router-link to="/casavazquez" class="tile">
      <Card class="tile-card disabled">
        <template #title>
          <h2 class="tile-title">Getränke</h2>
        </template>
      </Card>
    </router-link><router-link to="/casavazquez" class="tile">
      <Card class="tile-card disabled">
        <template #title>
          <h2 class="tile-title">Snacks</h2>
        </template>
      </Card>
    </router-link>

    <h1 class="wip-hint">🚧👷‍♂️Die Seite befindet sich noch im Aufbau👷‍♂️🚧</h1>

  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.landing-page {
  padding: 2rem;
}

.tile {
  width: 250px;
  margin: 1rem;
  position: relative;
  text-decoration: none;
}

.tile-card {
  cursor: pointer;
  transition: transform 0.2s ease;
  background: #323c4d;
  color: #d1cbb8;

  max-width: 220px;
  text-align: center;
  margin: 0 auto;

  .disabled {
    opacity: 0.6;
    h2 {
      color: grey;
    }
  }
}

.tile:hover:not(.disabled) .tile-card {
  transform: translateY(-5px);
}

.tile-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tile-title {
  font-size: 1.5rem;
  margin: 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.wip-hint {
  text-align: center;
  font-size: 1.5rem;
  margin-top:  2rem;
  color: $dark-color;
}
</style>

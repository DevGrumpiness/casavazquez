<template>
  <div class="landing-page p-d-flex p-flex-wrap p-jc-center">
    <router-link to="/vino" class="tile">
      <Card class="tile-card">
        <div class="tile-content">
          <i class="pi pi-glass tile-icon"></i>
          <h2 class="tile-title">Weine</h2>
        </div>
      </Card>
    </router-link>

    <div class="tile disabled">
      <Card class="tile-card">
        <div class="tile-content">
          <i class="pi pi-coffee tile-icon"></i>
          <h2 class="tile-title">Getränke</h2>
          <div class="overlay">
            <span>Bald..</span>
          </div>
        </div>
      </Card>
    </div>

    <div class="tile disabled">
      <Card class="tile-card">
        <div class="tile-content">
          <i class="pi pi-apple tile-icon"></i>
          <h2 class="tile-title">Snacks</h2>
          <div class="overlay">
            <span>Bald..</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>

<style lang="scss" scoped>
.landing-page {
  padding: 2rem;
}

.tile {
  width: 250px;
  margin: 1rem;
  position: relative;
  text-decoration: none;

  .tile-card {
    cursor: pointer;
    transition: transform 0.2s ease;
    .tile-content {
      text-align: center;
      padding: 2rem 1rem;
      position: relative;
    }
  }

  &:hover:not(.disabled) .tile-card {
    transform: translateY(-5px);
  }
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
}
</style>

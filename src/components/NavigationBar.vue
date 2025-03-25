<template>
  <nav class="navigation-bar">
    <router-link to="/casavazquez" class="nav-link" active-class="active">
      <img src="../assets/images/icons8-zuhause-64.png" alt="Home" class="nav-icon" />
    </router-link>
    <router-link to="/vino" class="nav-link" active-class="active">
      <img src="../assets/images/icons8-wein-80.png" alt="Vino" class="nav-icon" />
    </router-link>
    <router-link to="/drinks" class="nav-link" active-class="active">
      <img src="../assets/images/icons8-drinks-64.png" alt="Getränke" class="nav-icon" />
    </router-link>
    <router-link to="/snacks" class="nav-link" active-class="active">
      <img src="../assets/images/icons8-snack-64.png" alt="Snacks" class="nav-icon" />
    </router-link>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

.navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  gap: 1rem;

  background-color: $primary-color;
  padding: 0.5rem 0;
  z-index: 1000;
  border-top: 1px solid $dark-color;

  .nav-link {
    text-decoration: none;
    color: $dark-color;
    font-size: 1rem;
    padding: 0.5rem;

    &.active {
      font-weight: bold;
      border-bottom: 5px solid $accent-color;
    }

    .nav-icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

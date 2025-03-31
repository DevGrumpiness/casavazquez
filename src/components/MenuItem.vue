<template>
  <section class="menu-item">
    <header class="menu-item-header">
      <h1 class="menu-item-title">{{ title }}</h1>
      <p class="menu-item-subtitle">{{ subtitle }}</p>
    </header>
    <div class="scrollContainer">
      <transition-group :name="transitionName" tag="ul" class="menu-item-list">
        <li v-for="item in items" :key="item.name" class="item">
          <div class="item-text">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-volume" v-if="item.volume">{{ item.volume }}</span>
            <span class="item-description" v-if="item.description">{{ item.description }}</span>
          </div>
          <span class="item-price">{{ item.price }}</span>
        </li>
      </transition-group>
    </div>
    <p class="menu-item-note" v-if="note">{{ note }}</p>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
interface MenuItem {
  name: string;
  volume?: string;
  description?: string;
  price: string;
  alcoholic?: boolean;
}
interface Props {
  title: string;
  subtitle: string;
  items: MenuItem[];
  note?: string;
  transitionName?: string;
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.menu-item {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  padding: 2rem 1rem;
  max-width: 90%;
  margin: 10% auto 20%;
  border: 2px solid $accent-color;
  border-radius: 8px;
  position: relative;
}
.menu-item-header {
  text-align: center;
  position: absolute;
  width: 100%;
  top: -34px;
}
.menu-item-title {
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
.menu-item-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: $accent-color;
  text-align: center;
}
.scrollContainer {
  overflow-y: auto;
  max-height: 68vh;
  padding: 1rem;
  border-radius: 5px;
}
.menu-item-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.menu-item-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  .item-text {
    display: flex;
    flex-direction: column;
    .item-name {
      font-size: 1rem;
      font-weight: bold;
    }
    .item-volume {
      font-size: 0.8rem;
      color: lighten($text-color, 10%);
    }
    .item-description {
      font-size: 0.7rem;
      font-style: italic;
    }
  }
  .item-price {
    font-size: 1rem;
    color: $accent-color;
  }
}
.menu-item-note {
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 2rem auto;
  text-align: center;
  color: $accent-color;
  max-width: 90%;
}
.menu-item-enter-active, .menu-item-leave-active {
  transition: max-height 0.41s ease-in-out, opacity 0.41s ease-in-out;
  overflow: hidden;
}
.menu-item-enter-from, .menu-item-leave-to {
  max-height: 0;
  opacity: 0;
}
.menu-item-enter-to, .menu-item-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>

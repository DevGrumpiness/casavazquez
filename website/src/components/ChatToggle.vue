<template>
  <button
    v-if="!isOpen"
    class="chat-toggle"
    aria-label="Sommelier-Chat öffnen"
    @click="toggleChat"
  >
    <span class="chat-icon">🍷</span>
    <span class="chat-label">Sommelier</span>
  </button>
</template>

<script setup lang="ts">
import { useChat } from '../composables/useChat';

const { isOpen, toggleChat } = useChat();
</script>

<style scoped lang="scss">
@use "../assets/styles/main" as *;

.chat-toggle {
  position: fixed;
  // sits above the fixed NavigationBar
  bottom: 64px;
  right: 14px;
  z-index: 1001;

  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;

  background: $background-color;
  color: $text-color;
  border: 1px solid $accent-color;
  border-radius: 50px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
  font-family: $font-family;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.chat-icon {
  font-size: 1.1rem;
}
</style>

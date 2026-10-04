<template>
  <div class="app-container">
    <router-view/>
    <template v-if="showChat">
      <ChatToggle/>
      <ChatBot/>
    </template>
    <NavigationBar/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
import ChatToggle from './components/ChatToggle.vue';
import ChatBot from './components/ChatBot.vue';
import { features } from './config/features';

const route = useRoute();
const showChat = computed(() => features.chatbot.enabled && !route.path.startsWith('/admin'));
</script>
<style scoped>
</style>

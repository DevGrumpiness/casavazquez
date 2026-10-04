<template>
  <div v-if="isOpen" class="chat-bot" role="dialog" aria-label="Sommelier-Chat">
    <div class="chat-header">
      <span class="chat-title">🍷 Sommelier</span>
      <div class="chat-actions">
        <button class="header-button" title="Neu starten" aria-label="Chat neu starten" @click="clearChat">↺</button>
        <button class="header-button" title="Schließen" aria-label="Chat schließen" @click="toggleChat">✕</button>
      </div>
    </div>

    <div ref="messagesContainer" class="chat-messages">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="message.isUser ? 'user-message' : 'bot-message'"
      >
        <div class="message-text" v-html="formatMessage(message.content)"></div>
      </div>

      <div v-if="isLoading" class="message bot-message">
        <div class="typing-indicator"><span></span><span></span><span></span></div>
      </div>
    </div>

    <div class="chat-input">
      <div v-if="messages.length <= 1" class="quick-chips">
        <button v-for="chip in quickChips" :key="chip" class="chip" @click="send(chip)">{{ chip }}</button>
      </div>
      <form @submit.prevent="send(currentMessage)">
        <input
          v-model="currentMessage"
          type="text"
          maxlength="500"
          placeholder="Worauf hast du Lust?"
          class="message-input"
        />
        <button type="submit" class="send-button" aria-label="Senden" :disabled="!currentMessage.trim() || isLoading">➤</button>
      </form>
      <p class="chat-hint">KI-Empfehlung. Bei Allergien bitte unser Team fragen.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
import { useChat } from '../composables/useChat';

const { messages, isLoading, isOpen, toggleChat, sendMessage, clearChat } = useChat();

const quickChips = ['Trockener Rotwein', 'Was passt zu Tapas?', 'Etwas Fruchtiges', 'Ein Glas Weißwein'];

const currentMessage = ref('');
const messagesContainer = ref<HTMLElement>();

const send = (text: string) => {
  if (!text.trim() || isLoading.value) return;
  currentMessage.value = '';
  sendMessage(text);
};

// Die Antwort kommt vom Sprachmodell: erst HTML escapen, dann nur **fett** und Zeilenumbrüche zulassen.
const formatMessage = (content: string): string =>
  content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

watch([() => messages.value.length, isLoading, isOpen], async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
});
</script>

<style scoped lang="scss">
@use "../assets/styles/main" as *;

.chat-bot {
  position: fixed;
  // sits above the fixed NavigationBar
  bottom: 64px;
  right: 14px;
  width: 360px;
  height: min(520px, calc(100dvh - 90px));
  z-index: 1002;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: $background-color;
  color: $text-color;
  border: 1px solid $accent-color;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  font-family: $font-family;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid rgba($accent-color, 0.5);
}

.chat-title {
  font-weight: bold;
  color: $primary-color;
}

.chat-actions {
  display: flex;
  gap: 4px;
}

.header-button {
  background: none;
  border: none;
  color: $text-color;
  font-size: 1.1rem;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.chat-messages {
  flex: 1;
  padding: 14px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  max-width: 88%;
  padding: 9px 13px;
  line-height: 1.4;
  font-size: 0.92rem;
  word-wrap: break-word;

  &.user-message {
    align-self: flex-end;
    background: $accent-color;
    color: #fff;
    border-radius: 16px 16px 4px 16px;
  }

  &.bot-message {
    align-self: flex-start;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px 16px 16px 4px;
  }

  :deep(strong) {
    color: $primary-color;
  }
}

.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 4px 0;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: $text-color;
    animation: typing 1.4s infinite ease-in-out;

    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.4);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.chat-input {
  padding: 10px 14px 8px;
  border-top: 1px solid rgba($accent-color, 0.5);

  form {
    display: flex;
    gap: 8px;
  }
}

.quick-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.chip {
  background: none;
  color: $text-color;
  border: 1px solid rgba($accent-color, 0.8);
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 0.78rem;
  cursor: pointer;

  &:hover {
    background: rgba($accent-color, 0.3);
  }
}

.message-input {
  flex: 1;
  min-width: 0;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.08);
  color: $primary-color;
  border: 1px solid rgba($accent-color, 0.6);
  border-radius: 20px;
  outline: none;
  // 16px prevents iOS from zooming into the input
  font-size: 16px;

  &:focus {
    border-color: $accent-color;
  }
}

.send-button {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  background: $accent-color;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.chat-hint {
  margin-top: 6px;
  font-size: 0.68rem;
  opacity: 0.6;
  text-align: center;
}

@media (max-width: 768px) {
  .chat-bot {
    left: 10px;
    right: 10px;
    width: auto;
  }
}
</style>

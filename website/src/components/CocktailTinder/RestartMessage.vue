<template>
  <div v-if="show" class="ct-restart-message">
    <div class="ct-restart-content">
      <span class="ct-restart-emoji">🔄</span>
      <h3>Du hast alle Cocktails durchgeswiped!</h3>
      <p>{{ matchCount }} Cocktail{{ matchCount !== 1 ? 's' : '' }} haben dir gefallen</p>
      <button @click="$emit('restart')" class="ct-btn ct-btn-primary">
        Nochmal von vorne
      </button>
      <div v-if="matchCount > 0" class="ct-liked-list">
        <h4>Wer soll es sein? 💫</h4>
        <p class="ct-liked-subtitle">Wähl selbst – oder lass den Zufall entscheiden</p>
        <div class="ct-liked-items">
          <div
            v-for="cocktail in matches"
            :key="cocktail.id"
            class="ct-liked-item"
            :class="{ 'is-rolling-highlight': rollingId === cocktail.id }"
          >
            <span class="ct-liked-info">
              <PersonaAvatar
                class="ct-liked-persona"
                :personality="cocktail.personality"
                :emoji="getPersonalityEmoji(cocktail.personality)"
                :personality-name="getPersonalityName(cocktail.personality)"
              />
              {{ cocktail.femaleName }}
            </span>
            <button @click="$emit('view', cocktail)" class="ct-liked-order-btn">
              Details
            </button>
          </div>
        </div>
        <button
          v-if="matches.length > 1"
          class="ct-random-btn"
          :disabled="isRolling"
          @click="spinRandom"
        >
          <span v-if="!isRolling">🎲 Zufällig entscheiden</span>
          <span v-else>🎰 …</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import type { Cocktail, CocktailPersonality } from '../../interfaces/cocktail';
import PersonaAvatar from './PersonaAvatar.vue';

interface Props {
  show: boolean;
  matchCount: number;
  matches: Cocktail[];
  personalities: Array<{
    type: CocktailPersonality;
    name: string;
    emoji: string;
    description: string;
  }>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  restart: [];
  view: [cocktail: Cocktail];
}>();

const getPersonalityEmoji = (personality: CocktailPersonality): string => {
  const p = props.personalities.find(p => p.type === personality);
  return p?.emoji || '🍸';
};

const getPersonalityName = (personality: CocktailPersonality): string => {
  const p = props.personalities.find(p => p.type === personality);
  return p?.name || '';
};

// "Zufällig entscheiden": cycles through the current matches and lands on one.
const isRolling = ref(false);
const rollingId = ref<string | number | null>(null);
let rollTimeout: ReturnType<typeof setTimeout> | null = null;

const ROLL_DURATION_MS = 5000;
const RESULT_DELAY_MS = 1000;

const spinRandom = () => {
  if (isRolling.value || props.matches.length === 0) {
    return;
  }

  isRolling.value = true;
  const startTime = Date.now();
  const minDelay = 70;
  const maxDelay = 300;

  const tick = () => {
    const elapsed = Date.now() - startTime;
    const pick = props.matches[Math.floor(Math.random() * props.matches.length)];
    rollingId.value = pick.id;

    if (elapsed >= ROLL_DURATION_MS) {
      rollTimeout = null;
      isRolling.value = false;
      setTimeout(() => {
        emit('view', pick);
        rollingId.value = null;
      }, RESULT_DELAY_MS);
      return;
    }

    // Ease out: ticks start fast and gradually slow down, like a real slot machine.
    const progress = elapsed / ROLL_DURATION_MS;
    const delay = minDelay + (maxDelay - minDelay) * progress ** 2;
    rollTimeout = setTimeout(tick, delay);
  };

  rollTimeout = setTimeout(tick, minDelay);
};

onUnmounted(() => {
  if (rollTimeout) {
    clearTimeout(rollTimeout);
  }
});
</script>

<style lang="scss" scoped>
.ct-restart-message {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ct-restart-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  max-width: 400px;
  
  .ct-restart-emoji {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #aaa;
    margin-bottom: 1.5rem;
  }
}

.ct-liked-list {
  margin-top: 2rem;
  
  h4 {
    font-size: 1.125rem;
    color: #fff;
    margin-bottom: 0.25rem;
  }
}

.ct-liked-subtitle {
  font-size: 0.85rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.ct-liked-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ct-liked-item {
  padding: 0.75rem;
  background: rgba(72, 187, 120, 0.15);
  border: 1px solid rgba(72, 187, 120, 0.3);
  border-radius: 10px;
  color: #48bb78;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: all 0.15s ease;

  &.is-rolling-highlight {
    background: rgba(245, 166, 35, 0.2);
    border-color: rgba(245, 166, 35, 0.7);
    color: #fff;
    transform: scale(1.02);
  }
}

.ct-liked-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.ct-liked-persona {
  flex-shrink: 0;
}

.ct-liked-persona :deep(.ct-persona-avatar) {
  width: 36px;
  height: 36px;
}

.ct-liked-persona :deep(.ct-persona-badge) {
  width: 16px;
  height: 16px;
  font-size: 0.65rem;
}

.ct-liked-order-btn {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.ct-btn {
  padding: 0.875rem 1.75rem;
  border: none;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.ct-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  
  &:hover {
    background: linear-gradient(135deg, #5568d3 0%, #65397d 100%);
  }
}

.ct-random-btn {
  margin-top: 1.25rem;
  padding: 0.8rem 1.75rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #f5a623, #e8580c);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(232, 88, 12, 0.4);
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.03);
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
}
</style>

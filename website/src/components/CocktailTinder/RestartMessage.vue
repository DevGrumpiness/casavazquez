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
        <h4>Deine Favoriten:</h4>
        <div class="ct-liked-items">
          <div v-for="cocktail in matches" :key="cocktail.id" class="ct-liked-item">
            <span class="ct-liked-info">
              {{ getPersonalityEmoji(cocktail.personality) }} {{ cocktail.femaleName }}
            </span>
            <button @click="$emit('view', cocktail)" class="ct-liked-order-btn">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cocktail, CocktailPersonality } from '../../interfaces/cocktail';

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

defineEmits<{
  restart: [];
  view: [cocktail: Cocktail];
}>();

const getPersonalityEmoji = (personality: CocktailPersonality): string => {
  const p = props.personalities.find(p => p.type === personality);
  return p?.emoji || '🍸';
};
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
    margin-bottom: 0.75rem;
  }
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
}

.ct-liked-info {
  flex: 1;
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
</style>

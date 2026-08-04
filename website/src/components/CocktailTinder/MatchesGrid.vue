<template>
  <div v-if="matches.length > 0" class="ct-matches-section">
    <h3 class="ct-matches-title">Matches 💚</h3>
    <div class="ct-matches-grid">
      <div 
        v-for="cocktail in matches" 
        :key="cocktail.id" 
        class="ct-match-thumbnail"
      >
        <button 
          class="ct-match-remove" 
          @click.stop="$emit('remove', cocktail)" 
          aria-label="Remove match"
        >
          ✕
        </button>
        <div @click="$emit('view', cocktail)" class="ct-match-content-wrapper">
          <PersonaAvatar
            class="ct-match-persona"
            :personality="cocktail.personality"
            :emoji="getPersonalityEmoji(cocktail.personality)"
            :personality-name="getPersonalityName(cocktail.personality)"
          />
          <div class="ct-match-name">{{ cocktail.femaleName }}</div>
          <div class="ct-match-price">{{ cocktail.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cocktail, CocktailPersonality } from '../../interfaces/cocktail';
import PersonaAvatar from './PersonaAvatar.vue';

interface Props {
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
  view: [cocktail: Cocktail];
  remove: [cocktail: Cocktail];
}>();

const getPersonalityEmoji = (personality: CocktailPersonality): string => {
  const p = props.personalities.find(p => p.type === personality);
  return p?.emoji || '🍸';
};

const getPersonalityName = (personality: CocktailPersonality): string => {
  const p = props.personalities.find(p => p.type === personality);
  return p?.name || '';
};
</script>

<script lang="ts">
export default {
  name: 'MatchesGrid'
};
</script>

<style lang="scss" scoped>
.ct-matches-section {
  margin-top: 1rem;
  padding: 2rem;
  background: linear-gradient(145deg, rgba(30, 30, 47, 0.5), rgba(20, 20, 30, 0.5));
  border-radius: 20px;
  border: 2px solid rgba(72, 187, 120, 0.3);
}

.ct-matches-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #48bb78;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(72, 187, 120, 0.5);
}

.ct-matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
}

.ct-match-thumbnail {
  background: linear-gradient(145deg, rgba(72, 187, 120, 0.2), rgba(56, 161, 105, 0.15));
  border: 3px solid rgba(72, 187, 120, 0.4);
  border-radius: 15px;
  padding: 1.25rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  animation: fadeInUp 0.5s ease;
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    border-color: #48bb78;
    box-shadow: 0 12px 30px rgba(72, 187, 120, 0.5);
    background: linear-gradient(145deg, rgba(72, 187, 120, 0.3), rgba(56, 161, 105, 0.25));
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ct-match-remove {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: rgba(245, 101, 101, 0.9);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  z-index: 2;
  
  &:hover {
    background: #f56565;
    transform: scale(1.1);
  }
}

.ct-match-content-wrapper {
  cursor: pointer;
}

.ct-match-persona {
  margin: 0 auto 0.5rem;
  display: flex;
}

.ct-match-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.25rem;
}

.ct-match-price {
  font-size: 0.8rem;
  color: #48bb78;
  font-weight: 500;
}

@media (max-width: 768px) {
  .ct-matches-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .ct-match-thumbnail {
    padding: 0.75rem;
  }
  
  .ct-match-persona :deep(.ct-persona-avatar) {
    width: 44px;
    height: 44px;
  }
  
  .ct-match-name {
    font-size: 0.8rem;
  }
}
</style>

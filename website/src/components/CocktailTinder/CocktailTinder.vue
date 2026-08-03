<template>
  <section class="cocktail-tinder-section">
    <!-- Baustelle Info -->
    <div class="ct-baustelle-info">
      <span class="baustelle-icon">🚧</span>
      <p class="baustelle-text">
        <strong>Baustelle:</strong> Diese Funktion befindet sich noch in der Entwicklung. Rezepte/Name/Design sind noch nicht final. Ihr könnt aber schon mal testen und Feedback geben! 🙂
      </p>
      <span class="baustelle-icon">🚧</span>
    </div>

    <div class="ct-header">
      <h1 class="ct-title">Cocktail Tinder 🍸</h1>
      <p class="ct-subtitle">Swipe für deinen perfekten Cocktail</p>
    </div>

    <!-- Alcohol Filter -->
    <div v-if="!isFinished" class="ct-filter-bar" role="group" aria-label="Filter nach Alkoholgehalt">
      <button
        v-for="filter in filterOptions"
        :key="filter.value"
        class="ct-filter-btn"
        :class="{ active: activeFilter === filter.value }"
        @click="setFilter(filter.value)"
      >
        {{ filter.label }}
      </button>
    </div>

    <!-- Picker Screen: "Wer soll es sein?" -->
    <div v-if="viewMode === 'picker'" class="ct-picker">
      <h2 class="ct-picker-heading">Wer soll es sein? 💫</h2>
      <p class="ct-picker-subheading">Wähl deinen Geschmack – oder lass den Zufall ran</p>

      <div class="ct-picker-grid">
        <button
          v-for="p in flavorPersonalities"
          :key="p.type"
          class="ct-picker-card"
          @click="pickFlavor(p.type)"
        >
          <span class="ct-picker-emoji">{{ p.emoji }}</span>
          <span class="ct-picker-name">{{ p.name }}</span>
        </button>
      </div>

      <button class="ct-picker-all-btn" @click="pickFlavor(null)">
        🍹 Alle {{ filteredCocktails.length }} Cocktails swipen
      </button>

      <div class="ct-random-picker">
        <div class="ct-random-divider"><span>oder</span></div>
        <button class="ct-random-btn" :disabled="isRolling" @click="spinRandom">
          <span v-if="!isRolling">🎰 Zufällig wählen</span>
          <span v-else>🎲 …</span>
        </button>
        <transition name="detail-fade">
          <div v-if="rollingResult" class="ct-random-reel" :class="{ 'is-rolling': isRolling }">
            <span class="ct-random-reel-emoji">{{ getPersonalityEmoji(rollingResult.personality) }}</span>
            <span class="ct-random-reel-name">{{ rollingResult.femaleName }}</span>
          </div>
        </transition>
      </div>
    </div>

    <!-- Swipe Counter -->
    <div v-if="viewMode === 'swiping'" class="ct-counter">
      <span>{{ displayCardIndex }} / {{ filteredCocktails.length }}</span>
      <span v-if="likedCocktails.length > 0" class="ct-match-badge">💚 {{ likedCocktails.length }} Match{{ likedCocktails.length !== 1 ? 'es' : '' }}</span>
    </div>

    <!-- Back to picker -->
    <div v-if="viewMode === 'swiping' && !isFinished" class="ct-back-to-picker">
      <button @click="backToPicker" class="ct-back-btn">← Zurück zur Auswahl</button>
    </div>

    <!-- Match Notification Toast -->
    <transition name="toast">
      <div v-if="showMatchToast" class="ct-match-toast">
        <span class="toast-icon">💚</span>
        <span class="toast-text">Match! {{ lastMatchedCocktail?.femaleName }}</span>
      </div>
    </transition>

    <!-- Restart Message -->
    <RestartMessage
      :show="viewMode === 'swiping' && isFinished"
      :match-count="likedCocktails.length"
      :matches="likedCocktails"
      :personalities="personalities"
      @restart="restartSwiping"
      @view="viewCocktailDetails"
    />

    <!-- Swipeable Cards Stack -->
    <div v-if="viewMode === 'swiping' && !isFinished" class="ct-card-stack">
      <CocktailCard
        v-for="(cocktail, index) in visibleCards"
        :key="`${currentCardIndex}-${cocktail.id}-${index}`"
        :cocktail="cocktail"
        :is-top="index === 0"
        :swipe-direction="swipeDirection"
        :is-dragging="isDragging"
        :card-transform="cardTransform"
        :personality-emoji="getPersonalityEmoji(cocktail.personality)"
        :personality-name="getPersonalityName(cocktail.personality)"
        :style="getCardStyle(index)"
        @swipe-left="swipeLeft"
        @swipe-right="swipeRight"
        @update-transform="cardTransform = $event"
        @update-dragging="isDragging = $event"
        @update-swipe-direction="swipeDirection = $event"
      />
    </div>

    <!-- Action Buttons -->
    <div v-if="viewMode === 'swiping' && !isFinished" class="ct-swipe-actions">
      <button @click="swipeLeft" class="ct-action-btn ct-action-nope" aria-label="Pass">
        <span class="ct-action-icon">✕</span>
      </button>
      <button @click="swipeRight" class="ct-action-btn ct-action-like" aria-label="Like">
        <span class="ct-action-icon">♥</span>
      </button>
    </div>

    <!-- Instruction -->
    <div v-if="viewMode === 'swiping' && !isFinished" class="ct-instruction">
      <p>← Swipe oder nutze die Buttons →</p>
    </div>

    <!-- Matches Section - Always visible, prominent -->
    <div v-if="!isFinished && likedCocktails.length > 0" class="ct-matches-banner">
      <h3 class="ct-banner-title">🎉 Deine Matches ({{ likedCocktails.length }})</h3>
      <p class="ct-banner-subtitle">Klick auf einen Cocktail für Details</p>
    </div>

    <!-- Matches Section -->
    <MatchesGrid
      v-if="!isFinished"
      :matches="likedCocktails"
      :personalities="personalities"
      @view="viewCocktailDetails"
      @remove="removeMatch"
    />

    <!-- Detail Card Modal -->
    <CocktailDetailModal
      :show="showDetailCard"
      :cocktail="detailCocktail"
      :personality-emoji="detailCocktail ? getPersonalityEmoji(detailCocktail.personality) : ''"
      :personality-name="detailCocktail ? getPersonalityName(detailCocktail.personality) : ''"
      @close="closeDetailCard"
      @remove="removeMatch"
      @order="orderCocktail"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import type { Cocktail, CocktailPersonality } from '../../interfaces/cocktail';
import { cocktails as cocktailsData } from '../../data/cocktails';
import CocktailCard from './CocktailCard.vue';
import MatchesGrid from './MatchesGrid.vue';
import CocktailDetailModal from './CocktailDetailModal.vue';
import RestartMessage from './RestartMessage.vue';

interface Personality {
  type: CocktailPersonality;
  name: string;
  emoji: string;
  description: string;
}

const personalities: Personality[] = [
  { type: 'bitter', name: 'Verbittert', emoji: '🎩', description: 'Herb, intensiv und charakterstark' },
  { type: 'sweet', name: 'Süß', emoji: '🍓', description: 'Süß, fruchtig und unwiderstehlich' },
  { type: 'mysterious', name: 'Mysteriös', emoji: '🌙', description: 'Dunkel, komplex und rätselhaft' },
  { type: 'bitchy', name: 'Bitchy', emoji: '🔥', description: 'Scharf, würzig und unvergesslich' },
  { type: 'adventurous', name: 'Abenteuerlustig', emoji: '🗺️', description: 'Mutig, einzigartig und experimentell' },
  { type: 'virgin', name: 'Virgin', emoji: '😇', description: 'Alkoholfrei, erfrischend und leicht' },
  { type: 'fruity', name: 'Fruchtig', emoji: '🍇', description: 'Fruchtig-frisch und ausgewogen' },
];

const allCocktails = computed(() => cocktailsData);

const flavorPersonalities = computed(() => personalities.filter(p => p.type !== 'virgin'));

type AlcoholFilter = 'all' | 'alcoholic' | 'virgin';
const activeFilter = ref<AlcoholFilter>('all');
const filterOptions: { value: AlcoholFilter; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'alcoholic', label: '🍸 Mit Alkohol' },
  { value: 'virgin', label: '🌿 Alkoholfrei' },
];

const alcoholFilteredCocktails = computed(() => {
  if (activeFilter.value === 'alcoholic') {
    return allCocktails.value.filter(c => c.alcoholic);
  }
  if (activeFilter.value === 'virgin') {
    return allCocktails.value.filter(c => !c.alcoholic);
  }
  return allCocktails.value;
});

const viewMode = ref<'picker' | 'swiping'>('picker');
const personalityFilter = ref<CocktailPersonality | null>(null);

const filteredCocktails = computed(() => {
  if (personalityFilter.value) {
    return alcoholFilteredCocktails.value.filter(c => c.personality === personalityFilter.value);
  }
  return alcoholFilteredCocktails.value;
});

const setFilter = (filter: AlcoholFilter) => {
  activeFilter.value = filter;
  currentCardIndex.value = 0;
};

const pickFlavor = (type: CocktailPersonality | null) => {
  personalityFilter.value = type;
  currentCardIndex.value = 0;
  viewMode.value = 'swiping';
};

const backToPicker = () => {
  viewMode.value = 'picker';
  personalityFilter.value = null;
  currentCardIndex.value = 0;
};

const currentCardIndex = ref(0);
const likedCocktails = ref<Cocktail[]>([]);
const swipeDirection = ref<'left' | 'right' | null>(null);
const cardTransform = ref('');
const isDragging = ref(false);
const showDetailCard = ref(false);
const detailCocktail = ref<Cocktail | null>(null);
const isAnimating = ref(false);
const showMatchToast = ref(false);
const lastMatchedCocktail = ref<Cocktail | null>(null);
const isFinished = computed(() => currentCardIndex.value >= filteredCocktails.value.length);
const displayCardIndex = computed(() => {
  if (filteredCocktails.value.length === 0) {
    return 0;
  }
  return Math.min(currentCardIndex.value + 1, filteredCocktails.value.length);
});

const visibleCards = computed(() => {
  const cards = [];
  for (let i = 0; i < 3 && currentCardIndex.value + i < filteredCocktails.value.length; i++) {
    cards.push(filteredCocktails.value[currentCardIndex.value + i]);
  }
  return cards;
});

const getCardStyle = (index: number) => {
  const isTop = index === 0;
  const baseStyle = {
    zIndex: 10 - index,
  };
  
  if (isTop) {
    return baseStyle;
  }
  
  return {
    ...baseStyle,
    transform: `scale(${1 - index * 0.05}) translateY(${index * 10}px)`
  };
};

const getPersonalityEmoji = (personality: CocktailPersonality): string => {
  const p = personalities.find(p => p.type === personality);
  return p?.emoji || '🍸';
};

const getPersonalityName = (personality: CocktailPersonality): string => {
  const p = personalities.find(p => p.type === personality);
  return p?.name || '';
};

// Random "slot machine" picker: cycles rapidly through the pool and lands on one cocktail.
const isRolling = ref(false);
const rollingResult = ref<Cocktail | null>(null);
let rollInterval: ReturnType<typeof setInterval> | null = null;

const spinRandom = () => {
  if (isRolling.value) {
    return;
  }
  const pool = alcoholFilteredCocktails.value;
  if (pool.length === 0) {
    return;
  }

  isRolling.value = true;
  let ticks = 0;
  const maxTicks = 16;
  rollInterval = setInterval(() => {
    rollingResult.value = pool[Math.floor(Math.random() * pool.length)];
    ticks++;
    if (ticks >= maxTicks) {
      if (rollInterval) {
        clearInterval(rollInterval);
        rollInterval = null;
      }
      isRolling.value = false;
      const finalPick = rollingResult.value;
      if (finalPick) {
        setTimeout(() => revealRandomPick(finalPick), 400);
      }
    }
  }, 90);
};

const revealRandomPick = (cocktail: Cocktail) => {
  if (!likedCocktails.value.some(c => c.id === cocktail.id)) {
    likedCocktails.value.push(cocktail);
    lastMatchedCocktail.value = cocktail;
    showMatchToast.value = true;
    setTimeout(() => {
      showMatchToast.value = false;
    }, 2000);
  }
  viewCocktailDetails(cocktail);
};

onUnmounted(() => {
  if (rollInterval) {
    clearInterval(rollInterval);
  }
});

const swipeLeft = () => {
  if (currentCardIndex.value >= filteredCocktails.value.length || isAnimating.value) {
    return;
  }

  isAnimating.value = true;
  swipeDirection.value = 'left';
  cardTransform.value = '';
  setTimeout(() => {
    currentCardIndex.value++;
    swipeDirection.value = null;
    isAnimating.value = false;
  }, 400);
};

const swipeRight = () => {
  if (currentCardIndex.value >= filteredCocktails.value.length || isAnimating.value) {
    return;
  }

  const currentCocktail = filteredCocktails.value[currentCardIndex.value];

  isAnimating.value = true;
  swipeDirection.value = 'right';
  cardTransform.value = '';
  likedCocktails.value.push(currentCocktail);
  
  // Show match toast notification
  lastMatchedCocktail.value = currentCocktail;
  showMatchToast.value = true;
  setTimeout(() => {
    showMatchToast.value = false;
  }, 2000);
  
  setTimeout(() => {
    currentCardIndex.value++;
    swipeDirection.value = null;
    isAnimating.value = false;
  }, 400);
};

const restartSwiping = () => {
  currentCardIndex.value = 0;
  likedCocktails.value = [];
  isAnimating.value = false;
  viewMode.value = 'picker';
  personalityFilter.value = null;
  rollingResult.value = null;
};

const viewCocktailDetails = (cocktail: Cocktail) => {
  detailCocktail.value = cocktail;
  showDetailCard.value = true;
};

const closeDetailCard = () => {
  showDetailCard.value = false;
  detailCocktail.value = null;
};

const orderCocktail = (_cocktail: Cocktail) => {
  // Navigate to cocktails page
  window.location.href = '/cocktails';
};

const removeMatch = (cocktail: Cocktail) => {
  const index = likedCocktails.value.findIndex(c => c.id === cocktail.id);
  if (index !== -1) {
    likedCocktails.value.splice(index, 1);
  }
  closeDetailCard();
};
</script>

<style lang="scss" scoped>
.cocktail-tinder-section {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem 1rem;
  min-height: 600px;
}

.ct-baustelle-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  
  .baustelle-icon {
    font-size: 1.5rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .baustelle-text {
    color: #78350f;
    font-size: 1rem;
    margin: 0;
    text-align: center;
    
    strong {
      font-weight: 700;
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.ct-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.ct-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ct-subtitle {
  font-size: 1.125rem;
  color: #999;
}

.ct-filter-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.ct-filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: #ccc;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(206, 170, 114, 0.6);
  }

  &.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
    color: #fff;
  }
}

.ct-picker {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(145deg, rgba(30, 30, 47, 0.6), rgba(20, 20, 30, 0.6));
  border: 2px solid rgba(206, 170, 114, 0.25);
  border-radius: 20px;
}

.ct-picker-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.35rem;
}

.ct-picker-subheading {
  font-size: 0.95rem;
  color: #aaa;
  margin-bottom: 1.5rem;
}

.ct-picker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  max-width: 480px;
  margin: 0 auto 1.25rem;
}

.ct-picker-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1rem 0.5rem;
  border-radius: 14px;
  border: 2px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #eee;
  cursor: pointer;
  transition: all 0.2s ease;

  .ct-picker-emoji {
    font-size: 1.75rem;
  }

  .ct-picker-name {
    font-size: 0.8rem;
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(206, 170, 114, 0.6);
    background: rgba(206, 170, 114, 0.1);
  }
}

.ct-picker-all-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.ct-random-picker {
  margin-top: 1.75rem;
}

.ct-random-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #777;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
  }
}

.ct-random-btn {
  padding: 0.9rem 2rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #f5a623, #e8580c);
  color: #fff;
  font-size: 1.05rem;
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

.ct-random-reel {
  margin-top: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(245, 166, 35, 0.4);

  .ct-random-reel-emoji {
    font-size: 1.75rem;
  }

  .ct-random-reel-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
  }

  &.is-rolling {
    filter: blur(1.5px);
    animation: reelShake 0.09s linear infinite;
  }
}

@keyframes reelShake {
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
}

.ct-back-to-picker {
  text-align: center;
  margin-bottom: 1rem;
}

.ct-back-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #ceaa72;
  }
}

.ct-counter {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #aaa;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.ct-match-badge {
  background: linear-gradient(135deg, #48bb78, #38a169);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(72, 187, 120, 0.4);
  animation: bounceIn 0.5s ease;
}

@keyframes bounceIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.ct-match-toast {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #48bb78, #38a169);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(72, 187, 120, 0.4);
  z-index: 3000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toast-icon {
  font-size: 1.5rem;
  animation: heartbeat 0.6s ease infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.toast-enter-active {
  animation: slideDown 0.3s ease;
}

.toast-leave-active {
  animation: slideUp 0.3s ease;
}

@keyframes slideDown {
  from {
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
  }
}

.ct-card-stack {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 500px;
  margin: 0 auto 2rem;
}

.ct-swipe-actions {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.ct-action-btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
}

.ct-action-nope {
  background: linear-gradient(135deg, #f56565, #c53030);
  
  .ct-action-icon {
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
}

.ct-action-like {
  background: linear-gradient(135deg, #48bb78, #38a169);
  
  .ct-action-icon {
    color: white;
    font-size: 2rem;
  }
}

.ct-instruction {
  text-align: center;
  margin-top: 1rem;
  
  p {
    font-size: 0.9rem;
    color: #888;
    font-style: italic;
  }
}

.ct-matches-banner {
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(72, 187, 120, 0.15), rgba(56, 161, 105, 0.15));
  border: 2px solid rgba(72, 187, 120, 0.5);
  border-radius: 16px;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(72, 187, 120, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(72, 187, 120, 0.5);
  }
}

.ct-banner-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #48bb78;
  margin-bottom: 0.5rem;
}

.ct-banner-subtitle {
  font-size: 1rem;
  color: #aaa;
}

@media (max-width: 768px) {
  .ct-title {
    font-size: 2rem;
  }
  
  .ct-card-stack {
    max-width: 100%;
    height: 480px;
  }
  
  .ct-action-btn {
    width: 60px;
    height: 60px;
  }
}
</style>

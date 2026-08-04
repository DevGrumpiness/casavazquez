<template>
  <div 
    class="ct-swipe-card"
    :class="{
      'ct-card-top': isTop,
      'ct-card-behind': !isTop,
      'ct-swiping-left': swipeDirection === 'left' && isTop && !isDragging,
      'ct-swiping-right': swipeDirection === 'right' && isTop && !isDragging,
      'ct-dragging': isDragging && isTop
    }"
    :style="cardStyle"
    @touchstart="isTop ? handleTouchStart($event) : null"
    @touchmove="isTop ? handleTouchMove($event) : null"
    @touchend="isTop ? handleTouchEnd($event) : null"
    @mousedown="isTop ? handleMouseDown($event) : null"
  >
    <PersonaAvatar
      class="ct-card-persona"
      :personality="cocktail.personality"
      :emoji="personalityEmoji"
      :personality-name="personalityName"
      size="lg"
    />
    <span class="ct-card-alcohol-badge" :class="{ 'is-virgin': !cocktail.alcoholic }">
      {{ cocktail.alcoholic ? '🍸 Mit Alkohol' : '🌿 Alkoholfrei' }}
    </span>
    <h2 class="ct-card-name">{{ cocktail.femaleName }}</h2>
    
    <div class="ct-card-characteristics">
      <span v-for="char in cocktail.characteristics" :key="char" class="ct-card-tag">
        {{ char }}
      </span>
    </div>
    
    <p class="ct-card-description">{{ cocktail.description }}</p>
    
    <div class="ct-card-ingredients">
      <h4>Zutaten:</h4>
      <ul>
        <li v-for="ingredient in cocktail.ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    
    <div class="ct-card-price">{{ cocktail.price }}</div>

    <!-- Swipe Indicators -->
    <div class="ct-swipe-indicator ct-nope" :class="{ visible: swipeDirection === 'left' && isTop }">
      NOPE
    </div>
    <div class="ct-swipe-indicator ct-like" :class="{ visible: swipeDirection === 'right' && isTop }">
      LIKE
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Cocktail } from '../../interfaces/cocktail';
import PersonaAvatar from './PersonaAvatar.vue';

interface Props {
  cocktail: Cocktail;
  isTop: boolean;
  swipeDirection: 'left' | 'right' | null;
  isDragging: boolean;
  cardTransform: string;
  personalityEmoji: string;
  personalityName: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  swipeLeft: [];
  swipeRight: [];
  updateTransform: [transform: string];
  updateDragging: [dragging: boolean];
  updateSwipeDirection: [direction: 'left' | 'right' | null];
}>();

const touchStartX = ref(0);
const touchStartY = ref(0);

const cardStyle = computed(() => {
  if (props.isTop && props.isDragging && props.cardTransform) {
    return { transform: props.cardTransform };
  }
  return {};
});

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX;
  touchStartY.value = e.touches[0].clientY;
  emit('updateDragging', false);
  emit('updateTransform', '');
};

const handleTouchMove = (e: TouchEvent) => {
  if (!touchStartX.value || !touchStartY.value) return;
  
  const deltaX = e.touches[0].clientX - touchStartX.value;
  const deltaY = e.touches[0].clientY - touchStartY.value;
  
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
    if (!props.isDragging) {
      emit('updateDragging', true);
    }
    e.preventDefault();
    
    const rotation = deltaX / 15;
    const opacity = Math.max(0.5, 1 - Math.abs(deltaX) / 300);
    const transform = `translateX(${deltaX}px) rotate(${rotation}deg) scale(${opacity + 0.5})`;
    emit('updateTransform', transform);
    
    if (deltaX > 30) {
      emit('updateSwipeDirection', 'right');
    } else if (deltaX < -30) {
      emit('updateSwipeDirection', 'left');
    } else {
      emit('updateSwipeDirection', null);
    }
  }
};

const handleTouchEnd = (e: TouchEvent) => {
  if (!props.isDragging) return;
  
  const deltaX = (e.changedTouches[0]?.clientX || touchStartX.value) - touchStartX.value;
  emit('updateDragging', false);
  
  if (Math.abs(deltaX) > 80) {
    if (deltaX > 0) {
      emit('swipeRight');
    } else {
      emit('swipeLeft');
    }
  } else {
    emit('updateTransform', '');
    emit('updateSwipeDirection', null);
  }
  
  touchStartX.value = 0;
  touchStartY.value = 0;
};

const handleMouseDown = (e: MouseEvent) => {
  const startX = e.clientX;
  emit('updateDragging', true);
  emit('updateTransform', '');
  
  const handleMouseMove = (moveEvent: MouseEvent) => {
    if (!props.isDragging) return;
    
    const deltaX = moveEvent.clientX - startX;
    const rotation = deltaX / 15;
    const opacity = Math.max(0.5, 1 - Math.abs(deltaX) / 300);
    const transform = `translateX(${deltaX}px) rotate(${rotation}deg) scale(${opacity + 0.5})`;
    emit('updateTransform', transform);
    
    if (deltaX > 30) {
      emit('updateSwipeDirection', 'right');
    } else if (deltaX < -30) {
      emit('updateSwipeDirection', 'left');
    } else {
      emit('updateSwipeDirection', null);
    }
  };
  
  const handleMouseUp = (upEvent: MouseEvent) => {
    const deltaX = upEvent.clientX - startX;
    emit('updateDragging', false);
    
    if (Math.abs(deltaX) > 80) {
      if (deltaX > 0) {
        emit('swipeRight');
      } else {
        emit('swipeLeft');
      }
    } else {
      emit('updateTransform', '');
      emit('updateSwipeDirection', null);
    }
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};
</script>

<style lang="scss" scoped>
.ct-swipe-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgba(30, 30, 47, 0.95), rgba(20, 20, 30, 0.95));
  border: 2px solid rgba(206, 170, 114, 0.3);
  border-radius: 20px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  cursor: grab;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease, box-shadow 0.2s ease;
  backdrop-filter: blur(10px);
  will-change: transform;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  &.ct-card-top {
    z-index: 3;
  }
  
  &.ct-card-behind {
    pointer-events: none;
    opacity: 0.7;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  &.ct-dragging {
    transition: none;
    cursor: grabbing;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  &.ct-swiping-left {
    transform: translateX(-150%) rotate(-30deg) !important;
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335), opacity 0.4s ease;
  }
  
  &.ct-swiping-right {
    transform: translateX(150%) rotate(30deg) !important;
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335), opacity 0.4s ease;
  }
}

.ct-card-persona {
  margin: 0 auto 0.5rem;
  display: flex;
}

.ct-card-alcohol-badge {
  display: block;
  margin: 0 auto 0.75rem;
  width: fit-content;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #fff;
  background: linear-gradient(135deg, #ceaa72, #a9803f);

  &.is-virgin {
    background: linear-gradient(135deg, #48bb78, #2f855a);
  }
}

.ct-card-category {
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #ceaa72;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
  transform: translate(-110px, -40px) rotate(-45deg);
}

.ct-card-name {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
}

.ct-card-characteristics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.ct-card-tag {
  padding: 0.3rem 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

.ct-card-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #ccc;
  margin-bottom: 1rem;
  text-align: center;
  flex-shrink: 0;
}

.ct-card-ingredients {
  margin-bottom: 1rem;
  flex-shrink: 0;
  
  h4 {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: #fff;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    
    li {
      padding: 0.25rem 0.65rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      color: #bbb;
      font-size: 0.85rem;
    }
  }
}

.ct-card-price {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-top: auto;
  padding-top: 0.5rem;
}

.ct-swipe-indicator {
  position: absolute;
  top: 50%;
  font-size: 3rem;
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  border: 4px solid;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(-50%) rotate(-20deg);
  transition: opacity 0.2s ease;
  
  &.visible {
    opacity: 1;
  }
  
  &.ct-nope {
    left: 20px;
    color: #f56565;
    border-color: #f56565;
  }
  
  &.ct-like {
    right: 20px;
    color: #48bb78;
    border-color: #48bb78;
  }
}

@media (max-width: 768px) {
  .ct-swipe-card {
    padding: 1.5rem 1rem;
  }
  
  .ct-card-name {
    font-size: 1.5rem;
  }
  
  .ct-swipe-indicator {
    font-size: 2rem;
    padding: 0.4rem 1rem;
  }
}
</style>

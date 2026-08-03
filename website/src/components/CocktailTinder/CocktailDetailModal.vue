<template>
  <transition name="detail-fade">
    <div v-if="show && cocktail" class="ct-detail-overlay" @click="$emit('close')">
      <div class="ct-detail-card" @click.stop>
        <button class="ct-detail-close" @click="$emit('close')" aria-label="Close">✕</button>
        
        <div class="ct-card-personality">{{ personalityEmoji }}</div>
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
        
        <div class="ct-detail-actions">
          <button @click="$emit('remove', cocktail)" class="ct-btn ct-btn-remove">
            Aus Matches entfernen
          </button>
          <!-- <button @click="$emit('order', cocktail)" class="ct-btn ct-btn-primary">
            Jetzt bestellen
          </button> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { Cocktail } from '../../interfaces/cocktail';

interface Props {
  show: boolean;
  cocktail: Cocktail | null;
  personalityEmoji: string;
  personalityName: string;
}

defineProps<Props>();

defineEmits<{
  close: [];
  remove: [cocktail: Cocktail];
  order: [cocktail: Cocktail];
}>();
</script>

<style lang="scss" scoped>
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: all 0.3s ease;
}

.detail-fade-enter-from,
.detail-fade-leave-to {
  opacity: 0;
}

.ct-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
}

.ct-detail-card {
  background: linear-gradient(145deg, rgba(30, 30, 47, 0.98), rgba(20, 20, 30, 0.98));
  border: 2px solid rgba(206, 170, 114, 0.4);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  backdrop-filter: blur(10px);
}

.ct-detail-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1.25rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
}

.ct-card-personality {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 0.5rem;
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
}

.ct-card-ingredients {
  margin-bottom: 1rem;
  
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
  margin-top: 1rem;
}

.ct-detail-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
  flex-wrap: wrap;
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

.ct-btn-remove {
  background: rgba(245, 101, 101, 0.2);
  color: #f56565;
  border: 2px solid #f56565;
  
  &:hover {
    background: rgba(245, 101, 101, 0.3);
  }
}
</style>

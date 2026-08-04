<template>
  <div class="ct-persona-avatar" :class="`ct-persona-avatar--${size}`" :style="{ '--persona-color': color }">
    <img v-if="image" :src="image" :alt="`${personalityName} Persona`" class="ct-persona-img" />
    <span v-else class="ct-persona-fallback" aria-hidden="true">{{ emoji }}</span>
    <span class="ct-persona-badge" aria-hidden="true">{{ emoji }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CocktailPersonality } from '../../interfaces/cocktail';
import { useGenderPreference } from '../../composables/useGenderPreference';
import { getPersonaImage, getPersonalityColor } from './personalityTheme';

interface Props {
  personality: CocktailPersonality;
  emoji: string;
  personalityName: string;
  size?: 'sm' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
});

const { genderPreference } = useGenderPreference();

const image = computed(() => getPersonaImage(props.personality, genderPreference.value));
const color = computed(() => getPersonalityColor(props.personality));
</script>

<style lang="scss" scoped>
.ct-persona-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--persona-color, #667eea);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.15));
  box-shadow: 0 0 12px color-mix(in srgb, var(--persona-color, #667eea) 55%, transparent);
  overflow: visible;
  flex-shrink: 0;

  &--sm {
    width: 56px;
    height: 56px;
  }

  &--lg {
    width: 88px;
    height: 88px;
  }
}

.ct-persona-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.ct-persona-fallback {
  font-size: 1.75rem;
}

.ct-persona-badge {
  position: absolute;
  bottom: -4px;
  right: -4px;
  font-size: 0.9rem;
  line-height: 1;
  background: rgba(20, 20, 30, 0.9);
  border: 1px solid var(--persona-color, #667eea);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ct-persona-avatar--lg .ct-persona-badge {
  width: 28px;
  height: 28px;
  font-size: 1.1rem;
}
</style>

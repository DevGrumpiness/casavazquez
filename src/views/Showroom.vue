<template>
  <div class="showroom">
    <h2 class="title">Was gibt es hier?</h2>
    <div class="slideshow">
      <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="index === currentIndex"
          class="slide"
      >
        <img
            :src="slide"
            :alt="`Slide ${index + 1}`"
            class="slide-image"
            loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Showroom',
  setup() {
    const slideNames = [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
      '6.jpg', '7.jpg',  '9.jpg', '10.webp',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'
    ];
    const base = import.meta.env.BASE_URL;
    const slides = slideNames.map(name => `${base}${name}`);

    const currentIndex = ref(0);
    let intervalId: number;

    const startSlideshow = () => {
      intervalId = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.length;
      }, 5000);
    };

    onMounted(startSlideshow);
    onUnmounted(() => window.clearInterval(intervalId));

    return { slides, currentIndex };
  },
});
</script>

<style scoped>
.showroom {
  text-align: center;
}
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.slideshow {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 80vh;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>

<template>
  <section v-if="shouldShowBanner" class="today-promo-banner" aria-label="Tagesaktion">
    <div class="today-promo-banner__accent"></div>
    <div class="today-promo-banner__content">
      <p class="today-promo-banner__label">Donnerstag 07.05.</p>
      <h2 class="today-promo-banner__title">
        Heute Wein-Tasting mit K&amp;D Wine Stories -
        <router-link to="/wine-tasting" class="today-promo-banner__link">mehr infos hier</router-link>
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const tastingPromoDate = {
  year: 2026,
  month: 5,
  day: 7,
} as const;

const shouldShowBanner = computed(() => {
  const today = new Date();

  return route.name === "LandingPage"
    && today.getFullYear() === tastingPromoDate.year
    && today.getMonth() === tastingPromoDate.month - 1
    && today.getDate() === tastingPromoDate.day;
});
</script>

<style scoped lang="scss">
.today-promo-banner {
  position: relative;
  display: grid;
  grid-template-columns: 8px 1fr;
  overflow: hidden;
  width: min(960px, calc(100% - 2rem));
  margin: 1.5rem auto 0;
  border-radius: 22px;
  border: 1px solid rgba(139, 111, 71, 0.2);
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.6), transparent 32%),
    linear-gradient(145deg, rgba(255, 249, 241, 0.98), rgba(247, 238, 223, 0.96));
  box-shadow: 0 18px 42px rgba(32, 22, 16, 0.14);
}

.today-promo-banner__accent {
  background: linear-gradient(180deg, #6f1026 0%, #9f2437 58%, #ceaa72 100%);
}

.today-promo-banner__content {
  position: relative;
  padding: 1.15rem 1.25rem 1.2rem;
}

.today-promo-banner__content::after {
  content: "";
  position: absolute;
  top: -28px;
  right: -34px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 170, 114, 0.18) 0%, rgba(206, 170, 114, 0) 72%);
  pointer-events: none;
}

.today-promo-banner__label {
  position: relative;
  margin: 0 0 0.45rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(111, 16, 38, 0.78);
  font-weight: 700;
}

.today-promo-banner__title {
  position: relative;
  margin: 0;
  font-family: "King Red", serif;
  font-weight: 400;
  font-size: clamp(1.6rem, 4.4vw, 2.5rem);
  line-height: 1.05;
  color: #6f1026;
  text-align: left;
}

.today-promo-banner__link {
  position: relative;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

@media (max-width: 640px) {
  .today-promo-banner {
    width: calc(100% - 1.5rem);
    margin-top: 1rem;
    border-radius: 18px;
  }

  .today-promo-banner__content {
    padding: 1rem 1rem 1.05rem;
  }

  .today-promo-banner__label {
    font-size: 0.7rem;
  }
}
</style>
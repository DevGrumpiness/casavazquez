<template>
  <main>
    <header class="hero">
      <div class="hero-content">
        <h1>Casa Vazquez Münster – Weinbar, Tapas & Cocktails</h1>
        <p class="hero-location">Warendorfer Str 113 · 48145 Münster</p>
      </div>
    </header>

    <!-- <section class="promo-card" aria-label="MwSt-Senkung Aktion">
      <div class="promo-card__glow"></div>
      <div class="promo-card__content">
        <p class="promo-card__eyebrow">MwSt-Senkung Special</p>
        <h2 class="promo-card__headline">Im Januar 50€ Gutschein kaufen und nur 40€ bezahlen!</h2>
        <p class="promo-card__detail">
          Perfekt für eure Afterwork-Abende: sichert euch jetzt den vergünstigten Gutschein - nur im Januar!
        </p>
        <p style="font-size: smaller; text-align: center;">(1x pro Person und pro Abend einlösbar. Gültig ab 1. Tag nach dem Kauf.) </p>
      </div>
    </section> -->

    <!-- Announcement Modal -->
    <!-- <BaseModal v-model="showAnnouncement">
      <div style="display:flex;flex-direction:column;gap:0.75rem">
        <h2 style="margin:0">Saludos desde Madrid</h2>
        <p style="margin:0">
          Diesen Samstag bekommt ihr zu jedem Getränk eine kleine Tapita – ganz wie ihr es aus der Hauptstadt Spaniens kennt.
        </p>
      </div>
    </BaseModal> -->

    <section class="tile-navigation" aria-label="Navigation zu Speisekarten">
      <router-link class="nav-link" to="/vino">
        <div class="navigation-tile">Weine</div>
      </router-link>
      <router-link class="nav-link" to="/drinks">
        <div class="navigation-tile">Getränke</div>
      </router-link>
      <router-link class="nav-link" to="/snacks">
        <div class="navigation-tile">Snacks</div>
      </router-link>
      <router-link class="nav-link" to="/showroom">
        <div class="navigation-tile">Galerie</div>
      </router-link>
      <router-link class="nav-link" to="/wine-tasting">
        <div class="navigation-tile">Tasting</div>
      </router-link>
      <!-- <router-link class="nav-link" to="/cocktails">
        <div class="navigation-tile cocktail-tinder-tile">Cocktail Tinder 🍸</div>
      </router-link> -->
    </section>
    
    <section class="news-section" aria-label="Aktuelle Neuigkeiten">
      <h2>Aktuelles</h2>
      <div class="landing-page container">
        <NotificationCard v-for="note in combinedNotifications" :key="note.title" :title="note.title"
          :created-at="note.createdAt" :image="note.image" :text="note.text" :roundedImage="note.roundedImage"
          :linkText="note.linkText" :linkTo="note.linkTo" />
      </div>
    </section>

    <section class="about-section" aria-label="Über Casa Vazquez">
      <div class="about-content">
        <h2>Willkommen!</h2>
        <p>
          Du warst noch nie bei uns und fragst dich, was wir bieten?
        </p>
        <p>
          Wir laden zum gemütlichen Verweilen an der Warendorfer Straße ein.
          Leckere Drinks und Snacks und eine Auswahl an besonderen Weinen
          versüßen dir den Feierabend.
        </p>
        <p class="about-tagline">
          Ganz ungezwungen – wie bei Freunden.
        </p>
      </div>
    </section>

    <div class="impressum">
      <h1 @click="handleImpressumSecret">Impressum</h1>
      <p>
        Angaben gemäß § 5 TMG:<br>
        Casa Vazquez Münster – José Benjamin Marco Joaquin Guerrero Vazquez<br>
        Warendorfer Str 113<br>
        48145 Münster<br>
        Deutschland
      </p>
      <p>Ust: 33750944916 NAST1</p>
      <p>
        Kontakt:<br>
        Telefon: +49 176 4278 7953<br>
        E-Mail: info@casavazquez.de
      </p>
      <p>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br>
        José Benjamin Marco Joaquin Guerrero Vazquez (siehe Anschrift)
      </p>
      <p>
        Haftungsausschluss (Disclaimer):
      </p>
      <p>
        Haftung für Inhalte:<br>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon
        unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich.
      </p>
      <p>
        Haftung für Links:<br>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets
        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Urheberrecht:<br>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

    </div>
    <div v-if="false" class="easter-egg" @click="handleClick" :style="{ transform: 'scale(' + scale + ')' }"
      :class="{ 'shake': isShaking }">
      <template v-if="clickCount < 5">
        <img :src="osterei" alt="Osertei" class="egg-icon" />
      </template>
      <template v-else>
        <div class="voucher">
          <h2>Gutschein!</h2>
          <p>Herzlichen Glückwunsch – Du hast ein Osterei gefunden! Zeig uns diesen Gutschein und du erhältst ein gratis
            Osterbier!</p>
          <p>(pro Person 1x einlösbar)</p>
        </div>
      </template>
    </div>

    <footer>
      <div class="sources-link">
        Icons by <a href="https://icons8.com/" target="_blank" rel="noopener">icons8.com</a>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from 'vue-router';
import { notifications } from "../../../data/notifications.ts";
import NotificationCard from "../components/NotificationCard.vue";
import osterei from "../assets/images/icons8-easter-64.png";

const combinedNotifications = [...notifications] as typeof notifications;

const clickCount = ref(0);
const scale = ref(1);
const isShaking = ref(false);
const impressumClicks = ref(0);
const impressumTimer = ref<number | null>(null);
const router = useRouter();

function handleClick() {
  if (clickCount.value < 2) {
    clickCount.value++;
    scale.value *= 1.21;
  } else {
    clickCount.value++;
    scale.value = 1;
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  isShaking.value = true;
  setTimeout(() => {
    isShaking.value = false;
  }, 500);
}

function handleImpressumSecret() {
  impressumClicks.value += 1;
  if (impressumClicks.value >= 3) {
    impressumClicks.value = 0;
    if (impressumTimer.value) {
      window.clearTimeout(impressumTimer.value);
      impressumTimer.value = null;
    }
    router.push({ name: 'FlyerSectors' });
    return;
  }
  if (impressumTimer.value) {
    window.clearTimeout(impressumTimer.value);
  }
  impressumTimer.value = window.setTimeout(() => {
    impressumClicks.value = 0;
    impressumTimer.value = null;
  }, 1500);
}

onMounted(() => {
  // Announcement currently disabled
});

onBeforeUnmount(() => {
  if (impressumTimer.value) {
    window.clearTimeout(impressumTimer.value);
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

h1,
h2,
h3 {
  font-family: "King Red";
  text-align: center;
  font-weight: 100;
  color: $accent-color;
  font-style: italic;
}

section {
  padding: 1rem;
}

.hero {
  padding: 3rem 1rem;
  text-align: center;
  background: linear-gradient(180deg, rgba(139, 111, 71, 0.1) 0%, transparent 100%);
  margin-bottom: 2rem;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin: 0 0 0.5rem;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: $accent-color;
  margin: 0 0 0.5rem;
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
}

.hero-location {
  font-size: 0.95rem;
  color: rgba(200, 192, 179, 0.7);
  margin: 0;
  font-style: italic;
}

.landing-page {
  padding: 1rem 0;

  &.container {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
  }
}

.tile-navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  justify-content: center;
  padding: 2rem 1rem;
  max-width: 600px;
  margin: 0 auto;

  .nav-link {
    text-decoration: none;
  }

  .navigation-tile {
    aspect-ratio: 1 / 1;
    background: linear-gradient(145deg, #1a1a28 0%, #1e1e2f 100%);
    border: 1.5px solid rgba(206, 170, 114, 0.4);
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ceaa72;
    font-family: "King Red", serif;
    font-size: 1.2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 0%, rgba(206, 170, 114, 0.15), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: linear-gradient(145deg, #242438 0%, #2a2a3f 100%);
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(206, 170, 114, 0.2);
      border-color: rgba(206, 170, 114, 0.6);

      &::before {
        opacity: 1;
      }
    }

    &:active {
      transform: translateY(-2px);
    }

    &.cocktail-tinder-tile {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
      border-color: #667eea;
      color: #fff;
      font-size: 1rem;

      &:hover {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
        border-color: #764ba2;
      }
    }
  }
}

.promo-card {
  position: relative;
  overflow: hidden;
  margin: 2rem auto 0;
  padding: 1.5rem;
  max-width: 720px;
  border-radius: 1.5rem;
  border: 1px solid rgba(206, 170, 114, 0.4);
  background: radial-gradient(circle at top right, rgba(250, 223, 173, 0.18), transparent 60%),
    linear-gradient(145deg, rgba(12, 12, 18, 0.96), rgba(34, 24, 18, 0.9));
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
}

.promo-card__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 215, 160, 0.55), transparent 45%),
    radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.25), transparent 35%);
  filter: blur(5px);
  opacity: 0.85;
  pointer-events: none;
}

.promo-card__content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #f9f1e4;
}

.promo-card__eyebrow {
  margin: 0;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-family: "King Red", serif;
  color: rgba(249, 241, 228, 0.8);
  text-align: center;
}

.promo-card__headline {
  margin: 0;
  font-size: clamp(1.4rem, 4vw, 2rem);
  line-height: 1.2;
}

.promo-card__detail {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(249, 241, 228, 0.9);
  text-align: center;

}

.promo-card__cta {
  align-self: flex-start;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(249, 241, 228, 0.3);
  background: rgba(206, 170, 114, 0.15);
  color: #f9f1e4;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: transform 0.2s ease, background 0.3s ease, border 0.3s ease;
}

.promo-card__cta:hover {
  transform: translateY(-2px);
  background: rgba(206, 170, 114, 0.3);
  border-color: rgba(249, 241, 228, 0.6);
}

@media (max-width: 640px) {
  .promo-card {
    margin: 1.5rem 1rem 0;
    padding: 1.25rem;
  }

  .promo-card__cta {
    width: 100%;
    text-align: center;
  }
}


.sources-link {
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

.news-section {
  padding: 2rem 1rem;
  background: rgba(139, 111, 71, 0.03);
}

.news-section h2 {
  margin-bottom: 1.5rem;
}

.about-section {
  padding: 3rem 1rem;
  margin: 2rem 0;
}

.about-content {
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
}

.about-content h2 {
  margin-bottom: 1.5rem;
}

.about-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(200, 192, 179, 0.95);
  margin: 0 0 1rem;
}

.about-tagline {
  font-style: italic;
  font-size: 1.1rem;
  color: $accent-color !important;
  margin-top: 1.5rem !important;
  font-weight: 300;
}

.sources-link {
  a {
    text-decoration: underline;
  }
}

.impressum {
  margin-top: 5rem;
  padding: 1rem;
  font-size: 0.9rem;

  h1 {
    cursor: pointer;
  }

  address {
    font-style: normal;
    line-height: 1.6;
  }
}

.egg-icon {
  width: 20px;
  height: auto;
}

.voucher {
  border: 2px dashed #ceaa72;
  padding: 1rem;
  text-align: center;
  background-color: #fff;
  font-size: 70%;
  color: #ceaa72;
}

.voucher h2 {
  margin: 0;
}

.voucher p {
  margin: 0.5rem 0 0;
}

@keyframes shake {

  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(5deg);
  }

  75% {
    transform: rotate(-5deg);
  }
}

.shake {
  animation: shake 0.2s;
}
</style>

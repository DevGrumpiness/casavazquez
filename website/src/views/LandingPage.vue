
<template>
  <main class="landing-page-main">
    <header class="hero">
      <div class="hero-content">
        <h1>Casa Vazquez Münster – Weinbar, Tapas & Cocktails</h1>
        <p class="hero-location">Warendorfer Str 113 · 48145 Münster</p>
      </div>
    </header>

    <TodayPromoBanner />

    <section class="quick-menu-section mobile-only" aria-label="Schnellzugriff zur Speisekarte">
      <h2 >Direkt zur Karte</h2>
      <div class="tile-navigation quick-menu-tiles">
          <router-link class="nav-link" to="/drinks">
            <div class="navigation-tile">
              <img :src="iconDrinks" alt="Drinks" class="quick-menu-icon" />
              <span>Drinks</span>
            </div>
          </router-link>
          <router-link class="nav-link" to="/vino">
            <div class="navigation-tile">
              <img :src="iconVino" alt="Vino" class="quick-menu-icon" />
              <span>Vino</span>
            </div>
          </router-link>
          <router-link class="nav-link" to="/cocktails">
            <div class="navigation-tile">
              <img :src="iconCocktails" alt="Cocktails" class="quick-menu-icon" />
              <span>Cocktails</span>
            </div>
          </router-link>
          <router-link class="nav-link" to="/snacks">
            <div class="navigation-tile">
              <img :src="iconSnacks" alt="Snacks" class="quick-menu-icon" />
              <span>Snacks</span>
            </div>
          </router-link>
      </div>
    </section>
    <div>
      <!-- About Casa Vazquez -->
      <section class="intro-section bar-intro" aria-label="Über Casa Vazquez">
        <div class="intro-content">
          <div class="intro-text">
            <h2>Willkommen in der Bar Casa Vazquez</h2>
            <p>
              Mitten im Herzen von Münster, an der Warendorfer Straße, findest du unsere gemütliche Wein-, Cocktail-, Tapas-bar. 
              Wir sind dein Ort für entspannte Feierabendstunden, gesellige Abende mit Freunden oder einen 
              genussvollen Start ins Wochenende.
            </p>
            <p>
              In entspannter Atmosphäre servieren wir dir erlesene Weine, kreative Cocktails und köstliche 
              Tapas – ganz so, wie du es aus spanischen Bars kennst. Bei uns steht der Genuss im Vordergrund, 
              ohne Schnickschnack, dafür mit viel Herzlichkeit.
            </p>
            <p class="intro-tagline">
              Ganz ungezwungen – wie bei Freunden.
            </p>
          </div>
          <div class="intro-image">
            <img src="../assets/images/cv.jpg" alt="Casa Vazquez Logo" />
          </div>
        </div>
      </section>

      <!-- Snacks Section -->
      <section class="intro-section snacks-intro" aria-label="Unsere Snacks">
        <div class="intro-content reverse">
          <div class="intro-image">
            <div class="image-grid">
              <img src="../assets/images/tapasclub/tortilla.png" alt="Tortilla" />
              <img src="../assets/images/tapasclub/croquetas_chorizo.png" alt="Croquetas" />
              <img src="../assets/images/tapasclub/albondigas.png" alt="Albondigas" />
              <img src="../assets/images/tapasclub/datilles.png" alt="Datteln" />
            </div>
          </div>
          <div class="intro-text">
            <h2>Tapas & Snacks</h2>
            <p>
              Hunger? Bei uns findest du eine feine Auswahl an spanischen Tapas und mediterranen Snacks. 
              Von klassischen Croquetas über saftige Albondigas bis hin zu knusprigen Calamares – 
              jede Kleinigkeit ist perfekt abgestimmt auf dein Glas Wein oder deinen Cocktail.
            </p>
            <p>
              Unsere Tapas werden mit Liebe zum Detail serviert. Ob als kleiner 
              Happen zwischendurch oder als gemeinsames Menü zum Teilen – bei uns wird jeder Abend zum 
              kulinarischen Erlebnis.
            </p>
            <router-link to="/snacks" class="cta-link">Zur Snack-Karte →</router-link>
          </div>
        </div>
      </section>

      <!-- Wine Section -->
      <section class="intro-section wine-intro" aria-label="Unsere Weine">
        <div class="intro-content">
          <div class="intro-text">
            <h2>Weine mit Charakter</h2>
            <p>
              Unser Herzstück: Eine sorgfältig kuratierte Auswahl an Weinen aus Spanien, Italien und 
              Deutschland. Ob kräftiger Rioja, eleganter Pinot Noir oder spritziger Albariño – 
              bei uns findest du Weine für jeden Geschmack und jeden Anlass.
            </p>
            <p>
              Achte auch auf unsere regelmäßigen Wein-Proben. Folge uns am Besten auf <a href="https://www.instagram.com/casa_vazquez_muenster/" target="_blank" rel="noopener noreferrer"><u> instagram</u></a>, um 
              nichts zu verpassen!
              
            </p>
            <router-link to="/vino" class="cta-link">Zur Weinkarte →</router-link>
          </div>
          <div class="intro-image">
            <div class="image-grid wine-bottles">
              <img :src="imgElenaWalch" alt="Elena Walch Pinot Bianco" />
              <img :src="imgTerlan" alt="Terlan Chardonnay" />
              <img :src="imgPompaelo" alt="Pompaelo Blanc de Noir" />
              <img :src="imgNounat" alt="Nounat" />
            </div>
          </div>
        </div>
      </section>

      <!-- Cocktails Section -->
      <section class="intro-section cocktails-intro" aria-label="Unsere Cocktails">
        <div class="intro-content reverse">
          <div class="intro-image">
            <img src="../assets/images/tinified (6)/blue_whisper.jpg" alt="Cocktails" class="single-image" />
          </div>
          <div class="intro-text">
            <h2>Raffinierte Cocktails</h2>
            <p>
              Von zeitlosen Klassikern bis zu kreativen Eigenkreationen – unsere Cocktailkarte lässt keine 
              Wünsche offen. Ob klassiche Sours, eleganter Espresso-Martini oder experimentelle Signature Drinks 
              mit mediterranen Aromen: Bei uns wird jeder Cocktail mit Leidenschaft und frischen Zutaten 
              zubereitet.
            </p>
            <router-link to="/drinks" class="cta-link">Zur Getränkekarte →</router-link>
          </div>
        </div>
      </section>
    </div>

    <div class="quick-menu-desktop-anchor desktop-only">
      <section class="quick-menu-section quick-menu-section-desktop" aria-label="Schnellzugriff zur Speisekarte">
        <h2>Direkt zur Karte</h2>
        <div class="tile-navigation quick-menu-tiles">
          <router-link class="nav-link" to="/drinks">
            <div class="navigation-tile">
              <img :src="iconDrinks" alt="Drinks" class="quick-menu-icon" />
              <span>Drinks</span>
            </div>
          </router-link>
          <router-link class="nav-link" to="/vino">
            <div class="navigation-tile">
              <img :src="iconVino" alt="Vino" class="quick-menu-icon" />
              <span>Vino</span>
            </div>
          </router-link>
          <router-link class="nav-link" to="/cocktails">
            <div class="navigation-tile">
              <img :src="iconCocktails" alt="Cocktails" class="quick-menu-icon" />
              <span>Cocktails</span>
            </div>
          </router-link>
          <router-link class="nav-link" to="/snacks">
            <div class="navigation-tile">
              <img :src="iconSnacks" alt="Snacks" class="quick-menu-icon" />
              <span>Snacks</span>
            </div>
          </router-link>
        </div>
      </section>
    </div>

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
    <div v-if="!voucherRedeemed" class="easter-egg" @click="handleClick" :style="{ transform: 'scale(' + scale + ')' }"
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
        ·
        <a href="https://www.instagram.com/casa_vazquez_muenster/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from 'vue-router';
import TodayPromoBanner from "../components/TodayPromoBanner.vue";
import osterei from "../assets/images/icons8-easter-64.png";
import iconVino from "../assets/images/icons8-bar-50.png";
import iconDrinks from "../assets/images/icons8-drinks-64.png";
import iconSnacks from "../assets/images/icons8-snack-64.png";
import iconCocktails from "../assets/images/icons8-strandcocktail-96.png";

const imgElenaWalch = new URL('../assets/images/tinified (6)/elenawalch.jpg', import.meta.url).href;
const imgTerlan = new URL('../assets/images/tinified (6)/terlan.jpg', import.meta.url).href;
const imgPompaelo = new URL('../assets/images/tinified (6)/pompaelo.jpg', import.meta.url).href;
const imgNounat = new URL('../assets/images/tinified (6)/nounat.jpg', import.meta.url).href;

const clickCount = ref(0);
const scale = ref(1);
const isShaking = ref(false);
const voucherRedeemed = true;
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
  // Smooth scroll reveal for images - repeats every time
  if (window.innerWidth >= 768) {
    const images = document.querySelectorAll('.intro-image');
    const firstImage = images.item(0);
    if (firstImage) {
      firstImage.classList.add('visible');
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-100px'
    });
    
    images.forEach(img => observer.observe(img));
  }
});

onBeforeUnmount(() => {
  if (impressumTimer.value) {
    window.clearTimeout(impressumTimer.value);
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

/* ===========================================
   LANDING PAGE FULL WIDTH OVERRIDE
   =========================================== */

.landing-page-main {
  width: 100%;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 0 5rem 0 !important;
}

/* ===========================================
   GLOBAL TYPOGRAPHY
   =========================================== */

h1,
h2,
h3 {
  font-family: "King Red";
  text-align: center;
  font-weight: 100;
  color: $accent-color;
}

section {
  padding: 1rem;
}

/* ===========================================
   HERO SECTION
   =========================================== */

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

.quick-menu-section {
  background: rgba(139, 111, 71, 0.03);
  padding: 0 1.25rem 2rem;
  text-align: center;
  border: 1px solid rgba(206, 170, 114, 0.2);
}

.quick-menu-section h2 {
  margin: 0.75rem auto 0.75rem;
  padding: 0;
}

.quick-menu-tiles {
  max-width: 1080px;
  margin: 0 auto;

  .nav-link {
    width: 100%;
  }

  .navigation-tile {
    height: 72px;
    font-size: 1.05rem;
    padding: 0.4rem 0.65rem;
    display: flex;
    gap: 0.32rem;
    justify-content: center;
    align-items: center;
    aspect-ratio: unset;
    min-height: unset;
  }

  .quick-menu-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
    flex-shrink: 0;
    opacity: 0.95;
    filter: brightness(0) saturate(100%) invert(63%) sepia(27%) saturate(518%) hue-rotate(358deg) brightness(92%) contrast(88%);
  }
}

.tile-navigation.quick-menu-tiles {
  gap: 0.85rem;
  padding: 1rem;
}

.tile-navigation.quick-menu-tiles .navigation-tile {
  height: 72px;
  font-size: 1.05rem;
}

.quick-menu-desktop-anchor {
  display: flex;
  justify-content: center;
  padding: 2rem 1.25rem 0;
}

.quick-menu-section-desktop {
  width: min(560px, 100%);
  margin: 0;

  .tile-navigation.quick-menu-tiles {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    padding: 0.75rem;
  }

  .tile-navigation.quick-menu-tiles .nav-link {
    min-width: 0;
  }
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
  display: flex;
  gap: 1.2rem;
  padding: 2rem 1.25rem;
  margin: 0;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  justify-items: stretch;
  justify-content: stretch;

  .nav-link {
    text-decoration: none;
    width: 100%;
  }

  .navigation-tile {
    background: linear-gradient(145deg, #1a1a28 0%, #1e1e2f 100%);
    border: 1.5px solid rgba(206, 170, 114, 0.4);
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ceaa72;
    font-family: "King Red", serif;
    font-size: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    height: 100px;
    width: 100%;

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

.sources-link {
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

/* Mobile/Desktop visibility toggles */
.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }

  .quick-menu-desktop-anchor.desktop-only {
    display: flex;
  }
}

/* ===========================================
   MOBILE NEWS & ABOUT SECTIONS
   =========================================== */

.news-section {
  padding: 2rem 1rem;
  background: rgba(139, 111, 71, 0.03);

  h2 {
    margin-bottom: 1.5rem;
  }
}

.about-section {
  padding: 3rem 1rem;
  margin: 2rem 0;
}

/* ===========================================
   DESKTOP INTRODUCTION SECTIONS
   =========================================== */

.intro-section {
  padding: 5rem 3rem;
  overflow: hidden;
  
  &:nth-child(even) {
    background: rgba(139, 111, 71, 0.03);
  }
}

.intro-content {
  max-width: 2200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  align-items: center;
  padding: 0 4rem;
  
  &.reverse {
    .intro-text {
      order: 2;
    }
    .intro-image {
      order: 1;
    }
  }
}

/* ===========================================
   TEXT CONTENT
   =========================================== */

.intro-text {
  h2 {
    text-align: left;
    font-size: 3.2rem;
    margin-bottom: 2.5rem;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.25rem;
    line-height: 2;
    color: rgba(200, 192, 179, 0.95);
    margin-bottom: 1.5rem;
  }
  
  .intro-tagline {
    font-family: "King Red", serif;
    font-size: 1.5rem;
    color: $accent-color;
    font-style: italic;
    margin-top: 2rem;
  }
}

.cta-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: $accent-color;
  border: 1px solid $accent-color;
  border-radius: 0.5rem;
  color: $background-color;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba($accent-color, 0.9);
    border-color: rgba($accent-color, 0.9);
    transform: translateX(5px);
  }
}

/* ===========================================
   IMAGES
   =========================================== */

.intro-image {
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .single-image {
    max-width: 500px;
    margin: 0 auto;
    display: block;
  }
}

/* Scroll reveal effects - ONLY on desktop */
@media (min-width: 768px) {
  .intro-image {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    img:hover {
      transform: scale(1.03);
      transition: transform 0.4s ease;
    }
  }
  
  .snacks-intro .intro-image,
  .cocktails-intro .intro-image {
    transform: translateX(-40px);
    
    &.visible {
      transform: translateX(0);
    }
  }
  
  .wine-intro .intro-image {
    transform: translateX(40px);
    
    &.visible {
      transform: translateX(0);
    }
  }
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 0.75rem;
  }
  
  &.wine-bottles {
    img {
      height: 300px;
      object-fit: contain;
      box-shadow: none;
    }
  }
}

/* ===========================================
   RESPONSIVE: TABLET
   =========================================== */

@media (max-width: 1024px) {
  .intro-section {
    padding: 4rem 2rem;
  }

  .intro-content {
    max-width: 100%;
    gap: 4rem;
    padding: 0 1rem;
  }
  
  .intro-text {
    h2 {
      font-size: 2.2rem;
    }
    
    p {
      font-size: 1.05rem;
    }
  }
}

/* ===========================================
   RESPONSIVE: MOBILE
   =========================================== */

@media (max-width: 768px) {
  .hero {
    padding: 2rem 0.75rem 1.25rem;
    margin-bottom: 1rem;
  }

  .hero h1 {
    font-size: clamp(1.8rem, 8vw, 2.4rem);
  }

  .tile-navigation.quick-menu-tiles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 1rem;
  }

  .tile-navigation.quick-menu-tiles .nav-link {
    flex: 1 1 calc(50% - 0.75rem);
    min-width: 140px;
  }

  .tile-navigation.quick-menu-tiles .navigation-tile {
    height: 72px;
    font-size: 1.1rem;
    border-radius: 0.9rem;
  }

  .news-section {
    padding: 1.5rem 1rem 0.75rem;
  }

  .intro-section {
    padding: 2rem 1rem;
  }
  
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 100%;
    padding: 0;

    .intro-text {
      order: 1;
    }

    .intro-image {
      order: 2;
    }
    
    &.reverse {
      .intro-text,
      .intro-image {
        order: initial;
      }

      .intro-text {
        order: 1;
      }

      .intro-image {
        order: 2;
      }
    }
  }
  
  .intro-text {
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  .image-grid img {
    height: 150px;
  }
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
  margin-top: 7rem;
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

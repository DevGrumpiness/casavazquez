<template>
  <main>
    <header class="hero">
      <h1>Casa Vazquez – Weinbar & Cocktails in Münster</h1>
    </header>

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
    </section>

    <section aria-label="Aktuelle Neuigkeiten">
      <h2>Aktuelles aus der Casa Vazquez</h2>
      <div class="landing-page container">
        <NotificationCard
            v-for="note in notifications"
            :key="note.title"
            :title="note.title"
            :created-at="note.createdAt"
            :image="note.image"
            :text="note.text"
            :roundedImage="note.roundedImage"
            :linkText="note.linkText"
            :linkTo="note.linkTo"
        />
      </div>
    </section>

    <section aria-label="Über Casa Vazquez">
      <h2>Willkommen bei unserer Bar in Münster!</h2>
      <p>
        Du warst noch nie bei uns und fragst dich, was wir bieten?<br />
        Wir laden zum gemütlichen Verweilen an der Warendorfer Straße ein. <br />
        Leckere Drinks und Snacks und eine Auswahl an besonderen Weinen
        versüßen dir den Feierabend. <br />
        Ganz ungezwungen – wie bei Freunden.
      </p>
    </section>

    <section class="impressum" aria-label="Impressum">
      <h2>Impressum</h2>
      <address>
        Casa Vazquez Münster – José Benjamin Marco Joaquin Guerrero Vazquez<br />
        Warendorfer Str. 113<br />
        48145 Münster, Deutschland<br />
        USt-ID: 33750944916 NAST1<br />
        Telefon: +49 176 4278 7953<br />
        E-Mail: info@casavazquez.de
      </address>
      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
        José Benjamin Marco Joaquin Guerrero Vazquez (siehe Anschrift)
      </p>
      <p><strong>Haftungsausschluss</strong></p>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. [...]
      </p>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter [...].<br />
        Die Inhalte und Werke auf dieser Website unterliegen dem deutschen
        Urheberrecht.
      </p>
    </section>

    <footer>
      <div class="sources-link">
        Icons by <a href="https://icons8.com/" target="_blank" rel="noopener">icons8.com</a>
      </div>

      <router-link
          to="/showroom"
          class="nav-link showroom-link"
          active-class="active"
      >
        🖼️ Showroom
      </router-link>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { notifications } from "../data/notifications.ts";
import NotificationCard from "../components/NotificationCard.vue";
import osterei from "../assets/images/icons8-easter-64.png";
import NavigationBar from "../components/NavigationBar.vue";

const clickCount = ref(0);
const scale = ref(1);
const isShaking = ref(false);

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
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

h1, h2, h3 {
  font-family: "King Red";
  text-align: center;
  font-weight: 100;
  color: $accent-color;
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
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  padding: 1rem;

  .nav-link {
    text-decoration: none;
  }

  .navigation-tile {
    width: 50vw;
    max-width: 200px;
    aspect-ratio: 1 / 1;
    background: #1e1e2f;
    border: 2px solid #ceaa72;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ceaa72;
    font-family: "King Red", serif;
    font-size: 2rem;
    text-align: center;
    transition: transform 0.2s ease, background 0.3s;

    &:hover {
      background: #2a2a3f;
      transform: scale(1.05);
      cursor: pointer;
    }
  }
}

.sources-link {
  padding: 1rem;
  text-align: center;

  a {
    text-decoration: underline;
  }
}

.impressum {
  margin-top: 5rem;
  padding: 1rem;
  font-size: 0.9rem;

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
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.shake {
  animation: shake 0.2s;
}
</style>

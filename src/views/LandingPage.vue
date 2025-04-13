<template>
  <div class="hero">
    <h1>Casa Vazquez</h1>
  </div>
  <div class="landing-page container">
    <NotificationCard v-for="note in notifications"
                      :title="note.title"
                      :created-at="note.createdAt"
                      :image="note.image"
                      :text="note.text"
                      :roundedImage="note.roundedImage"
                      :linkText="note.linkText"
                      :linkTo="note.linkTo"
    />
  </div>

  <div class="impressum">
    <h1>Impressum</h1>
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
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
      José Benjamin Marco Joaquin Guerrero Vazquez (siehe Anschrift)
    </p>
    <p>
      Haftungsausschluss (Disclaimer):
    </p>
    <p>
      Haftung für Inhalte:<br>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
      Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
      oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
      Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon
      unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
      Rechtsverletzung möglich.
    </p>
    <p>
      Haftung für Links:<br>
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
      können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
      der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
    </p>
    <p>
      Urheberrecht:<br>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
      Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
    </p>

  </div>
  <div class="sources-link">Icons by <a href="https://icons8.com/">icons8.com</a></div>
  <div class="easter-egg" @click="handleClick" :style="{ transform: 'scale(' + scale + ')' }" :class="{ 'shake': isShaking }">
    <template v-if="clickCount < 5">
      <img :src="osterei" alt="Osertei" class="egg-icon" />
    </template>
    <template v-else>
      <div class="voucher">
        <h2>Gutschein!</h2>
        <p>Herzlichen Glückwunsch – Du hast ein Osterei gefunden! Zeig uns diesen Gutschein und du erhältst ein gratis Osterbier!</p>
        <p>(pro Person 1x einlösbar)</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {notifications} from "../data/notifications.ts";
import NotificationCard from "../components/NotificationCard.vue";
import osterei from "../assets/images/icons8-easter-64.png"

const clickCount = ref(0)
const scale = ref(1)
const isShaking = ref(false)

function handleClick() {
  if (clickCount.value < 4) {
    clickCount.value++;
    scale.value *= 1.21;
  } else {
    clickCount.value++;
    scale.value = 1;
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
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

h1 {
  color: white;
  font-family: "King Red";
  text-align: center;
  font-weight: 100;
  color: $accent-color;
  font-style: italic;
  text-decoration: underline;
}

.landing-page {
  padding: 1rem 0;

  &.container {
    display: flex;
    flex-direction: column;
  }
}

.sources-link {
  padding:  1rem;

  a {
    text-decoration: underline;
  }
}

.impressum {
  margin-top: 50dvh;
  padding: 1rem;
}

//Oster Aktion
.easter-egg {
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
  text-align: right;

  img {
    margin-right:  10%;
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
  transform: unset;
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

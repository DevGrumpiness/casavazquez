<template>
  <div class="filter-buttons">
    <button class="filter-button" :class="{ active: veggie }" @click="toggleVeggie">
      <i class="pi pi-times" v-if="veggie" style="font-size: 8px"></i>
      Nur Veggie
    </button>
  </div>

  <section class="snacks-menu">
    <header class="snacks-header">
      <h1 class="snacks-title">SNACKS</h1>
      <p class="snacks-subtitle">FÜR DEN KLEINEN HUNGER</p>
    </header>

    <div class="scrollContainer">
      <div class="snack-section">
        <li
            v-for="snack in filteredSnacks"
            :key="snack.name"
            class="basic-snacks-item"
        >
          <div class="snack-text">
            <span class="snacks-name">{{ snack.name }}</span>
            <img v-if="snack.onm" class="onmLogo" :src="onmLogo" alt="Olive und Meer" @click="showOnmInfo = true"/>
            <BaseModal v-model="showOnmInfo">
              <div style="display: flex;margin-bottom: 1rem; gap: 1rem">
                <h2 >Von <i>Olive & Meer</i></h2>
                <img class="onmLogo" :src="onmLogo"/>
              </div>
              <p>Unser Lieblings-Laden für Spanische Weine und Feinkost. Dir schmecken die Oliven? Dann statte doch <i>Raquel</i> mal
                einen Besuch ab. </p>
              <p style="text-align: right">Warendorfer Str. 61, 48145 Münster</p>
            </BaseModal>
            <span class="snacks-description">{{ snack.description }}</span>
          </div>
          <span class="snacks-price">{{ snack.price }}</span>
        </li>

        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name">Extra Trüffel-Käse zur Plato (50g)</span>
            <span class="snacks-price">5,5</span>
          </li>
          <li class="snacks-item extra veggie">
            <span class="snacks-name">Extra Dip</span>
            <span class="snacks-price">0,7</span>
          </li>
          <li class="snacks-item extra veggie">
            <span class="snacks-name">Extra Baguette</span>
            <span class="snacks-price">2</span>
          </li>

          <p class="snacks-note">
            Unsere Snacks & Platten sind ideal zum Teilen und bieten eine köstliche Begleitung zu unseren Drinks.
          </p>
        </ul>
      </div>

      <div class="snack-section" v-if="!veggie">
        <hr/>
        <br/>
        <h3 class="snacks-subtitle">Bocadillo</h3>
        <p class="snacks-note">
          Bocadillos sind ein fester Bestandteil der spanischen Esskultur.
          <br/>
          Knusprige aufgebackenes Baguette mit herzhaftem Belag wie Jamón Serrano, Queso und frischer Tomate.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra">
            <span class="snacks-name"><b>Bocadillo (Sandwich)</b><br/>mit Burrata & Tomate</span>
            <span class="snacks-price">10,50</span>
          </li>
          <li class="snacks-item extra">
            <span class="snacks-name">+ Jamón</span>
            <span class="snacks-price">+ 3</span>
          </li>
        </ul>
      </div>

      <div class="snack-section">
        <hr/>
        <br/>
        <h3 class="snacks-subtitle">Ceviche</h3>
        <p class="snacks-note">
          Der "Fisch-Salat" mit Ursprung in Südamerika ist eine wahre Delikatesse.
          <br/>
          <br/>
          Unsere Variante ist besonders frisch, mit einem Mix aus der Süße von Mango und Cherrytomaten, feinem Meersalz und aromatischem Himbeeressig. Je nach Verfügbarkeit bereiten wir Ceviche mit weißem Fischfilet oder Lachs zu. Alternativ mit geräucherten Garnelen.
          <p class="today-hint">Heute ({{new Date().toLocaleDateString()}}) mit geräucherten Garnelen verfügbar.</p>
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra">
            <span class="snacks-name"><b>Portion Ceviche</b><br/>mit Brot</span>
            <span class="snacks-price">10,50</span>
          </li>
        </ul>
      </div>

      <div class="snack-section" v-if="!veggie">
        <hr/>
        <br/>
        <h3 class="snacks-subtitle">Chorizo in Salsa</h3>
        <p class="snacks-note">
          Chorizo ist eine der bekanntesten spanischen Wurstsorten mit würzigem Aroma und tiefer roter Farbe, ideal als
          herzhafter Snack.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra">
            <span class="snacks-name"><b>Chorizo</b><br/>würzige spanische Frischwurst in Tomatensalsa und mit Brot serviert</span>
            <span class="snacks-price">7,50</span>
          </li>
        </ul>
      </div>

      <div class="snack-section" v-if="!veggie">
        <hr/>
        <br/>
        <h3 class="snacks-subtitle">Albondigas</h3>
        <p class="snacks-note">
          Fleischbällchen in hausgemachter Tomaten-Salsa.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra">
            <span class="snacks-name"><b>Albondigas (3 Stück)</b><br/>Fleischbällchen Rind/Schwein in hausgemachter Salsa und mit Brot serviert</span>
            <span class="snacks-price">8,90</span>
          </li>
          <li class="snacks-item extra">
            <span class="snacks-name">4 Stück</span>
            <span class="snacks-price">11,50</span>
          </li>
        </ul>
      </div>

      <div class="snack-section">
        <hr/>
        <br/>
        <h3 class="snacks-subtitle">Montaditos</h3>
        <p class="snacks-note">
          Belegte kleine Brote. Perfekt zum Teilen. Auf unsere Montaditos locos legen wir leckere mediterrane Verduras wie eingelegte Oliven und Peperoni, sowie Frischkäse, saftige Tomate und Chorizo-Wurst.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra">
            <span class="snacks-name"><b>Gemischte Montaditos</b><br>Auf Wunsch vegetarisch / vegan</span>
            <span class="snacks-price">8,90</span>
          </li>
        </ul>
      </div>

      <div class="snack-section">
        <hr/>
        <br/>
        <h3 class="snacks-subtitle">Coca</h3>
        <p class="snacks-note">
          Coca ist ein traditionelles spanisches Flachbrot, das mit mediterranen Zutaten belegt wird. Die Portion ist
          vergleichbar mit einer Pizza.
        </p>
        <ul class="snacks-extras">
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Vegetarisch</b><br/>mit Artischocken, halb-getrockneten Tomaten, eingelegten Zwiebeln, Cherry-Tomaten, Rucola</span>
            <span class="snacks-price">12,90</span>
          </li>
          <li class="snacks-item extra veggie">
            <span class="snacks-name"><b>Wahlweise zusätzlich:</b></span>
          </li>
          <li class="snacks-item extra" v-if="!veggie">
            <span class="snacks-name">+ Chorizo</span>
            <span class="snacks-price">+ 3,90</span>
          </li>
          <li class="snacks-item extra">
            <span class="snacks-name">+ Burrata</span>
            <span class="snacks-price">+ 4,50</span>
          </li>
          <li class="snacks-item extra" v-if="!veggie">
            <span class="snacks-name">+ Serrano</span>
            <span class="snacks-price">+ 3,90</span>
          </li>
          <li class="snacks-item extra" v-if="!veggie">
            <span class="snacks-name">+ Garnelen</span>
            <span class="snacks-price">+ 3,90</span>
          </li>
          <li class="snacks-item extra" v-if="!veggie">
            <span class="snacks-name">+ Garnelen & Serrano</span>
            <span class="snacks-price">+ 6,00</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import onmLogo from "../assets/images/Logo-Olive-Meer_klein.png"
import BaseModal from "../components/BaseModal.vue";

const veggie = ref(false)
const showOnmInfo = ref(false)

const snacks = [
  {name: 'Nachos mit Dip', description: 'z.B. mit Aioli / Guacamole / Salsa', price: '4,9', veggie: true},
  {name: 'Oliven Mix', description: '', price: '4,9', veggie: true, onm: true},
  {name: 'Baguette mit Dips', description: '', price: '4,9', veggie: true},
  {name: 'Plato de Jamón', description: '(80g) + Brot', price: '8,5', veggie: false},
  {name: 'Plato de Quesos', description: '(80g) + Brot', price: '8,5', veggie: true},
  {name: 'Plato Mixto', description: 'Gemischte Paltte mit Jamón & Quesos + Brot', price: '15,5', veggie: false},
  {name: 'Verduras', description: 'Mix von mediterranem Gemüse wie Artischockenherzen, Oliven, gegrillte Paprika, eingelegte Zwiebeln etc + Brot', price: '8,5', veggie: true}
];

const filteredSnacks = computed(() =>
    veggie.value ? snacks.filter(s => s.veggie) : snacks
);

function toggleVeggie() {
  veggie.value = !veggie.value;
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

hr {
  width: 33%;
  margin: 0 auto;
  border-color: #ceaa72;
}


.snacks-menu {
  background-color: $background-color;
  color: $text-color;
  font-family: $font-family;
  max-width: 90%;
  border: 2px solid $accent-color;
  border-radius: 8px;
  padding: 0 0.5rem;
  margin: 10% auto;
  position: relative;

  padding-top: 3rem;

  .scrollContainer {
    overflow: scroll;

    padding: 1rem;
    border-radius: 5px;

    &.veggie {
      .snacks-item {
        &:not(.veggie) {
          display: none;
        }
      }

      .snack-section {
        &:not(.veggie) {
          display: none;
        }
      }
    }
  }
}

.snacks-header {
  text-align: center;
  position: absolute;
  width: 100%;
  top: -34px;
}

.snacks-title {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: $background-color;
  width: min-content;
  margin: 0 auto;
  padding: 0 1rem;
  color: $accent-color;
  font-size: 2rem;
  font-family: 'King Red';
  font-weight: normal;
}

.snack-text {
  position: relative;

  img {
    position: absolute;
    right: -50px;
    height: 30px;
    transform: rotate(-15deg);
  }
}

.onmLogo {
  height: 35px;
  transform: rotate(-15deg);
}

.snacks-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
}

.snack-enter-active, .snack-leave-active {
  transition: max-height 0.41s ease-in-out;
  overflow: hidden;
}

.snack-enter-from, .snack-leave-to {
  max-height: 0;
}

.snack-enter-to, .snack-leave-from {
  max-height: 100px;
}

.snack-section {
}

.basic-snacks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
}

.basic-snacks-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  .snack-text {
    display: flex;
    flex-direction: column;

    .snacks-description {
      font-size: 0.7rem;
      font-style: italic;
    }
  }

  .snacks-name {
    font-size: 1rem;
    padding-right: 1rem;
  }

  .snacks-price {
    font-size: 1rem;
    color: $accent-color;
  }

  &.extra {
    span {
      font-size: 0.7rem;
    }
  }
}

.snacks-extras {
  margin-bottom: 2rem;

  li {
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0;
    font-size: 0.9rem;
    font-style: italic;
    color: $text-color;
  }
}

.snacks-note {
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 2rem auto;
  text-align: center;
  color: $accent-color;
  max-width: 90%;
}

.today-hint {
  color: white;
  margin: 1rem auto;
}
</style>

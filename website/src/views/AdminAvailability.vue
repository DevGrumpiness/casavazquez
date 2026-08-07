<template>
  <div class="admin-page">
    <h1>🍷 Verfügbarkeit verwalten</h1>

    <div v-if="!user" class="login-box">
      <p>Bitte einloggen, um Produkte ein-/auszublenden.</p>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="E-Mail" autocomplete="username" required />
        <input v-model="password" type="password" placeholder="Passwort" autocomplete="current-password" required />
        <button type="submit" :disabled="loggingIn">{{ loggingIn ? 'Anmelden...' : 'Anmelden' }}</button>
      </form>
      <p v-if="loginError" class="error">{{ loginError }}</p>
    </div>

    <div v-else class="admin-content">
      <div class="admin-toolbar">
        <span>Angemeldet als {{ user.email }}</span>
        <button type="button" class="logout" @click="handleLogout">Abmelden</button>
      </div>

      <input v-model="search" class="search-box" type="search" placeholder="Suchen…" />

      <div v-for="group in filteredGroups" :key="group.group" class="group">
        <h2>{{ group.group }}</h2>
        <ul>
          <li v-for="item in group.items" :key="item.id" class="item">
            <span class="item-name">{{ item.name }}</span>
            <div class="item-toggles">
              <label class="toggle-label">
                <span>Verfügbar</span>
                <button
                  type="button"
                  class="toggle"
                  :class="{ on: isAvailable(item.id, true) }"
                  :aria-pressed="isAvailable(item.id, true)"
                  @click="toggle(item.id)"
                >
                  <span class="knob"></span>
                </button>
              </label>
              <label v-if="group.group === 'Snacks'" class="toggle-label">
                <span>Anzeigen</span>
                <button
                  type="button"
                  class="toggle"
                  :class="{ on: !isHidden(item.id) }"
                  :aria-pressed="!isHidden(item.id)"
                  @click="toggleHidden(item.id)"
                >
                  <span class="knob"></span>
                </button>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { useAvailability, availabilityId } from '../composables/useAvailability';
import { tintos } from '../../../data/tintos';
import { blancos } from '../../../data/blancos';
import { rosados } from '../../../data/rosados';
import { drinkGroups } from './DrinkMenu.vue';
import { cocktailGroups } from './CocktailsPage.vue';
import { snacks } from './SnackMenu.vue';

const { isAvailable, isHidden } = useAvailability();

const user = ref<User | null>(null);
const email = ref('');
const password = ref('');
const loggingIn = ref(false);
const loginError = ref<string | null>(null);
const search = ref('');

onAuthStateChanged(auth, (u) => {
  user.value = u;
});

async function handleLogin() {
  loginError.value = null;
  loggingIn.value = true;
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    password.value = '';
  } catch (err: any) {
    loginError.value = 'Anmeldung fehlgeschlagen. E-Mail/Passwort prüfen.';
  } finally {
    loggingIn.value = false;
  }
}

async function handleLogout() {
  await signOut(auth);
}

async function toggle(id: string) {
  const next = !isAvailable(id, true);
  await setDoc(
    doc(db, 'availability', id),
    { available: next, updatedAt: serverTimestamp() },
    { merge: true }
  );
}

async function toggleHidden(id: string) {
  const next = !isHidden(id);
  await setDoc(
    doc(db, 'availability', id),
    { hidden: next, updatedAt: serverTimestamp() },
    { merge: true }
  );
}

interface RegistryGroup {
  group: string;
  items: { id: string; name: string }[];
}

const registryGroups = computed<RegistryGroup[]>(() => {
  const wineItems = [...tintos, ...blancos, ...rosados]
    .filter((wine) => wine.available)
    .map((wine) => ({ id: availabilityId('Wein', String(wine.id)), name: wine.name }));

  const drinkGroupItems: RegistryGroup[] = drinkGroups.map((g) => ({
    group: g.group,
    items: g.items
      .filter((d) => d.available !== false)
      .map((d) => ({ id: availabilityId(g.group, d.name), name: d.name })),
  }));

  const cocktailGroupItems: RegistryGroup[] = cocktailGroups.map((g) => ({
    group: g.group,
    items: g.items
      .filter((d) => d.available !== false)
      .map((d) => ({ id: availabilityId(g.group, d.name), name: d.name })),
  }));

  const snackItems = snacks
    .filter((snack) => snack.available !== false)
    .map((snack) => ({ id: availabilityId('Snacks', snack.name), name: snack.name }));

  return [
    { group: 'Wein', items: wineItems },
    ...drinkGroupItems,
    ...cocktailGroupItems,
    { group: 'Snacks', items: snackItems },
  ].filter((g) => g.items.length > 0);
});

const filteredGroups = computed(() => {
  const term = search.value.trim().toLowerCase();
  if (!term) return registryGroups.value;
  return registryGroups.value
    .map((g) => ({ group: g.group, items: g.items.filter((i) => i.name.toLowerCase().includes(term)) }))
    .filter((g) => g.items.length > 0);
});
</script>

<style scoped>
.admin-page {
  max-width: 640px;
  margin: 0 auto;
  padding: 1.5rem 1rem 4rem;
}

.login-box form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 320px;
}

.login-box input,
.search-box {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.login-box button {
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  background: #b5202f;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.error {
  color: #b5202f;
}

.admin-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.logout {
  border: none;
  background: transparent;
  text-decoration: underline;
  cursor: pointer;
}

.search-box {
  width: 100%;
  margin-bottom: 1rem;
}

.group h2 {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.5rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.item-name {
  font-size: 0.95rem;
}

.item-toggles {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.toggle-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.7rem;
  opacity: 0.8;
}

.toggle {
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: #c74d4d;
  cursor: pointer;
  transition: background 0.2s ease;
  flex-shrink: 0;
}

.toggle.on {
  background: #3fa64c;
}

.toggle .knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s ease;
}

.toggle.on .knob {
  transform: translateX(24px);
}
</style>

import { ref, watch } from 'vue';

export type GenderPreference = 'female' | 'male';

const STORAGE_KEY = 'ct-gender-preference';

function readStoredPreference(): GenderPreference {
    if (typeof window === 'undefined') return 'female';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'male' ? 'male' : 'female';
}

// Module-level singleton so every component sharing this composable reads/writes
// the same reactive preference, persisted to localStorage across visits.
const genderPreference = ref<GenderPreference>(readStoredPreference());

watch(genderPreference, (value) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, value);
});

export function useGenderPreference() {
    const toggleGenderPreference = () => {
        genderPreference.value = genderPreference.value === 'female' ? 'male' : 'female';
    };

    return { genderPreference, toggleGenderPreference };
}

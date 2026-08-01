import { reactive } from 'vue';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { slug } from '../utils/slug';

// Module-level singleton: one live subscription shared by every component
// that uses this composable, so we don't open a Firestore listener per view.
const overrides = reactive<Record<string, boolean>>({});
let subscribed = false;
let ready = false;
const readyWaiters: Array<() => void> = [];

function ensureSubscribed() {
    if (subscribed) return;
    subscribed = true;
    onSnapshot(
        collection(db, 'availability'),
        (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'removed') {
                    delete overrides[change.doc.id];
                } else {
                    const data = change.doc.data();
                    overrides[change.doc.id] = data.available !== false;
                }
            });
            if (!ready) {
                ready = true;
                readyWaiters.splice(0).forEach((resolve) => resolve());
            }
        },
        (err) => {
            // Network/permission issues shouldn't break the menu — it just
            // falls back to the static "available" defaults baked into the code.
            console.error('[availability] live sync failed, using static defaults', err);
        }
    );
}

/**
 * Builds the deterministic Firestore document id for a menu item.
 * `group` disambiguates items with identical names across sections
 * (e.g. "Gin Tonic" appears both with and without alcohol).
 */
export function availabilityId(group: string, name: string): string {
    return `${slug(group)}--${slug(name)}`;
}

export function useAvailability() {
    ensureSubscribed();

    function isAvailable(id: string, staticDefault: boolean = true): boolean {
        if (!staticDefault) return false; // structurally disabled in code, live toggle can't re-enable it
        return overrides[id] ?? true;
    }

    return { isAvailable, availabilityId, overrides };
}

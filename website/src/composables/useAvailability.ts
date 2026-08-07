import { reactive } from 'vue';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { slug } from '../utils/slug';

// Module-level singleton: one live subscription shared by every component
// that uses this composable, so we don't open a Firestore listener per view.
//
// Each item can be independently:
// - "sold out today" (available: false) -> shown greyed out with a note
//   (used by SnackMenu's "heute Ausverkauft" pill), or fully hidden in menus
//   that don't have a "sold out" display (wine/drinks/cocktails).
// - "hidden" (hidden: true) -> removed from the menu entirely, regardless
//   of the available flag. This is the "don't show this item at all" toggle.
const overrides = reactive<Record<string, { available: boolean; hidden: boolean }>>({});
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
                    overrides[change.doc.id] = {
                        available: data.available !== false,
                        hidden: data.hidden === true,
                    };
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
        return overrides[id]?.available ?? true;
    }

    function isHidden(id: string): boolean {
        return overrides[id]?.hidden ?? false;
    }

    return { isAvailable, isHidden, availabilityId, overrides };
}

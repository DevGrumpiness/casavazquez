/**
 * Turns a free-form product name into a stable, URL/Firestore-safe id fragment.
 * Lowercases, strips accents/umlaut-diacritics and collapses anything that
 * isn't a-z/0-9 into single dashes.
 */
export function slug(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-+|-+$)/g, '');
}

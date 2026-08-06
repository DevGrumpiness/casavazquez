# Cocktail Tinder Component

A modular, swipeable cocktail discovery feature built with Vue 3 and TypeScript.

## 📁 Component Structure

```
CocktailTinder/
├── CocktailTinder.vue       # Main container component
├── CocktailCard.vue          # Individual swipeable card with touch/mouse interactions
├── MatchesGrid.vue           # Grid display of liked cocktails
├── CocktailDetailModal.vue   # Full-screen detail view with actions
├── RestartMessage.vue        # Completion screen with favorites list
└── index.ts                  # Barrel export file
```

## 🎯 Component Responsibilities

### CocktailTinder.vue (Main Container)
- **State Management**: Manages all cocktail tinder state (current index, likes, modals)
- **Data Flow**: Fetches cocktails data and manages personality mappings
- **Layout**: Orchestrates all subcomponents
- **Props**: None (self-contained feature)
- **Events**: None (internal state only)

### CocktailCard.vue
- **Purpose**: Single swipeable card with cocktail information
- **Interactions**: Touch and mouse drag support with smooth animations
- **Props**:
  - `cocktail: Cocktail` - The cocktail data to display
  - `isTop: boolean` - Whether this is the active top card
  - `swipeDirection: 'left' | 'right' | null` - Current swipe direction
  - `isDragging: boolean` - Whether card is being dragged
  - `cardTransform: string` - CSS transform string
  - `personalityEmoji: string` - Emoji for personality type
  - `personalityName: string` - Display name for personality
- **Emits**:
  - `swipeLeft` - When card is swiped left (reject)
  - `swipeRight` - When card is swiped right (like)
  - `updateTransform` - Real-time transform updates during drag
  - `updateDragging` - Dragging state changes
  - `updateSwipeDirection` - Swipe direction changes

### MatchesGrid.vue
- **Purpose**: Display thumbnails of liked cocktails
- **Props**:
  - `matches: Cocktail[]` - Array of liked cocktails
  - `personalities: Personality[]` - Personality metadata for emoji lookup
- **Emits**:
  - `view` - When user clicks to view cocktail details
  - `remove` - When user removes a match

### CocktailDetailModal.vue
- **Purpose**: Full-screen modal with cocktail details and actions
- **Props**:
  - `show: boolean` - Modal visibility
  - `cocktail: Cocktail | null` - The cocktail to display
  - `personalityEmoji: string` - Emoji for personality
  - `personalityName: string` - Display name for personality
- **Emits**:
  - `close` - Close the modal
  - `remove` - Remove from matches
  - `order` - Order the cocktail (placeholder action)

### RestartMessage.vue
- **Purpose**: Completion screen when all cocktails are swiped
- **Props**:
  - `show: boolean` - Visibility
  - `matchCount: number` - Number of matches
  - `matches: Cocktail[]` - Array of liked cocktails
  - `personalities: Personality[]` - Personality metadata
- **Emits**:
  - `restart` - Start over from beginning
  - `view` - View cocktail details

## 🎨 Styling

Each component has scoped styles following these principles:
- **BEM-like naming**: All CT classes prefixed with `.ct-`
- **SCSS nesting**: Logical hierarchy with parent selectors
- **Gradients & glassmorphism**: Modern UI effects
- **Responsive**: Mobile-first with `@media` queries
- **Animations**: Smooth transitions with cubic-bezier easing

## 🔧 Usage

The component is embedded directly (no feature flag/URL parameter needed) in
`src/views/CocktailsPage.vue`, which is served under the dedicated `/cocktails`
route (see `src/router/index.ts`):

```vue
<script setup>
import CocktailTinder from '../components/CocktailTinder/CocktailTinder.vue';
</script>

<template>
  <CocktailTinder id="cocktail-tinder" />
</template>
```

## 🧪 Testing

Access the feature directly via the dedicated route:
```
https://yoursite.com/cocktails
```

## 📦 Dependencies

- Vue 3 (Composition API)
- TypeScript
- SCSS
- Cocktails data from `@/data/cocktails.ts`
- Interfaces from `@/interfaces/cocktail.ts`

## 🎭 Personalities

Six personality types map to different cocktail styles:
- **🎩 Verbittert** (Bitter) - Herb, intensiv
- **🍓 Süß** (Sweet) - Süß, fruchtig
- **🌙 Mysteriös** (Mysterious) - Dunkel, komplex
- **🔥 Bitchy** - Scharf, würzig
- **🗺️ Abenteuerlustig** (Adventurous) - Mutig, experimentell
- **😇 Virgin** - Alkoholfrei

## ✨ Key Features

- ✅ Touch and mouse swipe support
- ✅ Real-time card dragging with physics
- ✅ Match notification system
- ✅ Detailed cocktail info modal
- ✅ Matches grid with quick actions
- ✅ Restart functionality
- ✅ Vertical scrolling enabled while maintaining swipe gestures
- ✅ Mobile-optimized (480px-500px card height)

## 📝 Best Practices Applied

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition over inheritance**: Uses Vue 3 Composition API
3. **Type Safety**: Full TypeScript coverage
4. **Encapsulation**: Scoped styles prevent leakage
5. **Reusability**: Components can be used independently
6. **Maintainability**: Clear separation makes debugging easier

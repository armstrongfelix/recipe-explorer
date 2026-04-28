# Recipe Explorer

A React + Vite recipe browsing app that fetches recipe data from the DummyJSON API and lets users browse, sort, and save favourites with dark mode support.

## Features

- Fetches recipes from `https://dummyjson.com/recipes`
- Grid-based recipe browsing experience
- Favorite recipes persisted in `localStorage`
- Sort recipes by rating, calories, or cook time
- Pagination for browsing recipe pages
- Dark / light theme toggle with persistent preference
- Loading skeletons and error handling

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Material UI icon dependencies
- ESLint for linting

## Project Structure

- `src/App.jsx` — main app logic, data fetching, state, and UI state management
- `src/components/Header.jsx` — header and theme toggle button
- `src/components/RecipeGrid.jsx` — responsive recipe grid layout
- `src/components/RecipeCard.jsx` — individual recipe card with favourite toggle
- `src/components/Pagination.jsx` — simple page navigation controls
- `src/components/SkeletonCard.jsx` — loading skeleton UI

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn installed

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Notes

- Favourite recipes and theme selection are stored in browser `localStorage`.
- The app uses client-side fetching and displays skeleton cards while loading.
- Pagination is only shown on the main recipe listing, not the favourites tab.

## License

This project is intended for learning and demonstration purposes.

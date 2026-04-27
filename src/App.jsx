import React, { useEffect, useMemo, useState } from "react";
import RecipeGrid from "./components/RecipeGrid";
import Pagination from "./components/Pagination";
import SkeletonCard from "./components/SkeletonCard";

const LIMIT = 12;
const STORAGE_FAVORITES = "recipeExplorerFavorites";
const STORAGE_THEME = "recipeExplorerTheme";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("rating");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, [page]);

  useEffect(() => {
    const storedFavorites = window.localStorage.getItem(STORAGE_FAVORITES);
    const storedTheme = window.localStorage.getItem(STORAGE_THEME);
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch {
        setFavorites([]);
      }
    }
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem(STORAGE_THEME, darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  async function fetchRecipes() {
    setLoading(true);
    setError(null);
    try {
      const skip = (page - 1) * LIMIT;
      const res = await fetch(
        `https://dummyjson.com/recipes?limit=${LIMIT}&skip=${skip}`,
      );
      if (!res.ok) throw new Error("Failed to fetch recipes");
      const data = await res.json();
      setRecipes(data.recipes);
      setTotal(data.total || 0);
    } catch (err) {
      setError(err.message);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  function handleToggleFavorite(recipe) {
    setFavorites((current) => {
      const exists = current.some((item) => item.id === recipe.id);
      if (exists) {
        return current.filter((item) => item.id !== recipe.id);
      }
      return [...current, recipe];
    });
  }

  const totalPages = Math.ceil(total / LIMIT);

  const displayedRecipes = useMemo(() => {
    const list = activeTab === "favorites" ? favorites : recipes;
    const sorted = [...list];
    if (sortOption === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "calories") {
      sorted.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
    } else if (sortOption === "cookTime") {
      sorted.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);
    }
    return sorted;
  }, [activeTab, favorites, recipes, sortOption]);

  const isFavoriteTab = activeTab === "favorites";
  const noResultsMessage = isFavoriteTab
    ? "No favourite recipes yet."
    : "No recipes found.";

  return (
    <div className="container" style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Recipe Explorer</h1>
          <p style={{ margin: "8px 0 0", color: "var(--text-secondary)" }}>
            Browse recipes, save favourites, and switch themes.
          </p>
        </div>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            cursor: "pointer",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setActiveTab("all")}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background:
                activeTab === "all" ? "var(--primary)" : "var(--surface)",
              color: activeTab === "all" ? "#fff" : "var(--text)",
              cursor: "pointer",
            }}
          >
            All Recipes
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: isFavoriteTab ? "var(--primary)" : "var(--surface)",
              color: isFavoriteTab ? "#fff" : "var(--text)",
              cursor: "pointer",
            }}
          >
            Favourites ({favorites.length})
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>Sort:</span>
            <select
              value={sortOption}
              onChange={(event) => setSortOption(event.target.value)}
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
              }}
            >
              <option value="rating">Rating (high to low)</option>
              <option value="calories">Calories (low to high)</option>
              <option value="cookTime">Cook time (shortest first)</option>
            </select>
          </label>
        </div>
      </div>

      {loading ? (
        <div className="grid">
          {Array.from({ length: LIMIT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : displayedRecipes.length === 0 ? (
        <div className="empty">{noResultsMessage}</div>
      ) : (
        <RecipeGrid
          recipes={displayedRecipes}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favorites.map((item) => item.id)}
        />
      )}

      {!isFavoriteTab && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

export default App;

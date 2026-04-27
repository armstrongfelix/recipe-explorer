import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes, onToggleFavorite, favoriteIds }) {
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 24,
        margin: "24px 0",
      }}
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favoriteIds.includes(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;

import React from "react";

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "green";
    case "Medium":
      return "orange";
    case "Hard":
      return "red";
    default:
      return "gray";
  }
}

function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return (
    <div
      className="recipe-card"
      style={{
        position: "relative",
        border: "1px solid #eee",
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--card-background)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      }}
    >
      <button
        onClick={() => onToggleFavorite(recipe)}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          border: "none",
          background: "rgba(255,255,255,0.92)",
          borderRadius: 999,
          padding: 10,
          cursor: "pointer",
          color: isFavorite ? "#e74c3c" : "#888",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
        aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "100%", height: 180, objectFit: "cover" }}
      />
      <div style={{ padding: 16 }}>
        <h2 style={{ fontSize: 20, margin: "0 0 8px 0" }}>{recipe.name}</h2>
        <div style={{ marginBottom: 8, color: "var(--text-secondary)" }}>
          {recipe.cuisine}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              background: getDifficultyColor(recipe.difficulty),
              color: "#fff",
              borderRadius: 8,
              padding: "2px 10px",
              fontSize: 12,
            }}
          >
            {recipe.difficulty}
          </span>
          <span style={{ color: "var(--text-secondary)", fontSize: 13 }}>
            {recipe.cookTimeMinutes} mins
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>
            {recipe.caloriesPerServing} kcal
          </span>
          <span style={{ color: "#f5b50a", fontWeight: 500 }}>
            {"★".repeat(Math.round(recipe.rating))}
            <span
              style={{
                color: "var(--text-secondary)",
                marginLeft: 4,
                fontSize: 13,
              }}
            >
              {recipe.rating}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;

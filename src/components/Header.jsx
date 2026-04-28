import React from "react";

function Header({ darkMode, onToggleDarkMode }) {
  return (
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
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 28 }}>🍽️</span>
        <div
          className="flex flex-row justify-between items-center gap-36 p-6 
        "
        >
          <h1 style={{ margin: 0 }}>Delicious ReCiPEE</h1>
          {
            <p style={{ margin: "8px 0 0", color: "var(--text-secondary)" }}>
              Browse recipes, save favourites, and switch themes.
            </p>
          }
        </div>
      </div>
      <button
        onClick={onToggleDarkMode}
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
  );
}

export default Header;

import React from "react";

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        margin: "32px 0",
      }}
    >
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        style={{
          padding: "8px 16px",
          borderRadius: 6,
          border: "1px solid #ccc",
          background: page === 1 ? "#eee" : "#fff",
          cursor: page === 1 ? "not-allowed" : "pointer",
        }}
      >
        Previous
      </button>
      <span style={{ fontWeight: 500 }}>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        style={{
          padding: "8px 16px",
          borderRadius: 6,
          border: "1px solid #ccc",
          background: page === totalPages ? "#eee" : "#fff",
          cursor: page === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

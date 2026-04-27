import React from "react";

function SkeletonCard() {
  return (
    <div
      className="skeleton-card"
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 180,
          background: "#eee",
          animation: "pulse 1.5s infinite",
        }}
      />
      <div style={{ padding: 16 }}>
        <div
          style={{
            width: "60%",
            height: 20,
            background: "#eee",
            marginBottom: 8,
            borderRadius: 4,
            animation: "pulse 1.5s infinite",
          }}
        />
        <div
          style={{
            width: "40%",
            height: 16,
            background: "#eee",
            marginBottom: 8,
            borderRadius: 4,
            animation: "pulse 1.5s infinite",
          }}
        />
        <div
          style={{
            width: "80%",
            height: 16,
            background: "#eee",
            marginBottom: 8,
            borderRadius: 4,
            animation: "pulse 1.5s infinite",
          }}
        />
        <div
          style={{
            width: "50%",
            height: 16,
            background: "#eee",
            borderRadius: 4,
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>
      <style>{`
				@keyframes pulse {
					0% { opacity: 1; }
					50% { opacity: 0.5; }
					100% { opacity: 1; }
				}
			`}</style>
    </div>
  );
}

export default SkeletonCard;

"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          backgroundColor: "#07101c",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "12px" }}>
          Critical Application Error
        </h2>
        <p style={{ color: "#94a3b8", maxWidth: "480px", marginBottom: "24px" }}>
          {error?.message || "A critical error occurred. Please try again."}
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 24px",
            borderRadius: "999px",
            backgroundColor: "#296cb3",
            color: "#ffffff",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}


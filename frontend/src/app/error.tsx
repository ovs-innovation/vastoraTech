"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div
      style={{
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
        Something went wrong!
      </h2>
      <p style={{ color: "#94a3b8", maxWidth: "480px", marginBottom: "24px" }}>
        {error?.message || "An unexpected error occurred. Please try refreshing the page."}
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
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
        <Link
          href="/"
          style={{
            padding: "10px 24px",
            borderRadius: "999px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}


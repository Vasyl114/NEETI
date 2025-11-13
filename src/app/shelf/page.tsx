"use client";

import Link from "next/link";
import Footer from "@/components/footer";
import SpaceNavigation from "@/components/space-navigation";

export default function ShelfPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--cosmic-void)" }}
    >
      <SpaceNavigation />

      <div className="text-center px-4 max-w-2xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{
            color: "var(--starlight)",
            textShadow: "0 0 20px var(--digital-cyan)",
          }}
        >
          Shelf Page
        </h1>
        <p className="text-xl mb-8" style={{ color: "var(--tungsten-steel)" }}>
          This page is under development. Check back soon for exciting updates!
        </p>
        <Link href="/">
          <button
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--plasma-magenta)",
              color: "var(--starlight)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px var(--digital-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}

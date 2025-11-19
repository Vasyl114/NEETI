"use client";

import Footer from "@/components/footer";
import SpaceNavigation from "@/components/space-navigation";

export default function ContactosPage() {
  return (
    <div
      className="min-h-screen py-20 px-4 flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--cosmic-void)" }}
    >
      <SpaceNavigation />

      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-6xl md:text-8xl font-bold mb-8"
          style={{
            color: "var(--starlight)",
            textShadow:
              "0 0 20px var(--digital-cyan), 0 0 40px var(--digital-cyan)",
          }}
        >
          CONTACTOS
        </h1>
        <p
          className="text-2xl md:text-3xl mb-12"
          style={{ color: "var(--tungsten-steel)" }}
        >
          Em desenvolvimento...
        </p>
        <div
          className="inline-block px-8 py-4 rounded-lg"
          style={{
            backgroundColor: "rgba(138, 149, 165, 0.2)",
            border: "1px solid var(--digital-cyan)",
            boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
          }}
        >
          <p
            className="text-lg"
            style={{ color: "var(--starlight)" }}
          >
            Esta página estará disponível em breve.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

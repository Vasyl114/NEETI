"use client";

import Footer from "@/components/footer";
import SpaceNavigation from "@/components/space-navigation";
import { ExternalLink } from "lucide-react";

export default function ShelfPage() {
  return (
    <div
      className="min-h-screen py-20 px-4"
      style={{ backgroundColor: "var(--cosmic-void)" }}
    >
      <SpaceNavigation />

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1
            className="text-6xl md:text-8xl font-bold mb-6"
            style={{
              color: "var(--starlight)",
              textShadow:
                "0 0 20px var(--digital-cyan), 0 0 40px var(--digital-cyan)",
            }}
          >
            SHELF
          </h1>
          <p
            className="text-2xl md:text-3xl"
            style={{ color: "var(--tungsten-steel)" }}
          >
            O teu maior apoio de estudo
          </p>
        </div>

        {/* Link Section */}
        <div className="flex flex-col items-center gap-8 mb-16 text-center">
          <p
            className="text-3xl font-semibold"
            style={{ color: "var(--starlight)" }}
          >
            Visita a nossa shelf aqui
          </p>
          <a
            href="https://drive.google.com/drive/u/1/folders/1VROFRxu-nNKWJG4u8ODAIyT2828bHYS5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--digital-cyan)",
              color: "var(--cosmic-void)",
              boxShadow: "0 0 15px var(--digital-cyan)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 25px var(--digital-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 15px var(--digital-cyan)";
            }}
          >
            Aceder à Shelf <ExternalLink size={24} />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

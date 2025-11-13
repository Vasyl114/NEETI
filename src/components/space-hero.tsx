"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SpaceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Starfield background */}
      <div className="absolute inset-0">
        {/* Multiple layers of stars for depth */}
        {mounted && (
          <>
            {/* Large stars */}
            {[...Array(50)].map((_, i) => (
              <div
                key={`star-large-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.5,
                  animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
            {/* Medium stars */}
            {[...Array(100)].map((_, i) => (
              <div
                key={`star-medium-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: "1px",
                  height: "1px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.4 + 0.3,
                  animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
            {/* Small stars */}
            {[...Array(200)].map((_, i) => (
              <div
                key={`star-small-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: "0.5px",
                  height: "0.5px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.3 + 0.2,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Earth glimpse at top - scrolls with page */}
      <div
        className="absolute top-0 left-0 right-0 h-[60vh] w-full"
        style={{
          backgroundImage: "url(/earth-custom.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Edge fade for seamless Earth transition */}
      <div
        className="absolute top-0 left-0 right-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.7) 80%, #000000 100%)",
        }}
      />

      {/* Gradient fade from Earth to deep space */}
      <div
        className="absolute top-0 left-0 right-0 h-screen"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.9) 55%, #000000 70%)",
        }}
      />

      {/* Shooting stars */}
      {mounted && (
        <>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                top: Math.random() * 60 + "%",
                left: Math.random() * 120 + "%",
                animationDelay: `${i * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </>
      )}

      {/* NEETI Logo and content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className={`text-7xl md:text-9xl font-bold mb-6 tracking-wider ${mounted ? "fade-in" : "opacity-0"}`}
          style={{
            color: "var(--starlight)",
            textShadow:
              "0 0 30px var(--digital-cyan), 0 0 60px var(--plasma-magenta)",
            animationDelay: "0.2s",
          }}
        >
          NEETI
        </h1>

        <p
          className={`text-xl md:text-2xl mb-8 ${mounted ? "fade-in" : "opacity-0"}`}
          style={{
            color: "var(--starlight)",
            animationDelay: "0.6s",
          }}
        >
          From students to students
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer z-10"
        style={{ color: "var(--digital-cyan)" }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        <ChevronDown
          className="w-8 h-8"
          style={{
            filter: "drop-shadow(0 0 10px var(--digital-cyan))",
          }}
        />
      </div>
    </section>
  );
}

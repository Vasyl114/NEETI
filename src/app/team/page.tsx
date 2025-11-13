"use client";

import SpaceNavigation from "@/components/space-navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TeamPage() {
  const [openYear, setOpenYear] = useState<string | null>(null);

  const currentYearDirectors = [
    { name: "Madalena Bordadágua", image: "/madalena_b.jpg" },
    {
      name: "Mariana Antunes",
      image: "/mariana.jpg",
    },
    {
      name: "Madalena Martins",
      image: "/madalena_m.jpg",
    },
    {
      name: "Diogo Folião",
      image: "/diogo.jpg",
    },
  ];

  const pastYears = [
    "2024 - 2025",
    "2023 - 2024",
    "2022 - 2023",
    "2021 - 2022",
    "2020 - 2021",
    "2019 - 2020",
    "2018 - 2019",
    "2017 - 2018",
    "2016 - 2017",
    "2015 - 2016",
  ];

  const mockTeamData: Record<string, { direcao: string[], assembleia: string[], conselhoFiscal: string[] }> = {
    "2024 - 2025": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3"],
      conselhoFiscal: ["Full Name 1", "Full Name 2", "Full Name 3"],
    },
    "2023 - 2024": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5", "Full Name 6", "Full Name 7", "Full Name 8", "Full Name 9"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4"],
      conselhoFiscal: ["Full Name 1", "Full Name 2"],
    },
    "2022 - 2023": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3"],
      conselhoFiscal: ["Full Name 1", "Full Name 2", "Full Name 3"],
    },
    "2021 - 2022": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5", "Full Name 6"],
      assembleia: ["Full Name 1", "Full Name 2"],
      conselhoFiscal: ["Full Name 1", "Full Name 2", "Full Name 3"],
    },
    "2020 - 2021": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3"],
      conselhoFiscal: ["Full Name 1", "Full Name 2"],
    },
    "2019 - 2020": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4"],
      conselhoFiscal: ["Full Name 1", "Full Name 2", "Full Name 3"],
    },
    "2018 - 2019": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5", "Full Name 6", "Full Name 7"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3"],
      conselhoFiscal: ["Full Name 1", "Full Name 2"],
    },
    "2017 - 2018": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5"],
      assembleia: ["Full Name 1", "Full Name 2"],
      conselhoFiscal: ["Full Name 1", "Full Name 2", "Full Name 3"],
    },
    "2016 - 2017": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3"],
      conselhoFiscal: ["Full Name 1", "Full Name 2"],
    },
    "2015 - 2016": {
      direcao: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5", "Full Name 6"],
      assembleia: ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4"],
      conselhoFiscal: ["Full Name 1", "Full Name 2", "Full Name 3"],
    },
  };

  return (
    <div
      className="min-h-screen py-20 px-4"
      style={{ backgroundColor: "var(--cosmic-void)" }}
    >
      <SpaceNavigation />

      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-32">
          <h1
            className="text-6xl md:text-8xl font-bold mb-4"
            style={{
              color: "var(--starlight)",
              textShadow:
                "0 0 20px var(--digital-cyan), 0 0 40px var(--digital-cyan)",
            }}
          >
            Team
          </h1>
          <p
            className="text-2xl md:text-3xl"
            style={{ color: "var(--tungsten-steel)" }}
          >
            2025 - 2026
          </p>
        </div>

        {/* Current Year - Direção Section */}
        <div className="mb-24">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{
              color: "var(--starlight)",
              textShadow: "0 0 15px var(--plasma-magenta)",
            }}
          >
            Direção
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {currentYearDirectors.map((director, index) => (
              <div
                key={index}
                className="flex flex-col items-center transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-72 h-96 rounded-lg overflow-hidden mb-4"
                  style={{
                    border: "3px solid var(--digital-cyan)",
                    boxShadow: "0 0 20px var(--digital-cyan)",
                  }}
                >
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={288}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-xl font-semibold"
                  style={{ color: "var(--starlight)" }}
                >
                  {director.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Years Dropdown Section */}
        <div className="space-y-4 mb-16">
          {pastYears.map((year) => (
            <div key={year}>
              <button
                onClick={() => setOpenYear(openYear === year ? null : year)}
                className="w-full flex items-center justify-between p-6 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: "var(--tungsten-steel)",
                  color: "var(--starlight)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px var(--digital-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0, 0, 0, 0.4)";
                }}
              >
                <span className="text-2xl font-bold">Team {year}</span>
                {openYear === year ? (
                  <ChevronUp
                    className="w-6 h-6"
                    style={{ color: "var(--digital-cyan)" }}
                  />
                ) : (
                  <ChevronDown
                    className="w-6 h-6"
                    style={{ color: "var(--digital-cyan)" }}
                  />
                )}
              </button>

              {openYear === year && (
                <div
                  className="mt-4 p-8 rounded-lg"
                  style={{
                    backgroundColor: "rgba(138, 149, 165, 0.1)",
                    border: "1px solid var(--tungsten-steel)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Direção Column */}
                    <div>
                      <h3
                        className="text-2xl font-bold mb-6 text-center"
                        style={{
                          color: "var(--starlight)",
                          textShadow: "0 0 10px var(--plasma-magenta)",
                        }}
                      >
                        Direção
                      </h3>
                      <div className="space-y-3">
                        {mockTeamData[year]?.direcao.map((name, index) => (
                          <p
                            key={index}
                            className="text-center text-lg"
                            style={{ color: "var(--starlight)" }}
                          >
                            {name}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Assembleia Column */}
                    <div>
                      <h3
                        className="text-2xl font-bold mb-6 text-center"
                        style={{
                          color: "var(--starlight)",
                          textShadow: "0 0 10px var(--plasma-magenta)",
                        }}
                      >
                        Assembleia
                      </h3>
                      <div className="space-y-3">
                        {mockTeamData[year]?.assembleia.map((name, index) => (
                          <p
                            key={index}
                            className="text-center text-lg"
                            style={{ color: "var(--starlight)" }}
                          >
                            {name}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Conselho Fiscal Column */}
                    <div>
                      <h3
                        className="text-2xl font-bold mb-6 text-center"
                        style={{
                          color: "var(--starlight)",
                          textShadow: "0 0 10px var(--plasma-magenta)",
                        }}
                      >
                        Conselho Fiscal
                      </h3>
                      <div className="space-y-3">
                        {mockTeamData[year]?.conselhoFiscal.map((name, index) => (
                          <p
                            key={index}
                            className="text-center text-lg"
                            style={{ color: "var(--starlight)" }}
                          >
                            {name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
"use client";

import Footer from "@/components/footer";
import SpaceNavigation from "@/components/space-navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ShelfPage() {
  const [openYear, setOpenYear] = useState<string | null>(null);
  const [openSemester, setOpenSemester] = useState<string | null>(null);

  const years = ["1º Ano", "2º Ano", "3º Ano"];

  const coursesData: Record<string, Record<string, string[]>> = {
    "1º Ano": {
      "1º Semestre": [
        "Álgebra Linear",
        "CDI-1",
        "Fundamentos da Programação",
        "Gestão",
        "Introdução à Economia",
        "Sistemas Digitais",
      ],
      "2º Semestre": ["CDI-2", "AC", "IADE", "MD", "MO"],
    },
    "2º Ano": {
      "1º Semestre": ["CDI-3", "EO", "ICSE", "PO", "SO"],
      "2º Semestre": ["PE", "BD", "IRC", "IPM", "SS"],
    },
    "3º Ano": {
      "1º Semestre": ["ADME", "AR", "Esemb", "PA"],
      "2º Semestre": ["ESoft", "SC", "SDist", "SIRS"],
    },
  };

  return (
    <div
      className="min-h-screen py-20 px-4"
      style={{ backgroundColor: "var(--cosmic-void)" }}
    >
      <SpaceNavigation />

      <div className="max-w-5xl mx-auto">
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

        {/* Years Dropdown Section */}
        <div className="space-y-4 mb-16">
          {years.map((year) => (
            <div key={year}>
              <button
                onClick={() => {
                  setOpenYear(openYear === year ? null : year);
                  setOpenSemester(null);
                }}
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
                <span className="text-2xl font-bold">{year}</span>
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
                <div className="mt-4 space-y-3 pl-8">
                  {Object.keys(coursesData[year]).map((semester) => (
                    <div key={semester}>
                      <button
                        onClick={() =>
                          setOpenSemester(
                            openSemester === `${year}-${semester}`
                              ? null
                              : `${year}-${semester}`,
                          )
                        }
                        className="w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300"
                        style={{
                          backgroundColor: "rgba(138, 149, 165, 0.5)",
                          color: "var(--starlight)",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateX(4px)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 12px var(--plasma-magenta)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.style.boxShadow =
                            "0 2px 8px rgba(0, 0, 0, 0.3)";
                        }}
                      >
                        <span className="text-xl font-semibold">
                          {semester}
                        </span>
                        {openSemester === `${year}-${semester}` ? (
                          <ChevronUp
                            className="w-5 h-5"
                            style={{ color: "var(--plasma-magenta)" }}
                          />
                        ) : (
                          <ChevronDown
                            className="w-5 h-5"
                            style={{ color: "var(--plasma-magenta)" }}
                          />
                        )}
                      </button>

                      {openSemester === `${year}-${semester}` && (
                        <div
                          className="mt-3 p-6 rounded-lg space-y-3"
                          style={{
                            backgroundColor: "rgba(138, 149, 165, 0.1)",
                            border: "1px solid var(--tungsten-steel)",
                          }}
                        >
                          {coursesData[year][semester].map((course, index) => (
                            <div
                              key={index}
                              className="p-4 rounded-lg transition-all duration-300 hover:scale-102"
                              style={{
                                backgroundColor: "rgba(240, 244, 248, 0.05)",
                                border: "1px solid var(--digital-cyan)",
                                color: "var(--starlight)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                  "0 0 15px var(--digital-cyan)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                              }}
                            >
                              <p className="text-lg">{course}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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

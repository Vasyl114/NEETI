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
        <div className="space-y-8 text-left w-full mx-auto">
          {/* General Contacts */}
          <div
            className="p-8 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "rgba(138, 149, 165, 0.1)",
              border: "1px solid var(--tungsten-steel)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.2)";
              e.currentTarget.style.border = "1px solid var(--digital-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border = "1px solid var(--tungsten-steel)";
            }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--digital-cyan)" }}>
              Contactos Gerais
            </h2>
            <p className="text-lg" style={{ color: "var(--starlight)" }}>
              Para contactos de qualquer espécie, o nosso email é:<br />
              <a href="mailto:geral@neeti.tecnico.ulisboa.pt" className="font-bold hover:underline mt-2 inline-block" style={{ color: "var(--plasma-magenta)" }}>
                geral@neeti.tecnico.ulisboa.pt
              </a>
            </p>
          </div>

          {/* Location & Phone */}
          <div
            className="p-8 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "rgba(138, 149, 165, 0.1)",
              border: "1px solid var(--tungsten-steel)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.2)";
              e.currentTarget.style.border = "1px solid var(--digital-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border = "1px solid var(--tungsten-steel)";
            }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--digital-cyan)" }}>
              Localização e Telefone
            </h2>
            <p className="text-lg mb-2" style={{ color: "var(--starlight)" }}>
              Também estamos sempre à disposição na sala 1.4.16 do Campus do Taguspark do IST.
            </p>
            <p className="text-md mb-6" style={{ color: "var(--tungsten-steel)" }}>
              Av. Prof. Doutor Cavaco Silva, 2744-016 Porto Salvo
            </p>
            <p className="text-lg" style={{ color: "var(--starlight)" }}>
              <strong>Telefone:</strong> +351 214 233 547<br />
              <strong>Extensão:</strong> 5147
            </p>
          </div>

          {/* Specific Contacts */}
          <div
            className="p-8 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "rgba(138, 149, 165, 0.1)",
              border: "1px solid var(--tungsten-steel)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.2)";
              e.currentTarget.style.border = "1px solid var(--digital-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border = "1px solid var(--tungsten-steel)";
            }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--digital-cyan)" }}>
              Órgãos Sociais
            </h2>
            <p className="text-lg mb-6" style={{ color: "var(--starlight)" }}>
              Para informações mais especificas, pode usar os emails institucionais dos membros dos orgãos sociais:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded bg-black/20">
                <p className="text-lg font-bold" style={{ color: "var(--starlight)" }}>Madalena Bordadágua</p>
                <p className="text-sm mb-2" style={{ color: "var(--tungsten-steel)" }}>Presidente</p>
                <a href="mailto:madalena.bordadagua@tecnico.ulisboa.pt" className="hover:underline" style={{ color: "var(--plasma-magenta)" }}>
                  madalena.bordadagua@tecnico.ulisboa.pt
                </a>
              </div>
              <div className="p-4 rounded bg-black/20">
                <p className="text-lg font-bold" style={{ color: "var(--starlight)" }}>Mariana Antunes</p>
                <p className="text-sm mb-2" style={{ color: "var(--tungsten-steel)" }}>Vice-Presidente</p>
                <a href="mailto:marianacristinaanutunes@tecnico.ulisboa.pt" className="hover:underline" style={{ color: "var(--plasma-magenta)" }}>
                  marianacristinaanutunes@tecnico.ulisboa.pt
                </a>
              </div>
              <div className="p-4 rounded bg-black/20">
                <p className="text-lg font-bold" style={{ color: "var(--starlight)" }}>Matilde Capelo</p>
                <p className="text-sm mb-2" style={{ color: "var(--tungsten-steel)" }}>Presidente da Assembleia Geral</p>
                <a href="mailto:matilde.rocha.lopes@tecnico.ulisboa.pt" className="hover:underline" style={{ color: "var(--plasma-magenta)" }}>
                  matilde.rocha.lopes@tecnico.ulisboa.pt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

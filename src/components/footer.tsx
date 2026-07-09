import Image from "next/image";
import { Facebook, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-20 mt-32 flex flex-col items-center gap-8 relative z-10">
      {/* University Logo */}
      <div
        className="relative w-96 h-32 p-4 rounded-lg"
        style={{
          filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.4))",
        }}
      >
        <Image
          src="/tecnico-lisboa-logo.png"
          alt="Técnico Lisboa"
          width={420}
          height={164}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-8">
        <a
          href="https://www.facebook.com/NEETI.IST/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
          style={{
            color: "var(--starlight)",
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))",
          }}
        >
          <Facebook className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/company/neerci?trk=company_logo"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
          style={{
            color: "var(--starlight)",
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))",
          }}
        >
          <Linkedin className="w-8 h-8" />
        </a>
        <a
          href="https://instagram.com/neeti_ist/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
          style={{
            color: "var(--starlight)",
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))",
          }}
        >
          <Instagram className="w-8 h-8" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdpC_uftQikmRw3-N8fV2lg"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
          style={{
            color: "var(--starlight)",
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))",
          }}
        >
          <Youtube className="w-8 h-8" />
        </a>
        <a
          href="mailto:geral@neeti.tecnico.ulisboa.pt"
          className="transition-all duration-300 hover:scale-110"
          style={{
            color: "var(--starlight)",
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))",
          }}
        >
          <Mail className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}

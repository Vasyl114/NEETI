"use client";

import Footer from "@/components/footer";
import SpaceNavigation from "@/components/space-navigation";

export default function CursoPage() {
  return (
    <div
      className="min-h-screen py-20 px-4"
      style={{ backgroundColor: "var(--cosmic-void)" }}
    >
      <SpaceNavigation />

      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              color: "var(--starlight)",
              textShadow:
                "0 0 20px var(--digital-cyan), 0 0 40px var(--digital-cyan)",
            }}
          >
            Engenharia de Telecomunicações e Informática
          </h1>
          <p
            className="text-2xl md:text-3xl"
            style={{ color: "var(--tungsten-steel)" }}
          >
            Uma garantia do futuro
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 mb-16">
          {/* ETI Section */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: "var(--starlight)",
                textShadow: "0 0 15px var(--plasma-magenta)",
              }}
            >
              ETI
            </h2>
            <div
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: "var(--starlight)" }}
            >
              <p>
                "A Engenharia da Internet" é assim que pode ser conhecida a
                Engenharia de Telecomunicações e Informática, um curso recente,
                mas um dos mais importantes num futuro próximo, onde o mundo
                gira à volta da internet. Com a chegada da "Internet of things"
                (um mundo onde tudo o que nos rodeia, está ligado à rede) e com
                a utilização que existe atualmente dos telemóveis, a importância
                dos engenheiros de redes é cada vez maior e são precisos cada
                vez mais.
              </p>
              <p>
                Situados no Polo Tecnológico do Taguspark, em Oeiras, a
                Licenciatura em Engenharia de Telecomunicações e Informática do
                Instituto Superior Técnico é o Curso onde se juntam a
                Informática, a Eletrotecnia e as Telecomunicações, três áreas
                que até aqui não se cruzavam, são agora essenciais juntas para o
                futuro e o desenvolvimento da Internet.
              </p>
              <p>
                Sendo um dos poucos cursos do país com 100% de empregabilidade
                na área, as principais saídas para um Engenheiro de ETI são a
                gestão e o planeamento redes de telecomunicações, a programação
                de aplicações móveis, multimédia e na cloud, a arquitetura de
                redes de computadores, a projeção e gestão de sistemas de
                informação e bases de dados para a web, entre outras.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <a
                href="https://fenix.tecnico.ulisboa.pt/cursos/lerc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg transition-all duration-300 text-center"
                style={{
                  backgroundColor: "var(--plasma-magenta)",
                  color: "var(--starlight)",
                  boxShadow: "0 4px 16px rgba(224, 0, 184, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px var(--digital-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(224, 0, 184, 0.4)";
                }}
              >
                Página oficial da <strong>Licenciatura</strong>
              </a>
              <a
                href="https://fenix.tecnico.ulisboa.pt/cursos/merc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg transition-all duration-300 text-center"
                style={{
                  backgroundColor: "var(--plasma-magenta)",
                  color: "var(--starlight)",
                  boxShadow: "0 4px 16px rgba(224, 0, 184, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px var(--digital-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(224, 0, 184, 0.4)";
                }}
              >
                Página oficial do <strong>Mestrado</strong>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--digital-cyan), transparent)",
              boxShadow: "0 0 10px var(--digital-cyan)",
            }}
          />

          {/* Success Cases Section */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{
                color: "var(--starlight)",
                textShadow: "0 0 15px var(--plasma-magenta)",
              }}
            >
              Casos de Sucesso:
            </h2>
            <div
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: "var(--starlight)" }}
            >
              <p>
                <strong>Diogo Mónica</strong>, acabou o Mestrado em Engenharia
                de Telecomunicações e Informática e recebeu convites para
                estagiar na Google e no Facebook. Fazendo o impensável, recusou
                e acabou por integrar a equipa da Square, empresa recém-formada
                na altura, que fornece um software que permite o pagamento com
                cartões através de dispositivos móveis. Diogo foi chefe da
                equipa de segurança da empresa. Em Março de 2015 integrou a
                equipa da Docker, na área da segurança.
              </p>
              <p>
                <strong>Rui Costa</strong> fundou o IEEE Academic, uma
                plataforma de aprendizagem online que disponibiliza vídeos com
                conteúdos educativos com a colaboração dos professores da
                instituição. Atualmente trabalha na Veniam, uma startup
                portuguesa que atualmente tem sede em Silicon Valley, onde faz
                parte da equipa responsável pelo desenho e desenvolvimento da
                Cloud da Veniam.
              </p>
              <p>
                <strong>Cristina Fonseca e Tiago Paiva</strong> acabaram o curso
                em 2011 e, não ficando satisfeitos com as propostas que lhes
                eram feitas, decidiram concorrer a um concurso de uma empresa
                americana onde tinham que desenvolver uma aplicação que
                permitisse um serviço telefónico através da web. Aqui nasceu a
                Talkdesk, uma startup que permite a um cliente criar um
                callcenter na Cloud. Atualmente, a Talkdesk tem sede na
                California e em Portugal.
              </p>
            </div>
          </div>

          {/* Bottom Divider */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--digital-cyan), transparent)",
              boxShadow: "0 0 10px var(--digital-cyan)",
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

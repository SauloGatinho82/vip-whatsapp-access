import { createFileRoute } from "@tanstack/react-router";
import bannerAcai from "@/assets/banner-acai.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Açaí + Barato — Grupo VIP de Promoções" },
      {
        name: "description",
        content:
          "Participe gratuitamente do grupo VIP de promoções do Açaí + Barato. Frescura diária, delivery rápido e sabor imbatível direto no seu WhatsApp.",
      },
      { property: "og:title", content: "Açaí + Barato — Grupo VIP de Promoções" },
      {
        property: "og:description",
        content:
          "Entre de graça no grupo VIP e receba promoções exclusivas de açaí no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbDfbjkKrWR27ltz0P32";

function Index() {
  return (
    <div className="lp-shell">
      <main className="lp-frame">
        {/* SEÇÃO 1 — TOPO */}
        <section className="lp-topbar">
          <p>PARTICIPE DO GRUPO DE FORMA GRATUITA</p>
        </section>

        {/* SEÇÃO 2 — BANNER (imagem original, sem cortes) */}
        <section className="lp-banner">
          <img
            src="/banner-acai.jpg"
            alt="Açaí + Barato — Qualidade que cabe no bolso. Frescura diária, delivery rápido, sabor imbatível."
            width={1400}
            height={775}
          />
        </section>

        {/* SEÇÃO 3 — OFERTA */}
        <section className="lp-offer lp-fade">
          <h1 className="lp-offer-title">Grupo Vip</h1>
          <p className="lp-offer-sub">Promoção para membros</p>
        </section>

        {/* SEÇÃO 4 — ESCASSEZ */}
        <section className="lp-fade">
          <div className="lp-scarcity">
            <p>
              Vagas <span>LIMITADAS</span>
            </p>
          </div>
        </section>

        {/* SEÇÃO 5 — CTA */}
        <section className="lp-cta-wrap lp-fade">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lp-cta"
            onClick={() => {
              if (window.fbq) {
                  window
          >
            ENTRAR AGORA
          </a>
        </section>
      </main>
    </div>
  );
}

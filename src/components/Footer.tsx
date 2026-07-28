import { Instagram, MapPin, MessageCircle, PawPrint, Phone } from "lucide-react";
import { BUSINESS, mapsUrl, phoneUrl, whatsappUrl } from "../config/business";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-petroleum-900 py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-petroleum-700">
              <PawPrint aria-hidden="true" className="size-6" />
            </span>
            <span className="text-xl font-black">{BUSINESS.name}</span>
          </div>
          <address className="mt-5 not-italic leading-7 text-petroleum-50">
            {BUSINESS.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-honey-300">Links rápidos</h2>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit rounded-full text-petroleum-50 transition hover:text-honey-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-honey-300">Contato</h2>
          <div className="mt-4 grid gap-3">
            <a href={phoneUrl} className="inline-flex w-fit items-center gap-2 rounded-full text-petroleum-50 transition hover:text-honey-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300">
              <Phone aria-hidden="true" className="size-5" />
              {BUSINESS.phoneDisplay}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full text-petroleum-50 transition hover:text-honey-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300">
              <MessageCircle aria-hidden="true" className="size-5" />
              WhatsApp
            </a>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full text-petroleum-50 transition hover:text-honey-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300">
              <Instagram aria-hidden="true" className="size-5" />
              Instagram
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full text-petroleum-50 transition hover:text-honey-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300">
              <MapPin aria-hidden="true" className="size-5" />
              Localização
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-sm text-petroleum-50">
        <p>© {currentYear} {BUSINESS.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

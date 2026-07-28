import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { BUSINESS, whatsappUrl } from "../config/business";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Navegação principal">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-full text-petroleum-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
        >
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-petroleum-900 shadow-sm ring-2 ring-honey-300">
            <img
              src="/images/logo_barber.png"
              alt="Logo Barber Dog Club"
              className="size-full object-cover"
            />
          </span>
          <span className="text-lg font-black tracking-normal sm:text-xl">{BUSINESS.name}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full text-sm font-semibold text-slate-700 transition hover:text-petroleum-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <MessageCircle aria-hidden="true" className="size-5" />
            Agendar pelo WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-stone-200 bg-white text-petroleum-800 shadow-sm transition hover:bg-petroleum-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300 lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-stone-100 bg-white transition lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="container-page flex flex-col gap-2 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 font-semibold text-slate-700 transition hover:bg-petroleum-50 hover:text-petroleum-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
            >
              {item.label}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className="btn-primary mt-2">
            <MessageCircle aria-hidden="true" className="size-5" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

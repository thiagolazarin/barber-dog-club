import { MessageCircle, PawPrint } from "lucide-react";
import { whatsappUrl } from "../config/business";

export function FinalCTA() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#17100c,_#4a2412_48%,_#e67918)] p-8 text-white shadow-soft sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <PawPrint aria-hidden="true" className="mb-5 size-10 text-honey-100" />
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">Vamos cuidar do seu melhor amigo?</h2>
            <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg">
              Fale com a equipe do Barber Dog Club, conte um pouco sobre o seu pet e consulte os horários disponíveis.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-honey-300 px-6 py-4 text-base font-black text-petroleum-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              Agendar atendimento pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";
import { services } from "../data/services";
import { whatsappUrl } from "../config/business";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="servicos" className="section-band bg-white">
      <div className="container-page">
        <SectionHeading kicker="Serviços" title="Banho, tosa e cuidados para diferentes perfis de pets" centered>
          Do banho essencial aos cuidados com pets especiais, cada atendimento é pensado para unir higiene, conforto e
          segurança.
        </SectionHeading>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card flex h-full flex-col p-6">
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-petroleum-50 text-petroleum-700">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full text-sm font-bold text-petroleum-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
                >
                  Consulte pelo WhatsApp
                  <MessageCircle aria-hidden="true" className="size-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

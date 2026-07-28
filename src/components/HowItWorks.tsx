import { CalendarCheck, MessageCircle, PawPrint } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Entre em contato pelo WhatsApp",
    description: "Envie uma mensagem para iniciar o atendimento com a equipe.",
    icon: MessageCircle,
  },
  {
    title: "Conte sobre o seu pet",
    description: "Informe porte, espécie, comportamento e o serviço desejado.",
    icon: PawPrint,
  },
  {
    title: "Combine dia e horário",
    description: "A equipe ajuda a encontrar o melhor momento disponível.",
    icon: CalendarCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="section-band bg-stone-50">
      <div className="container-page">
        <SectionHeading kicker="Como funciona" title="Agendamento simples, conversa clara e cuidado desde o primeiro contato" centered />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="card p-6">
                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-petroleum-600 text-lg font-black text-white">
                    {index + 1}
                  </span>
                  <Icon aria-hidden="true" className="size-7 text-honey-500" />
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

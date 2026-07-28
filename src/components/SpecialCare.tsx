import { HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "../config/business";

export function SpecialCare() {
  return (
    <section className="section-band bg-petroleum-900 text-white">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-honey-300">Cuidado especial</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">Seu pet tem medo de banho e tosa?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-petroleum-50 sm:text-lg">
            Sabemos que alguns animais chegam com medo ou traumas de experiências anteriores. Por isso, respeitamos o
            tempo de cada pet e buscamos tornar o atendimento o mais tranquilo e positivo possível.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex btn-primary bg-honey-500 text-petroleum-900 hover:bg-honey-300">
            <MessageCircle aria-hidden="true" className="size-5" />
            Conversar sobre meu pet
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <HeartHandshake aria-hidden="true" className="mb-4 size-8 text-honey-300" />
            <h3 className="font-black">Abordagem paciente</h3>
            <p className="mt-2 text-sm leading-6 text-petroleum-50">
              O atendimento considera sinais de medo, limite e conforto de cada animal.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <ShieldCheck aria-hidden="true" className="mb-4 size-8 text-honey-300" />
            <h3 className="font-black">Mais segurança</h3>
            <p className="mt-2 text-sm leading-6 text-petroleum-50">
              Tutores podem explicar histórico, necessidades e comportamento antes do serviço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

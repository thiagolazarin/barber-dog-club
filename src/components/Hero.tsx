import { ArrowRight, HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { whatsappUrl } from "../config/business";

const highlights = [
  { label: "Atendimento cuidadoso", icon: HeartHandshake },
  { label: "Especialistas em cães grandes", icon: ShieldCheck },
  { label: "Pets especiais são bem-vindos", icon: Sparkles },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#ffe8bd,_transparent_34%),linear-gradient(135deg,_#fffaf4_0%,_#fff3df_52%,_#fff8ef_100%)]" />
      <div className="container-page grid min-h-[calc(100vh-5rem)] items-center gap-10 pb-14 lg:grid-cols-[1fr_0.92fr] lg:pb-18">
        <div className="reveal max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-petroleum-100 bg-white/80 px-4 py-2 text-sm font-bold text-petroleum-700 shadow-sm">
            <Sparkles aria-hidden="true" className="size-4 text-honey-500" />
            Banho e tosa em Campinas/SP
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-slate-950 sm:text-5xl lg:text-6xl">
            Cuidado, carinho e atenção que o seu pet merece
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Banho e tosa com atendimento individualizado para cães de todos os portes, gatos e animais exóticos em
            Campinas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle aria-hidden="true" className="size-5" />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-secondary">
              Conhecer os serviços
              <ArrowRight aria-hidden="true" className="size-5" />
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur">
                  <Icon aria-hidden="true" className="mb-3 size-6 text-petroleum-600" />
                  <p className="text-sm font-bold leading-5 text-slate-800">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal relative">
          <div className="overflow-hidden rounded-[2rem] border-8 border-white bg-petroleum-50 shadow-soft">
            <img
              src="/images/dog2.jpg"
              alt="Cachorro atendido pelo Barber Dog Club usando bandana colorida"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white bg-white/95 p-4 shadow-soft backdrop-blur sm:left-auto sm:right-6 sm:w-72">
            <p className="text-sm font-black text-petroleum-900">Cuidado adaptado ao seu pet</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Uma conversa antes do atendimento ajuda a entender medos, rotina e necessidades especiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

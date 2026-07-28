import { Cat, CheckCircle2, Dog, Heart, MessageSquareHeart, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const differentials = [
  { title: "Atendimento individualizado", icon: CheckCircle2 },
  { title: "Carinho e respeito com cada animal", icon: Heart },
  { title: "Experiência com animais medrosos", icon: Sparkles },
  { title: "Especialização em cães de grande porte", icon: Dog },
  { title: "Cuidados para gatos e animais exóticos", icon: Cat },
  { title: "Comunicação com os tutores", icon: MessageSquareHeart },
  { title: "Ambiente seguro e acolhedor", icon: ShieldCheck },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section-band bg-stone-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading kicker="Diferenciais" title="Cada pet é recebido como único">
            Cada animal tem seu próprio comportamento, histórico e sensibilidade. Por isso, o atendimento é adaptado às
            necessidades de cada pet, com atenção ao tempo, ao conforto e à segurança durante todo o processo.
          </SectionHeading>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card flex items-start gap-4 p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-honey-100 text-petroleum-800">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="text-base font-black leading-6 text-slate-900">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

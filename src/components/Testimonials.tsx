import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="section-band bg-white">
      <div className="container-page">
        <SectionHeading kicker="Avaliações" title="Confiança construída com tutores de Campinas" centered>
          Relatos de quem procurou atendimento cuidadoso e encontrou acolhimento para pets com diferentes necessidades.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="card p-6">
              <div className="flex gap-1 text-honey-500" aria-label="Avaliação cinco estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} aria-hidden="true" className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-7 text-slate-700">“{testimonial.quote}”</blockquote>
              <p className="mt-5 font-black text-petroleum-800">{testimonial.author}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Depoimentos baseados em avaliações públicas de clientes.
        </p>
      </div>
    </section>
  );
}

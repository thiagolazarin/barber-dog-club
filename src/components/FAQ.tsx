import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faq";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <SectionHeading kicker="Perguntas frequentes" title="Dúvidas comuns antes de agendar" centered />

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          {faqItems.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-black text-slate-900 transition hover:bg-petroleum-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-honey-300">
                {item.question}
                <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-petroleum-700 transition group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

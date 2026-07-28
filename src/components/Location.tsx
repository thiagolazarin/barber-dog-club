import { Clock, Instagram, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { BUSINESS, mapEmbedUrl, mapsUrl, phoneUrl, whatsappUrl } from "../config/business";
import { SectionHeading } from "./SectionHeading";

export function Location() {
  return (
    <section id="localizacao" className="section-band bg-stone-50">
      <div className="container-page">
        <SectionHeading kicker="Localização" title="Barber Dog Club em Campinas" centered>
          Atendimento na Fazenda Santa Cândida, com agendamento e orientação pelo WhatsApp.
        </SectionHeading>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-petroleum-50 text-petroleum-700">
                <MapPin aria-hidden="true" className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950">{BUSINESS.name}</h3>
                <address className="mt-3 not-italic leading-7 text-slate-600">
                  {BUSINESS.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-petroleum-50 p-5">
              <div className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-5 text-petroleum-700" />
                <div>
                  <p className="font-black text-petroleum-900">Horário de funcionamento</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Consulte os horários disponíveis pelo WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 rounded-2xl border border-stone-200 bg-white p-5">
              <a
                href={phoneUrl}
                className="inline-flex w-fit items-center gap-2 rounded-full font-bold text-petroleum-800 transition hover:text-petroleum-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
              >
                <Phone aria-hidden="true" className="size-5" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full font-bold text-petroleum-800 transition hover:text-petroleum-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
              >
                <Instagram aria-hidden="true" className="size-5" />
                Instagram
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                <Navigation aria-hidden="true" className="size-5" />
                Abrir no Google Maps
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
                <MessageCircle aria-hidden="true" className="size-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <iframe
              title="Mapa da localização do Barber Dog Club"
              src={mapEmbedUrl}
              className="h-[360px] w-full lg:h-full lg:min-h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../config/business";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#1fb458] focus:outline-none focus-visible:ring-4 focus-visible:ring-honey-300"
      aria-label="Agendar atendimento pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="size-7" />
    </a>
  );
}

export const BUSINESS = {
  name: "Barber Dog Club",
  segment: "Pet shop, banho e tosa",
  addressLines: [
    "Rua Armando Strazzacappa, 550",
    "Fazenda Santa Cândida",
    "Campinas - SP",
    "CEP 13087-605",
  ],
  fullAddress: "Rua Armando Strazzacappa, 550, Fazenda Santa Cândida, Campinas - SP, CEP 13087-605",
  phoneDisplay: "(19) 98259-1654",
  instagramUrl: "https://www.instagram.com/barberdogclub2/",
};

// Atualize este número se o WhatsApp oficial do Barber Dog Club mudar.
export const WHATSAPP_NUMBER = "5519982591654";

export const WHATSAPP_MESSAGE =
  "Olá! Encontrei o Barber Dog Club pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const phoneUrl = `tel:+${WHATSAPP_NUMBER}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.fullAddress,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.fullAddress,
)}&output=embed`;

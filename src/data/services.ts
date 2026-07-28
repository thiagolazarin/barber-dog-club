import {
  Bath,
  Cat,
  Dog,
  HeartHandshake,
  Scissors,
  ShieldCheck,
  Sparkles,
  Turtle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Banho",
    description: "Higiene completa com cuidado, conforto e produtos adequados para cada pet.",
    icon: Bath,
  },
  {
    title: "Tosa",
    description: "Acabamento profissional para valorizar o bem-estar e o estilo do seu companheiro.",
    icon: Scissors,
  },
  {
    title: "Tosa higiênica",
    description: "Mais conforto no dia a dia, com atenção às áreas que precisam de limpeza extra.",
    icon: ShieldCheck,
  },
  {
    title: "Hidratação",
    description: "Cuidado para pelagem mais macia, saudável e bonita. Consulte pelo WhatsApp.",
    icon: Sparkles,
  },
  {
    title: "Cães de grande porte",
    description: "Equipe preparada para receber cães maiores com segurança, paciência e técnica.",
    icon: Dog,
  },
  {
    title: "Atendimento para gatos",
    description: "Abordagem tranquila e respeitosa para felinos que precisam de cuidado especial.",
    icon: Cat,
  },
  {
    title: "Animais exóticos",
    description: "Atendimento cuidadoso para tutores que buscam orientação antes do agendamento.",
    icon: Turtle,
  },
  {
    title: "Pets especiais",
    description: "Atenção para animais medrosos, idosos, traumatizados ou com necessidades especiais.",
    icon: HeartHandshake,
  },
];

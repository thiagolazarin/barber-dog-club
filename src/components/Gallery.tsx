import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const galleryItems = [
  { title: "Atendimento com carinho", src: "/images/dog1.jpg" },
  { title: "Visual Barber Dog Club", src: "/images/dog2.jpg" },
  { title: "Banho e cuidado", src: "/images/dog3.jpg" },
  { title: "Pet pronto para foto", src: "/images/dog4.jpg" },
  { title: "Cuidado individualizado", src: "/images/dog5.jpg" },
  { title: "Pets pequenos", src: "/images/dog6.jpg" },
  { title: "Tosa e acabamento", src: "/images/dog7.jpg" },
  { title: "Pelagem bem cuidada", src: "/images/dog8.jpg" },
  { title: "Pet feliz", src: "/images/dog9.jpg" },
  { title: "Banho com conforto", src: "/images/dog10.jpg" },
  { title: "Cães de todos os portes", src: "/images/dog11.jpg" },
];

function GalleryCard({ title, src }: { title: string; src: string }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {hasImage ? (
        <img
          src={src}
          alt={`Foto de atendimento: ${title}`}
          className="size-full object-cover transition duration-300 group-hover:scale-105"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center bg-[linear-gradient(135deg,_#fff3d7,_#fffaf4)] p-6 text-center">
          <ImageIcon aria-hidden="true" className="size-9 text-petroleum-600" />
          <figcaption className="mt-4 text-lg font-black text-petroleum-900">{title}</figcaption>
          <p className="mt-2 max-w-52 text-sm leading-6 text-slate-600">Espaço preparado para fotos reais dos atendimentos.</p>
        </div>
      )}
      {hasImage ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-5 text-lg font-black text-white">
          {title}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Gallery() {
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <SectionHeading kicker="Galeria" title="Fotos dos atendimentos" centered>
          Registros de pets atendidos com cuidado, paciência e atenção aos detalhes.
        </SectionHeading>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} title={item.title} src={item.src} />
          ))}
        </div>
      </div>
    </section>
  );
}

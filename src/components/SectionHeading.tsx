import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  children?: ReactNode;
  centered?: boolean;
};

export function SectionHeading({ kicker, title, children, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {children ? <p className="section-copy">{children}</p> : null}
    </div>
  );
}

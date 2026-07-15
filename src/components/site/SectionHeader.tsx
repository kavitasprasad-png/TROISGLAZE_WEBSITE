type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "small";
};

export function SectionHeader({ eyebrow, title, description, align = "center", size = "default" }: Props) {
  const titleClasses =
    size === "small"
      ? "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
      : "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight";

  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <div className="text-sm font-semibold tracking-[0.25em] uppercase text-brand mb-3">{eyebrow}</div>
      )}
      <h2 className={titleClasses}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}

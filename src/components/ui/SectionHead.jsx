export default function SectionHead({
  index,
  eyebrow,
  title,
  description,
  tone = "paper",
  className = "",
  as: Heading = "h2",
}) {
  const isInk = tone === "ink";
  return (
    <header className={`mb-10 sm:mb-14 ${className}`}>
      <p
        className={[
          "eyebrow mb-4 flex items-baseline gap-3",
          isInk ? "text-muted-ink" : "text-muted",
        ].join(" ")}
      >
        {index ? (
          <span className={isInk ? "text-accent-ink" : "text-accent-text"}>
            {index}
          </span>
        ) : null}
        <span>{eyebrow}</span>
      </p>
      <Heading
        className={[
          "font-display text-display-lg font-bold",
          isInk ? "text-on-ink" : "text-ink",
        ].join(" ")}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={[
            "mt-4 max-w-2xl text-base sm:text-lg",
            isInk ? "text-muted-ink" : "text-body",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

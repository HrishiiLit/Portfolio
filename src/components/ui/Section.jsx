import Container from "./Container";

export default function Section({
  id,
  tone = "paper",
  className = "",
  containerClassName = "",
  children,
}) {
  const isInk = tone === "ink";
  return (
    <section
      id={id}
      className={[
        "py-16 sm:py-20 lg:py-24",
        isInk ? "on-ink bg-ink-panel text-on-ink" : "bg-paper text-body",
        className,
      ].join(" ")}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

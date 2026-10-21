const tones = {
  neutral: "border-hairline-strong text-muted bg-transparent",
  ink: "border-hairline-ink text-muted-ink bg-transparent",
  live: "border-hairline-strong text-live bg-transparent",
  accent: "border-accent/40 text-accent-text bg-transparent",
  solidAccent: "border-accent bg-accent text-white",
};

export default function Badge({
  tone = "neutral",
  dot = false,
  className = "",
  children,
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em]",
        tones[tone] || tones.neutral,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}

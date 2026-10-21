import { ArrowUpRight } from "lucide-react";

export default function ExternalLink({
  href,
  children,
  className = "",
  showIcon = true,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
      {showIcon ? (
        <>
          <ArrowUpRight
            aria-hidden="true"
            className="ml-0.5 inline-block h-[0.9em] w-[0.9em] shrink-0 align-[-0.05em]"
          />
          <span className="sr-only"> (opens in new tab)</span>
        </>
      ) : null}
    </a>
  );
}

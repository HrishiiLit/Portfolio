import Link from "next/link";
import ExternalLink from "./ExternalLink";
import { isExternalHref } from "@/lib/links";

const variants = {
  primary:
    "bg-accent text-on-accent border border-accent hover:bg-accent-strong hover:border-accent-strong",
  secondary:
    "bg-transparent text-ink border border-hairline-strong hover:border-accent-text hover:text-accent-text",
  ghostInk:
    "bg-transparent text-on-ink border border-hairline-ink hover:border-accent-ink hover:text-accent-ink",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-1.5 text-xs",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.12em] transition-colors duration-150",
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isExternalHref(href)) {
    return (
      <ExternalLink href={href} className={classes} showIcon={false} {...rest}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

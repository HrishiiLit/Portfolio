"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { profile } from "@/data/profile";
import ExternalLink from "@/components/ui/ExternalLink";
import { withBasePath } from "@/lib/links";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef(null);

  useEffect(() => {
    const sections = site.nav
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const links = site.nav.map((item) => ({
    ...item,
    href: withBasePath(pathname, item.href),
    isActive: pathname === "/" && active === item.href,
  }));

  return (
    <nav aria-label="Primary" className="flex items-center gap-1">
      <ul className="hidden items-center gap-1 md:flex">
        {links.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={item.isActive ? "true" : undefined}
              className={[
                "block px-3 py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors duration-150",
                item.isActive
                  ? "text-accent-text"
                  : "text-muted hover:text-ink",
              ].join(" ")}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="ml-2 border-l border-hairline pl-3">
          <ExternalLink
            href={profile.github}
            label="GitHub profile"
            className="inline-block px-3 py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-150 hover:text-ink"
          >
            GitHub
          </ExternalLink>
        </li>
      </ul>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 border border-hairline-strong px-3 py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-150 hover:border-accent-text hover:text-accent-text md:hidden"
      >
        {open ? (
          <X aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Menu aria-hidden="true" className="h-4 w-4" />
        )}
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-hairline bg-paper md:hidden"
        >
          <ul className="mx-auto max-w-[1120px] px-5 py-3 sm:px-8">
            {links.map((item, index) => (
              <li key={item.href} className="border-b border-hairline last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={item.isActive ? "true" : undefined}
                  className="flex items-baseline gap-3 py-3 font-mono text-sm uppercase tracking-[0.12em] text-ink"
                >
                  <span className="text-accent-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <ExternalLink
                href={profile.github}
                className="font-mono text-sm uppercase tracking-[0.12em] text-ink"
              >
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

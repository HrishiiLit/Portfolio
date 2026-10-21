import Link from "next/link";
import Container from "@/components/ui/Container";
import Navigation from "./Navigation";
import { site } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur-[2px]">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-[0.95rem] font-bold tracking-tight text-ink transition-colors duration-150 hover:text-accent-text"
        >
          {site.name}
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </Link>
        <Navigation />
      </Container>
    </header>
  );
}

import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const year = new Date().getFullYear();

const links = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.codeforces, label: "Codeforces" },
].filter((link) => link.href);

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          © {year} {site.copyrightName}
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors duration-150 hover:text-accent-text"
              >
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

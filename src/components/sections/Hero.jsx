import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const standings = [
  { label: "Status", value: "3rd year · B.E. Computer Science (AI)" },
  { label: "School", value: "KLE Technological University" },
  { label: "Focus", value: "Developer tools · Algorithms · Full-stack systems" },
  { label: "Contests", value: "ICPC regional qualifier" },
  { label: "Campus", value: "President, Code Club" },
];

const proof = [
  "ICPC Regional Qualifier",
  "Asteria Techfest winner",
  "Code Club President",
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-hairline bg-paper">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-2.5 text-muted">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {site.kicker}
          </p>
          <h1 className="mt-5 font-display text-display-xl font-bold text-ink">
            {site.name}
          </h1>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-accent-text">
            {site.shortName}
          </p>
          <p className="mt-7 max-w-xl font-display text-display-md font-medium text-ink">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base sm:text-lg">
            I build practical developer tools and systems — from contest
            test-generation frameworks to packet analyzers — and I run Code
            Club on campus.
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {proof.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-hairline-strong">
                    /
                  </span>
                ) : null}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects">Explore projects</Button>
            <Button href={profile.github} variant="secondary">
              GitHub
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="on-ink border border-hairline-ink bg-ink-panel p-6 sm:p-8">
            <p className="eyebrow flex items-center justify-between text-muted-ink">
              <span>At a glance</span>
              <span aria-hidden="true" className="text-accent-ink">
                ／
              </span>
            </p>
            <dl className="mt-6">
              {standings.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-t border-hairline-ink py-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="w-28 shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-ink">
                    {row.label}
                  </dt>
                  <dd className="text-[0.95rem] leading-snug text-on-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline-ink pt-5 font-mono text-[0.72rem] uppercase tracking-[0.14em]">
              <ExternalLink
                href={profile.github}
                className="text-muted-ink transition-colors duration-150 hover:text-accent-ink"
              >
                GitHub
              </ExternalLink>
              <ExternalLink
                href={profile.codeforces}
                className="text-muted-ink transition-colors duration-150 hover:text-accent-ink"
              >
                Codeforces
              </ExternalLink>
              <ExternalLink
                href={profile.linkedin}
                className="text-muted-ink transition-colors duration-150 hover:text-accent-ink"
              >
                LinkedIn
              </ExternalLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

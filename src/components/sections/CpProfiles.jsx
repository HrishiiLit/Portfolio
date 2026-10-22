import ExternalLink from "@/components/ui/ExternalLink";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { cp } from "@/data/achievements";

export default function CpProfiles() {
  return (
    <Section id="cp" tone="ink">
      <SectionHead
        index="06 /"
        eyebrow="Competitive programming"
        title="Where the contest work lives."
        tone="ink"
        description={cp.intro}
      />
      <div className="border-t border-hairline-ink">
        {cp.platforms.map((platform, index) => (
          <Reveal key={platform.id} delay={index * 80}>
            <ExternalLink
              href={platform.url}
              className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline-ink py-6 transition-colors duration-150"
              label={`${platform.name} profile of ${platform.handle} (opens in new tab)`}
            >
              <span className="flex items-baseline gap-4">
                <span aria-hidden="true" className="font-mono text-xs text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-display-md font-bold text-on-ink transition-colors duration-150 group-hover:text-accent-ink">
                  {platform.name}
                </span>
              </span>
              <span className="flex items-baseline gap-4 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted-ink">
                <span>{platform.handle}</span>
                <span className="text-accent-ink">{platform.note}</span>
              </span>
            </ExternalLink>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

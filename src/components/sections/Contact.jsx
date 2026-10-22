import ExternalLink from "@/components/ui/ExternalLink";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { profile } from "@/data/profile";

const channels = [
  {
    id: "github",
    name: "GitHub",
    handle: "HrishiiLit",
    url: profile.github,
    note: "Code and projects",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "hrishikesh-patil",
    url: profile.linkedin,
    note: "Professional profile",
  },
].filter((channel) => channel.url);

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHead
        index="07 /"
        eyebrow="Contact"
        title="Get in touch."
        description="The most reliable ways to reach me are GitHub and LinkedIn."
      />
      <div className="border-t border-hairline">
        {channels.map((channel, index) => (
          <Reveal key={channel.id} delay={index * 80}>
            <ExternalLink
              href={channel.url}
              className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline py-6 transition-colors duration-150"
              label={`${channel.name} — ${channel.note} (opens in new tab)`}
            >
              <span className="flex items-baseline gap-4">
                <span aria-hidden="true" className="font-mono text-xs text-accent-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-display-md font-bold text-ink transition-colors duration-150 group-hover:text-accent-text">
                  {channel.name}
                </span>
              </span>
              <span className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                {channel.note}
              </span>
            </ExternalLink>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

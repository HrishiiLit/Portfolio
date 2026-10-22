import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { achievements, leadership } from "@/data/achievements";

export default function Achievements() {
  return (
    <>
      <Section id="achievements" tone="ink">
        <SectionHead
          index="02 /"
          eyebrow="Recognition"
          title="Achievements"
          tone="ink"
          description="Verified accomplishments only — no inflated metrics."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <article className="flex h-full flex-col border border-hairline-ink p-6 sm:p-8">
                <p className="eyebrow text-accent-ink">{item.kind}</p>
                <h3 className="mt-4 font-display text-display-md font-bold text-on-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-ink">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="leadership" className="border-b border-hairline">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-muted">
              <span className="text-accent-text">03 /</span> {leadership.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h2 className="font-display text-display-lg font-bold text-ink">
                {leadership.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base sm:text-lg">
                {leadership.body}
              </p>
              <ul className="mt-8 grid gap-0 border-t border-hairline sm:grid-cols-3">
                {leadership.points.map((point) => (
                  <li
                    key={point}
                    className="border-b border-hairline py-4 pr-4 text-[0.9rem] leading-snug sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

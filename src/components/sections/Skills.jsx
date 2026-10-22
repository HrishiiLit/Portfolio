import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { skillGroups, skillsNote } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" className="border-b border-hairline">
      <SectionHead
        index="05 /"
        eyebrow="Technical skills"
        title="Tools I've actually shipped with."
        description={skillsNote}
      />
      <div className="border-t border-hairline">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={Math.min(index * 60, 240)}>
            <div className="grid gap-1 border-b border-hairline py-5 sm:grid-cols-[220px_1fr] sm:gap-8 sm:py-6">
              <p className="eyebrow pt-1 text-muted">{group.category}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.95rem] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

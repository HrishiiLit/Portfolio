import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";

const approach = [
  {
    label: "Engineered, not assembled",
    body: "Tests, CI, and documentation ship with the code — MiniShark carries a 45-test suite and pre-commit CI; the test generator is deterministic by design.",
  },
  {
    label: "Across the stack",
    body: "Contest C++ and Python systems on one end, Next.js applications and FastAPI services on the other.",
  },
  {
    label: "Community as practice",
    body: "Running Code Club keeps me building in public: teaching, organizing events, and reviewing other people's code.",
  },
];

export default function About() {
  return (
    <Section id="about" className="border-b border-hairline">
      <SectionHead index="04 /" eyebrow="About" title="Who I am, and how I work." />
      <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base sm:text-lg">
            <p>
              I&apos;m Hrishikesh Patil — Hrishi — a third-year Computer Science
              and Engineering (AI) student at KLE Technological University.
            </p>
            <p>
              Most of my work starts from problems I actually hit: contest test
              data that was painful to generate, packet captures that were hard
              to reason about, clinic workflows that were stuck in phone calls.
              I build small, sharp tools for those problems and keep them
              maintainable — tests, docs, and reproducible builds included.
            </p>
            <p>
              Alongside building, I compete: ICPC regional qualifier, regular
              Codeforces practice in C++. And I lead — as President of Code
              Club, I organize the events and sessions that keep coding culture
              alive on campus.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="border-t border-hairline">
            {approach.map((item) => (
              <li key={item.label} className="border-b border-hairline py-5">
                <p className="eyebrow text-accent-text">{item.label}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

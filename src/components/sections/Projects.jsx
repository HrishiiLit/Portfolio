import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ExternalLink from "@/components/ui/ExternalLink";
import PreviewImage from "@/components/ui/PreviewImage";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { projects } from "@/data/projects";

function CardActions({ project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline pt-4 font-mono text-[0.72rem] uppercase tracking-[0.14em]">
      <Link
        href={`/projects/${project.slug}`}
        className="text-accent-text transition-colors duration-150 hover:text-ink"
      >
        Case study →
      </Link>
      <ExternalLink
        href={project.repo}
        className="text-muted transition-colors duration-150 hover:text-ink"
      >
        Repository
      </ExternalLink>
      {project.demo ? (
        <ExternalLink
          href={project.demo}
          className="text-muted transition-colors duration-150 hover:text-ink"
        >
          Live demo
        </ExternalLink>
      ) : null}
    </div>
  );
}

function CardBody({ project, index }) {
  return (
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow text-accent-text">
          {String(index + 1).padStart(2, "0")}
        </p>
        <Badge tone={project.status.tone === "live" ? "live" : "neutral"}>
          {project.status.label}
        </Badge>
      </div>
      <h3 className="mt-4 font-display text-display-md font-bold text-ink">
        {project.name}
      </h3>
      <p className="eyebrow mt-2 text-muted">{project.category}</p>
      <p className="mt-4 text-[0.95rem] leading-relaxed">
        {project.cardSummary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 items-end">
        <CardActions project={project} />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const featured = index === 0;

  return (
    <Reveal delay={Math.min(index * 80, 240)} className={featured ? "sm:col-span-2" : ""}>
      <article
        className={
          featured
            ? "flex h-full flex-col border border-hairline bg-surface sm:flex-row"
            : "flex h-full flex-col border border-hairline bg-surface"
        }
      >
        <div
          className={
            featured
              ? "border-b border-hairline sm:w-[52%] sm:shrink-0 sm:border-b-0 sm:border-r"
              : "border-b border-hairline"
          }
        >
          <PreviewImage
            src={project.preview?.src}
            alt={project.preview?.alt}
            width={880}
            height={495}
            className={
              project.preview?.isDiagram
                ? "aspect-[16/9] bg-paper object-contain p-4"
                : "aspect-[16/9]"
            }
          />
        </div>
        <CardBody project={project} index={index} />
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="border-b border-hairline">
      <SectionHead
        index="01 /"
        eyebrow="Selected work"
        title="Projects built to be used — and read."
        description="Each card links to a case study with the problem it solves, the implementation, my role, and the repository."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

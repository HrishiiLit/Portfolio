import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import PreviewImage from "@/components/ui/PreviewImage";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { getProject, projects } from "@/data/projects";
export const instant = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
    return null;
  }

  return (
    <>
      <Section id={`project-${project.slug}`} className="border-b border-hairline">
        <Container className="space-y-8 py-16 sm:py-20 lg:py-24">
          <SectionHead
            index="Project /"
            eyebrow={project.category}
            title={project.name}
            description={project.summary}
            tone="paper"
          />
          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            {/* Left: details */}
            <div className="space-y-6">
              <p className="text-base text-muted">
                {project.problem}
              </p>
              <h3 className="font-display text-display-md font-bold text-ink">
                Users
              </h3>
              <p className="text-base text-muted">
                {project.users}
              </p>
              <h3 className="font-display text-display-md font-bold text-ink">
                Features
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-muted">
                {project.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <h3 className="font-display text-display-md font-bold text-ink">
                Role &amp; decisions
              </h3>
              <p className="text-base text-muted">
                {project.role}
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted">
                {project.decisions.map((d) => (
                  <li key={d.title}>
                    <strong>{d.title}:</strong> {d.body}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <ExternalLink
                  href={project.repo}
                  className="text-accent-text hover:text-ink"
                >
                  Repository
                </ExternalLink>
                {project.demo && (
                  <ExternalLink
                    href={project.demo}
                    className="text-accent-text hover:text-ink"
                  >
                    Live demo
                  </ExternalLink>
                )}
              </div>
            </div>
            {/* Right: preview */}
            <div className="border border-hairline bg-surface">
              <PreviewImage
                src={project.preview?.src}
                alt={project.preview?.alt}
                width={880}
                height={495}
                className={project.preview?.isDiagram ? "bg-paper object-contain p-4" : "aspect-[16/9]"}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

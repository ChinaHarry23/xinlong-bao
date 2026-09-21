import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index, headingLevel = "h2" }: { project: Project; index: number; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <div className={`project-image ${project.images.length ? "" : "project-image-type"}`}>
        {project.images[0] ? (
          <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span className="num">{project.category} / {String(index + 1).padStart(2, "0")}</span>
            <span className="placeholder-title">{project.title}</span>
            <span className="placeholder-stack">{project.stack.slice(0, 3).join(" / ")}</span>
          </div>
        )}
        <span className="project-open" aria-hidden="true">↗</span>
      </div>
      <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
      <Heading className="project-title">{project.title}</Heading>
      <p className="project-description">{project.lede}</p>
      <span className="text-link project-cta">Explore project <span aria-hidden="true">↗</span></span>
    </Link>
  );
}

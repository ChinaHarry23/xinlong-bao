import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
const sections = [
  { key: "intro", label: "The idea" },
  { key: "method", label: "Engineering" },
  { key: "demo", label: "In practice" },
  { key: "conclusion", label: "What I learned" },
] as const;

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.lede } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <main id="main-content" className="site-container page-content project-detail">
      <Link href="/work" className="breadcrumb"><span aria-hidden="true">←</span> All work</Link>
      <div className="page-heading">
        <p className="eyebrow">{project.category} / {project.year}</p>
        <h1 className="page-title">{project.title}</h1>
        <p>{project.lede}</p>
        {(project.live || project.repo) && <div className="detail-actions">
          {project.live && <a href={project.live} className="button">Launch demo <span aria-hidden="true">↗</span></a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="text-link">View source <span aria-hidden="true">↗</span></a>}
        </div>}
      </div>
      <div className="detail-stack" aria-label="Project technologies">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      {project.images[0] && <div className="detail-hero"><img src={project.images[0].src} alt={project.images[0].alt} fetchPriority="high" /></div>}
      {project.live && <section className="live-section" aria-label={`${project.title} live demo`}>
        <div className="live-heading"><h2>Try it here.</h2><a href={project.live} className="text-link">Open full page <span aria-hidden="true">↗</span></a></div>
        <div className="iframe-shell"><iframe title={`${project.title} demo`} src={project.live} loading="lazy" /></div>
      </section>}
      <article className="detail-body">
        {sections.map(({ key, label }, index) => <section key={key} className="detail-section">
          <h2>{String(index + 1).padStart(2, "0")} / {label}</h2>
          <div>{project[key].map((para, paragraphIndex) => (
            <p key={paragraphIndex}>
              {typeof para === "string" ? para : <>
                {para.before}
                <a href={para.link.href} target="_blank" rel="noopener noreferrer"
                  className="text-paper underline decoration-white/50 hover:decoration-white"
                  aria-label={`${para.link.label} — Google Scholar (opens in a new tab)`}>
                  {para.link.label}
                </a>
                {para.after}
              </>}
            </p>
          ))}</div>
        </section>)}
      </article>
      {project.images.length > 1 && <div className="detail-gallery">{project.images.slice(1).map((img) => (
        <figure key={img.src}><img src={img.src} alt={img.alt} loading="lazy" /><figcaption>{img.alt}</figcaption></figure>
      ))}</div>}
      <nav className="project-pagination" aria-label="More projects">
        {prev ? <Link href={`/work/${prev.slug}`}><span className="eyebrow">← Previous project</span>{prev.title}</Link> : <div />}
        {next ? <Link href={`/work/${next.slug}`}><span className="eyebrow">Next project →</span>{next.title}</Link> : <Link href="/work"><span className="eyebrow">Back to collection →</span>All work</Link>}
      </nav>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

const sections = [
  { key: "intro", label: "Intro" },
  { key: "method", label: "Method" },
  { key: "demo", label: "Demo" },
  { key: "conclusion", label: "Conclusion" },
] as const;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.lede };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="cat">
        {project.category} · {project.year}
      </p>
      <h1 className="font-display mt-3 max-w-4xl text-5xl tracking-tight sm:text-6xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-paper-dim">{project.lede}</p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {project.live && (
          <a href={project.live} className="text-copper underline">
            Live demo
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="underline">
            Source
          </a>
        )}
        <span className="text-paper-dim">{project.stack.join(" · ")}</span>
      </div>

      {project.images[0] && (
        <div className="frame mt-12 aspect-[16/9]">
          <img src={project.images[0].src} alt={project.images[0].alt} />
        </div>
      )}

      {project.live && (
        <div className="mt-10">
          <p className="cat mb-3">In the browser</p>
          <div className="iframe-shell">
            <iframe title={`${project.title} demo`} src={project.live} />
          </div>
        </div>
      )}

      <article className="mt-14 max-w-2xl">
        {sections.map(({ key, label }) => (
          <section key={key} className="mb-12">
            <p className="cat">{label}</p>
            <div className="mt-3 space-y-4 text-[17px] leading-relaxed text-paper-dim">
              {project[key].map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      {project.images.length > 1 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.images.slice(1).map((img) => (
            <div key={img.src} className="frame aspect-[4/3]">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      )}

      <nav className="mt-20 flex justify-between border-t border-line pt-6 text-sm">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="hover:text-copper">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="hover:text-copper">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}

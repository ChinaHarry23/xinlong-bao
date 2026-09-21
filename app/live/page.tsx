import { projects } from "@/lib/projects";

export const metadata = { title: "Live demos" };
const live = projects.filter((p) => p.live);

export default function LivePage() {
  return (
    <main id="main-content" className="site-container page-content">
      <div className="page-heading">
        <p className="eyebrow">Made to be explored</p><h1 className="page-title">Less reading.<br />More doing.</h1>
        <p>Interactive projects, right here in your browser. Open a demo, try an idea, and see how it works.</p>
      </div>
      {live.map((project, index) => <section key={project.slug} className="live-section">
        <div className="live-heading"><div><p className="eyebrow">0{index + 1} / Interactive demo</p><h2>{project.title}</h2></div>
          <a href={project.live} className="button">Open full page <span aria-hidden="true">↗</span></a>
        </div>
        <div className="iframe-shell"><iframe title={project.title} src={project.live} loading="lazy" /></div>
      </section>)}
    </main>
  );
}

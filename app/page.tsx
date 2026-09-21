import Link from "next/link";
import { bench, faceitUrl, publications } from "@/lib/bio";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

const selected = ["usyd-mastery", "aisle", "cloverpit"].map((slug) => projects.find((p) => p.slug === slug)!);

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-visual">
          <img src="/life/vision-pro.png" alt="Apple Vision Pro, the headset used in my wearable haptics research" fetchPriority="high" />
          <Link href="/work/haptic-glove" className="hero-caption"><span>01 / Spatial computing</span><span>Explore the research ↗</span></Link>
        </div>
        <div className="site-container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Xinlong Bao / Engineer &amp; researcher</p>
            <h1 id="hero-title">Curiosity.<br />In motion.</h1>
            <p className="hero-description">From a line of code to something you can feel. I build across software, wearable haptics, and spatial computing.</p>
            <div className="hero-actions">
              <Link href="/work" className="button">Explore my work <span aria-hidden="true">↗</span></Link>
              <Link href="/about" className="text-link">Meet Harry <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="credentials-band">
        <dl className="site-container credentials">
          <div><dt>Based in</dt><dd>Sydney, AU</dd></div>
          <div><dt>University of Sydney</dt><dd>MCS <span>/ Advanced</span></dd></div>
          <div><dt>Across hardware &amp; software</dt><dd>{String(projects.length).padStart(2, "0")} <span>projects</span></dd></div>
          <div><dt>First-author research</dt><dd>{String(publications.length).padStart(2, "0")} <span>IEEE papers</span></dd></div>
        </dl>
      </div>
      <section className="section-pad site-container" aria-labelledby="featured-title">
        <div className="section-heading"><p className="eyebrow">01 / Featured research</p><span className="section-aside">Hardware meets human experience</span></div>
        <div className="research-feature">
          <Link href="/work/haptic-glove" className="research-image" aria-label="Explore the haptic glove project">
            <img src="/life/gloves-bench.png" alt="My haptic glove prototype with an ESP32 and wired fingertip actuators" loading="lazy" />
            <span className="image-label">Haptic glove / Physical prototype</span>
          </Link>
          <div className="research-copy">
            <p className="eyebrow">Wearable haptics · 2023–24</p>
            <h2 id="featured-title" className="section-title">Beyond<br />the screen.</h2>
            <p>A virtual collision. A physical response. Custom haptic gloves bring touch, vibration, and temperature to escape rooms on Apple Vision Pro.</p>
            <dl className="research-specs">
              <div><dt>Controller</dt><dd>ESP32</dd></div>
              <div><dt>Platform</dt><dd>visionOS</dd></div>
              <div><dt>Connection</dt><dd>UDP</dd></div>
            </dl>
            <Link href="/work/haptic-glove" className="button">Inside the project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="section-pad selected-section" aria-labelledby="selected-title">
        <div className="site-container">
          <div className="section-heading section-heading-large">
            <div><p className="eyebrow">02 / Selected work</p><h2 id="selected-title" className="section-title">Ideas. Made tangible.</h2></div>
            <Link href="/work" className="text-link">All {projects.length} projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">{selected.map((p, index) => <ProjectCard key={p.slug} project={p} index={index} headingLevel="h3" />)}</div>
        </div>
      </section>
      <section className="section-pad site-container" aria-labelledby="bench-title">
        <div className="section-heading section-heading-large">
          <div><p className="eyebrow">03 / The bench</p><h2 id="bench-title" className="section-title">Behind the builds.</h2></div>
          <Link href="/about#bench" className="text-link">The full setup <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="bench-preview">
          {bench.slice(0, 3).map((machine) => (
            <Link href="/about#bench" key={machine.name} className="bench-item">
              <div className="bench-image"><img src={machine.src} alt={machine.alt} loading="lazy" style={{ objectFit: machine.fit }} /></div>
              <p className="eyebrow">{machine.kind}</p><h3>{machine.name}</h3><p>{machine.note}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="off-duty" aria-labelledby="off-duty-title">
        <div className="site-container off-duty-inner">
          <div><p className="eyebrow">04 / Away from the bench</p><h2 id="off-duty-title" className="section-title">Two kinds<br />of CS.</h2>
            <p>Computer science by degree. Counter-Strike by habit. Harry in Sydney. Chinaharry17 in the lobby.</p>
            <a href={faceitUrl} target="_blank" rel="noreferrer" className="button">Find me on FACEIT <span aria-hidden="true">↗</span></a>
          </div>
          <a href={faceitUrl} target="_blank" rel="noreferrer" className="off-duty-image"><img src="/life/cs-inventory.png" alt="My Counter-Strike inventory with Butterfly Knife Gamma Doppler" loading="lazy" /></a>
        </div>
      </section>
    </main>
  );
}

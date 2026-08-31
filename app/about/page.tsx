import Link from "next/link";
import {
  bench,
  chineseName,
  education,
  email,
  experience,
  faceitUrl,
  githubAlso,
  githubUrl,
  linkedinUrl,
  publications,
  resumePath,
  scholarUrl,
  xUrl,
} from "@/lib/bio";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="cat">About</p>
      <h1 className="font-display mt-3 text-5xl tracking-tight">Xinlong Bao</h1>
      <p className="mt-2 text-paper-dim">
        Harry · Sydney · <span className="font-cjk text-paper">{chineseName}</span>
      </p>

      <p className="mt-8 text-lg leading-relaxed text-paper-dim">
        Master of Computer Science (Advanced) at the University of Sydney, after
        Computer Engineering at De La Salle. I build things you can hold or open:
        haptic gloves on Vision Pro, local study hubs, agent desks, a bead table.
        The CV version is AI, robotics, computer vision, and embedded systems,
        with two first-author IEEE papers.
      </p>

      <section className="mt-16">
        <p className="cat">Two CS</p>
        <h2 className="font-display mt-3 text-3xl tracking-tight">
          Counter-Strike and Computer Science.
        </h2>
        <p className="mt-4 leading-relaxed text-paper-dim">
          Same letters. I play AWP — the long angle, one shot, then you are gone.
          On FACEIT I am{" "}
          <a href={faceitUrl} target="_blank" rel="noreferrer" className="text-paper underline">
            Chinaharry17
          </a>
          . In a lobby I will tell you I am the best AWPer there. That is not a
          ranking page. That is the job: hold the lane until it is yours.
        </p>
        <p className="mt-4 leading-relaxed text-paper-dim">
          I already treat one CS as doctorate-level homework. The other one I am
          still climbing. Master’s now (expected November 2027). After that I want
          the actual PhD — same initials, slower queue.
        </p>
      </section>

      <section className="mt-16">
        <p className="cat cat-alien">The bench</p>
        <h2 className="font-display mt-3 text-3xl tracking-tight">Machines on hand.</h2>
        <ul className="mt-6 grid gap-3">
          {bench.map((row) => (
            <li key={row.name} className="machine" data-tone={row.tone}>
              <div className="machine-shot" data-fit={row.fit}>
                <img src={row.src} alt={row.alt} />
              </div>
              <div className="machine-copy">
                <p className="text-paper">
                  {row.name} · {row.kind}
                </p>
                <p className="mt-1 font-mono text-xs tracking-wide">{row.spec}</p>
                <p className="mt-1 text-sm text-paper-dim">{row.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <p className="cat">Education</p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {education.map((row) => (
            <li key={row.place} className="py-4">
              <p className="text-paper">{row.place}</p>
              <p className="mt-1 text-sm text-paper-dim">
                {row.detail} · {row.where}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <p className="cat">Experience</p>
        <ul className="mt-4 space-y-8">
          {experience.map((job) => (
            <li key={job.place}>
              <p className="text-paper">{job.place}</p>
              <p className="mt-1 text-sm text-paper-dim">
                {job.detail} · {job.where}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-paper-dim">
                {job.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <p className="cat">Papers</p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {publications.map((p) => (
            <li key={p.title} className="py-4">
              <p className="text-paper">{p.title}</p>
              <p className="mt-1 text-sm text-paper-dim">{p.venue}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-paper-dim">
          Mandarin native · English fluent (TOEFL iBT 104, CEFR C1)
        </p>
      </section>

      <section className="mt-16">
        <p className="cat">Also on GitHub</p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {githubAlso.map((item) => (
            <li key={item.href} className="flex flex-wrap justify-between gap-2 py-3">
              <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-copper">
                {item.title}
              </a>
              <span className="text-sm text-paper-dim">{item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper-dim">
        <a href={resumePath} className="underline">
          CV (PDF)
        </a>
        <a href={`mailto:${email}`} className="underline">
          {email}
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer" className="underline">
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="underline">
          LinkedIn
        </a>
        <a href={xUrl} target="_blank" rel="noreferrer" className="underline">
          X
        </a>
        <a href={scholarUrl} target="_blank" rel="noreferrer" className="underline">
          Scholar
        </a>
        <a href={faceitUrl} target="_blank" rel="noreferrer" className="underline">
          FACEIT
        </a>
        <Link href="/work" className="underline">
          Work
        </Link>
      </p>
    </main>
  );
}

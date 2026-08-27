import Link from "next/link";
import { featured, projects } from "@/lib/projects";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HomePage() {
  const hero = featured[0];

  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="cat">Sydney · MCS, University of Sydney</p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          Software, hardware, and the study systems in between.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
          Xinlong Bao — also Harry. Computer engineering from DLSU, now a master’s
          student in Sydney. This inventory keeps one copy of each finished loop:
          the glove, the course hubs, the agent desks, the bead table, one game.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/work"
            className="border border-paper px-4 py-2 text-paper hover:bg-paper hover:text-bg"
          >
            All work
          </Link>
          <Link href="/live" className="border border-line px-4 py-2 text-paper-dim hover:text-paper">
            Live demos
          </Link>
        </div>
      </section>

      {hero && (
        <section className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link href={`/work/${hero.slug}`} className="frame block aspect-[16/9] sm:aspect-[2/1]">
            <img
              src={hero.images[0]?.src}
              alt={hero.images[0]?.alt ?? hero.title}
              style={{ objectPosition: "50% 20%" }}
            />
          </Link>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-display text-2xl">{hero.title}</p>
            <p className="text-sm text-paper-dim">{hero.lede}</p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-display text-3xl">Index</h2>
          <span className="num">{pad(projects.length)} entries</span>
        </div>
        <div className="rule mb-2" />
        <ul>
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 border-b border-line py-3 sm:grid-cols-[3rem_1fr_8rem_5rem]"
              >
                <span className="num">{pad(i + 1)}</span>
                <span className="text-[15px] group-hover:text-copper">{p.title}</span>
                <span className="hidden cat sm:block">{p.category}</span>
                <span className="num text-right">{p.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

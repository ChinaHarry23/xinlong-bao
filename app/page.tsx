import Link from "next/link";
import { bench, chineseName, mosaic, rooms } from "@/lib/bio";
import { projects } from "@/lib/projects";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HomePage() {
  return (
    <main>
      <section className="band-hero">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <p className="cat">
            Sydney · MCS (Advanced) · <span className="font-cjk normal-case tracking-normal">{chineseName}</span>
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Computer science by degree. Counter-Strike by habit.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
            Xinlong Bao — Harry,{" "}
            <span className="font-cjk text-paper">{chineseName}</span>. AWP on FACEIT as
            Chinaharry17. Master’s at Sydney after Computer Engineering at DLSU. One CS I
            already play like a doctorate. The other one I want as an actual PhD.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/work"
              className="border border-paper px-4 py-2 text-paper hover:bg-paper hover:text-bg"
            >
              All work
            </Link>
            <Link href="/about" className="border border-line px-4 py-2 text-paper-dim hover:text-paper">
              Bench &amp; about
            </Link>
            <Link href="/live" className="border border-line px-4 py-2 text-paper-dim hover:text-paper">
              Live demos
            </Link>
          </div>
        </div>
      </section>

      <section className="band-spatial">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="cat cat-spatial">On the table</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">Headset, gloves, room, locker.</h2>
          <p className="mt-3 max-w-xl text-paper-dim">
            No user-test portrait. The kit, the scene it talks to, and the other CS.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {mosaic.map((tile) => {
              const inner = (
                <>
                  <div className="tile aspect-[16/10]">
                    <img src={tile.src} alt={tile.alt} />
                  </div>
                  <p className="cat cat-spatial mt-3">{tile.caption}</p>
                </>
              );
              return tile.external ? (
                <a key={tile.src} href={tile.href} target="_blank" rel="noreferrer" className="group block">
                  {inner}
                </a>
              ) : (
                <Link key={tile.src} href={tile.href} className="group block">
                  {inner}
                </Link>
              );
            })}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {rooms.map((room) => (
              <Link key={room.src} href="/work/haptic-glove" className="group block">
                <div className="tile aspect-[16/10]">
                  <img src={room.src} alt={room.alt} />
                </div>
                <p className="cat cat-spatial mt-3">{room.caption}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band-bench">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="cat cat-alien">The bench</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">What I actually run.</h2>
          <p className="mt-3 max-w-xl text-paper-dim">
            Area-51 for the lobby. A 4090 laptop when I leave the desk. M3 Max for the
            master’s and Unity. Vision Pro for the gloves. Pine kit for Kali. One machine
            still in the queue.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {bench.map((row) => (
              <li key={row.name} className="machine" data-tone={row.tone}>
                <div className="machine-shot" data-fit={row.fit}>
                  <img src={row.src} alt={row.alt} />
                </div>
                <div className="machine-copy">
                  <p className="cat" data-tone={row.tone}>
                    {row.kind}
                  </p>
                  <p className="font-display mt-2 text-2xl">{row.name}</p>
                  <p className="mt-2 font-mono text-xs leading-relaxed tracking-wide text-paper">
                    {row.spec}
                  </p>
                  <p className="mt-2 text-sm text-paper-dim">{row.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-inventory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="cat cat-doppler">The other CS</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">AWP first. Butterfly in the grid.</h2>
          <p className="mt-3 max-w-xl text-paper-dim">
            Chinaharry17 on FACEIT. Best AWPer in the lobby is the job, not a rank page.
            Gamma Doppler in the locker is the other kind of proof.
          </p>
          <a
            href="https://www.faceit.com/zh/players/Chinaharry17"
            target="_blank"
            rel="noreferrer"
            className="tile mt-10 block aspect-[5/4] sm:aspect-[16/10]"
          >
            <img src="/life/cs-inventory.png" alt="Counter-Strike inventory grid" />
          </a>
        </div>
      </section>

      <section className="band-index">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
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
        </div>
      </section>
    </main>
  );
}

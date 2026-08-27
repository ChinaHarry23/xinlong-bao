import { projects } from "@/lib/projects";

export const metadata = {
  title: "Live",
};

const live = projects.filter((p) => p.live);

export default function LivePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="cat">In the browser</p>
      <h1 className="font-display mt-3 text-5xl tracking-tight">Live demos</h1>
      <p className="mt-4 max-w-xl text-paper-dim">
        Static pieces that can run inside this site. Games, firmware, and Next.js
        apps still need their own runtime — those have screenshots and source on
        each project page.
      </p>

      <div className="mt-12 space-y-16">
        {live.map((p) => (
          <section key={p.slug}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-3xl">{p.title}</h2>
              <a href={p.live} className="text-sm text-copper underline">
                Open full page
              </a>
            </div>
            <div className="iframe-shell">
              <iframe title={p.title} src={p.live} />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

import Link from "next/link";
import { githubAlso } from "@/lib/projects";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="cat">About</p>
      <h1 className="font-display mt-3 text-5xl tracking-tight">Xinlong Bao</h1>
      <p className="mt-6 text-lg leading-relaxed text-paper-dim">
        I go by Harry. Bachelor of Computer Engineering at De La Salle University,
        now a Master of Computer Science student at the University of Sydney.
      </p>
      <p className="mt-4 leading-relaxed text-paper-dim">
        The work splits three ways: wearable and mixed-reality hardware (the haptic
        glove, ESP32, Vision Pro), software you can sit down and use (study hubs,
        agent desks, bead inventory), and games that were an excuse to finish a
        loop. I prefer things that run on a laptop or a microcontroller you can hold.
      </p>
      <p className="mt-4 leading-relaxed text-paper-dim">
        This site is generated from the same Mac workspace the projects live in.
        Course recordings, private lab notes, and unpublished security work are not
        listed.
      </p>

      <h2 className="font-display mt-14 text-3xl">Also on GitHub</h2>
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

      <p className="mt-10 text-sm text-paper-dim">
        <Link href="/work" className="underline">
          Browse the inventory
        </Link>
        {" · "}
        <a href="https://github.com/ChinaHarry23" target="_blank" rel="noreferrer" className="underline">
          ChinaHarry23
        </a>
      </p>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, type Category, projects } from "@/lib/projects";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function WorkPage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="cat cat-spatial">Inventory</p>
      <h1 className="font-display mt-3 text-5xl tracking-tight">Work</h1>
      <p className="mt-4 max-w-xl text-paper-dim">
        One entry per finished loop. Duplicate checkouts, engine templates, and
        private lab notes stay off this list.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`border px-3 py-1 text-xs tracking-wide ${
            filter === "all" ? "border-paper bg-paper text-bg" : "border-line text-paper-dim"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            className={`border px-3 py-1 text-xs tracking-wide ${
              filter === c.id ? "border-paper bg-paper text-bg" : "border-line text-paper-dim"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {list.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`} className="group block">
              <div className="frame aspect-[16/10]">
                {p.images[0] ? (
                  <img src={p.images[0].src} alt={p.images[0].alt} />
                ) : (
                  <div className="flex h-full flex-col justify-between p-5">
                    <span className="num">{pad(i + 1)}</span>
                    <span className="font-display text-3xl leading-tight text-paper-dim">
                      {p.title}
                    </span>
                  </div>
                )}
              </div>
              <p className="cat mt-3">
                {p.category} · {p.year}
              </p>
              <h2 className="font-display mt-1 text-2xl group-hover:text-copper">{p.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-paper-dim">{p.lede}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

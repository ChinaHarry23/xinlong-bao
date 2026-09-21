"use client";

import { useMemo, useState } from "react";
import { categories, type Category, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = useMemo(() => filter === "all" ? projects : projects.filter((p) => p.category === filter), [filter]);
  return (
    <main id="main-content" className="site-container page-content">
      <div className="page-heading"><p className="eyebrow">The project collection</p>
        <h1 className="page-title">Driven by<br />curiosity.</h1>
        <p>Wearable hardware, software, games, and research. Explore the builds, the process, and what I learned along the way.</p>
      </div>
      <div className="filter-bar" role="group" aria-label="Filter projects by category">
        {[{ id: "all", label: "All work" }, ...categories].map((category) => (
          <button key={category.id} type="button" onClick={() => setFilter(category.id as Category | "all")}
            aria-pressed={filter === category.id} className="filter-tab">{category.label}</button>
        ))}
      </div>
      <p className="results-count" role="status">{String(list.length).padStart(2, "0")} projects / {filter === "all" ? "Full collection" : categories.find((c) => c.id === filter)?.label}</p>
      <ul className="project-grid work-grid">{list.map((project) => (
        <li key={project.slug}><ProjectCard project={project} index={projects.indexOf(project)} /></li>
      ))}</ul>
    </main>
  );
}

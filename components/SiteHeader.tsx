import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/live", label: "Live" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-2xl tracking-tight text-paper">
          Xinlong Bao
        </Link>
        <nav className="flex gap-6 text-sm text-paper-dim">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-paper">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

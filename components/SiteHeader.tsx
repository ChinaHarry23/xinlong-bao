"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { chineseName, resumePath } from "@/lib/bio";

const links = [
  { href: "/work", label: "Work" },
  { href: "/live", label: "Live demos" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="site-container header-inner">
        <Link href="/" className="wordmark" aria-label="Xinlong Bao — home" onClick={() => setOpen(false)}>
          <span className="m-stripes" aria-hidden="true"><i /><i /><i /></span>
          <span>Xinlong Bao<span className="wordmark-cn font-cjk">{chineseName}</span></span>
        </Link>
        <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={open}
          aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className="primary-nav" data-open={open}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <a href={resumePath} className="nav-resume" onClick={() => setOpen(false)}>Résumé <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

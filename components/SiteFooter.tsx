import Link from "next/link";
import { chineseName, email, faceitUrl, githubUrl, linkedinUrl, resumePath, scholarUrl, xUrl } from "@/lib/bio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div><p className="eyebrow">Keep the conversation going</p><h2>Let’s build<br />what’s next.</h2><a href={`mailto:${email}`} className="text-link">Get in touch <span aria-hidden="true">↗</span></a></div>
          <div className="footer-links"><p className="eyebrow">Explore</p><Link href="/work">Work</Link><Link href="/live">Live demos</Link><Link href="/about">About Harry</Link><a href={resumePath}>Résumé (PDF)</a></div>
          <div className="footer-links"><p className="eyebrow">Elsewhere</p>{[["GitHub", githubUrl], ["LinkedIn", linkedinUrl], ["Scholar", scholarUrl], ["FACEIT", faceitUrl], ["X", xUrl]].map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>)}</div>
        </div>
        <div className="footer-bottom"><p>Xinlong Bao <span className="font-cjk">{chineseName}</span> <span>/ Sydney, Australia</span></p>
          <a href="https://brandmylaptop.com/chinaharry23" target="_blank" rel="noreferrer" className="sticker-link">Sticker spots on my laptop <span aria-hidden="true">↗</span></a>
          <span className="m-stripes" aria-hidden="true"><i /><i /><i /></span>
        </div>
      </div>
    </footer>
  );
}

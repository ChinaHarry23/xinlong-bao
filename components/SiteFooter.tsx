import {
  chineseName,
  email,
  faceitUrl,
  githubUrl,
  linkedinUrl,
  scholarUrl,
  xUrl,
} from "@/lib/bio";

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-paper-dim sm:px-8">
        <p>
          Xinlong Bao · Harry · <span className="font-cjk text-paper">{chineseName}</span> · Sydney
        </p>
        <p className="flex flex-wrap gap-x-4 font-mono text-xs tracking-wider">
          <a className="hover:text-paper" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-paper" href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-paper" href={xUrl} target="_blank" rel="noreferrer">
            X
          </a>
          <a className="hover:text-paper" href={scholarUrl} target="_blank" rel="noreferrer">
            Scholar
          </a>
          <a className="hover:text-paper" href={faceitUrl} target="_blank" rel="noreferrer">
            FACEIT
          </a>
          <a className="hover:text-paper" href={`mailto:${email}`}>
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}

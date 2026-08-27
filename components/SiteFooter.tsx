export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-paper-dim sm:px-8">
        <p>Xinlong Bao · Sydney</p>
        <p className="font-mono text-xs tracking-wider">
          <a
            className="hover:text-paper"
            href="https://github.com/ChinaHarry23"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ChinaHarry23
          </a>
        </p>
      </div>
    </footer>
  );
}

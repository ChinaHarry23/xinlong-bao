import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="cat">Missing</p>
      <h1 className="font-display mt-3 text-5xl">That page is not in the inventory.</h1>
      <p className="mt-4 text-paper-dim">
        <Link href="/work" className="underline">
          Back to work
        </Link>
      </p>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="mt-2 text-[var(--foreground-muted)]">
        Seite nicht gefunden.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full px-6 py-3 font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        style={{
          background: "var(--gradient-cta)",
          boxShadow: "0 0 24px var(--glow-secondary)",
        }}
      >
        Zur Startseite
      </Link>
    </div>
  );
}

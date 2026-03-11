"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navLinks: { href: string; label: string; cta?: boolean }[] = [
  { href: "/", label: "Start" },
  { href: "/einsaetze", label: "Einsätze" },
  { href: "/#team", label: "Team" },
  { href: "/spenden", label: "Unterstütze uns", cta: true },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold text-white transition hover:text-[var(--secondary)]"
        >
          Humanity Squad
        </Link>
        <ul className="flex items-center gap-2 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.cta
                    ? "inline-flex items-center justify-center rounded-full bg-[var(--primary)]/50 px-3 py-2 text-center text-xs font-medium leading-tight text-white transition hover:bg-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] sm:px-4 sm:text-sm sm:leading-normal"
                    : "text-sm font-medium text-[var(--foreground-muted)] transition hover:text-[var(--secondary)]"
                }
              >
                {link.cta ? (
                  <>
                    <span className="sm:hidden">Spenden</span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

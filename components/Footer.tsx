"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

const easeOut = [0.16, 1, 0.3, 1] as const;

const footerLinks = [
  { href: "/", label: "Start" },
  { href: "/einsaetze", label: "Einsätze" },
  { href: "/spenden", label: "Spenden" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const socialLinks = [
  { href: "http://instagram.humanitysquad.de", label: "Instagram", Icon: InstagramIcon },
  { href: "http://whatsapp.humanitysquad.de", label: "WhatsApp Community", Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)]"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <p className="text-lg font-bold text-white">Humanity Squad</p>
            <p className="mt-1 text-sm text-[var(--foreground-muted)]">
              Gemeinsam die Welt verbessern.
            </p>
            <a
              href="mailto:contact@humanitysquad.de"
              className="mt-2 inline-block text-sm text-[var(--secondary)] transition hover:underline"
            >
              contact@humanitysquad.de
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Seiten
              </p>
              <ul className="mt-2 flex flex-wrap gap-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] transition hover:text-[var(--secondary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Social
              </p>
              <ul className="mt-2 flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.Icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition hover:text-[var(--secondary)]"
                        aria-label={link.label}
                      >
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
          className="mt-8 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted)]"
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} Humanity Squad. Aktiv für einen guten
          Zweck.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.28, ease: easeOut }}
          className="mt-2 text-center text-xs text-[var(--muted)]"
        >
          Website by Caner Elmas
        </motion.p>
      </div>
    </footer>
  );
}

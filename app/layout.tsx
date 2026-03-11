import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Humanity Squad – Gemeinsam die Welt verbessern",
    template: "%s – Humanity Squad",
  },
  description:
    "Humanity Squad hilft Bedürftigen in NRW mit Lebensmitteln, Kleidung und Events. Jetzt mitmachen!",
  openGraph: {
    title: "Humanity Squad – Gemeinsam die Welt verbessern",
    description:
      "Humanity Squad hilft Bedürftigen in NRW mit Lebensmitteln, Kleidung und Events. Jetzt mitmachen!",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

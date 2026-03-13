import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageLoadSpinner } from "@/components/PageLoadSpinner";
import { BackToTop } from "@/components/BackToTop";

const SITE_URL = "https://humanitysquad.de";

const personCanerElmasJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caner Elmas",
  image: `${SITE_URL}/team/caner.png`,
  jobTitle: "Entwickler",
  worksFor: {
    "@type": "Organization",
    name: "Humanity Squad",
    url: SITE_URL,
  },
  url: SITE_URL,
  sameAs: ["https://instagram.com/canersjourney"],
  description: "Softwareentwickler bei Humanity Squad – Gemeinsam die Welt verbessern.",
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personCanerElmasJsonLd),
          }}
        />
        <PageLoadSpinner />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

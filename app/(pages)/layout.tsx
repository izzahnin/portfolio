import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { ThemeProvider } from "@components/ThemeProvider";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://izzahnin.my.id").replace(/\/$/, "");
const siteName = "Nurul Izzah Nurhidayat Portfolio";
const siteDescription =
  "Portfolio of Nurul Izzah Nurhidayat, a full-stack developer from Makassar, Indonesia, building web applications with React, Next.js, TypeScript, Go, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nurul Izzah Nurhidayat | Full-stack Developer",
    template: "%s | Nurul Izzah Nurhidayat",
  },
  description: siteDescription,
  keywords: [
    "Nurul Izzah Nurhidayat",
    "Izzahnin",
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Go Developer",
    "Portfolio",
    "Makassar Indonesia",
  ],
  authors: [{ name: "Nurul Izzah Nurhidayat", url: siteUrl }],
  creator: "Nurul Izzah Nurhidayat",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: "Nurul Izzah Nurhidayat | Full-stack Developer",
    description: siteDescription,
    images: [
      {
        url: "/images/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Nurul Izzah Nurhidayat full-stack developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurul Izzah Nurhidayat | Full-stack Developer",
    description: siteDescription,
    images: ["/images/og-portfolio.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nurul Izzah Nurhidayat",
  alternateName: "Izzahnin",
  jobTitle: "Full-stack Developer",
  description: siteDescription,
  url: siteUrl,
  email: "mailto:cacaizzah2008@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Makassar",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Hasanuddin University",
  },
  knowsAbout: ["React", "Next.js", "TypeScript", "Go", "PostgreSQL", "Tailwind CSS"],
  sameAs: [
    "https://github.com/izzahnin",
    "https://www.linkedin.com/in/nurul-izzah-nurhidayat-397346289/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Prevent flash of wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var c=document.cookie.match(/(?:^|;\\s*)theme=([^;]*)/);var t=c?c[1]:(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex-1 bg-[var(--bg)]">
        <ThemeProvider>
          <main className="m-auto">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

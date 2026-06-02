import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "MBTI Career Test",
    template: "%s | MBTI Career Test",
  },
  description:
    "Take a free MBTI career test and discover the best careers, strengths, and personality insights for your type.",
  keywords: [
    "MBTI",
    "MBTI test",
    "career test",
    "personality test",
    "career personality",
    "MBTI careers",
    "best jobs by personality",
  ],
  openGraph: {
    title: "MBTI Career Test",
    description:
      "Discover your personality type and best career paths.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* ====== Header ====== */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
  <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <Link
      href="/"
      className="text-xl md:text-2xl font-bold"
    >
      MBTI Career
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

      <Link href="/">
        Home
      </Link>

      <Link href="/test">
        Free Test
      </Link>

      <Link href="/careers/intj">
        Careers
      </Link>

      <Link href="/guides/best-jobs-for-intj">
        Guides
      </Link>

      <Link href="/compare/intj-vs-infp">
        Compare
      </Link>

    </nav>

  </div>
</header>

        {/* ====== Page Content ====== */}
        <main className="flex-grow">{children}</main>

        {/* ====== Footer ====== */}
        <footer className="bg-gray-100 border-t mt-20">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
            <p>© {new Date().getFullYear()} MBTI Career Test. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
              <Link href="/test" className="hover:text-blue-600">MBTI Test</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
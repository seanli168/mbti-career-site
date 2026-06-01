import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI Career Test",
  description:
    "Discover the best careers based on your MBTI personality type. Take the test now and find high-paying and low-stress jobs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">MBTI Career Test</h1>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/test" className="hover:underline">
                    Take Test
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
          <div className="container mx-auto text-center">
            © 2026 MBTI Career Test. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
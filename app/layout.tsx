import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "MBTI Career Test",
    template: "%s | MBTI Career Test",
  },
  description:
    "Discover the best careers for your MBTI personality type. Take the test and find high-paying and low-stress jobs.",
  keywords: ["MBTI", "career test", "personality jobs", "career advice"],
  openGraph: {
    title: "MBTI Career Test",
    description:
      "Discover the best careers for your MBTI personality type.",
    url: "https://your-domain.com",
    siteName: "MBTI Career Test",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">MBTI Career Test</h1>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/test" className="hover:underline">
                    Take Test
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
          <div className="container mx-auto text-center">
            © 2026 MBTI Career Test. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
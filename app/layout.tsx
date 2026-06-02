import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
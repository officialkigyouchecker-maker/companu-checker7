import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企業チェッカー | スカウト企業を3秒で分析",
  description:
    "OfferBox、dodaキャンパス、マイナビで届いたスカウト企業を一瞬で調べられる就活生のための企業分析サイト",
  keywords: ["就活", "企業分析", "スカウト", "新卒", "就職活動"],
  openGraph: {
    title: "企業チェッカー | スカウト企業を3秒で分析",
    description: "届いたスカウト企業を一瞬で調べよう",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans bg-soft-gray min-h-screen">{children}</body>
    </html>
  );
}

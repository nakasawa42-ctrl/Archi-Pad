import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { DEFAULT_OG_IMAGE, getSiteUrl } from "@/lib/site";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "現場ノート【公式】— 建築・現場の技、伝承。",
    template: "%s | 現場ノート【公式】",
  },
  description:
    "建築・設計と現場の知恵をつなぐ。レシピ・工具・オープン掲示板。プロの道具箱のように整理された公式サイト。",
  applicationName: "現場ノート【公式】",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "現場ノート【公式】",
    title: "現場ノート【公式】— 建築・現場の技、伝承。",
    description:
      "建築・設計と現場の知恵をつなぐ。オープンに共有し、業界をアップデートする。",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "現場ノート【公式】— 建築・現場の手元をイメージしたビジュアル",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "現場ノート【公式】— 建築・現場の技、伝承。",
    description:
      "建築・設計と現場の知恵をつなぐ公式サイト。オープン掲示板で共同開発。",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${noto.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

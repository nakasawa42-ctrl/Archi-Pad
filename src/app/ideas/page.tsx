import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommunityIdeasBoard } from "@/components/community-ideas-board";

export const metadata: Metadata = {
  title: "オープンソース掲示板 — 知恵・道具リクエスト",
  description:
    "現場の知恵や『こんな道具が欲しい』をカードで一覧。いいね・改善案で共同開発。現場ノート【公式】。",
};

export default function IdeasBoardPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            トップへ
          </Link>
        </nav>

        <h1 className="sr-only">オープンソース・掲示板</h1>
        <CommunityIdeasBoard />
      </main>
      <SiteFooter />
    </>
  );
}

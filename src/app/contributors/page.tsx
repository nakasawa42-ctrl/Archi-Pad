import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTRIBUTORS } from "@/data/contributors";
import { getRankFromLevel } from "@/lib/contributor-rank";
import { ContributorRankBadge } from "@/components/contributor-rank-badge";

export const metadata: Metadata = {
  title: "貢献者プロフィール",
  description:
    "レシピ・工具レビュー・掲示板を支える職人・チームの公開プロフィール。今後の会員制度と収益還元に接続予定。",
};

export default function ContributorsIndexPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 hover:text-stone-900"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            トップへ
          </Link>
        </nav>

        <header className="mb-10 border-b border-stone-200 pb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange-800/80">
            Contributors
          </p>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            貢献者プロフィール
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            現場ノートに知恵・レシピ・レビューを寄せてくださっている方々です。レベルや実績は今後、会員データと同期し、広告収益のシェア指標にもつなげる想定で設計しています。
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {CONTRIBUTORS.map((c) => {
            const rank = getRankFromLevel(c.level);
            return (
              <li key={c.slug}>
                <Link
                  href={`/contributors/${c.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-stone-300 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wide text-stone-400">
                      Lv.{c.level}
                    </span>
                    <ContributorRankBadge rank={rank} size="sm" />
                  </div>
                  <span className="mt-2 text-lg font-bold text-stone-900">{c.displayName}</span>
                  <span className="mt-1 text-sm text-stone-600">{c.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}

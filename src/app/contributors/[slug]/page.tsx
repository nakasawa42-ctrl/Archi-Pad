import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, ChevronLeft, TrendingUp, User } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getContributorBySlug, listContributorSlugs } from "@/data/contributors";
import { getSiteUrl } from "@/lib/site";
import { getRankFromLevel } from "@/lib/contributor-rank";
import { ContributorRankBadge } from "@/components/contributor-rank-badge";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listContributorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getContributorBySlug(slug);
  if (!c) return { title: "プロフィールが見つかりません" };

  const siteUrl = getSiteUrl();
  const path = `/contributors/${slug}`;

  return {
    title: `${c.displayName} | 貢献者`,
    description: c.bio.slice(0, 140),
    alternates: { canonical: path },
    openGraph: {
      type: "profile",
      url: `${siteUrl}${path}`,
      siteName: "アーキパッド【公式】",
      title: `${c.displayName} — アーキパッド貢献者`,
      description: c.title,
    },
  };
}

export default async function ContributorProfilePage(props: PageProps) {
  const { slug } = await props.params;
  const c = getContributorBySlug(slug);
  if (!c) notFound();

  const rank = getRankFromLevel(c.level);
  const xpPct = Math.min(100, Math.round((c.xpCurrent / c.xpToNextLevel) * 100));
  const initials = c.displayName
    .replace(/[（）]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("");

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-8 flex flex-wrap gap-4">
          <Link
            href="/contributors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 hover:text-stone-900"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            貢献者一覧
          </Link>
        </nav>

        <header className="rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-stone-800 bg-stone-900 text-xl font-black text-white"
              aria-hidden
            >
              {initials || <User className="h-10 w-10" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500">
                @{c.slug}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
                  {c.displayName}
                </h1>
                <ContributorRankBadge rank={rank} size="md" />
              </div>
              <p className="mt-2 text-sm font-semibold text-orange-900/90">{c.title}</p>
              {c.region ? (
                <p className="mt-1 text-xs text-stone-500">{c.region}</p>
              ) : null}
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{c.bio}</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-stone-200 bg-white/80 p-4">
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="font-bold text-stone-800">
                レベル {c.level}{" "}
                <span className="text-xs font-semibold text-stone-500">
                  （XP {c.xpCurrent} / {c.xpToNextLevel}）
                </span>
              </span>
              <TrendingUp className="h-4 w-4 text-orange-600" aria-hidden />
            </div>
            <div
              className="mt-3 h-2.5 overflow-hidden rounded-full bg-stone-200"
              role="progressbar"
              aria-valuenow={c.xpCurrent}
              aria-valuemin={0}
              aria-valuemax={c.xpToNextLevel}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-600 transition-[width]"
                style={{ width: `${xpPct}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-stone-500">
              XP は投稿・いいね・掲載実績から付与する想定です（DB接続後に集計）。
            </p>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-lg font-black text-stone-900">実績サマリー</h2>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm">
              <dt className="text-[11px] font-bold uppercase text-stone-500">レシピ</dt>
              <dd className="mt-1 text-2xl font-black tabular-nums text-stone-900">
                {c.stats.publishedRecipes}
              </dd>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm">
              <dt className="text-[11px] font-bold uppercase text-stone-500">工具レビュー</dt>
              <dd className="mt-1 text-2xl font-black tabular-nums text-stone-900">
                {c.stats.publishedToolReviews}
              </dd>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm">
              <dt className="text-[11px] font-bold uppercase text-stone-500">掲示板</dt>
              <dd className="mt-1 text-2xl font-black tabular-nums text-stone-900">
                {c.stats.communityIdeasCount}
              </dd>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm">
              <dt className="text-[11px] font-bold uppercase text-stone-500">いいね概算</dt>
              <dd className="mt-1 text-2xl font-black tabular-nums text-stone-900">
                {c.stats.likesFromCommunity}
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-stone-500">
            参加開始:{" "}
            <time dateTime={c.memberSince}>
              {new Date(c.memberSince).toLocaleDateString("ja-JP")}
            </time>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-lg font-black text-stone-900">
            <Award className="h-5 w-5 text-amber-600" aria-hidden />
            バッジ・実績
          </h2>
          <ul className="mt-4 space-y-3">
            {c.achievements.map((a) => (
              <li
                key={a.id}
                className="rounded-xl border border-amber-100 bg-amber-50/50 px-4 py-3"
              >
                <p className="font-bold text-stone-900">{a.label}</p>
                <p className="mt-1 text-sm text-stone-700">{a.description}</p>
                <time className="mt-2 block text-[11px] text-stone-500" dateTime={a.earnedAt}>
                  {new Date(a.earnedAt).toLocaleDateString("ja-JP")}
                </time>
              </li>
            ))}
          </ul>
        </section>

        <section id="support" className="mt-12 scroll-mt-28 rounded-2xl border border-orange-200 bg-orange-50/60 p-6">
          <h2 className="text-lg font-black text-orange-950">この職人を支援する（準備中）</h2>
          <p className="mt-3 text-sm leading-relaxed text-orange-950/90">
            会員アカウントと決済を接続したうえで、「支援」「広告収益の分配ポイント」へ反映する計画です。
            <code className="mx-1 rounded bg-orange-100/80 px-1.5 py-0.5 text-xs">
              users
            </code>
            ／
            <code className="rounded bg-orange-100/80 px-1.5 py-0.5 text-xs">
              contributor_profiles
            </code>
            ／
            <code className="rounded bg-orange-100/80 px-1.5 py-0.5 text-xs">
              revenue_share_allocations
            </code>
            などのテーブルに対応する形で段階的に実装します。
          </p>
          <p className="mt-4 text-sm text-orange-950/80">
            現段階では測定のみ可能な導線として本ページを公開しています。企業からの製品化のご相談は{" "}
            <Link href="/contact/enterprise" className="font-bold underline">
              専用フォーム
            </Link>
            から可能です。
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

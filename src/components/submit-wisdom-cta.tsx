import Link from "next/link";
import { DraftingCompass, Sparkles } from "lucide-react";

/**
 * トップページ用：知恵投稿への大型CTA
 */
export function SubmitWisdomCta() {
  return (
    <section
      className="border-b border-stone-300/90 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      aria-labelledby="submit-wisdom-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.35em] text-orange-300/90">
            <Sparkles className="h-4 w-4" aria-hidden />
            Co-develop platform
          </p>
          <h2
            id="submit-wisdom-cta-heading"
            className="mt-3 text-2xl font-black leading-tight tracking-tight sm:text-3xl"
          >
            知恵も「欲しい道具」も、カード一枚で業界へ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-300 sm:text-base">
            オープンソース掲示板では、現場の知恵だけでなく「こんな道具が欲しい」も歓迎。一覧性の高いカードで、企業が拾いやすく、改善案で磨く。
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <Link
            href="/ideas/new"
            className="group flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-orange-400/80 bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-8 text-center shadow-[0_16px_48px_-12px_rgba(234,88,12,0.55),inset_0_2px_0_rgba(255,255,255,0.25)] transition hover:border-orange-300 hover:from-orange-400 hover:to-orange-600 hover:shadow-orange-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200 sm:flex-row sm:py-7"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white shadow-inner ring-2 ring-white/25 transition group-hover:scale-105">
              <DraftingCompass className="h-8 w-8" strokeWidth={2} aria-hidden />
            </span>
            <span className="text-left sm:min-w-0 sm:flex-1">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-orange-100/95">
                Share your trick
              </span>
              <span className="mt-1 block text-xl font-black tracking-tight sm:text-2xl">
                知恵・道具ネタを投稿
              </span>
              <span className="mt-2 block text-sm font-medium text-orange-50/95">
                オープン掲示板で共有 → 改善案で磨く
              </span>
            </span>
          </Link>
          <p className="mt-4 text-center text-xs text-stone-500">
            <Link href="/ideas" className="font-semibold text-orange-200 underline-offset-2 hover:text-white hover:underline">
              掲示板を覗いてみる
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const suggestions = ["棚の作り方", "マキタ インパクト", "合板 カット", "墨出し レーザー"];

export function SearchHero() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden border-b border-stone-200/90 bg-gradient-to-b from-white via-orange-50/50 to-amber-50/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_24px_-8px_rgba(0,0,0,0.06)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239a3412' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-800/80">
            設計図より先に、手の感覚を
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-stone-900 sm:text-3xl sm:leading-tight">
            職人のノウハウを、現場サイズで検索
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            自作の棚から工具の選び方まで。白とオレンジの明るい画面で、汚れた手でも迷わないUI。
          </p>
        </div>

        <form
          className="mx-auto mt-8 max-w-2xl"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="site-search" className="sr-only">
            キーワード検索
          </label>
          <div className="group relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500/90"
              strokeWidth={2.25}
              aria-hidden
            />
            <input
              id="site-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="例: 棚の作り方 / マキタ インパクト"
              className="h-14 w-full rounded-2xl border-2 border-orange-100 bg-white pl-12 pr-4 text-base text-stone-900 shadow-lg shadow-orange-950/5 outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-stone-400 focus:border-orange-400 focus:shadow-xl focus:shadow-orange-500/10"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-lg bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-800/70 sm:block">
              Enter
            </div>
          </div>
        </form>

        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
          <span className="w-full text-center text-[11px] font-medium text-stone-400 sm:w-auto sm:pr-1">
            よくある検索
          </span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQ(s)}
              className="rounded-full border border-stone-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-900"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

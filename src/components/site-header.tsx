import Link from "next/link";
import { DraftingCompass, ExternalLink, Ruler } from "lucide-react";
import { getOfficialXProfileUrl } from "@/lib/social";

export function SiteHeader() {
  const xUrl = getOfficialXProfileUrl();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/95 bg-white/96 shadow-[0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(15,23,42,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-800/90 bg-stone-900 text-white shadow-[0_4px_14px_-3px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-white/90 transition group-hover:border-stone-700 group-hover:bg-stone-800">
            <DraftingCompass className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-serif text-base font-semibold tracking-tight text-stone-900 sm:text-[1.06rem]">
              Archi Pad
            </span>
            <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              <span className="rounded border border-stone-300 bg-stone-100 px-1.5 py-px text-[9px] font-bold tracking-normal text-stone-700">
                公式
              </span>
              <span className="hidden text-stone-600 sm:inline">
                建築・現場の道具箱
              </span>
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-2" aria-label="主要ナビ">
          <Link
            href="/ideas"
            className="inline-flex max-w-[4.5rem] truncate rounded-md px-2 py-2 text-xs font-semibold text-stone-700 transition hover:bg-stone-100 hover:text-stone-900 sm:max-w-none sm:px-2.5 sm:text-sm"
            title="現場の知恵・掲示板"
          >
            掲示板
          </Link>
          <Link
            href="/#recipes"
            className="rounded-md px-2 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 hover:text-stone-900 sm:px-2.5"
          >
            レシピ
          </Link>
          <Link
            href="/#tools"
            className="rounded-md px-2 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 hover:text-stone-900 sm:px-2.5"
          >
            工具
          </Link>
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 items-center gap-1 rounded-md border border-stone-800 bg-stone-900 px-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-stone-800 sm:gap-1.5 sm:px-3"
          >
            <span className="font-black leading-none">𝕏</span>
            <span className="hidden sm:inline">公式</span>
            <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
          </a>
          <span
            className="hidden items-center gap-1 rounded-md border border-dashed border-stone-300 bg-stone-50/90 px-2.5 py-1.5 text-[11px] font-medium text-stone-500 lg:inline-flex"
            title="現場メモ"
          >
            <Ruler className="h-3.5 w-3.5" aria-hidden />
            寸法は必ず現物合わせ
          </span>
        </nav>
      </div>
    </header>
  );
}

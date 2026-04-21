import { ExternalLink, Wrench } from "lucide-react";
import { getOfficialXProfileUrl } from "@/lib/social";

/**
 * トップの目立つゾーン：公式アカウントへの導線（道具箱パネル風）
 */
export function OfficialXStrip() {
  const xUrl = getOfficialXProfileUrl();

  return (
    <section
      className="border-b border-stone-300/90 bg-gradient-to-br from-white via-stone-50 to-orange-50/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
      aria-labelledby="official-x-strip-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-8">
        <div className="flex flex-1 items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-stone-300/90 bg-gradient-to-br from-stone-100 to-white text-stone-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.85),0_8px_22px_-6px_rgba(0,0,0,0.12)]">
            <Wrench className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-800/80">
              Pro toolbox
            </p>
            <h2
              id="official-x-strip-heading"
              className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl"
            >
              アーキパッド<span className="text-orange-600">【公式】</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:max-w-xl">
              現場の閃き・続報・突発ネタは公式X。フォローで「道具箱」の中身を先に覗けます。
            </p>
          </div>
        </div>

        <div className="mt-6 flex shrink-0 flex-col items-stretch gap-2 sm:mt-0 sm:min-w-[200px]">
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-stone-900 bg-stone-900 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-stone-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <span className="text-lg font-black leading-none">𝕏</span>
            公式アカウントへ
            <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
          </a>
          <p className="text-center text-[11px] text-stone-500">
            アーキパッド【公式】運営
          </p>
        </div>
      </div>
    </section>
  );
}

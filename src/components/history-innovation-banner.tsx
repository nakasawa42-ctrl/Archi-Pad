import { ExternalLink, Landmark } from "lucide-react";
import { getOfficialXProfileUrl } from "@/lib/social";

/**
 * トップヘッダー直下：系譜と革新の宣言（派手にせず、職人の矜持がにじむ帯）
 */
export function HistoryInnovationBanner() {
  const xUrl = getOfficialXProfileUrl();

  return (
    <section
      className="relative border-b border-stone-800/90 bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-stone-300"
      aria-labelledby="history-innovation-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 40px,
            rgba(180, 83, 9, 0.15) 40px,
            rgba(180, 83, 9, 0.15) 41px
          )`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-amber-600/50 via-amber-700/30 to-transparent sm:w-[3px] sm:from-amber-600/40" />

      <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10 lg:gap-14">
          <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-800/60 bg-stone-950/80 text-amber-600/90 shadow-inner shadow-black/40"
              aria-hidden
            >
              <Landmark className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div className="min-w-0 sm:w-full">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-amber-700/90">
                Heritage
              </p>
              <h2
                id="history-innovation-heading"
                className="mt-1 font-serif text-[1.35rem] font-medium tracking-[0.12em] text-stone-100 sm:text-2xl sm:tracking-[0.14em]"
                lang="en"
              >
                History & Innovation
              </h2>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-3 border-t border-stone-700/80 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 lg:pl-10">
            <p className="text-sm leading-relaxed text-stone-400 sm:text-[0.9375rem] sm:leading-[1.75]">
              現場の手元にあって当たり前になった小さな機順にも、誰かの試行と執念があります。墨壺の糸を確実に抑える
              <span className="text-stone-200/95">糸押さえ機構</span>
              ——今日では標準となりましたが、その着想は一握りの先達が積み上げた物語です。
            </p>
            <p className="text-sm leading-relaxed text-stone-400 sm:text-[0.9375rem] sm:leading-[1.75]">
              そして四十年前、
              <span className="text-stone-200/95">22mm幅コンベックスという概念そのもの</span>
              を世に示した、伝説と呼ばれる職人の知恵。その系譜を受け止め、手と言葉でつなぐ場所——それが本サイトです。
            </p>
            <p className="pt-1 text-[13px] font-medium leading-relaxed tracking-wide text-amber-800/90 sm:text-sm">
              飾り立てない本物だけが、ここにいる。直伝の矜持は、色ではなく手元で証明される。
            </p>
            <p className="pt-4">
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-amber-500/95 underline-offset-4 transition hover:text-amber-400 hover:underline"
              >
                22mmの秘話・裏話は公式Xでも
                <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Bolt, Crosshair } from "lucide-react";
import type { TechniqueAnnotation } from "@/lib/content";

type TechniqueAnnotationChipProps = {
  annotation: TechniqueAnnotation;
};

/**
 * ビス頭の出し量など、要所だけを抜き出した注釈（チップ）
 */
export function TechniqueAnnotationChip({ annotation }: TechniqueAnnotationChipProps) {
  return (
    <aside
      className="relative overflow-hidden rounded-xl border border-dashed border-amber-700/45 bg-gradient-to-r from-amber-50/95 via-orange-50/40 to-stone-50/80 p-4 shadow-sm ring-1 ring-amber-900/5 sm:p-5"
      aria-labelledby="tech-annotation-heading"
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl" aria-hidden />

      <div className="relative flex flex-wrap items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-800/25 bg-white/90 text-amber-900 shadow-inner">
          <Bolt className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-950/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-100">
              <Crosshair className="h-3 w-3" strokeWidth={2.5} aria-hidden />
              要所 · 注釈
            </span>
            <span
              id="tech-annotation-heading"
              className="text-base font-bold tracking-tight text-stone-900 sm:text-lg"
            >
              {annotation.headline}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone-700 sm:text-[15px]">{annotation.body}</p>
        </div>
      </div>
    </aside>
  );
}

import { Leaf } from "lucide-react";

type HeritageHonorCardProps = {
  text: string;
};

/**
 * 引退した名工などへの敬意を込めた、静かな装飾枠（派手な演出は避ける）
 */
export function HeritageHonorCard({ text }: HeritageHonorCardProps) {
  return (
    <figure
      className="relative overflow-hidden rounded-2xl border border-stone-300/90 bg-gradient-to-br from-[#f7f4ef] via-[#f3efe8] to-[#ebe4db] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:px-7 sm:py-7"
      aria-labelledby="heritage-caption"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23575346' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-amber-900/35" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-amber-900/35" />

      <figcaption
        id="heritage-caption"
        className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-600"
      >
        <span
          className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/15 bg-white/50 px-2 py-0.5 text-amber-950/80"
          lang="en"
        >
          <Leaf className="h-3 w-3 text-amber-800/70" strokeWidth={2} aria-hidden />
          In memory of the master
        </span>
        <span className="font-serif text-[11px] tracking-[0.55em] text-stone-500">
          伝承の背景
        </span>
      </figcaption>

      <blockquote className="relative mt-4 border-l-[3px] border-amber-800/50 pl-4 text-[15px] font-medium leading-relaxed text-stone-800 sm:text-base">
        <p>{text}</p>
      </blockquote>

      <p className="mt-5 text-right font-serif text-[12px] italic tracking-wide text-stone-500">
        ― 引退した名工の知恵に、敬意をもって
      </p>
    </figure>
  );
}

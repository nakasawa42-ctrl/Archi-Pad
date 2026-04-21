import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { RecipeChallenge } from "@/lib/content";

type RecipeChallengeBlockProps = {
  challenge: RecipeChallenge;
};

export function RecipeChallengeBlock({ challenge }: RecipeChallengeBlockProps) {
  return (
    <section className="space-y-4" aria-labelledby="challenge-heading">
      <h2
        id="challenge-heading"
        className="text-[11px] font-bold uppercase tracking-[0.28em] text-stone-500"
      >
        解決する課題
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

      <div className="rounded-2xl border border-red-200/90 bg-gradient-to-b from-red-50/95 to-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-red-900/70">
          <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" strokeWidth={2.2} aria-hidden />
          つまずきやすい点
        </div>
        <p className="mt-3 text-sm leading-relaxed text-stone-800 sm:text-[15px]">
          {challenge.problem}
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/95 to-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-900/70">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.2} aria-hidden />
          このレシピの打ち手
        </div>
        <p className="mt-3 text-sm leading-relaxed text-stone-800 sm:text-[15px]">
          {challenge.solution}
        </p>
      </div>
      </div>
    </section>
  );
}

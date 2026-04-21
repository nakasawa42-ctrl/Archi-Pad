import { Award } from "lucide-react";
import type { MasterEndorsement } from "@/lib/content";

type MasterEndorsementBadgeProps = {
  endorsement: MasterEndorsement;
};

/**
 * 師匠の「太鼓判」—— 朱肉・判子のニュアンスで、軽口に品格を足す
 */
export function MasterEndorsementBadge({ endorsement }: MasterEndorsementBadgeProps) {
  return (
    <aside
      className="relative mx-auto max-w-lg"
      aria-labelledby="master-endorsement-heading"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-red-900/12 via-transparent to-amber-900/10 blur-[2px]" />

      <div className="relative overflow-hidden rounded-[1.25rem] border-[3px] border-red-900/85 bg-[#fffaf8] px-6 py-7 shadow-[0_12px_36px_-14px_rgba(127,29,29,0.45)] ring-2 ring-red-200/60 ring-offset-2 ring-offset-[#fff7f5] sm:px-8 sm:py-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #7f1d1d 0.5px, transparent 0.6px)`,
            backgroundSize: "6px 6px",
          }}
          aria-hidden
        />

        <div className="relative flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-900/25 bg-red-950/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.35em] text-red-100">
            <Award className="h-3.5 w-3.5 text-amber-300" strokeWidth={2.2} aria-hidden />
            師匠の太鼓判
          </div>

          <p
            id="master-endorsement-heading"
            className="sr-only"
          >
            師匠からのコメント
          </p>

          <p className="mt-5 font-serif text-xl font-bold leading-snug tracking-wide text-red-950 sm:text-2xl">
            {endorsement.quote}
          </p>

          <p className="mt-5 w-full border-t border-red-900/10 pt-4 text-xs font-medium tracking-wider text-red-900/60">
            {endorsement.attribution}
          </p>
        </div>

        <div
          className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-[72%] -translate-x-1/2 rounded-full bg-red-900/10 blur-xl"
          aria-hidden
        />
      </div>
    </aside>
  );
}

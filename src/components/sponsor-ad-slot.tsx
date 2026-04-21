import Link from "next/link";
import { Megaphone } from "lucide-react";
import type { AdPlacementSlug } from "@/lib/monetization-inventory";
import { cn } from "@/lib/cn";

type SponsorAdSlotProps = {
  placement: AdPlacementSlug;
  className?: string;
};

/** スポンサー企業が枠を買える前提のプレースホルダー（本番では広告タグ or 画像差し替え） */
export function SponsorAdSlot({ placement, className }: SponsorAdSlotProps) {
  return (
    <aside
      role="complementary"
      aria-label="スポンサー広告スペース"
      className={cn(
        "overflow-hidden rounded-2xl border-2 border-dashed border-amber-400/50 bg-gradient-to-br from-amber-50/80 via-white to-stone-50 shadow-inner ring-1 ring-amber-100/60",
        className,
      )}
    >
      <div className="flex min-h-[7rem] flex-col items-center justify-center gap-3 px-4 py-6 text-center sm:min-h-[5.5rem] sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-900/90 text-white shadow-sm">
            <Megaphone className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-900/70">
              Sponsor space
            </p>
            <p className="mt-1 text-sm font-bold text-stone-800">企業スポンサー枠（予約販売）</p>
            <p className="mt-0.5 text-xs text-stone-500">
              枠 ID: <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[11px]">{placement}</code>
            </p>
          </div>
        </div>
        <Link
          href="/contact/enterprise?channel=enterprise&title=広告・スポンサー枠の掲載&source=sponsor_slot"
          className="shrink-0 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-stone-800"
        >
          掲載の問い合わせ
        </Link>
      </div>
    </aside>
  );
}

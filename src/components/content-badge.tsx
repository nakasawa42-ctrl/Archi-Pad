import type { ContentBadge as BadgeType, BadgeVariant } from "@/lib/content";
import { cn } from "@/lib/cn";

const variantStyles: Record<BadgeVariant, string> = {
  pro: "bg-stone-800 text-white border-stone-700 shadow-sm",
  beginner: "bg-emerald-50 text-emerald-900 border-emerald-200/80",
  safety: "bg-amber-50 text-amber-950 border-amber-200/80",
  trend: "bg-orange-50 text-orange-950 border-orange-200/80",
};

export function ContentBadgeChip({ badge }: { badge: BadgeType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-wide",
        variantStyles[badge.variant],
      )}
    >
      {badge.label}
    </span>
  );
}

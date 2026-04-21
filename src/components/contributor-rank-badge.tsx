import type { ContributorRank } from "@/lib/contributor-rank";

type ContributorRankBadgeProps = {
  rank: ContributorRank;
  size?: "sm" | "md";
};

export function ContributorRankBadge({ rank, size = "sm" }: ContributorRankBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-black ring-1 ${rank.bgClass} ${rank.ringClass} ${
        size === "md" ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[10px] sm:text-[11px]"
      }`}
      title={`貢献度ランク：${rank.labelJa}`}
    >
      {rank.labelJa}
    </span>
  );
}

/** 貢献度に応じた投稿者ランク（職人ブランド表示・将来は DB の rank_tier で同期可能） */

export type ContributorRankId =
  | "apprentice"
  | "craftsman"
  | "expert"
  | "master"
  | "legend";

export type ContributorRank = {
  id: ContributorRankId;
  /** 表示用の称号 */
  labelJa: string;
  /** UI 用の短いラベル */
  shortLabel: string;
  ringClass: string;
  bgClass: string;
};

const RANK_THRESHOLDS: { minLevel: number; rank: ContributorRank }[] = [
  {
    minLevel: 13,
    rank: {
      id: "legend",
      labelJa: "レジェンド",
      shortLabel: "LEG",
      ringClass: "ring-amber-400/90",
      bgClass: "bg-gradient-to-br from-amber-100 to-orange-100 text-amber-950",
    },
  },
  {
    minLevel: 10,
    rank: {
      id: "master",
      labelJa: "マスター",
      shortLabel: "MST",
      ringClass: "ring-violet-400/85",
      bgClass: "bg-gradient-to-br from-violet-50 to-indigo-50 text-violet-950",
    },
  },
  {
    minLevel: 8,
    rank: {
      id: "expert",
      labelJa: "エキスパート",
      shortLabel: "EXP",
      ringClass: "ring-sky-400/80",
      bgClass: "bg-sky-50 text-sky-950",
    },
  },
  {
    minLevel: 5,
    rank: {
      id: "craftsman",
      labelJa: "クラフトマン",
      shortLabel: "CFM",
      ringClass: "ring-emerald-400/75",
      bgClass: "bg-emerald-50 text-emerald-950",
    },
  },
  {
    minLevel: 1,
    rank: {
      id: "apprentice",
      labelJa: "見習い",
      shortLabel: "APR",
      ringClass: "ring-stone-300",
      bgClass: "bg-stone-100 text-stone-800",
    },
  },
];

export function getRankFromLevel(level: number): ContributorRank {
  const lv = Math.max(1, Math.floor(level));
  for (const t of RANK_THRESHOLDS) {
    if (lv >= t.minLevel) return t.rank;
  }
  return RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1].rank;
}

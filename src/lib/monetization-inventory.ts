/**
 * 将来の CMS / DB に載せ替えやすい広告枠インベントリ（スポンサー販売用）
 *
 * 対応テーブル案: ad_placements(id, slug, aspect_ratio_hint, base_price_yen, active)
 */

export type AdPlacementSlug =
  | "home_leaderboard"
  | "home_mid_content"
  | "article_below_hero"
  | "article_sidebar_desktop";

export const AD_PLACEMENTS: {
  slug: AdPlacementSlug;
  label: string;
  aspectHint: string;
}[] = [
  {
    slug: "home_leaderboard",
    label: "トップ：リーダーボード（横長）",
    aspectHint: "約 6:1 〜 8:1",
  },
  {
    slug: "home_mid_content",
    label: "トップ：コンテンツ中段バナー",
    aspectHint: "約 3:1",
  },
  {
    slug: "article_below_hero",
    label: "記事：ヒーロー直下インラインバー",
    aspectHint: "約 5:1 〜 6:1",
  },
  {
    slug: "article_sidebar_desktop",
    label: "記事：サイド（デスクトップ）※レイアウト拡張時",
    aspectHint: "縦長",
  },
];

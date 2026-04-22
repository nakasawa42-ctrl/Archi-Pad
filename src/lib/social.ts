/**
 * 公式X（@architect_pad_jp）— プロフィールURL・ハンドル
 * 環境変数: NEXT_PUBLIC_OFFICIAL_X_URL / NEXT_PUBLIC_OFFICIAL_X_HANDLE
 */
export const OFFICIAL_X_PROFILE_URL_DEFAULT = "https://x.com/architect_pad_jp";
export const OFFICIAL_X_HANDLE_DEFAULT = "architect_pad_jp";

/** 表示名（UI・シェア文の揃え用） */
export const OFFICIAL_X_DISPLAY_NAME = "アーキテクトパッド【公式】";
export const OFFICIAL_X_HASHTAG = "アーキテクトパッド";

export function getOfficialXProfileUrl(): string {
  const url = process.env.NEXT_PUBLIC_OFFICIAL_X_URL?.replace(/\/$/, "");
  if (url) return url;
  return OFFICIAL_X_PROFILE_URL_DEFAULT;
}

/**
 * ポスト文用ハンドル（@なし）。未設定時は `architect_pad_jp`。
 * NEXT_PUBLIC_OFFICIAL_X_HANDLE の先頭 @ は除去。
 */
export function getOfficialXHandle(): string {
  const h = process.env.NEXT_PUBLIC_OFFICIAL_X_HANDLE?.trim();
  const normalized = h?.replace(/^@/, "");
  return normalized && normalized.length > 0 ? normalized : OFFICIAL_X_HANDLE_DEFAULT;
}

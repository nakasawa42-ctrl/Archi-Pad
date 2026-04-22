/**
 * 公式XプロフィールURL。
 * 優先: NEXT_PUBLIC_OFFICIAL_X_URL。未設定時は @architect_pad_jp を仮置き。
 */
export function getOfficialXProfileUrl(): string {
  const url = process.env.NEXT_PUBLIC_OFFICIAL_X_URL?.replace(/\/$/, "");
  if (url) return url;
  return "https://x.com/architect_pad_jp";
}

/** ポスト文に含める任意の公式ハンドル（@なし）。NEXT_PUBLIC_OFFICIAL_X_HANDLE（先頭の @ は除去） */
export function getOfficialXHandle(): string | undefined {
  const h = process.env.NEXT_PUBLIC_OFFICIAL_X_HANDLE?.trim();
  return h?.replace(/^@/, "") || undefined;
}

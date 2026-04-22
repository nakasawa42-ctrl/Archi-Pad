/**
 * 公式XプロフィールURL。
 * 優先: NEXT_PUBLIC_OFFICIAL_X_URL。未設定時は @takumi_pad を仮置き（空きなら差し替え）。
 */
export function getOfficialXProfileUrl(): string {
  const url = process.env.NEXT_PUBLIC_OFFICIAL_X_URL?.replace(/\/$/, "");
  if (url) return url;
  return "https://x.com/takumi_pad";
}

/** ポスト文に含める任意の公式ハンドル（@なし）。例: takumipad_aomori */
export function getOfficialXHandle(): string | undefined {
  const h = process.env.NEXT_PUBLIC_OFFICIAL_X_HANDLE?.trim();
  return h?.replace(/^@/, "") || undefined;
}

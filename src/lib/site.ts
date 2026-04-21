/**
 * OGP・共有リンク用の絶対URL。本番では NEXT_PUBLIC_SITE_URL を必ず設定してください。
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

/** トップ用デフォルトのOGP画像（工具・職人感） */
export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1504148455328-c376907fcc09?w=1200&h=630&fit=crop&q=80";

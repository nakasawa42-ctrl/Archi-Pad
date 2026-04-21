import type { EnterpriseInquiryMeta } from "@/lib/enterprise-inquiry-meta";

export function parseEnterpriseInquiryFromSearchParams(
  sp: Record<string, string | string[] | undefined>,
): EnterpriseInquiryMeta {
  const take = (k: string) => {
    const v = sp[k];
    const s = Array.isArray(v) ? v[0] : v;
    const t = s?.trim();
    return t || null;
  };
  const ch = take("channel");
  const inquiryChannel =
    ch === "manufacturer"
      ? "manufacturer"
      : ch === "rights"
        ? "rights"
        : ch === "enterprise"
          ? "enterprise"
          : null;

  return {
    inquiryChannel,
    source: take("source"),
    ref: take("ref"),
    title: take("title"),
    ideaId: take("ideaId"),
    contributor: take("contributor"),
    contributorName: take("contributorName"),
  };
}

/** 企業窓口フォームの「関心のあるアイデア」欄に流し込む行（クエリから合成） */
export function buildEnterprisePrefillFromSearchParams(
  sp: Record<string, string | string[] | undefined>,
): string {
  const take = (k: string) => {
    const v = sp[k];
    const s = Array.isArray(v) ? v[0] : v;
    const t = s?.trim();
    return t || undefined;
  };

  const source = take("source");
  const title = take("title");
  const ref = take("ref");
  const ideaId = take("ideaId");
  const contributor = take("contributor");
  const contributorName = take("contributorName");
  const channel = take("channel");

  const parts: string[] = [];
  if (channel === "rights") parts.push("窓口: IP・権利買取・独占ライセンス");
  else if (channel === "manufacturer") parts.push("窓口: メーカー・製品化・導入");
  else if (channel === "enterprise") parts.push("窓口: 企業総合");
  if (source) parts.push(`経路: ${source}`);
  if (title) parts.push(`タイトル: ${title}`);
  if (ref) parts.push(`参照: ${ref}`);
  if (ideaId) parts.push(`掲示板ID: ${ideaId}`);
  if (contributor) parts.push(`貢献者slug: ${contributor}`);
  if (contributorName) parts.push(`表示名: ${contributorName}`);

  return parts.join(" ／ ");
}

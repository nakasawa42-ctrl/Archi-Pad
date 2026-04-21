import type { EnterpriseInquiryContext } from "@/lib/contributors-schema";

function buildQuery(ctx: EnterpriseInquiryContext): URLSearchParams {
  const p = new URLSearchParams();
  p.set("source", ctx.source);
  if (ctx.contentSlug) p.set("ref", ctx.contentSlug);
  p.set("title", ctx.contentTitle);
  if (ctx.ideaId) p.set("ideaId", ctx.ideaId);
  if (ctx.contributorSlug) p.set("contributor", ctx.contributorSlug);
  if (ctx.contributorDisplayName) p.set("contributorName", ctx.contributorDisplayName);
  return p;
}

/** 企業向け窓口へのクエリ付きパスを生成（計測・将来の CRM 連携用） */
export function buildEnterpriseInquiryHref(ctx: EnterpriseInquiryContext): string {
  const p = buildQuery(ctx);
  p.set("channel", "enterprise");
  return `/contact/enterprise?${p.toString()}`;
}

/** メーカー担当者向け・製品化・導入の専用フォームへ */
export function buildManufacturerInquiryHref(ctx: EnterpriseInquiryContext): string {
  const p = buildQuery(ctx);
  p.set("channel", "manufacturer");
  return `/contact/manufacturer?${p.toString()}`;
}

/** 企業向け・ノウハウ／アイデアの権利取得・独占ライセンス（最優先導線） */
export function buildRightsInquiryHref(ctx: EnterpriseInquiryContext): string {
  const p = buildQuery(ctx);
  p.set("channel", "rights");
  return `/contact/rights?${p.toString()}`;
}

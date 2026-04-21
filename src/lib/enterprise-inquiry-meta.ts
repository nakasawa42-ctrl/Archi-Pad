/** 企業窓口に同梱する URL 由来の参照情報（将来の inquiry_records テーブルに対応） */
export type EnterpriseInquiryMeta = {
  /** フォーム種別（URL の `channel` から） */
  inquiryChannel: "enterprise" | "manufacturer" | "rights" | null;
  source: string | null;
  ref: string | null;
  title: string | null;
  ideaId: string | null;
  contributor: string | null;
  contributorName: string | null;
};

export const EMPTY_ENTERPRISE_INQUIRY_META: EnterpriseInquiryMeta = {
  inquiryChannel: null,
  source: null,
  ref: null,
  title: null,
  ideaId: null,
  contributor: null,
  contributorName: null,
};

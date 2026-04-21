/**
 * 運営向け「企業・メーカー問い合わせ」仲介の管理画面構成（実装フェーズ用スペック）
 *
 * 目的: メーカー / 企業からの製品化・導入相談をチケット化し、
 * 投稿者（貢献者）・コンテンツ参照・進捗・社内メモを一元管理する。
 *
 * === 推奨スクリーン構成 ===
 *
 * 1) 受付キュー `/admin/inquiries`
 *    - 列: 受付日時 / チャネル（rights | manufacturer | enterprise）/ 会社名 / 参照コンテンツ /
 *           貢献者 slug / ステータス / 担当者
 *    - フィルタ: ステータス、チャネル、期間、貢献者
 *    - 一括: 担当アサイン、CSV エクスポート（監査用）
 *
 * 2) チケット詳細 `/admin/inquiries/[id]`
 *    - 左: 送信されたフォーム本文・inquiryMeta（source, ref, ideaId, contributor）
 *    - 右: 内部メモ（非公開）/ 次アクション / SLA 期限
 *    - 関連リンク: 該当掲示板投稿・貢献者プロフィール・レシピ URL
 *    - 「投稿者へ連絡済」「メーカー折り返し済」チェックログ
 *
 * 3) 貢献者別ビュー `/admin/contributors/[slug]/inquiries`
 *    - その職人に紐づく問い合わせ履歴（ブランド価値・紛争防止の確認用）
 *
 * === ステータス（state machine の例） ===
 *
 * received → triaged → contributor_notified → manufacturer_negotiation → closed
 *            ↘ on_hold / spam
 *
 * === API / DB への拡張案 ===
 *
 * enterprise_inquiries テーブル:
 *   id, created_at, channel ('rights'|'manufacturer'|'enterprise'),
 *   company_name, contact_name, email, phone,
 *   idea_reference_text, message,
 *   meta_json (EnterpriseInquiryMeta + inquiryChannel),
 *   status, assignee_user_id (運営),
 *   contributor_slug (nullable), idea_id (nullable)
 *
 * inquiry_internal_notes:
 *   inquiry_id, author_id, body, created_at
 *
 * 現状は `/api/enterprise-contact` が console に出すのみ。
 * 上記テーブル投入のタイミングで、本ファイルの型を `drizzle` / `Prisma` スキーマに写経する。
 */

export type InquiryChannel = "enterprise" | "manufacturer" | "rights";

export type InquiryPipelineStatus =
  | "received"
  | "triaged"
  | "contributor_notified"
  | "manufacturer_negotiation"
  | "on_hold"
  | "closed"
  | "spam";

export type AdminInquiryTicket = {
  id: string;
  receivedAt: string;
  channel: InquiryChannel;
  companyName: string;
  contactName: string;
  email: string;
  ideaReference: string;
  status: InquiryPipelineStatus;
  assigneeLabel?: string;
  contributorSlug?: string | null;
  contentRef?: string | null;
  ideaId?: string | null;
};

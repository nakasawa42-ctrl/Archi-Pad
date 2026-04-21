/**
 * 情報提供者まわりの型定義。
 * 現状は静的 seed / 掲示板の optional フィールドで表現し、
 * 本番では RDB（例: PostgreSQL）にマッピングすることを想定。
 *
 * === 想定テーブル（概念モデル） ===
 *
 * users
 *   id (uuid), email (unique), password_hash | oauth_subject,
 *   role ('member' | 'contributor' | 'enterprise' | 'admin'),
 *   created_at, updated_at
 *
 * member_accounts  ― 会員・広告収益シェアの前提
 *   user_id → users.id,
 *   tier ('free' | 'supporter' | 'pro'),  -- 将来の課金・分配率に利用
 *   stripe_customer_id (nullable),
 *   tax_profile_id (nullable),
 *   status ('active' | 'suspended'),
 *   created_at
 *
 * contributor_profiles  ― 公開プロフィール（職人・編集など）
 *   user_id → users.id (unique),
 *   slug (unique), display_name, bio, region (nullable),
 *   level (int), xp_total (int),
 *   avatar_asset_id (nullable)
 *
 * content_attributions  ― レシピ・工具レビュー・掲示板と投稿者の紐付け
 *   id, contributor_user_id → users.id,
 *   ref_type ('recipe' | 'tool_spotlight' | 'community_idea'),
 *   ref_id (text),  -- slug または idea の id
 *   created_at
 *
 * contribution_events  ― いいね・掲載・改善コメント等を XP / KPI に変換
 *   id, user_id, event_type ('idea_posted' | 'like_received' | ...),
 *   points (int), ref_type, ref_id, created_at
 *
 * support_intents  ― 「職人を支援」ボタンの計測（決済連携前のファネル）
 *   id, supporter_user_id (nullable), contributor_user_id,
 *   source_url, created_at
 *
 * revenue_share_pools  ― 四半期など期間単位の分配プール
 *   id, period_start, period_end, ad_revenue_yen, status ('accruing' | 'paid')
 *
 * revenue_share_allocations
 *   pool_id → revenue_share_pools.id,
 *   member_user_id,
 *   weight (numeric),  -- tier や貢献度に応じた重み
 *   amount_yen,
 *   payout_status ('pending' | 'completed')
 *
 * enterprise_inquiries（メーカー／企業／権利買取からの問い合わせ）の運営ワークフロー案は
 * admin-inquiry-workflow.ts を参照。sponsor_placements は monetization-inventory.ts の枠 ID と同期。
 *
 * 実装は段階的に: まず contributors を静的データ → 次に API + DB で置換。
 */

export type UserRole = "member" | "contributor" | "enterprise" | "admin";

/** 将来の会員課金・分配率と紐付けやすい区分 */
export type MembershipTier = "free" | "supporter" | "pro";

export type AchievementKind =
  | "first_recipe"
  | "tool_master"
  | "community_star"
  | "heritage"
  | "safety_champion";

export type ContributorAchievement = {
  id: string;
  kind: AchievementKind;
  label: string;
  description: string;
  /** 付与日（ISO 8601） */
  earnedAt: string;
};

/** 画面に出す実績カウンタ（DB では集計ビュー or マテリアライズ） */
export type ContributorPublicStats = {
  /** 掲載レシピ数 */
  publishedRecipes: number;
  /** 掲載レビュー数 */
  publishedToolReviews: number;
  /** 掲示板で起点となった投稿（将来は user に紐づく idea 件数） */
  communityIdeasCount: number;
  /** 掲示板で集めたいいね（概算・シード値） */
  likesFromCommunity: number;
};

/**
 * contributor_profiles + 集計をひとまとめにした公開ビュー
 * （将来 GET /api/contributors/:slug のレスポンス形に寄せる）
 */
export type PublicContributorProfile = {
  slug: string;
  displayName: string;
  /** 肩書き一行 */
  title: string;
  bio: string;
  /** 活動地など（任意） */
  region?: string;
  level: number;
  xpCurrent: number;
  xpToNextLevel: number;
  stats: ContributorPublicStats;
  achievements: ContributorAchievement[];
  /** プロフィール公開日 */
  memberSince: string;
};

export type EnterpriseInquiryContext = {
  source: "recipe" | "tool" | "idea";
  contentSlug?: string;
  contentTitle: string;
  ideaId?: string;
  contributorSlug?: string;
  contributorDisplayName?: string;
};

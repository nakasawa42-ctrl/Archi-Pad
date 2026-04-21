export type ImprovementNote = {
  id: string;
  body: string;
  createdAt: string;
};

/** 現場ノウハウ / こんな道具が欲しい */
export type IdeaCategory = "wisdom" | "tool_wish";

export type CommunityIdea = {
  id: string;
  title: string;
  body: string;
  /** 投稿者表示名（匿名可） */
  authorLabel: string;
  /** 登録貢献者と紐づく場合（`/contributors/[slug]`）。未設定は匿名・未連携 */
  contributorSlug?: string;
  createdAt: string;
  likes: number;
  /** いいね済み（同一ブラウザ内） */
  likedByViewer?: boolean;
  improvements: ImprovementNote[];
  category: IdeaCategory;
};
